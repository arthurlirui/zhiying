---
title: 知影精选
summary: 通勤路上的知识精选
date: 2025-01-01
type: page
menu:
  main:
    name: 精选
    url: /zhihu/
    weight: 2
---

<style>
.feed-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
}

.feed-card-item {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
}

.feed-card-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.feed-card-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.feed-card-content {
  padding: 1.25rem;
}

.feed-card-tag {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  margin-bottom: 0.75rem;
}

.feed-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: #1e293b;
  line-height: 1.4;
}

.feed-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64748b;
  font-size: 13px;
}

.feed-card-author {
  display: flex;
  align-items: center;
  gap: 6px;
}

.feed-card-author .avatar {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  .feed-card-item {
    background: #1e293b;
  }
  .feed-card-title {
    color: white;
  }
  .feed-card-meta {
    color: #94a3b8;
  }
}
</style>

<div class="feed-grid">
  <a href="/zhihu/" class="feed-card-item">
    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" alt="AI创造力" />
    <div class="feed-card-content">
      <span class="feed-card-tag">科技</span>
      <h3 class="feed-card-title">为什么AI不会取代人类创造力</h3>
      <div class="feed-card-meta">
        <span class="feed-card-author"><span class="avatar">王</span>王明AI研究者</span>
        <span>3分钟</span>
      </div>
    </div>
  </a>
  
  <a href="/zhihu/" class="feed-card-item">
    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="远程办公" />
    <div class="feed-card-content">
      <span class="feed-card-tag">职场</span>
      <h3 class="feed-card-title">远程办公五年后，我发现了什么</h3>
      <div class="feed-card-meta">
        <span class="feed-card-author"><span class="avatar">职</span>职场观察家</span>
        <span>3分钟</span>
      </div>
    </div>
  </a>
  
  <a href="/zhihu/" class="feed-card-item">
    <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80" alt="创业" />
    <div class="feed-card-content">
      <span class="feed-card-tag">创业</span>
      <h3 class="feed-card-title">创业失败后我学到的10件事</h3>
      <div class="feed-card-meta">
        <span class="feed-card-author"><span class="avatar">连</span>连续创业者</span>
        <span>3分钟</span>
      </div>
    </div>
  </a>
</div>

<p style="text-align: center; margin-top: 2rem;">
  <a href="/zhihu/" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: 600;">
    ▶ 立即体验沉浸式播放
  </a>
</p>
