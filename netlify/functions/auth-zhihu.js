/**
 * 知影 · AI读帖官 - 知乎 OAuth2.0 Token 交换函数
 *
 * 部署为 Netlify Function: /.netlify/functions/auth-zhihu
 *
 * 知乎 OAuth2.0 流程 (参考: https://www.zhihu.com/ring/moltbook/api/oauth/oauth_quickstart)
 *
 * Step 1: 前端引导用户 → 知乎授权页
 * Step 2: 用户授权 → 知乎回调 /auth/callback/?code=XXX&state=XXX
 * Step 3: 前端将 code 发送到本函数
 * Step 4: 本函数用 code + client_secret 向知乎换取 access_token
 * Step 5: 用 access_token 获取知乎用户信息
 * Step 6: 返回用户信息 + 应用 JWT 给前端
 *
 * 环境变量 (在 Netlify UI → Site settings → Environment variables 中配置):
 *   ZHIHU_CLIENT_ID      - 知乎开放平台应用的 Client ID
 *   ZHIHU_CLIENT_SECRET  - 知乎开放平台应用的 Client Secret
 *   ZHIHU_REDIRECT_URI   - 回调地址，必须与知乎应用配置一致
 *                          默认: https://zhiying-web.netlify.app/auth/callback/
 *   JWT_SECRET           - JWT 签名密钥
 *   WECHAT_APP_ID        - 微信 AppID (可选)
 *   WECHAT_APP_SECRET    - 微信 AppSecret (可选)
 *   GITHUB_CLIENT_ID     - GitHub Client ID (可选)
 *   GITHUB_CLIENT_SECRET - GitHub Client Secret (可选)
 */

const ZHIHU_TOKEN_URL = 'https://open.zhihu.com/oauth2/token';
const ZHIHU_USER_URL = 'https://open.zhihu.com/oauth2/me';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_URL = 'https://api.github.com/user';

exports.handler = async (event) => {
  // ─── CORS headers ───
  const corsHeaders = {
    'Access-Control-Allow-Origin': event.headers.origin || 'https://zhiying-web.netlify.app',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400',
  };

  // ─── Preflight ───
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { provider, code, state } = body;

    if (!code) {
      return errorResponse(400, '缺少授权码 code', corsHeaders);
    }

    // ─── Route by provider ───
    switch (provider) {
      case 'zhihu':
        return await handleZhihuOAuth(code, state, corsHeaders);
      case 'github':
        return await handleGithubOAuth(code, state, corsHeaders);
      case 'wechat':
        return await handleWechatOAuth(code, state, corsHeaders);
      default:
        return errorResponse(400, '不支持的 OAuth 提供商: ' + provider, corsHeaders);
    }
  } catch (err) {
    console.error('OAuth callback error:', err);
    return errorResponse(500, '服务器内部错误: ' + err.message, corsHeaders);
  }
};

// ══════════════════════════════════════════════════════════════════════════════
// 知乎 OAuth2.0
// ══════════════════════════════════════════════════════════════════════════════
async function handleZhihuOAuth(code, state, corsHeaders) {
  const clientId = process.env.ZHIHU_CLIENT_ID;
  const clientSecret = process.env.ZHIHU_CLIENT_SECRET;
  const redirectUri = process.env.ZHIHU_REDIRECT_URI || 'https://zhiying-web.netlify.app/auth/callback/';

  if (!clientId || !clientSecret) {
    console.error('Missing ZHIHU_CLIENT_ID or ZHIHU_CLIENT_SECRET env vars');
    return errorResponse(500, '知乎 OAuth 未配置，请在 Netlify 环境变量中设置 ZHIHU_CLIENT_ID 和 ZHIHU_CLIENT_SECRET', corsHeaders);
  }

  // Step 1: 用 code 换取 access_token
  // 参考: https://www.zhihu.com/ring/moltbook/api/oauth/oauth_quickstart
  // POST https://open.zhihu.com/oauth2/token
  // Content-Type: application/x-www-form-urlencoded
  const tokenParams = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
  });

  console.log('Exchanging code for token with Zhihu...');

  const tokenRes = await fetch(ZHIHU_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: tokenParams.toString(),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    console.error('Zhihu token exchange failed:', tokenRes.status, errText);
    return errorResponse(502, '知乎 token 交换失败: ' + tokenRes.status, corsHeaders);
  }

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    console.error('No access_token in Zhihu response:', JSON.stringify(tokenData));
    return errorResponse(502, '未获取到 access_token', corsHeaders);
  }

  // Step 2: 用 access_token 获取用户信息
  // GET https://open.zhihu.com/oauth2/me?access_token=TOKEN
  console.log('Fetching Zhihu user info...');

  const userRes = await fetch(ZHIHU_USER_URL + '?access_token=' + encodeURIComponent(tokenData.access_token), {
    headers: { 'Accept': 'application/json' },
  });

  if (!userRes.ok) {
    console.error('Zhihu user info failed:', userRes.status);
    return errorResponse(502, '获取知乎用户信息失败', corsHeaders);
  }

  const zhihuUser = await userRes.json();

  // Step 3: 生成应用 token 并返回
  const appToken = generateDemoToken('zhihu', zhihuUser.id || zhihuUser.url_token);

  return successResponse({
    token: appToken,
    user: {
      id: 'zhihu_' + (zhihuUser.id || zhihuUser.url_token),
      name: zhihuUser.name || '知乎用户',
      avatar: zhihuUser.avatar_url || '',
      provider: 'zhihu',
      zhihu_id: zhihuUser.id,
      zhihu_url_token: zhihuUser.url_token,
    },
  }, corsHeaders);
}

// ══════════════════════════════════════════════════════════════════════════════
// GitHub OAuth
// ══════════════════════════════════════════════════════════════════════════════
async function handleGithubOAuth(code, state, corsHeaders) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return errorResponse(500, 'GitHub OAuth 未配置', corsHeaders);
  }

  const tokenRes = await fetch(GITHUB_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      redirect_uri: 'https://zhiying-web.netlify.app/auth/callback/',
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return errorResponse(502, 'GitHub token 交换失败', corsHeaders);
  }

  const userRes = await fetch(GITHUB_USER_URL, {
    headers: { 'Authorization': 'Bearer ' + tokenData.access_token },
  });

  const ghUser = await userRes.json();

  return successResponse({
    token: generateDemoToken('github', ghUser.id),
    user: {
      id: 'github_' + ghUser.id,
      name: ghUser.name || ghUser.login,
      avatar: ghUser.avatar_url || '',
      provider: 'github',
    },
  }, corsHeaders);
}

// ══════════════════════════════════════════════════════════════════════════════
// 微信 OAuth (需微信开放平台)
// ══════════════════════════════════════════════════════════════════════════════
async function handleWechatOAuth(code, state, corsHeaders) {
  const appId = process.env.WECHAT_APP_ID;
  const appSecret = process.env.WECHAT_APP_SECRET;

  if (!appId || !appSecret) {
    return errorResponse(500, '微信 OAuth 未配置', corsHeaders);
  }

  const tokenUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token'
    + '?appid=' + encodeURIComponent(appId)
    + '&secret=' + encodeURIComponent(appSecret)
    + '&code=' + encodeURIComponent(code)
    + '&grant_type=authorization_code';

  const tokenRes = await fetch(tokenUrl);
  const tokenData = await tokenRes.json();

  if (!tokenData.access_token || !tokenData.openid) {
    return errorResponse(502, '微信 token 交换失败', corsHeaders);
  }

  const userUrl = 'https://api.weixin.qq.com/sns/userinfo'
    + '?access_token=' + encodeURIComponent(tokenData.access_token)
    + '&openid=' + encodeURIComponent(tokenData.openid);

  const userRes = await fetch(userUrl);
  const wxUser = await userRes.json();

  return successResponse({
    token: generateDemoToken('wechat', wxUser.openid),
    user: {
      id: 'wechat_' + wxUser.openid,
      name: wxUser.nickname || '微信用户',
      avatar: wxUser.headimgurl || '',
      provider: 'wechat',
    },
  }, corsHeaders);
}

// ══════════════════════════════════════════════════════════════════════════════
// Helpers
// ══════════════════════════════════════════════════════════════════════════════
function generateDemoToken(provider, userId) {
  // 生产环境应使用 JWT 库签发真实 token
  // 这里生成一个格式正确的演示 token
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify({
    sub: provider + '_' + userId,
    iss: 'zhiying-web',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 604800, // 7 days
  })).toString('base64url');
  const sig = Buffer.from('demo_signature_' + Date.now()).toString('base64url');
  return header + '.' + payload + '.' + sig;
}

function successResponse(data, corsHeaders) {
  return {
    statusCode: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
}

function errorResponse(status, message, corsHeaders) {
  return {
    statusCode: status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: message }),
  };
}
