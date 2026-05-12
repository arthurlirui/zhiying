---
title: 知影精选
summary: 通勤路上的知识精选
date: 2025-01-01
type: landing
menu:
  main:
    name: 精选
    url: /zhihu/
    weight: 2
---

# 知影精选

<style>
/* ========================================
   知影 · 知乎精选卡片滑动界面
   ======================================== */

.zhiying-feed {
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  perspective: 1000px;
}

/* 卡片容器 */
.card-stack {
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  max-height: 85vh;
}

/* 单个卡片 */
.feed-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border-radius: 24px;
  overflow: hidden;
  cursor: grab;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.feed-card:active {
  cursor: grabbing;
}

/* 顶部标签 */
.card-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 20px;
  background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.card-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.read-time {
  color: rgba(255,255,255,0.8);
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* 主图区域 */
.card-image {
  width: 100%;
  height: 55%;
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(transparent, rgba(15,15,26,0.9));
}

/* 内容区域 */
.card-content {
  padding: 20px 24px;
  height: 45%;
  display: flex;
  flex-direction: column;
}

.card-author {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.author-avatar {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.author-info {
  flex: 1;
}

.author-name {
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

.author-badge {
  color: #667eea;
  font-size: 11px;
}

.card-title {
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 精华摘要 */
.card-highlights {
  background: rgba(102, 126, 234, 0.15);
  border-left: 3px solid #667eea;
  padding: 12px 14px;
  border-radius: 0 12px 12px 0;
  margin-bottom: 16px;
  flex: 1;
  overflow: hidden;
}

.highlight-title {
  color: #667eea;
  font-size: 12px;
  font-weight: 600;
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.highlight-list {
  margin: 0;
  padding: 0 0 0 16px;
}

.highlight-list li {
  color: rgba(255,255,255,0.85);
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 4px;
}

/* 播放控件 */
.card-player {
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 14px 18px;
}

.player-main {
  display: flex;
  align-items: center;
  gap: 14px;
}

.play-btn {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.play-btn:hover {
  transform: scale(1.05);
}

.play-btn:active {
  transform: scale(0.95);
}

.play-btn.playing {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); }
  50% { box-shadow: 0 4px 25px rgba(102, 126, 234, 0.8); }
}

.play-icon {
  width: 0;
  height: 0;
  border-left: 14px solid white;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  margin-left: 4px;
}

.play-btn.playing .play-icon {
  width: 12px;
  height: 14px;
  border: none;
  background: white;
  border-radius: 2px;
  margin-left: 0;
  position: relative;
}

.play-btn.playing .play-icon::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 14px;
  background: #667eea;
  right: -6px;
}

.player-progress {
  flex: 1;
}

.progress-bar {
  height: 4px;
  background: rgba(255,255,255,0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  width: 35%;
  transition: width 0.1s linear;
}

.player-time {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: rgba(255,255,255,0.6);
}

.speed-btn {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.speed-btn:hover {
  background: rgba(255,255,255,0.2);
}

/* 侧边操作栏 */
.card-actions {
  position: absolute;
  right: 16px;
  bottom: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 10;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
}

.action-btn:hover {
  transform: scale(1.1);
}

.action-icon {
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  backdrop-filter: blur(10px);
}

.action-label {
  font-size: 11px;
  opacity: 0.8;
}

.action-btn.liked .action-icon {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%);
  animation: heartBeat 0.3s ease;
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* 滑动指示器 */
.swipe-hint {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.swipe-dot {
  width: 8px;
  height: 8px;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  transition: all 0.3s;
}

.swipe-dot.active {
  width: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 底部导航 */
.feed-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(15, 15, 26, 0.95);
  backdrop-filter: blur(20px);
  padding: 12px 0;
  padding-bottom: calc(12px + env(safe-area-inset-bottom));
  z-index: 100;
}

.nav-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-item.active, .nav-item:hover {
  color: #667eea;
}

.nav-icon {
  font-size: 24px;
}

.nav-label {
  font-size: 11px;
}

/* 卡片堆叠效果 */
.card-stack .feed-card:nth-child(1) {
  transform: translateX(0) rotate(0deg);
  z-index: 3;
}

.card-stack .feed-card:nth-child(2) {
  transform: translateX(-8px) translateY(8px) rotate(-1deg) scale(0.95);
  z-index: 2;
}

.card-stack .feed-card:nth-child(3) {
  transform: translateX(-16px) translateY(16px) rotate(-2deg) scale(0.9);
  z-index: 1;
}

.card-stack .feed-card:nth-child(n+4) {
  display: none;
}

/* 滑动手势 */
.feed-card.dragging {
  transition: none;
}

.feed-card.swiping-out {
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
}

.feed-card.hidden {
  opacity: 0;
  pointer-events: none;
}

/* 音频波纹动画 */
.audio-waves {
  display: flex;
  align-items: center;
  gap: 3px;
  height: 20px;
  margin-left: 10px;
}

.audio-wave {
  width: 3px;
  background: linear-gradient(180deg, #667eea, #764ba2);
  border-radius: 2px;
  animation: wave 1s ease-in-out infinite;
}

.audio-wave:nth-child(1) { height: 8px; animation-delay: 0s; }
.audio-wave:nth-child(2) { height: 16px; animation-delay: 0.1s; }
.audio-wave:nth-child(3) { height: 12px; animation-delay: 0.2s; }
.audio-wave:nth-child(4) { height: 20px; animation-delay: 0.3s; }
.audio-wave:nth-child(5) { height: 10px; animation-delay: 0.4s; }

@keyframes wave {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.5); }
}

.audio-waves.paused .audio-wave {
  animation-play-state: paused;
  transform: scaleY(0.3);
}

/* 引用语 */
.card-quote {
  background: rgba(118, 75, 162, 0.2);
  padding: 12px 16px;
  border-radius: 12px;
  margin: 10px 0;
  position: relative;
}

.card-quote::before {
  content: '"';
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 24px;
  color: #764ba2;
  opacity: 0.5;
}

.card-quote p {
  color: rgba(255,255,255,0.9);
  font-size: 13px;
  font-style: italic;
  margin: 0;
  padding-left: 16px;
  line-height: 1.6;
}

/* 深色模式已应用，通过渐变背景 */

/* 移动端优化 */
@media (max-width: 480px) {
  .zhiying-feed {
    max-width: 100%;
  }
  
  .card-stack {
    max-height: 80vh;
  }
  
  .card-content {
    padding: 16px 18px;
  }
  
  .card-title {
    font-size: 16px;
  }
  
  .action-icon {
    width: 42px;
    height: 42px;
    font-size: 18px;
  }
}

/* 加载动画 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0f0f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: opacity 0.5s;
}

.loading-overlay.hidden {
  opacity: 0;
  pointer-events: none;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(102, 126, 234, 0.2);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 向上滑动提示 */
.swipe-up-hint {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.6);
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: bounce 2s infinite;
  z-index: 10;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-8px); }
}

.swipe-up-hint span:first-child {
  font-size: 20px;
}
</style>

<!-- 加载动画 -->
<div class="loading-overlay" id="loadingOverlay">
  <div class="loading-spinner"></div>
</div>

<!-- 知乎精选卡片 -->
<div class="zhiying-feed">
  <div class="card-stack" id="cardStack">
    
    <!-- 卡片1: AI创造力 -->
    <div class="feed-card" data-index="0">
      <div class="card-header">
        <span class="card-tag">科技</span>
        <span class="read-time">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
          </svg>
          3分钟
        </span>
      </div>
      
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" alt="AI与人类创造力" />
        <div class="image-overlay"></div>
      </div>
      
      <div class="card-content">
        <div class="card-author">
          <div class="author-avatar">王</div>
          <div class="author-info">
            <p class="author-name">王明AI研究者</p>
            <span class="author-badge">知乎认证 · 科技博主</span>
          </div>
        </div>
        
        <h2 class="card-title">为什么AI不会取代人类创造力</h2>
        
        <div class="card-highlights">
          <h4 class="highlight-title">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            核心洞察
          </h4>
          <ul class="highlight-list">
            <li>AI擅长模式匹配，但缺乏真正的"灵感迸发"</li>
            <li>人类创造力源于情感体验和跨领域联想</li>
            <li>未来人与AI是协作关系，而非替代关系</li>
          </ul>
        </div>
        
        <div class="card-player">
          <div class="player-main">
            <button class="play-btn" id="playBtn0" onclick="togglePlay(0)">
              <div class="play-icon"></div>
            </button>
            <div class="player-progress">
              <div class="progress-bar">
                <div class="progress-fill" id="progress0" style="width: 0%"></div>
              </div>
              <div class="player-time">
                <span id="currentTime0">0:00</span>
                <span id="duration0">3:00</span>
              </div>
            </div>
            <div class="audio-waves paused" id="waves0">
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="action-btn" onclick="toggleLike(this)">
          <div class="action-icon">♥</div>
          <span class="action-label">收藏</span>
        </button>
        <button class="action-btn" onclick="shareCard()">
          <div class="action-icon">↗</div>
          <span class="action-label">分享</span>
        </button>
        <button class="action-btn" onclick="openOriginal()">
          <div class="action-icon">🔗</div>
          <span class="action-label">原文</span>
        </button>
      </div>
      
      <div class="swipe-up-hint">
        <span>↑</span>
        <span>上滑切换</span>
      </div>
    </div>
    
    <!-- 卡片2: 远程办公 -->
    <div class="feed-card" data-index="1">
      <div class="card-header">
        <span class="card-tag">职场</span>
        <span class="read-time">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
          </svg>
          3分钟
        </span>
      </div>
      
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="远程办公" />
        <div class="image-overlay"></div>
      </div>
      
      <div class="card-content">
        <div class="card-author">
          <div class="author-avatar">职</div>
          <div class="author-info">
            <p class="author-name">职场观察家</p>
            <span class="author-badge">知乎认证 · 职场领域</span>
          </div>
        </div>
        
        <h2 class="card-title">远程办公五年后，我发现了什么</h2>
        
        <div class="card-highlights">
          <h4 class="highlight-title">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            核心洞察
          </h4>
          <ul class="highlight-list">
            <li>自律是最好的生产力</li>
            <li>沟通方式比工作时间更重要</li>
            <li>工作与生活需要明确的边界</li>
          </ul>
        </div>
        
        <div class="card-quote">
          <p>远程办公不是自由职业，而是一种更高要求的工作模式。</p>
        </div>
        
        <div class="card-player">
          <div class="player-main">
            <button class="play-btn" id="playBtn1" onclick="togglePlay(1)">
              <div class="play-icon"></div>
            </button>
            <div class="player-progress">
              <div class="progress-bar">
                <div class="progress-fill" id="progress1" style="width: 0%"></div>
              </div>
              <div class="player-time">
                <span id="currentTime1">0:00</span>
                <span id="duration1">3:00</span>
              </div>
            </div>
            <div class="audio-waves paused" id="waves1">
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="action-btn" onclick="toggleLike(this)">
          <div class="action-icon">♥</div>
          <span class="action-label">收藏</span>
        </button>
        <button class="action-btn" onclick="shareCard()">
          <div class="action-icon">↗</div>
          <span class="action-label">分享</span>
        </button>
        <button class="action-btn" onclick="openOriginal()">
          <div class="action-icon">🔗</div>
          <span class="action-label">原文</span>
        </button>
      </div>
    </div>
    
    <!-- 卡片3: 创业教训 -->
    <div class="feed-card" data-index="2">
      <div class="card-header">
        <span class="card-tag">创业</span>
        <span class="read-time">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
          </svg>
          3分钟
        </span>
      </div>
      
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80" alt="创业" />
        <div class="image-overlay"></div>
      </div>
      
      <div class="card-content">
        <div class="card-author">
          <div class="author-avatar">连</div>
          <div class="author-info">
            <p class="author-name">连续创业者</p>
            <span class="author-badge">知乎认证 · 商业领域</span>
          </div>
        </div>
        
        <h2 class="card-title">创业失败后我学到的10件事</h2>
        
        <div class="card-highlights">
          <h4 class="highlight-title">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            核心洞察
          </h4>
          <ul class="highlight-list">
            <li>现金流比估值更重要</li>
            <li>团队比想法更重要</li>
            <li>执行力决定一切</li>
          </ul>
        </div>
        
        <div class="card-quote">
          <p>没有现金，再高的估值都是空中楼阁。</p>
        </div>
        
        <div class="card-player">
          <div class="player-main">
            <button class="play-btn" id="playBtn2" onclick="togglePlay(2)">
              <div class="play-icon"></div>
            </button>
            <div class="player-progress">
              <div class="progress-bar">
                <div class="progress-fill" id="progress2" style="width: 0%"></div>
              </div>
              <div class="player-time">
                <span id="currentTime2">0:00</span>
                <span id="duration2">3:00</span>
              </div>
            </div>
            <div class="audio-waves paused" id="waves2">
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
              <div class="audio-wave"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card-actions">
        <button class="action-btn" onclick="toggleLike(this)">
          <div class="action-icon">♥</div>
          <span class="action-label">收藏</span>
        </button>
        <button class="action-btn" onclick="shareCard()">
          <div class="action-icon">↗</div>
          <span class="action-label">分享</span>
        </button>
        <button class="action-btn" onclick="openOriginal()">
          <div class="action-icon">🔗</div>
          <span class="action-label">原文</span>
        </button>
      </div>
    </div>
    
  </div>
  
  <!-- 滑动指示器 -->
  <div class="swipe-hint">
    <div class="swipe-dot active"></div>
    <div class="swipe-dot"></div>
    <div class="swipe-dot"></div>
  </div>
</div>

<!-- 底部导航 -->
<nav class="feed-nav">
  <ul class="nav-list">
    <li>
      <a href="/" class="nav-item">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">首页</span>
      </a>
    </li>
    <li>
      <a href="/zhihu/" class="nav-item active">
        <span class="nav-icon">✨</span>
        <span class="nav-label">精选</span>
      </a>
    </li>
    <li>
      <a href="#discover" class="nav-item">
        <span class="nav-icon">🔍</span>
        <span class="nav-label">发现</span>
      </a>
    </li>
    <li>
      <a href="#profile" class="nav-item">
        <span class="nav-icon">👤</span>
        <span class="nav-label">我的</span>
      </a>
    </li>
  </ul>
</nav>

<script>
// ========================================
// 知影精选 - 卡片滑动与语音播放
// ========================================

// 当前卡片索引
let currentCard = 0;
const totalCards = 3;

// 模拟音频播放状态
const audioState = {
  isPlaying: Array(totalCards).fill(false),
  progress: Array(totalCards).fill(0),
  duration: 180 // 3分钟
};

// 触摸起始位置
let touchStartY = 0;
let touchStartX = 0;
let isDragging = false;
let currentTranslate = 0;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  // 隐藏加载动画
  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.add('hidden');
  }, 800);
  
  // 初始化触摸事件
  initTouchEvents();
  
  // 键盘快捷键
  document.addEventListener('keydown', handleKeyboard);
});

// 触摸事件初始化
function initTouchEvents() {
  const cards = document.querySelectorAll('.feed-card');
  
  cards.forEach((card, index) => {
    // 触摸开始
    card.addEventListener('touchstart', handleTouchStart, { passive: false });
    
    // 触摸移动
    card.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // 触摸结束
    card.addEventListener('touchend', handleTouchEnd);
    
    // 鼠标事件（桌面端）
    card.addEventListener('mousedown', handleMouseDown);
  });
}

// 处理触摸开始
function handleTouchStart(e) {
  touchStartY = e.touches[0].clientY;
  touchStartX = e.touches[0].clientX;
  isDragging = true;
  this.classList.add('dragging');
}

// 处理触摸移动
function handleTouchMove(e) {
  if (!isDragging) return;
  
  const currentY = e.touches[0].clientY;
  const currentX = e.touches[0].clientX;
  const deltaY = currentY - touchStartY;
  const deltaX = currentX - touchStartX;
  
  // 只有上滑超过50px才生效
  if (deltaY < -50 && Math.abs(deltaY) > Math.abs(deltaX)) {
    e.preventDefault();
    this.style.transform = `translateY(${deltaY}px) rotate(${deltaY * 0.02}deg)`;
    this.style.opacity = 1 - Math.abs(deltaY) / 500;
  }
}

// 处理触摸结束
function handleTouchEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  
  const currentY = e.changedTouches[0].clientY;
  const deltaY = currentY - touchStartY;
  
  this.classList.remove('dragging');
  
  // 上滑超过100px，切换卡片
  if (deltaY < -100) {
    swipeToNext();
  } else {
    // 重置位置
    this.style.transform = '';
    this.style.opacity = '';
  }
}

// 鼠标事件处理（桌面端）
function handleMouseDown(e) {
  touchStartY = e.clientY;
  touchStartX = e.clientX;
  isDragging = true;
  this.classList.add('dragging');
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaY = e.clientY - touchStartY;
    const deltaX = e.clientX - touchStartX;
    
    if (deltaY < -50 && Math.abs(deltaY) > Math.abs(deltaX)) {
      this.style.transform = `translateY(${deltaY}px) rotate(${deltaY * 0.02}deg)`;
      this.style.opacity = 1 - Math.abs(deltaY) / 500;
    }
  };
  
  const handleMouseUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    this.classList.remove('dragging');
    
    const deltaY = e.clientY - touchStartY;
    
    if (deltaY < -100) {
      swipeToNext();
    } else {
      this.style.transform = '';
      this.style.opacity = '';
    }
    
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
}

// 切换到下一张卡片
function swipeToNext() {
  const cards = document.querySelectorAll('.feed-card');
  const currentCardEl = cards[currentCard];
  
  // 停止当前播放
  const currentIndex = currentCard;
  if (audioState.isPlaying[currentIndex]) {
    togglePlay(currentIndex);
  }
  
  // 移除上滑提示
  const hint = currentCardEl.querySelector('.swipe-up-hint');
  if (hint) hint.style.display = 'none';
  
  // 动画切换
  currentCardEl.classList.add('swiping-out');
  currentCardEl.style.transform = 'translateY(-100vh) rotate(-10deg)';
  currentCardEl.style.opacity = '0';
  
  setTimeout(() => {
    currentCardEl.classList.remove('swiping-out');
    currentCardEl.classList.add('hidden');
    currentCardEl.style.transform = '';
    currentCardEl.style.opacity = '';
    
    // 更新索引
    currentCard = (currentCard + 1) % totalCards;
    
    // 更新卡片堆叠效果
    updateCardStack();
    
    // 更新指示器
    updateIndicators();
  }, 400);
}

// 更新卡片堆叠效果
function updateCardStack() {
  const cards = document.querySelectorAll('.feed-card');
  
  cards.forEach((card, index) => {
    // 计算相对位置
    let relativeIndex = index - currentCard;
    if (relativeIndex < 0) relativeIndex += totalCards;
    
    // 移除所有状态
    card.classList.remove('hidden');
    
    if (relativeIndex === 0) {
      // 当前卡片
      card.style.transform = 'translateX(0) rotate(0deg) scale(1)';
      card.style.zIndex = 3;
    } else if (relativeIndex === 1) {
      // 下一张卡片
      card.style.transform = 'translateX(-8px) translateY(8px) rotate(-1deg) scale(0.95)';
      card.style.zIndex = 2;
    } else if (relativeIndex === 2) {
      // 第三张卡片
      card.style.transform = 'translateX(-16px) translateY(16px) rotate(-2deg) scale(0.9)';
      card.style.zIndex = 1;
    } else {
      card.classList.add('hidden');
    }
  });
}

// 更新滑动指示器
function updateIndicators() {
  const dots = document.querySelectorAll('.swipe-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentCard);
  });
}

// 切换播放状态
function togglePlay(index) {
  // 停止其他正在播放的
  audioState.isPlaying.forEach((playing, i) => {
    if (playing && i !== index) {
      audioState.isPlaying[i] = false;
      const btn = document.getElementById(`playBtn${i}`);
      const waves = document.getElementById(`waves${i}`);
      if (btn) {
        btn.classList.remove('playing');
        btn.innerHTML = '<div class="play-icon"></div>';
      }
      if (waves) waves.classList.add('paused');
    }
  });
  
  // 切换当前状态
  audioState.isPlaying[index] = !audioState.isPlaying[index];
  
  const btn = document.getElementById(`playBtn${index}`);
  const waves = document.getElementById(`waves${index}`);
  const progress = document.getElementById(`progress${index}`);
  const currentTimeEl = document.getElementById(`currentTime${index}`);
  
  if (audioState.isPlaying[index]) {
    // 开始播放
    btn.classList.add('playing');
    btn.innerHTML = '<div class="play-icon"></div>';
    waves.classList.remove('paused');
    
    // 模拟播放进度
    startProgressSimulation(index, progress, currentTimeEl);
  } else {
    // 暂停播放
    btn.classList.remove('playing');
    btn.innerHTML = '<div class="play-icon"></div>';
    waves.classList.add('paused');
    
    // 停止进度模拟
    stopProgressSimulation(index);
  }
}

// 进度模拟
let progressIntervals = {};

function startProgressSimulation(index, progressEl, timeEl) {
  if (progressIntervals[index]) return;
  
  progressIntervals[index] = setInterval(() => {
    if (!audioState.isPlaying[index]) {
      clearInterval(progressIntervals[index]);
      delete progressIntervals[index];
      return;
    }
    
    audioState.progress[index] += 1;
    const percent = (audioState.progress[index] / audioState.duration) * 100;
    progressEl.style.width = `${percent}%`;
    
    // 更新时间
    const mins = Math.floor(audioState.progress[index] / 60);
    const secs = audioState.progress[index] % 60;
    timeEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    
    // 播放结束
    if (audioState.progress[index] >= audioState.duration) {
      audioState.progress[index] = 0;
      audioState.isPlaying[index] = false;
      progressEl.style.width = '0%';
      timeEl.textContent = '0:00';
      
      const btn = document.getElementById(`playBtn${index}`);
      const waves = document.getElementById(`waves${index}`);
      btn.classList.remove('playing');
      btn.innerHTML = '<div class="play-icon"></div>';
      waves.classList.add('paused');
      
      clearInterval(progressIntervals[index]);
      delete progressIntervals[index];
    }
  }, 1000);
}

function stopProgressSimulation(index) {
  if (progressIntervals[index]) {
    clearInterval(progressIntervals[index]);
    delete progressIntervals[index];
  }
}

// 收藏
function toggleLike(btn) {
  btn.classList.toggle('liked');
}

// 分享
function shareCard() {
  if (navigator.share) {
    navigator.share({
      title: '知影精选',
      text: '这篇知乎回答很有意思，推荐看看！',
      url: window.location.href
    });
  } else {
    // 复制链接
    navigator.clipboard.writeText(window.location.href);
    alert('链接已复制到剪贴板');
  }
}

// 查看原文
function openOriginal() {
  alert('即将跳转到知乎原文');
}

// 键盘快捷键
function handleKeyboard(e) {
  switch(e.key) {
    case 'ArrowUp':
      // 上滑
      swipeToNext();
      break;
    case ' ':
      // 空格播放/暂停
      e.preventDefault();
      togglePlay(currentCard);
      break;
  }
}
</script>
