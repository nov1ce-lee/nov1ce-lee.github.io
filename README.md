# novice.log

[![Deploy Blog to GitHub Pages](https://github.com/nov1ce-lee/nov1ce-lee.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/nov1ce-lee/nov1ce-lee.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A personal blog site sharing notes on AI, Computer Science, Games, and more.
> Built with [VuePress 2](https://v2.vuepress.vuejs.org/) and [vuepress-theme-plume](https://theme-plume.vuejs.press/).

## ✨ Features

- **Rich Content Support**: Supports Markdown, diagrams (Mermaid, Chart.js, Echarts), and interactive elements (Artplayer, Pyodide).
- **Structured Notes**: Organized documentation for specific topics like AI Fine-tuning, Data Structures, and Game Modding.
- **Modern UI**: Clean and responsive design with dark mode support.
- **Search**: Built-in local search for quick access to content.
- **Auto-Frontmatter**: Automatically generates permalinks, titles, and creation times.
- **CI/CD**: Automated deployment to GitHub Pages via GitHub Actions.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.6.0
- npm / pnpm / yarn

### Installation

```bash
npm install
```

### Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Update VuePress and theme
npm run vp-update
```

## 📂 Project Structure

- `docs/`: The main directory for content.
  - `.vuepress/`: VuePress configuration and theme customization.
  - `notes/`: Structured notes and documentation.
  - `人工智能/`, `工具介绍/`, etc.: Blog posts categorized by topics.
- `.github/workflows/`: CI/CD configuration for automated deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Site](https://nov1ce-lee.github.io/)
- [VuePress Documentation](https://v2.vuepress.vuejs.org/)
- [vuepress-theme-plume Documentation](https://theme-plume.vuejs.press/)
