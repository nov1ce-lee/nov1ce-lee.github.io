# novice.log

[![Deploy Blog to GitHub Pages](https://github.com/nov1ce-lee/nov1ce-lee.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/nov1ce-lee/nov1ce-lee.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 这是一个个人博客站点，分享关于人工智能、计算机科学、游戏开发及更多的技术笔记。
> 基于 [VuePress 2](https://v2.vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://theme-plume.vuejs.press/) 构建。

## ✨ 特性

- **丰富的内容支持**: 支持 Markdown、图表（Mermaid, Chart.js, Echarts）以及交互式元素（Artplayer, Pyodide）。
- **结构化笔记**: 为 AI 微调、数据结构、游戏模组制作等特定主题提供有序的文档结构。
- **现代 UI**: 简洁、响应式设计，并支持深色模式。
- **搜索**: 内置本地搜索，方便快速访问内容。
- **自动 Frontmatter**: 自动生成永久链接、标题和创建时间。
- **CI/CD**: 通过 GitHub Actions 自动化部署到 GitHub Pages。

## 🚀 快速开始

### 前提条件

- Node.js >= 20.6.0
- npm / pnpm / yarn

### 安装

```bash
npm install
```

### 使用

```bash
# 启动开发服务器
npm run dev

# 构建生产环境包
npm run build

# 本地预览生产构建
npm run preview

# 更新 VuePress 和主题
npm run vp-update
```

## 📂 项目结构

- `docs/`: 主要内容目录。
  - `.vuepress/`: VuePress 配置和主题自定义。
  - `notes/`: 结构化笔记和文档。
  - `人工智能/`, `工具介绍/`, etc.: 按主题分类的博客文章。
- `.github/workflows/`: 用于自动化部署的 CI/CD 配置。

## 📄 开源协议

本项目采用 MIT 协议开源 - 详情请查看 [LICENSE](LICENSE) 文件。

## 🔗 相关链接

- [在线站点](https://nov1ce-lee.github.io/)
- [VuePress 官方文档](https://v2.vuepress.vuejs.org/)
- [vuepress-theme-plume 官方文档](https://theme-plume.vuejs.press/)
