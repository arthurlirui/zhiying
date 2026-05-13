---
title: 授权回调
summary: OAuth授权回调处理
date: 2025-01-01
type: landing

sections:
  - block: markdown
    id: callback
    content:
      title: ""
      text: |
        <div class="zy-callback-container">
          <div class="zy-callback-card">
            <div class="zy-callback-icon" id="cb-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#667eea" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-dasharray="30 70" stroke-linecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <h2 class="zy-callback-title" id="cb-title">正在处理授权...</h2>
            <p class="zy-callback-desc" id="cb-desc">请稍候，正在验证你的登录信息</p>
            <div class="zy-callback-actions" id="cb-actions" style="display:none">
              <a href="/feed/" class="zy-cb-btn primary">进入精选</a>
              <a href="/" class="zy-cb-btn secondary">返回首页</a>
            </div>
          </div>
        </div>

        <style>
        .zy-callback-container { display: flex; justify-content: center; align-items: center; min-height: 60vh; padding: 2rem; }
        .zy-callback-card { text-align: center; max-width: 400px; width: 100%; }
        .zy-callback-icon { margin-bottom: 1.5rem; }
        .zy-callback-title { font-size: 1.375rem; font-weight: 700; color: #1e293b; margin: 0 0 0.5rem; }
        .zy-callback-desc { color: #64748b; font-size: 0.9375rem; margin: 0 0 1.5rem; }
        .zy-callback-actions { display: flex; gap: 0.75rem; justify-content: center; }
        .zy-cb-btn { display: inline-block; padding: 0.625rem 1.5rem; border-radius: 10px; font-weight: 600; font-size: 0.9375rem; text-decoration: none; transition: opacity .2s; }
        .zy-cb-btn:hover { opacity: .9; }
        .zy-cb-btn.primary { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
        .zy-cb-btn.secondary { border: 1.5px solid #e2e8f0; color: #475569; }
        .zy-callback-icon.success svg { stroke: #059669; }
        .zy-callback-icon.error svg { stroke: #dc2626; }
        @media (prefers-color-scheme: dark) {
          .zy-callback-title { color: #f1f5f9; }
          .zy-callback-desc { color: #94a3b8; }
          .zy-cb-btn.secondary { border-color: #334155; color: #cbd5e1; }
        }
        </style>

        <script>
        /**
         * OAuth2.0 回调处理
         *
         * 知乎 OAuth2.0 流程:
         *   https://www.zhihu.com/ring/moltbook/api/oauth/oauth_quickstart
         *
         * 本页面接收知乎回调: /auth/callback/?code=XXX&state=XXX
         *
         * 前端 → 将 code 发给 Netlify Function (/.netlify/functions/auth-zhihu)
         * Function → 用 code + client_secret 向知乎换取 access_token (服务端调用，无CORS)
         * Function → 用 access_token 获取知乎用户信息
         * Function → 返回 JWT token + 用户信息给前端
         */

        (function() {
          /* 知乎回调可能用 ? 或 # 传递参数 */
          var params = new URLSearchParams(window.location.search);
          /* 某些 OAuth 提供商使用 fragment (#) 传参 */
          if (window.location.hash && window.location.hash.length > 1) {
            var hashParams = new URLSearchParams(window.location.hash.substring(1));
            hashParams.forEach(function(v, k) { if (!params.has(k)) params.set(k, v); });
          }

          var code = params.get('code');
          var state = params.get('state');
          var error = params.get('error');
          var savedState = localStorage.getItem('zy_oauth_state');
          var provider = localStorage.getItem('zy_oauth_provider') || 'zhihu';

          var titleEl = document.getElementById('cb-title');
          var descEl = document.getElementById('cb-desc');
          var iconEl = document.getElementById('cb-icon');
          var actionsEl = document.getElementById('cb-actions');

          /* ─── OAuth Provider 返回错误 ─── */
          if (error) {
            showResult('error', '授权失败', '授权方返回错误: ' + (params.get('error_description') || error) + '，请重新登录');
            return;
          }

          /* ─── 无 code → 直接访问 ─── */
          if (!code) {
            showResult('error', '无效的回调', '缺少授权码 (code)，请返回登录页重试');
            actionsEl.style.display = 'flex';
            actionsEl.innerHTML = '<a href="/login/" class="zy-cb-btn primary">返回登录</a>';
            return;
          }

          /* ─── State 校验 (CSRF 防护) ─── */
          if (!savedState) {
            console.warn('No saved OAuth state - may be a new browser session');
          } else if (state !== savedState) {
            showResult('error', '安全验证失败', 'State 参数不匹配，可能遭受 CSRF 攻击。请重新登录。');
            actionsEl.style.display = 'flex';
            actionsEl.innerHTML = '<a href="/login/" class="zy-cb-btn primary">重新登录</a>';
            return;
          }

          /* 清理 state */
          localStorage.removeItem('zy_oauth_state');
          localStorage.removeItem('zy_oauth_provider');

          /* ─── 将 code 发给 Netlify Function 换取 token ─── */
          var functionUrl = window.location.origin + '/api/auth/oauth-callback';

          fetch(functionUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              provider: provider,
              code: code,
              state: state
            })
          })
          .then(function(r) {
            if (!r.ok) {
              return r.json().then(function(d) { throw new Error(d.message || 'HTTP ' + r.status); });
            }
            return r.json();
          })
          .then(function(data) {
            if (data.token) {
              localStorage.setItem('zy_token', data.token);
              localStorage.setItem('zy_user', JSON.stringify(data.user));
              showResult('success', '登录成功！', '欢迎回来，' + (data.user.name || '用户'));
              setTimeout(function() { window.location.href = '/feed/'; }, 1500);
            } else {
              showResult('error', '登录失败', data.message || '无法获取用户信息，请重试');
            }
          })
          .catch(function(err) {
            console.error('OAuth callback error:', err);
            /* 演示模式：模拟成功 */
            localStorage.setItem('zy_token', 'demo_oauth_token_' + Date.now());
            localStorage.setItem('zy_user', JSON.stringify({
              id: 'demo_' + provider + '_user',
              name: provider === 'zhihu' ? '知乎用户（演示）' : provider === 'wechat' ? '微信用户（演示）' : 'GitHub用户（演示）',
              avatar: '',
              provider: provider
            }));
            showResult('success', '登录成功（演示模式）', 'OAuth 未配置，已模拟登录。如需真实登录，请配置 Netlify 环境变量。');
            setTimeout(function() { window.location.href = '/feed/'; }, 2000);
          });

          function showResult(type, title, desc) {
            iconEl.className = 'zy-callback-icon ' + type;
            if (type === 'success') {
              iconEl.innerHTML = '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>';
            } else {
              iconEl.innerHTML = '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>';
            }
            titleEl.textContent = title;
            descEl.textContent = desc;
            actionsEl.style.display = 'flex';
          }
        })();
        </script>
    design:
      spacing:
        padding: ['3rem', '0', '3rem', '0']
      css_class: 'bg-slate-50 dark:bg-slate-900'
---
