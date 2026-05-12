# 知影 · AI读帖官

> 知乎数字人 · 智能内容压缩与语音化引擎

[![HugoBlox](https://img.shields.io/badge/Powered%20by-HugoBlox-blue)](https://hugoblox.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

## 产品简介

**知影 · AI读帖官** 是一个会"看图说话"的知乎数字人，旨在将信息像短视频一样被高效消费。

通过 AI 智能分析，把知乎万字长图文压缩成 3 分钟精华，配合语音讲解，让通勤时间价值最大化。

## 核心特性

- **看图说话** - 智能识别截图内容，提取关键信息
- **高效压缩** - 万字长文 → 3分钟精华，信息密度提升10倍
- **语音播报** - 流畅的 AI 语音讲解，随时随地收听
- **通勤伴侣** - 地铁、公交、排队，随时开始学习
- **深色模式** - 自动适应系统主题，保护眼睛

## 技术架构

```
输入层 → 理解层 → 处理层 → 输出层
  📸        🧠        ⚡        🎙️
OCR识别  多模态大模型  知识蒸馏  TTS语音
结构分析  意图识别     摘要生成  响应式UI
```

## 项目结构

```
zhiying/
├── assets/media/          # 静态资源（SVG图标等）
├── config/_default/       # Hugo配置
│   ├── hugo.yaml          # 主配置
│   ├── params.yaml        # 主题参数
│   └── menus.yaml         # 导航菜单
├── content/               # 页面内容
│   └── _index.md          # 首页（包含所有模块）
└── data/authors/          # 作者信息
```

## 快速开始

### 使用 HugoBlox CLI

```bash
# 安装 Hugo Extended (>= 0.110.0)
# 安装 Node.js

# 创建新站点
npx hugoblox create site zhiying

# 进入目录
cd zhiying

# 安装依赖
pnpm install

# 本地开发
pnpm run dev

# 构建生产版本
pnpm run build
```

### 使用 Dev Container

项目已配置好 VS Code Dev Container，打开项目后会自动安装所有依赖。

## 页面模块

| 模块 | 描述 |
|------|------|
| Hero | 首页主视觉，突出"看图说话"与通勤伴随核心卖点 |
| 功能演示 | 展示从知乎帖子到图文压缩、AI语音输出的完整流程 |
| 场景体验 | 模拟通勤环境下的交互界面，包含播放控件与精炼文本 |
| 技术架构 | 简述引擎处理逻辑，端到端智能内容处理流程 |
| 行动召唤 | CTA区域，引导用户开始体验 |

## 部署

本项目配置为部署到 GitHub Pages，支持以下平台：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

查看 [netlify.toml](netlify.toml) 了解部署配置。

## 自定义

### 修改主题配色

编辑 `config/_default/params.yaml` 中的主题配置：

```yaml
theme:
  mode: system          # light | dark | system
  colors:
    primary: indigo     # 主色调
    secondary: slate    # 辅助色
```

### 修改内容

编辑 `content/_index.md` 修改页面内容。

### 添加页面

在 `content/` 目录下创建新的 Markdown 文件即可。

## 技术栈

- **框架**: HugoBlox
- **构建工具**: Hugo Extended
- **包管理**: pnpm
- **前端**: Tailwind CSS

## 许可证

MIT License - 详见 [LICENSE.md](LICENSE.md)

---

**让每一分钟都有价值，让知识触手可及。**
