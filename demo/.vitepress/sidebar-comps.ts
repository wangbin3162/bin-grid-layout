import { formatSidebar } from './utils/utils'

export default formatSidebar(
  [
    {
      text: '示例（Examples）',
      items: [
        { text: '01-基础(Basic)', link: '/components/01-basic' },
        { text: '02-事件(Event)', link: '/components/02-events' },
        { text: '03-多个栅格(Multiple Grids)', link: '/components/03-multiple-grids' },
        { text: '04-拖动允许/忽略(Allow Ignore)', link: '/components/04-allow-ignore' },
        { text: '05-镜像翻转(Mirrored)', link: '/components/05-mirrored' },
        { text: '06-防止碰撞(Prevent Collision)', link: '/components/06-prevent-collision' },
        { text: '07-响应式(Responsive)', link: '/components/07-responsive' },
        { text: '08-响应式预定义(Responsive)', link: '/components/08-responsive-pred' },
        { text: '09-动态添加/删除(Dynamic)', link: '/components/09-dynamic' },
        { text: '10-外部拖拽(Drag Outside)', link: '/components/10-drag-outside' },
        { text: '11-绑定容器(Bounded)', link: '/components/11-bounded' }
      ]
    }
  ],
  true
)
