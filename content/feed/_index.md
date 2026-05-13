---
title: 精选问答
summary: 通勤路上的知识精选
date: 2025-01-01
type: landing

sections:
  # ═══════════════════════════════════════════════════════════════════════════
  # 页面标题区
  # ═══════════════════════════════════════════════════════════════════════════
  - block: hero
    id: feed-hero
    content:
      title: "知影精选"
      subtitle: "通勤路上的知识精选"
      text: |
        AI智能压缩知乎长图文，每篇精华3分钟，配合语音讲解。
        上滑切换，随时收听，让碎片时间价值最大化。
      primary_action:
        text: "沉浸式播放"
        url: "/zhihu/"
        icon: hero/play
    design:
      spacing:
        padding: ['4rem', '0', '3rem', '0']
      layout: center

  # ═══════════════════════════════════════════════════════════════════════════
  # 精选内容卡片网格
  # ═══════════════════════════════════════════════════════════════════════════
  - block: collection
    id: feed-cards
    content:
      title: "精选问答"
      subtitle: "AI压缩 · 语音播报 · 通勤必备"
      text: |
        以下内容均经过知影AI智能压缩，适配通勤场景语音收听。
      filters:
        folders:
          - feed
        exclude_featured: false
    design:
      spacing:
        padding: ['2rem', '0', '4rem', '0']
      view: card
      columns: 3

  # ═══════════════════════════════════════════════════════════════════════════
  # 行动召唤
  # ═══════════════════════════════════════════════════════════════════════════
  - block: hero
    id: feed-cta
    content:
      title: "想要沉浸式体验？"
      subtitle: "上滑切换，语音播放，像刷短视频一样刷知乎"
      primary_action:
        text: "立即体验"
        url: "/zhihu/"
        icon: hero/play
    design:
      spacing:
        padding: ['3rem', '0', '4rem', '0']
      css_class: 'bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950'
      layout: center
---
