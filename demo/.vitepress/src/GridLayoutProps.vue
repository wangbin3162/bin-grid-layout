<template>
  <div>
    <b-table :columns="columns" :data="data" size="small"></b-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'GridLayoutProps' })

const columns = [
  { key: 'prop', title: '属性', width: 150 },
  { key: 'type', title: '类型', width: 90 },
  { key: 'required', title: '是否必填', width: 90 },
  { key: 'default', title: '默认值', width: 90 },
  { key: 'desc', title: '说明' }
]

const data = [
  {
    prop: 'layout',
    type: 'Array',
    required: 'true',
    default: '',
    desc: '数据源。值必须为 Array，其数据项为 Object。 每条数据项必须有 i, x, y, w 和 h 属性。 请参考下面的 GridItem'
  },
  {
    prop: 'responsiveLayouts',
    type: 'Object',
    required: 'false',
    default: '{}',
    desc: '如果 responsive 设置为 true，该配置将作为栅格中每个断点的初始布局。键值是断点名称，每项的值都是类似 layout 属性定义的数据结构，值必须为 Array，其数据项为 Object。例如： {lg: [layout items], md: [layout items]}。需要注意的是，在创建栅格布局后设置该属性无效。 在创建GridLayout之后设置prop无效。'
  },
  {
    prop: 'colNum',
    type: 'Number',
    required: 'false',
    default: '12',
    desc: '定义栅格系统的列数，其值需为自然数。'
  },
  {
    prop: 'rowHeight',
    type: 'Number',
    required: 'false',
    default: '150',
    desc: '每行的高度，单位像素。'
  },
  {
    prop: 'maxRows',
    type: 'Number',
    required: 'false',
    default: 'Infinity',
    desc: '定义最大行数'
  },
  {
    prop: 'margin',
    type: 'Array',
    required: 'false',
    default: '[10, 10]',
    desc: '定义栅格中的元素边距。值必须是包含两个 Number的数组，数组中第一个元素表示水平边距，第二个表示垂直边距，单位为像素'
  },
  {
    prop: 'isDraggable',
    type: 'Boolean',
    required: 'false',
    default: 'true',
    desc: '标识栅格中的元素是否可拖拽。'
  },
  {
    prop: 'isResizable',
    type: 'Boolean',
    required: 'false',
    default: 'true',
    desc: '标识栅格中的元素是否可调整大小。'
  },
  {
    prop: 'isBounded',
    type: 'Boolean',
    required: 'false',
    default: 'false',
    desc: '标识拖动只能限制在容器内。'
  },
  {
    prop: 'isMirrored',
    type: 'Boolean',
    required: 'false',
    default: 'false',
    desc: '标识栅格中的元素是否可镜像反转。'
  },
  {
    prop: 'autoSize',
    type: 'Boolean',
    required: 'false',
    default: 'true',
    desc: '标识容器是否自动调整大小。'
  },
  {
    prop: 'verticalCompact',
    type: 'Boolean',
    required: 'false',
    default: 'true',
    desc: '标识布局是否垂直压缩。'
  },
  {
    prop: 'preventCollision',
    type: 'Boolean',
    required: 'false',
    default: 'false',
    desc: '防止碰撞属性，值设置为ture时，栅格只能拖动至空白处'
  },
  {
    prop: 'useCssTransforms',
    type: 'Boolean',
    required: 'false',
    default: 'true',
    desc: '标识是否使用CSS属性 transition-property: transform;使用CSS3 translate代替position top/left。性能提高了约6倍'
  },
  {
    prop: 'transformScale',
    type: 'Number',
    required: 'false',
    default: '1',
    desc: '如果ResponsiveReactGridLayout或ReactGridLayout的父DOM节点有“transform: scale(n)” css属性,我们应该设置比例系数，以避免在拖动时渲染伪影。'
  },
  {
    prop: 'responsive',
    type: 'Boolean',
    required: 'false',
    default: 'false',
    desc: '标识布局是否为响应式'
  },
  {
    prop: 'breakpoints',
    type: 'Object',
    required: 'false',
    default: '默认',
    desc: '为响应式布局设置断点。{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }'
  },
  {
    prop: 'cols',
    type: 'Object',
    required: 'false',
    default: '默认',
    desc: '设置每个断点对应的列数{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }'
  },
  {
    prop: 'useStyleCursor',
    type: 'Boolean',
    required: 'false',
    default: 'true',
    desc: '标识是否使用动态鼠标指针样式。当拖动出现卡顿时，将此值设为 false也许可以缓解布局问题'
  },
  {
    prop: 'restoreOnDrag',
    type: 'Boolean',
    required: 'false',
    default: 'false',
    desc: '设置为true时，再拖拽前设置项目为静态，避免压缩'
  }
]
</script>

<style scoped></style>
