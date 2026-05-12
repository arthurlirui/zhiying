---
title: 知影 · AI读帖官
summary: 知乎数字人 · 智能内容压缩与语音化引擎
date: 2025-01-01
type: landing

sections:
  # ═══════════════════════════════════════════════════════════════════════════
  # 模块一：首页Hero区 - 看图说话与通勤伴随
  # ═══════════════════════════════════════════════════════════════════════════
  - block: hero
    id: hero
    content:
      title: "知影 · AI读帖官"
      subtitle: "你的知乎通勤伴侣"
      text: |
        **看图说话，秒懂知乎**

        把万字长图文压缩成3分钟精华，
        配合AI语音讲解，让通勤时间价值最大化。

        地铁上、公交里、排队中——随时随地，高效吸收知识。
      image:
        src: "media/hero-illustration.svg"
        alt: "知影AI读帖官"
      primary_action:
        text: "立即体验"
        url: "/zhihu/"
        icon: play
      secondary_action:
        text: "了解更多"
        url: "#features"
        icon: arrow-right
    design:
      spacing:
        padding: ['6rem', '0', '5rem', '0']
      css_class: 'dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950'
      layout: left

  # ═══════════════════════════════════════════════════════════════════════════
  # 模块二：功能演示区 - 完整转化流程
  # ═══════════════════════════════════════════════════════════════════════════
  - block: features
    id: features
    content:
      title: "如何工作"
      subtitle: "从知乎帖子到通勤精华的三步革命"
      text: |
        知影将复杂的长图文内容，通过AI智能分析，
        转化为适合碎片化消费的高质量精华内容。

      items:
        - name: "智能截图"
          description: |
            截取知乎帖子中的关键图文内容，
            AI自动识别文章结构与核心观点。
          icon: hero/camera

        - name: "深度理解"
          description: |
            基于大语言模型理解文章主旨，
            提取最关键的论点、数据与洞察。
          icon: hero/sparkles

        - name: "语音播报"
          description: |
            将精华内容转化为流畅的语音讲解，
            配合精炼的图文摘要，随时收听。
          icon: hero/microphone

        - name: "高效压缩"
          description: |
            万字长文 → 3分钟精华，
            信息密度提升10倍，学习效率翻倍。
          icon: hero/bolt

        - name: "随时随地"
          description: |
            通勤路上、午休时分、睡前片刻，
            碎片时间高效利用，知识日积月累。
          icon: hero/device-phone-mobile

        - name: "精准提炼"
          description: |
            AI精准识别作者核心观点，
            保留最有价值的论证与数据支撑。
          icon: hero/document-magnifying-glass

    design:
      spacing:
        padding: ['4rem', '0', '4rem', '0']
      columns: 3

  # ═══════════════════════════════════════════════════════════════════════════
  # 模块三：场景体验区 - 通勤模拟界面
  # ═══════════════════════════════════════════════════════════════════════════
  - block: markdown
    id: demo
    content:
      title: "场景体验"
      text: |
        <div class="demo-container">

          <!-- 模拟手机界面 -->
          <div class="phone-mockup">
            <!-- 手机状态栏 -->
            <div class="phone-status-bar">
              <span>9:41</span>
              <div class="status-icons">
                <span>📶</span><span>🔋</span>
              </div>
            </div>

            <!-- 应用界面 -->
            <div class="app-content">
              <!-- 顶部 -->
              <div class="app-header">
                <div class="avatar">知</div>
                <div class="header-info">
                  <h3>知影读帖</h3>
                  <p>正在为您讲解...</p>
                </div>
              </div>

              <!-- 文章卡片 -->
              <div class="article-card">
                <div class="article-meta">
                  <span class="tag">科技</span>
                  <span class="read-time">⏱️ 3分钟</span>
                </div>
                <h2>为什么AI不会取代人类创造力</h2>
                <p class="author">@王明AI研究者</p>

                <!-- 精华内容 -->
                <div class="highlights">
                  <h4>🎯 核心观点</h4>
                  <ul>
                    <li>AI擅长模式匹配，但缺乏真正的「灵感迸发」</li>
                    <li>人类创造力源于情感体验和跨领域联想</li>
                    <li>未来人与AI是协作关系，而非替代关系</li>
                  </ul>
                </div>

                <div class="quote">
                  "真正的创新来自于人类对未知的恐惧和好奇，这是AI无法复制的。"
                </div>
              </div>

              <!-- 播放控件 -->
              <div class="player-controls">
                <div class="progress-bar">
                  <div class="progress" style="width: 45%"></div>
                </div>
                <div class="time-display">
                  <span>1:21</span>
                  <span>3:00</span>
                </div>
                <div class="buttons">
                  <button class="rewind">⏪</button>
                  <button class="play">▶️</button>
                  <button class="forward">⏩</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧说明 -->
          <div class="demo-info">
            <h3>通勤场景 · 沉浸体验</h3>
            <p>在拥挤的地铁车厢里，戴上耳机，让知影为您朗读文章的精华内容。</p>

            <div class="features-list">
              <div class="feature-item">
                <span class="icon">🎧</span>
                <div>
                  <strong>沉浸式语音</strong>
                  <p>自然流畅的AI语音，支持语速调节</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="icon">📝</span>
                <div>
                  <strong>精炼摘要</strong>
                  <p>保留文章核心，一目了然</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="icon">🔄</span>
                <div>
                  <strong>随时暂停</strong>
                  <p>碎片时间灵活利用</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          .demo-container {
            display: flex;
            gap: 4rem;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            padding: 2rem 0;
          }

          .phone-mockup {
            width: 320px;
            background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
            border-radius: 40px;
            padding: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          }

          .phone-status-bar {
            display: flex;
            justify-content: space-between;
            padding: 8px 20px;
            color: white;
            font-size: 14px;
            font-weight: 600;
          }

          .status-icons {
            display: flex;
            gap: 6px;
          }

          .app-content {
            background: linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%);
            border-radius: 32px;
            padding: 20px;
            min-height: 500px;
          }

          .app-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .avatar {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 18px;
          }

          .header-info h3 {
            color: white;
            margin: 0;
            font-size: 16px;
          }

          .header-info p {
            color: #888;
            margin: 4px 0 0;
            font-size: 12px;
          }

          .article-card {
            background: rgba(255,255,255,0.05);
            border-radius: 16px;
            padding: 16px;
            margin-bottom: 16px;
          }

          .article-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 12px;
          }

          .tag {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 4px 10px;
            border-radius: 12px;
          }

          .read-time {
            color: #888;
          }

          .article-card h2 {
            color: white;
            font-size: 16px;
            margin: 0 0 8px;
            line-height: 1.4;
          }

          .author {
            color: #666;
            font-size: 12px;
            margin: 0 0 12px;
          }

          .highlights {
            background: rgba(102, 126, 234, 0.1);
            border-left: 3px solid #667eea;
            padding: 12px;
            border-radius: 0 8px 8px 0;
            margin-bottom: 12px;
          }

          .highlights h4 {
            color: #667eea;
            margin: 0 0 8px;
            font-size: 13px;
          }

          .highlights ul {
            margin: 0;
            padding-left: 16px;
            color: #ccc;
            font-size: 12px;
            line-height: 1.8;
          }

          .quote {
            background: rgba(118, 75, 162, 0.2);
            padding: 12px;
            border-radius: 8px;
            color: #ddd;
            font-style: italic;
            font-size: 12px;
            text-align: center;
          }

          .player-controls {
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
            padding: 16px;
          }

          .progress-bar {
            height: 4px;
            background: rgba(255,255,255,0.2);
            border-radius: 2px;
            margin-bottom: 8px;
          }

          .progress {
            height: 100%;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 2px;
          }

          .time-display {
            display: flex;
            justify-content: space-between;
            color: #888;
            font-size: 11px;
            margin-bottom: 12px;
          }

          .buttons {
            display: flex;
            justify-content: center;
            gap: 24px;
          }

          .buttons button {
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.8;
            transition: transform 0.2s;
          }

          .buttons button:hover {
            transform: scale(1.1);
          }

          .buttons .play {
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
          }

          .demo-info {
            max-width: 400px;
          }

          .demo-info h3 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
          }

          .demo-info p {
            color: #666;
            margin-bottom: 2rem;
            line-height: 1.7;
          }

          .features-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .feature-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
          }

          .feature-item .icon {
            font-size: 1.5rem;
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .feature-item strong {
            display: block;
            margin-bottom: 4px;
          }

          .feature-item p {
            margin: 0;
            font-size: 0.9rem;
            color: #888;
          }

          @media (prefers-color-scheme: dark) {
            .demo-info h3 {
              color: white;
            }
            .demo-info p, .feature-item p {
              color: #aaa;
            }
          }

          @media (max-width: 768px) {
            .demo-container {
              flex-direction: column;
            }
            .demo-info {
              text-align: center;
            }
          }
        </style>
    design:
      spacing:
        padding: ['4rem', '0', '4rem', '0']
      css_class: 'bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800'

  # ═══════════════════════════════════════════════════════════════════════════
  # 模块四：技术架构区
  # ═══════════════════════════════════════════════════════════════════════════
  - block: markdown
    id: architecture
    content:
      title: "技术架构"
      text: |
        <div class="architecture-section">

          <div class="section-header">
            <h2>技术架构</h2>
            <p>端到端的智能内容处理引擎</p>
          </div>

          <!-- 技术流程图 -->
          <div class="tech-flow">
            <div class="flow-step">
              <div class="step-icon">📸</div>
              <h4>输入层</h4>
              <p>知乎帖子截图或链接</p>
              <div class="tech-tags">
                <span>OCR识别</span>
                <span>结构分析</span>
              </div>
            </div>

            <div class="flow-arrow">→</div>

            <div class="flow-step">
              <div class="step-icon">🧠</div>
              <h4>理解层</h4>
              <p>AI深度理解内容</p>
              <div class="tech-tags">
                <span>多模态大模型</span>
                <span>意图识别</span>
              </div>
            </div>

            <div class="flow-arrow">→</div>

            <div class="flow-step">
              <div class="step-icon">⚡</div>
              <h4>处理层</h4>
              <p>智能压缩与提炼</p>
              <div class="tech-tags">
                <span>知识蒸馏</span>
                <span>摘要生成</span>
              </div>
            </div>

            <div class="flow-arrow">→</div>

            <div class="flow-step">
              <div class="step-icon">🎙️</div>
              <h4>输出层</h4>
              <p>语音播报与图文展示</p>
              <div class="tech-tags">
                <span>TTS语音</span>
                <span>响应式UI</span>
              </div>
            </div>
          </div>

          <!-- 技术特点 -->
          <div class="tech-features">
            <div class="tech-card">
              <h3>多模态理解</h3>
              <p>融合视觉与语言模型，精准理解图文混合内容</p>
            </div>
            <div class="tech-card">
              <h3>智能压缩</h3>
              <p>基于深度学习的信息压缩，保留核心要点</p>
            </div>
            <div class="tech-card">
              <h3>自然语音</h3>
              <p>高质量文本转语音，支持多种声音风格</p>
            </div>
            <div class="tech-card">
              <h3>实时响应</h3>
              <p>边缘计算加速，即时获取处理结果</p>
            </div>
          </div>

        </div>

        <style>
          .architecture-section {
            padding: 4rem 0;
          }

          .section-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .section-header h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .section-header p {
            font-size: 1.2rem;
            color: #666;
          }

          .tech-flow {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 4rem;
            padding: 2rem;
            background: linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%);
            border-radius: 24px;
          }

          .flow-step {
            text-align: center;
            flex: 1;
            min-width: 150px;
            max-width: 200px;
          }

          .step-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .flow-step h4 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          .flow-step p {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 1rem;
          }

          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
          }

          .tech-tags span {
            background: rgba(102,126,234,0.1);
            color: #667eea;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.75rem;
          }

          .flow-arrow {
            font-size: 2rem;
            color: #667eea;
            display: flex;
            align-items: center;
          }

          .tech-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .tech-card {
            background: white;
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .tech-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }

          .tech-card h3 {
            font-size: 1.2rem;
            margin-bottom: 0.75rem;
            color: #1e293b;
          }

          .tech-card p {
            color: #64748b;
            line-height: 1.6;
            margin: 0;
          }

          @media (prefers-color-scheme: dark) {
            .section-header h2 {
              color: white;
            }
            .section-header p {
              color: #aaa;
            }
            .flow-step h4 {
              color: white;
            }
            .flow-step p {
              color: #aaa;
            }
            .tech-card {
              background: #1e293b;
            }
            .tech-card h3 {
              color: white;
            }
            .tech-card p {
              color: #94a3b8;
            }
          }

          @media (max-width: 768px) {
            .flow-arrow {
              transform: rotate(90deg);
              margin: 1rem 0;
            }
            .tech-flow {
              flex-direction: column;
              align-items: center;
            }
            .flow-step {
              max-width: 100%;
            }
          }
        </style>
    design:
      spacing:
        padding: ['4rem', '0', '4rem', '0']
      css_class: 'bg-slate-50 dark:bg-slate-800/50'

  # ═══════════════════════════════════════════════════════════════════════════
  # 行动召唤区
  # ═══════════════════════════════════════════════════════════════════════════
  - block: markdown
    id: cta
    content:
      title: ""
      text: |
        <div class="cta-section">
          <h2>开始你的高效学习之旅</h2>
          <p>告别信息焦虑，让通勤时间成为你的知识充电站。<br/>扫码体验，让每一分钟都有价值。</p>
          <div class="cta-buttons">
            <a href="/zhihu/" class="cta-btn primary">🚀 立即体验</a>
            <a href="/#features" class="cta-btn secondary">了解更多 →</a>
          </div>
        </div>

        <style>
          .cta-section {
            text-align: center;
            padding: 4rem 2rem;
          }
          .cta-section h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }
          .cta-section p {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 2.5rem;
            line-height: 1.8;
          }
          .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .cta-btn {
            display: inline-block;
            padding: 14px 32px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .cta-btn:hover {
            transform: translateY(-2px);
          }
          .cta-btn.primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          }
          .cta-btn.primary:hover {
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
          }
          .cta-btn.secondary {
            background: rgba(102, 126, 234, 0.1);
            color: #667eea;
          }
          .cta-btn.secondary:hover {
            background: rgba(102, 126, 234, 0.2);
          }
          @media (prefers-color-scheme: dark) {
            .cta-section p {
              color: #aaa;
            }
            .cta-btn.secondary {
              background: rgba(102, 126, 234, 0.2);
            }
          }
        </style>
    design:
      spacing:
        padding: ['3rem', '0', '3rem', '0']
      css_class: 'bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-indigo-950'

  # ═══════════════════════════════════════════════════════════════════════════
  # 底部信息
  # ═══════════════════════════════════════════════════════════════════════════
  - block: features
    id: footer-info
    content:
      title: ""
      items:
        - name: "使命"
          description: "让知识触手可及，让学习无处不在"
          icon: hero/bullseye
        - name: "理念"
          description: "信息不是力量，消化后的知识才是"
          icon: hero/light-bulb
        - name: "愿景"
          description: "成为每个人的AI学习伙伴"
          icon: hero/rocket-launch
    design:
      spacing:
        padding: ['2rem', '0', '2rem', '0']
      columns: 3
---
