/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  {
    text: '首页', link: '/', icon: 'material-symbols:home-outline'
  },
  { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
  { text: '笔记', link: '/notes/', icon: 'mdi:notebook-outline' },
  { text: '笨蛋食谱', link: '/笨蛋食谱/', icon: 'icon-park-outline:cook' },
  {
    text: '游戏攻略',
    icon: 'game-icons:gamepad',
    items: [
      {
        items: [
          {
            text: '空洞骑士系列',
            link: '/notes/games/hollow_knight/',
            icon: 'arcticons:hollow-knight',
          },
        ]
      }
    ]
  },
  {
    text: '知识积累',
    icon: 'solar:book-bold',
    items: [
      {
        text: '计算机',
        icon: 'gridicons:computer',
        items: [
          {
            text: '计算机网络',
            link: '/notes/computer/computer-network/',
            icon: 'mdi:paper-airplane',
            // badge: '徽章'
          },
          {
            text: '数据结构',
            link: '/notes/computer/data-structure/',
            icon: 'mdi:power-socket-us',
            // badge: '徽章'
          },
        ],
      },
      {
        text: '力扣',
        icon: 'mdi:numeric',
        items: [
          {
            text: '力扣专题',
            link: '/notes/practice/leetcode/',
            icon: 'material-symbols:stack',
          },
        ],
      },
    ]
  },
  {
    text: 'AI大模型',
    icon: 'mdi:idea',
    items: [
      {
        text: '模型部署',
        icon: 'vaadin:hammer',
        items: [
          {
            text: 'DeepSeek 本地部署',
            link: '/blog/deepseek/',
            icon: 'mdi:paper-airplane',
          },
          {
            text: 'AI平台整合',
            link: '/blog/aiplatform/',
            icon: 'mdi:cloud',
          },
        ],
      },
      {
        text: '微调训练',
        icon: 'material-symbols:exercise-sharp',
        badge: { text: '徽章', type: 'warning' },
        items: [
          {
            text: 'llama-factory',
            link: '/notes/aillm/fine-tuning/llama-factory/',
            icon: 'material-symbols-light:code-blocks-outline-rounded',
          },
        ]
      },
      {
        text: '模型应用',
        icon: 'mingcute:plugin-2-fill',
        badge: { text: '徽章', type: 'warning' },
        items: [
          {
            text: '浏览器自动搜索',
            link: '/blog/mcp-server/',
            icon: 'material-symbols-light:code-blocks-outline-rounded',
          },
        ]
      }
    ]
  },
])

