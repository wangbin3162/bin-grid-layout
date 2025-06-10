import { formatSidebar } from './utils/utils'

export default formatSidebar([
  {
    text: '开始',
    items: [
      { text: '安装', link: '/docs/installation' },
      { text: '用法', link: '/docs/useage' },
      { text: '属性', link: '/docs/props' },
      { text: '事件', link: '/docs/events' },
      { text: '样式', link: '/docs/styles' },
      { text: '变更日志', link: '/docs/changelog' }
    ]
  }
])
