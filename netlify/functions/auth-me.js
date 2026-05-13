/**
 * 知影 · AI读帖官 - 用户信息接口
 * 验证 JWT token 并返回用户信息
 *
 * 部署路径: /.netlify/functions/auth-me
 */

exports.handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': event.headers.origin || 'https://zhiying-web.netlify.app',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  const authHeader = event.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return {
      statusCode: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: '未提供认证 token' }),
    };
  }

  // 生产环境应验证 JWT 签名
  // 演示模式：解析 token payload
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return {
        statusCode: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Token 格式无效' }),
      };
    }

    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString());

    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return {
        statusCode: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Token 已过期' }),
      };
    }

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: payload.sub,
        name: payload.sub.split('_')[0] + '用户',
        provider: payload.sub.split('_')[0],
        expires_at: payload.exp,
      }),
    };
  } catch (err) {
    return {
      statusCode: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Token 解析失败' }),
    };
  }
};
