---
title: 登录
summary: 知乎账号登录
date: 2025-01-01
type: landing

sections:
  - block: markdown
    id: login
    content:
      title: ""
      text: |
        <div id="zhiying-auth" class="zy-auth-container">
          <!-- Left: Brand Panel -->
          <div class="zy-brand-panel">
            <div class="zy-brand-content">
              <svg class="zy-brand-logo" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <rect width="56" height="56" rx="14" fill="url(#zg)"/>
                <path d="M18 22h20M18 28h16M18 34h10" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="42" cy="35" r="7" fill="#FF6B6B" stroke="#fff" stroke-width="2"/>
                <path d="M39.5 34l2 2 4.5-4.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <defs><linearGradient id="zg" x1="0" y1="0" x2="56" y2="56"><stop stop-color="#667eea"/><stop offset="1" stop-color="#764ba2"/></linearGradient></defs>
              </svg>
              <h1 class="zy-brand-title">知影 · AI读帖官</h1>
              <p class="zy-brand-desc">知乎数字人 · 智能内容压缩与语音化引擎</p>
              <div class="zy-brand-features">
                <div class="zy-brand-feat">
                  <span class="zy-feat-icon">🎙</span>
                  <span>AI语音播报，通勤必备</span>
                </div>
                <div class="zy-brand-feat">
                  <span class="zy-feat-icon">⚡</span>
                  <span>万字长文 → 3分钟精华</span>
                </div>
                <div class="zy-brand-feat">
                  <span class="zy-feat-icon">👆</span>
                  <span>上滑切换，像刷短视频</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Login Panel -->
          <div class="zy-login-panel">
            <div class="zy-login-inner">
              <h2 class="zy-login-heading">欢迎回来</h2>
              <p class="zy-login-sub">登录知乎账号，解锁个性化推荐</p>

              <!-- Tab Switch -->
              <div class="zy-tabs" role="tablist">
                <button class="zy-tab active" data-tab="sms" role="tab" aria-selected="true">验证码登录</button>
                <button class="zy-tab" data-tab="password" role="tab" aria-selected="false">密码登录</button>
              </div>

              <!-- SMS Login Form -->
              <form id="sms-form" class="zy-form active" onsubmit="handleSmsLogin(event)">
                <div class="zy-field">
                  <label for="sms-phone">手机号</label>
                  <div class="zy-input-box">
                    <span class="zy-input-prefix">+86</span>
                    <input type="tel" id="sms-phone" name="phone" placeholder="请输入手机号" maxlength="11" autocomplete="tel" required />
                  </div>
                </div>
                <div class="zy-field">
                  <label for="sms-code">验证码</label>
                  <div class="zy-input-box zy-code-box">
                    <input type="text" id="sms-code" name="code" placeholder="请输入验证码" maxlength="6" autocomplete="one-time-code" required />
                    <button type="button" class="zy-code-btn" id="send-code-btn" onclick="sendSmsCode()">获取短信验证码</button>
                  </div>
                  <div class="zy-alt-code">
                    <button type="button" class="zy-link-btn" onclick="sendVoiceCode()">获取语音验证码</button>
                  </div>
                </div>
                <button type="submit" class="zy-submit-btn" id="sms-submit">登录/注册</button>
              </form>

              <!-- Password Login Form -->
              <form id="pwd-form" class="zy-form" onsubmit="handlePwdLogin(event)">
                <div class="zy-field">
                  <label for="pwd-account">手机号 / 邮箱</label>
                  <div class="zy-input-box">
                    <svg class="zy-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <input type="text" id="pwd-account" name="account" placeholder="请输入手机号或邮箱" autocomplete="username" required />
                  </div>
                </div>
                <div class="zy-field">
                  <label for="pwd-pass">密码</label>
                  <div class="zy-input-box">
                    <svg class="zy-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <input type="password" id="pwd-pass" name="password" placeholder="请输入密码" autocomplete="current-password" required />
                    <button type="button" class="zy-eye-btn" onclick="togglePwd()" aria-label="切换密码可见">
                      <svg id="pwd-eye" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                  </div>
                </div>
                <div class="zy-field-row">
                  <label class="zy-checkbox"><input type="checkbox" id="remember-me" /><span>记住我</span></label>
                  <a href="#" class="zy-link-btn">忘记密码？</a>
                </div>
                <button type="submit" class="zy-submit-btn" id="pwd-submit">登 录</button>
              </form>

              <!-- Divider -->
              <div class="zy-divider"><span>其他方式登录</span></div>

              <!-- OAuth Buttons -->
              <div class="zy-oauth-row">
                <button class="zy-oauth zhihu" onclick="oauthLogin('zhihu')" title="知乎账号登录">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0H5.72zm9.627 5.803h1.511l-3.46 7.262 3.885 6.132h-1.65l-3.09-5.09-2.902 5.09H8.17l3.774-6.313-3.345-7.081h1.61l2.646 5.16 2.494-5.16z"/></svg>
                  <span>知乎</span>
                </button>
                <button class="zy-oauth wechat" onclick="oauthLogin('wechat')" title="微信登录">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18z"/></svg>
                  <span>微信</span>
                </button>
                <button class="zy-oauth github" onclick="oauthLogin('github')" title="GitHub登录">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>GitHub</span>
                </button>
              </div>

              <!-- Footer -->
              <p class="zy-legal">未注册手机验证后自动登录，注册即代表同意<a href="#">《知乎协议》</a><a href="#">《隐私保护指引》</a></p>
            </div>
          </div>
        </div>

        <!-- ═══════════════════════════════════════════════════════════════ -->
        <!-- Login Page Styles -->
        <!-- ═══════════════════════════════════════════════════════════════ -->
        <style>
        .zy-auth-container {
          display: flex;
          min-height: 80vh;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.04);
          margin: 1rem 0;
        }

        /* ─── Brand Panel ─── */
        .zy-brand-panel {
          flex: 1;
          background: linear-gradient(160deg, #667eea 0%, #764ba2 50%, #6b21a8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .zy-brand-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255,255,255,.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255,255,255,.06) 0%, transparent 50%);
        }

        .zy-brand-content { position: relative; text-align: center; color: #fff; }

        .zy-brand-logo { margin-bottom: 1.25rem; }

        .zy-brand-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin: 0 0 0.5rem;
          letter-spacing: -.02em;
        }

        .zy-brand-desc {
          font-size: 0.9375rem;
          opacity: .85;
          margin: 0 0 2.5rem;
        }

        .zy-brand-features { display: flex; flex-direction: column; gap: 0.875rem; }

        .zy-brand-feat {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9375rem;
          opacity: .92;
          background: rgba(255,255,255,.1);
          backdrop-filter: blur(8px);
          padding: 0.625rem 1rem;
          border-radius: 10px;
        }

        .zy-feat-icon { font-size: 1.25rem; }

        /* ─── Login Panel ─── */
        .zy-login-panel {
          flex: 1;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem;
        }

        .zy-login-inner { width: 100%; max-width: 380px; }

        .zy-login-heading {
          font-size: 1.625rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.375rem;
        }

        .zy-login-sub {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0 0 1.75rem;
        }

        /* Tabs */
        .zy-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #e2e8f0;
        }

        .zy-tab {
          flex: 1;
          padding: 0.625rem 0;
          border: none;
          background: none;
          font-size: 0.9375rem;
          font-weight: 600;
          color: #94a3b8;
          cursor: pointer;
          position: relative;
          transition: color .2s;
        }

        .zy-tab.active {
          color: #667eea;
        }

        .zy-tab.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: #667eea;
          border-radius: 1px;
        }

        /* Form */
        .zy-form { display: none; }
        .zy-form.active { display: block; }

        .zy-field { margin-bottom: 1.125rem; }

        .zy-field label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 0.375rem;
        }

        .zy-input-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .zy-input-prefix {
          position: absolute;
          left: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
          border-right: 1px solid #e2e8f0;
          padding-right: 10px;
          pointer-events: none;
        }

        .zy-input-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }

        .zy-input-box input {
          width: 100%;
          padding: 0.6875rem 0.75rem;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.9375rem;
          color: #1e293b;
          background: #f8fafc;
          transition: border-color .2s, box-shadow .2s, background .2s;
          outline: none;
        }

        .zy-input-box input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,.12);
          background: #fff;
        }

        .zy-input-box input::placeholder { color: #a0aec0; }

        #sms-phone { padding-left: 4rem; }
        .zy-input-box .zy-input-icon + input { padding-left: 2.5rem; }

        /* Code Input */
        .zy-code-box input { flex: 1; }
        .zy-code-btn {
          white-space: nowrap;
          margin-left: 0.5rem;
          padding: 0 0.875rem;
          height: 100%;
          border: 1.5px solid #667eea;
          border-radius: 10px;
          background: none;
          color: #667eea;
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          transition: background .2s, color .2s;
          min-width: fit-content;
        }

        .zy-code-btn:hover { background: #667eea; color: #fff; }
        .zy-code-btn:disabled { opacity: .5; cursor: not-allowed; background: none; color: #667eea; }

        .zy-alt-code { margin-top: 0.375rem; text-align: right; }

        .zy-link-btn {
          background: none;
          border: none;
          color: #667eea;
          font-size: 0.75rem;
          cursor: pointer;
          text-decoration: none;
          font-weight: 500;
        }

        .zy-link-btn:hover { text-decoration: underline; }

        .zy-eye-btn {
          position: absolute;
          right: 8px;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          display: flex;
        }

        .zy-eye-btn:hover { color: #667eea; }

        .zy-field-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          font-size: 0.8125rem;
        }

        .zy-checkbox {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748b;
          cursor: pointer;
        }

        .zy-checkbox input { accent-color: #667eea; width: 15px; height: 15px; cursor: pointer; }

        /* Submit */
        .zy-submit-btn {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity .2s, transform .1s;
          margin-top: 0.25rem;
        }

        .zy-submit-btn:hover { opacity: .92; }
        .zy-submit-btn:active { transform: scale(.985); }
        .zy-submit-btn:disabled { opacity: .6; cursor: not-allowed; }

        /* Divider */
        .zy-divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0 1.25rem;
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .zy-divider::before, .zy-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        .zy-divider span { padding: 0 0.75rem; }

        /* OAuth */
        .zy-oauth-row {
          display: flex;
          gap: 0.75rem;
        }

        .zy-oauth {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 0.5625rem;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          background: #fff;
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: border-color .2s, background .2s, transform .1s;
        }

        .zy-oauth:active { transform: scale(.97); }
        .zy-oauth.zhihu { color: #0066ff; }
        .zy-oauth.zhihu:hover { border-color: #0066ff; background: #f0f5ff; }
        .zy-oauth.wechat { color: #07c160; }
        .zy-oauth.wechat:hover { border-color: #07c160; background: #f0fdf4; }
        .zy-oauth.github { color: #333; }
        .zy-oauth.github:hover { border-color: #333; background: #f6f8fa; }

        .zy-legal {
          margin-top: 1.25rem;
          font-size: 0.6875rem;
          color: #94a3b8;
          text-align: center;
          line-height: 1.6;
        }

        .zy-legal a { color: #94a3b8; text-decoration: underline; }

        /* ─── Toast ─── */
        .zy-toast {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%) translateY(-20px);
          background: #1e293b;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-size: 0.875rem;
          box-shadow: 0 10px 30px rgba(0,0,0,.15);
          z-index: 9999;
          opacity: 0;
          transition: opacity .3s, transform .3s;
          pointer-events: none;
        }

        .zy-toast.show {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .zy-toast.success { background: #059669; }
        .zy-toast.error { background: #dc2626; }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .zy-auth-container { flex-direction: column; min-height: auto; border-radius: 16px; }
          .zy-brand-panel { padding: 2rem 1.5rem; }
          .zy-brand-features { display: none; }
          .zy-login-panel { padding: 1.75rem; }
          .zy-oauth-row { flex-wrap: wrap; }
        }

        @media (max-width: 480px) {
          .zy-brand-panel { display: none; }
          .zy-login-inner { max-width: 100%; }
        }

        /* ─── Dark Mode ─── */
        @media (prefers-color-scheme: dark) {
          .zy-login-panel { background: #1e293b; }
          .zy-login-heading { color: #f1f5f9; }
          .zy-login-sub { color: #94a3b8; }
          .zy-tabs { border-bottom-color: #334155; }
          .zy-tab { color: #64748b; }
          .zy-tab.active { color: #818cf8; }
          .zy-tab.active::after { background: #818cf8; }
          .zy-field label { color: #cbd5e1; }
          .zy-input-box input { background: #0f172a; border-color: #334155; color: #f1f5f9; }
          .zy-input-box input:focus { border-color: #818cf8; background: #1a2332; box-shadow: 0 0 0 3px rgba(129,140,248,.12); }
          .zy-input-box input::placeholder { color: #475569; }
          .zy-input-prefix { color: #cbd5e1; border-right-color: #334155; }
          .zy-code-btn { border-color: #818cf8; color: #818cf8; }
          .zy-code-btn:hover { background: #818cf8; color: #1e293b; }
          .zy-divider::before, .zy-divider::after { background: #334155; }
          .zy-oauth { background: #0f172a; border-color: #334155; color: #cbd5e1; }
          .zy-oauth:hover { background: #1a2332; border-color: #475569; }
          .zy-oauth.zhihu:hover { border-color: #3b82f6; background: rgba(59,130,246,.1); }
          .zy-oauth.wechat:hover { border-color: #22c55e; background: rgba(34,197,94,.1); }
          .zy-oauth.github:hover { border-color: #e5e7eb; background: rgba(229,231,235,.05); }
        }
        </style>

        <!-- ═══════════════════════════════════════════════════════════════ -->
        <!-- Login Logic -->
        <!-- ═══════════════════════════════════════════════════════════════ -->
        <script>
        /* ─── Config ─── */
        var ZY_AUTH_CONFIG = {
          /* 知乎 OAuth2.0 配置 - 需替换为实际值 */
          zhihu: {
            clientId: 'YOUR_ZHIHU_CLIENT_ID',
            authorizeUrl: 'https://open.zhihu.com/oauth2/authorize',
            tokenUrl: 'https://open.zhihu.com/oauth2/token',
            redirectUri: window.location.origin + '/auth/callback/',
            scope: 'read,user'
          },
          /* 微信 OAuth2.0 配置 */
          wechat: {
            appId: 'YOUR_WECHAT_APP_ID',
            authorizeUrl: 'https://open.weixin.qq.com/connect/qrconnect',
            redirectUri: window.location.origin + '/auth/callback/'
          },
          /* GitHub OAuth 配置 */
          github: {
            clientId: 'YOUR_GITHUB_CLIENT_ID',
            authorizeUrl: 'https://github.com/login/oauth/authorize',
            redirectUri: window.location.origin + '/auth/callback/',
            scope: 'read:user'
          },
          /* API 后端地址 */
          apiBase: window.location.origin + '/api'
        };

        /* ─── Tab Switch ─── */
        document.querySelectorAll('.zy-tab').forEach(function(tab) {
          tab.addEventListener('click', function() {
            document.querySelectorAll('.zy-tab').forEach(function(t) { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            document.querySelectorAll('.zy-form').forEach(function(f) { f.classList.remove('active'); });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            var target = this.getAttribute('data-tab');
            document.getElementById(target === 'sms' ? 'sms-form' : 'pwd-form').classList.add('active');
          });
        });

        /* ─── SMS Code Timer ─── */
        var smsTimer = null;

        function startCountdown(seconds) {
          var btn = document.getElementById('send-code-btn');
          btn.disabled = true;
          var remaining = seconds;
          btn.textContent = remaining + 's 后重发';
          smsTimer = setInterval(function() {
            remaining--;
            if (remaining <= 0) {
              clearInterval(smsTimer);
              btn.disabled = false;
              btn.textContent = '获取短信验证码';
            } else {
              btn.textContent = remaining + 's 后重发';
            }
          }, 1000);
        }

        function sendSmsCode() {
          var phone = document.getElementById('sms-phone').value.trim();
          if (!/^1\d{10}$/.test(phone)) {
            showToast('请输入正确的手机号', 'error');
            return;
          }
          startCountdown(60);
          showToast('验证码已发送（演示模式）', 'success');
        }

        function sendVoiceCode() {
          var phone = document.getElementById('sms-phone').value.trim();
          if (!/^1\d{10}$/.test(phone)) {
            showToast('请输入正确的手机号', 'error');
            return;
          }
          startCountdown(60);
          showToast('语音验证码已发送（演示模式）', 'success');
        }

        /* ─── SMS Login ─── */
        function handleSmsLogin(e) {
          e.preventDefault();
          var phone = document.getElementById('sms-phone').value.trim();
          var code = document.getElementById('sms-code').value.trim();
          if (!/^1\d{10}$/.test(phone)) { showToast('请输入正确的手机号', 'error'); return; }
          if (!/^\d{4,6}$/.test(code)) { showToast('请输入4-6位验证码', 'error'); return; }

          var btn = document.getElementById('sms-submit');
          btn.disabled = true;
          btn.textContent = '登录中...';

          /* 调用后端 SMS 登录接口 */
          fetch(ZY_AUTH_CONFIG.apiBase + '/auth/sms-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone: phone, code: code })
          })
          .then(function(r) { return r.json(); })
          .then(function(data) {
            if (data.token) {
              localStorage.setItem('zy_token', data.token);
              localStorage.setItem('zy_user', JSON.stringify(data.user));
              showToast('登录成功，正在跳转...', 'success');
              setTimeout(function() { window.location.href = '/feed/'; }, 1000);
            } else {
              showToast(data.message || '登录失败，请重试', 'error');
            }
          })
          .catch(function() {
            /* 演示模式：模拟登录成功 */
            localStorage.setItem('zy_token', 'demo_token_' + Date.now());
            localStorage.setItem('zy_user', JSON.stringify({
              id: 'demo_user',
              name: '知乎用户',
              avatar: '',
              phone: phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
            }));
            showToast('登录成功（演示模式），正在跳转...', 'success');
            setTimeout(function() { window.location.href = '/feed/'; }, 1000);
          })
          .finally(function() {
            btn.disabled = false;
            btn.textContent = '登录/注册';
          });
        }

        /* ─── Password Login ─── */
        function togglePwd() {
          var inp = document.getElementById('pwd-pass');
          var eye = document.getElementById('pwd-eye');
          if (inp.type === 'password') {
            inp.type = 'text';
            eye.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
          } else {
            inp.type = 'password';
            eye.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
          }
        }

        function handlePwdLogin(e) {
          e.preventDefault();
          var account = document.getElementById('pwd-account').value.trim();
          var password = document.getElementById('pwd-pass').value;
          if (!account) { showToast('请输入手机号或邮箱', 'error'); return; }
          if (!password) { showToast('请输入密码', 'error'); return; }

          var btn = document.getElementById('pwd-submit');
          btn.disabled = true;
          btn.textContent = '登录中...';

          fetch(ZY_AUTH_CONFIG.apiBase + '/auth/password-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ account: account, password: password })
          })
          .then(function(r) { return r.json(); })
          .then(function(data) {
            if (data.token) {
              localStorage.setItem('zy_token', data.token);
              localStorage.setItem('zy_user', JSON.stringify(data.user));
              showToast('登录成功，正在跳转...', 'success');
              setTimeout(function() { window.location.href = '/feed/'; }, 1000);
            } else {
              showToast(data.message || '账号或密码错误', 'error');
            }
          })
          .catch(function() {
            localStorage.setItem('zy_token', 'demo_token_' + Date.now());
            localStorage.setItem('zy_user', JSON.stringify({
              id: 'demo_user',
              name: '知乎用户',
              avatar: '',
              account: account
            }));
            showToast('登录成功（演示模式），正在跳转...', 'success');
            setTimeout(function() { window.location.href = '/feed/'; }, 1000);
          })
          .finally(function() {
            btn.disabled = false;
            btn.textContent = '登 录';
          });
        }

        /* ─── OAuth Login ─── */
        function oauthLogin(provider) {
          var config = ZY_AUTH_CONFIG[provider];
          if (!config) return;

          var authUrl;
          var state = 'zy_' + Date.now() + '_' + Math.random().toString(36).slice(2);
          localStorage.setItem('zy_oauth_state', state);
          localStorage.setItem('zy_oauth_provider', provider);

          switch (provider) {
            case 'zhihu':
              /* 知乎 OAuth2.0 授权码模式
               * 文档: https://www.zhihu.com/ring/moltbook/api/oauth/oauth_quickstart
               *
               * 流程:
               * 1. 引导用户跳转至知乎授权页
               * 2. 用户在知乎确认授权
               * 3. 知乎回调 redirect_uri 并携带 code
               * 4. 后端用 code 换取 access_token
               *    POST https://open.zhihu.com/oauth2/token
               *    Body: grant_type=authorization_code&code=CODE&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&redirect_uri=REDIRECT_URI
               * 5. 用 access_token 获取用户信息
               *    GET https://open.zhihu.com/oauth2/me?access_token=TOKEN
               */
              authUrl = config.authorizeUrl
                + '?client_id=' + encodeURIComponent(config.clientId)
                + '&redirect_uri=' + encodeURIComponent(config.redirectUri)
                + '&response_type=code'
                + '&scope=' + encodeURIComponent(config.scope)
                + '&state=' + state;
              break;

            case 'wechat':
              authUrl = config.authorizeUrl
                + '?appid=' + encodeURIComponent(config.appId)
                + '&redirect_uri=' + encodeURIComponent(config.redirectUri)
                + '&response_type=code'
                + '&scope=snsapi_login'
                + '&state=' + state
                + '#wechat_redirect';
              break;

            case 'github':
              authUrl = config.authorizeUrl
                + '?client_id=' + encodeURIComponent(config.clientId)
                + '&redirect_uri=' + encodeURIComponent(config.redirectUri)
                + '&scope=' + encodeURIComponent(config.scope)
                + '&state=' + state;
              break;
          }

          /* 演示模式：检测是否配置了真实 clientId */
          var hasRealConfig = (provider === 'zhihu' && config.clientId !== 'YOUR_ZHIHU_CLIENT_ID')
            || (provider === 'wechat' && config.appId !== 'YOUR_WECHAT_APP_ID')
            || (provider === 'github' && config.clientId !== 'YOUR_GITHUB_CLIENT_ID');

          if (hasRealConfig) {
            window.location.href = authUrl;
          } else {
            showToast('OAuth 未配置，演示模式登录成功', 'success');
            localStorage.setItem('zy_token', 'demo_oauth_' + Date.now());
            localStorage.setItem('zy_user', JSON.stringify({
              id: 'demo_oauth_user',
              name: provider === 'zhihu' ? '知乎用户' : provider === 'wechat' ? '微信用户' : 'GitHub用户',
              avatar: '',
              provider: provider
            }));
            setTimeout(function() { window.location.href = '/feed/'; }, 1000);
          }
        }

        /* ─── Toast ─── */
        function showToast(msg, type) {
          var existing = document.querySelector('.zy-toast');
          if (existing) existing.remove();
          var toast = document.createElement('div');
          toast.className = 'zy-toast ' + (type || '');
          toast.textContent = msg;
          document.body.appendChild(toast);
          requestAnimationFrame(function() {
            requestAnimationFrame(function() { toast.classList.add('show'); });
          });
          setTimeout(function() {
            toast.classList.remove('show');
            setTimeout(function() { toast.remove(); }, 300);
          }, 2500);
        }

        /* ─── Check existing auth ─── */
        (function() {
          var token = localStorage.getItem('zy_token');
          if (token) {
            var already = confirm('你已登录，是否跳转到精选页？');
            if (already) window.location.href = '/feed/';
          }
        })();
        </script>
    design:
      spacing:
        padding: ['2rem', '0', '2rem', '0']
      css_class: 'bg-slate-50 dark:bg-slate-900'
---
