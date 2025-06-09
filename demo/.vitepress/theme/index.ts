import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import BinUI from 'bin-ui-design'
import BinGridLayout from 'bin-grid-layout'
import DisplayLayout from '../src/DisplayLayout.vue'
import GridLayoutProps from '../src/GridLayoutProps.vue'
import GridItemProps from '../src/GridItemProps.vue'
import GridLayoutEvents from '../src/GridLayoutEvents.vue'
import GridItemEvents from '../src/GridItemEvents.vue'

import '@vitepress-demo-preview/component/dist/style.css'
import './index.css'
import 'bin-ui-design/dist/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BinUI, { disabledDoc: true })
    app.use(BinGridLayout)
    app.component(DisplayLayout.name, DisplayLayout)
    app.component(GridLayoutProps.name, GridLayoutProps)
    app.component(GridItemProps.name, GridItemProps)
    app.component(GridLayoutEvents.name, GridLayoutEvents)
    app.component(GridItemEvents.name, GridItemEvents)

    app.component('demo-preview', ElementPlusContainer)
  }
}
