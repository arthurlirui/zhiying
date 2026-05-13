---
title: 知影 · AI读帖官
summary: 知乎数字人 · 智能内容压缩与语音化引擎
date: 2025-01-01
type: landing

sections:
  # ═══════════════════════════════════════════════════════════════════════════
  # 模块一：首页 Hero 区
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
        text: "精选问答"
        url: "/feed/"
        icon: hero/play
      secondary_action:
        text: "了解更多"
        url: "#features"
        icon: hero/arrow-right
    design:
      spacing:
        padding: ['6rem', '0', '5rem', '0']
      css_class: 'dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950'
      layout: left

  # ═══════════════════════════════════════════════════════════════════════════
  # 模块二：功能演示区
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
          description: "截取知乎帖子中的关键图文内容，AI自动识别文章结构与核心观点。"
          icon: hero/camera

        - name: "深度理解"
          description: "基于大语言模型理解文章主旨，提取最关键的论点、数据与洞察。"
          icon: hero/sparkles

        - name: "语音播报"
          description: "将精华内容转化为流畅的语音讲解，配合精炼的图文摘要，随时收听。"
          icon: hero/microphone

        - name: "高效压缩"
          description: "万字长文变为3分钟精华，信息密度提升10倍，学习效率翻倍。"
          icon: hero/bolt

        - name: "随时随地"
          description: "通勤路上、午休时分、睡前片刻，碎片时间高效利用，知识日积月累。"
          icon: hero/device-phone-mobile

        - name: "精准提炼"
          description: "AI精准识别作者核心观点，保留最有价值的论证与数据支撑。"
          icon: hero/document-magnifying-glass

    design:
      spacing:
        padding: ['4rem', '0', '4rem', '0']
      columns: 3

  # ═══════════════════════════════════════════════════════════════════════════
  # 模块三：场景体验区 - 通勤模拟界面
  # ═══════════════════════════════════════════════════════════════════════════
  - block: features
    id: demo
    content:
      title: "通勤场景 · 沉浸体验"
      subtitle: "地铁上戴上耳机，让知影为你朗读精华"
      text: |
        在拥挤的地铁车厢里，戴上耳机，让知影为您朗读文章的精华内容。
        每篇知乎长文被压缩为3分钟语音，配合精炼文本摘要，一目了然。
      items:
        - name: "沉浸式语音"
          description: "自然流畅的AI语音，支持1x/1.5x/2x语速调节，适应不同场景。戴上耳机，闭眼聆听，信息自然流入大脑。"
          icon: hero/speaker-wave

        - name: "精炼摘要"
          description: "AI自动提取文章核心观点，以卡片形式呈现。三条核心洞察、关键引用、数据要点，10秒抓住全文精髓。"
          icon: hero/document-text

        - name: "随时暂停"
          description: "碎片时间灵活利用。到站暂停，上车继续。进度自动保存，无缝衔接，不遗漏任何精彩内容。"
          icon: hero/pause-circle

        - name: "上滑切换"
          description: "类似短视频的上滑交互，轻扫即可切换到下一篇精选。AI根据你的兴趣智能推荐，越用越懂你。"
          icon: hero/arrow-up-circle

        - name: "收藏回顾"
          description: "一键收藏感兴趣的内容，支持离线收听。通勤时收藏，回家后深度阅读，碎片与系统学习无缝衔接。"
          icon: hero/bookmark

        - name: "多源聚合"
          description: "不仅限于知乎，更可聚合微信公众号、技术博客等内容源。一个App，搞定所有信息摄入。"
          icon: hero/squares-2x2

    design:
      spacing:
        padding: ['4rem', '0', '4rem', '0']
      columns: 3
      css_class: 'bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800'

  # ═══════════════════════════════════════════════════════════════════════════
  # 模块四：技术架构区
  # ═══════════════════════════════════════════════════════════════════════════
  - block: features
    id: architecture
    content:
      title: "技术架构"
      subtitle: "端到端的智能内容处理引擎"
      text: |
        从截图输入到语音输出，四大层级协同工作，实现毫秒级响应与精准内容理解。
      items:
        - name: "输入层 · OCR识别"
          description: "支持知乎帖子截图与链接输入，OCR引擎精准识别图文内容，结构化分析文章布局，自动区分标题、正文、图片与引用。"
          icon: hero/camera

        - name: "理解层 · 多模态大模型"
          description: "融合视觉与语言模型，深度理解图文混合内容。意图识别引擎判断文章类型，知识图谱关联相关概念，确保理解不偏航。"
          icon: hero/sparkles

        - name: "处理层 · 智能压缩"
          description: "基于深度学习的信息压缩算法，知识蒸馏保留核心要点，摘要生成引擎提炼关键论证，将万字长文浓缩为3分钟精华。"
          icon: hero/bolt

        - name: "输出层 · 语音合成"
          description: "高质量文本转语音引擎，支持多种声音风格选择。响应式UI适配手机与平板，边听边看，双重信息摄入。"
          icon: hero/speaker-wave

    design:
      spacing:
        padding: ['4rem', '0', '4rem', '0']
      columns: 2
      css_class: 'bg-slate-50 dark:bg-slate-800/50'

  # ═══════════════════════════════════════════════════════════════════════════
  # 模块五：行动召唤区
  # ═══════════════════════════════════════════════════════════════════════════
  - block: hero
    id: cta
    content:
      title: "开始你的高效学习之旅"
      subtitle: "告别信息焦虑，让通勤时间成为你的知识充电站"
      text: |
        扫码体验，让每一分钟都有价值。
        
        万字长文变3分钟，地铁公交变课堂。
      primary_action:
        text: "精选问答"
        url: "/feed/"
        icon: hero/rocket-launch
      secondary_action:
        text: "了解更多"
        url: "/#features"
        icon: hero/arrow-right
    design:
      spacing:
        padding: ['5rem', '0', '5rem', '0']
      css_class: 'bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950'
      layout: center

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
