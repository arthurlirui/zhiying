package main

/**
 * 知影 · AI读帖官 - 后端 API 接口规范
 *
 * 知乎 OAuth2.0 对接流程
 * 参考: https://www.zhihu.com/ring/moltbook/api/oauth/oauth_quickstart
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 接口总览
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 1. POST /api/auth/sms-login      - 手机验证码登录
 * 2. POST /api/auth/password-login  - 账号密码登录
 * 3. POST /api/auth/oauth-callback  - OAuth2.0 回调处理
 * 4. GET  /api/auth/me              - 获取当前用户信息
 * 5. POST /api/auth/logout          - 退出登录
 * 6. POST /api/auth/refresh         - 刷新 Token
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 知乎 OAuth2.0 配置
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 授权 URL:  https://open.zhihu.com/oauth2/authorize
 * Token URL:  https://open.zhihu.com/oauth2/token
 * 用户信息:   https://open.zhihu.com/oauth2/me
 *
 * 所需参数:
 *   - client_id:      在知乎开放平台注册应用后获取
 *   - client_secret:  在知乎开放平台注册应用后获取
 *   - redirect_uri:   必须与注册时填写的回调地址一致
 *   - scope:          read,user (读取用户基本信息)
 *
 * ═══════════════════════════════════════════════════════════════════════
 * 授权码模式完整流程
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Step 1: 前端引导用户跳转
 *   GET https://open.zhihu.com/oauth2/authorize
 *     ?client_id=YOUR_CLIENT_ID
 *     &redirect_uri=https://your-domain.com/auth/callback/
 *     &response_type=code
 *     &scope=read,user
 *     &state=RANDOM_STRING
 *
 * Step 2: 用户在知乎确认授权
 *
 * Step 3: 知乎回调 redirect_uri
 *   https://your-domain.com/auth/callback/?code=AUTH_CODE&state=RANDOM_STRING
 *
 * Step 4: 后端用 code 换取 access_token
 *   POST https://open.zhihu.com/oauth2/token
 *   Content-Type: application/x-www-form-urlencoded
 *   Body:
 *     grant_type=authorization_code
 *     &code=AUTH_CODE
 *     &client_id=YOUR_CLIENT_ID
 *     &client_secret=YOUR_CLIENT_SECRET
 *     &redirect_uri=https://your-domain.com/auth/callback/
 *
 *   Response:
 *     {
 *       "access_token": "2...Z",
 *       "token_type": "bearer",
 *       "expires_in": 2592000,
 *       "refresh_token": "2...Z",
 *       "scope": "read user",
 *       "created_at": 1700000000
 *     }
 *
 * Step 5: 用 access_token 获取知乎用户信息
 *   GET https://open.zhihu.com/oauth2/me?access_token=ACCESS_TOKEN
 *
 *   Response:
 *     {
 *       "id": "12345",
 *       "name": "知乎用户",
 *       "avatar_url": "https://...",
 *       "url_token": "zhihu-user"
 *     }
 *
 * Step 6: 后端生成 JWT 返回给前端
 */

// ═════════════════════════════════════════════════════════════════════════
// 接口定义 (伪代码 - 需配合实际后端框架使用)
// ═════════════════════════════════════════════════════════════════════════

// --- 1. 手机验证码登录 ---
// POST /api/auth/sms-login
//
// Request:
//   {
//     "phone": "13800138000",
//     "code": "123456"
//   }
//
// Response (Success):
//   {
//     "token": "eyJhbGciOiJIUzI1NiIs...",
//     "refresh_token": "ryJhbGciOiJIUzI1NiIs...",
//     "expires_in": 604800,
//     "user": {
//       "id": "usr_abc123",
//       "name": "知乎用户",
//       "avatar": "https://...",
//       "phone": "138****8000"
//     }
//   }
//
// Response (Error):
//   {
//     "message": "验证码错误或已过期"
//   }

// --- 2. 账号密码登录 ---
// POST /api/auth/password-login
//
// Request:
//   {
//     "account": "user@example.com",  // 手机号或邮箱
//     "password": "password123"
//   }
//
// Response: 同上

// --- 3. OAuth2.0 回调处理 ---
// POST /api/auth/oauth-callback
//
// Request:
//   {
//     "provider": "zhihu",  // zhihu | wechat | github
//     "code": "AUTH_CODE",
//     "state": "zy_1700000000_abc123"
//   }
//
// 后端处理流程 (以知乎为例):
//
//   a) 验证 state 防 CSRF
//   b) 用 code 换取 access_token:
//      POST https://open.zhihu.com/oauth2/token
//      Body: grant_type=authorization_code&code=CODE
//            &client_id=CLIENT_ID&client_secret=CLIENT_SECRET
//            &redirect_uri=REDIRECT_URI
//   c) 用 access_token 获取用户信息:
//      GET https://open.zhihu.com/oauth2/me?access_token=TOKEN
//   d) 查找或创建本地用户
//   e) 生成 JWT token 返回
//
// Response: 同上

// --- 4. 获取当前用户信息 ---
// GET /api/auth/me
// Header: Authorization: Bearer TOKEN
//
// Response:
//   {
//     "id": "usr_abc123",
//     "name": "知乎用户",
//     "avatar": "https://...",
//     "phone": "138****8000",
//     "zhihu_bound": true,
//     "zhihu_name": "知乎ID",
//     "preferences": {
//       "voice_speed": 1.5,
//       "auto_play": true
//     }
//   }

// --- 5. 退出登录 ---
// POST /api/auth/logout
// Header: Authorization: Bearer TOKEN
//
// Response:
//   { "message": "已退出登录" }

// --- 6. 刷新 Token ---
// POST /api/auth/refresh
//
// Request:
//   {
//     "refresh_token": "ryJhbGciOiJIUzI1NiIs..."
//   }
//
// Response:
//   {
//     "token": "eyJhbGciOiJIUzI1NiIs...(新)",
//     "refresh_token": "ryJhbGciOiJIUzI1NiIs...(新)",
//     "expires_in": 604800
//   }
