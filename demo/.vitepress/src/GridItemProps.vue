<template>
  <div>
    <b-table :columns="columns" :data="data" size="small"></b-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'GridItemProps' })

const columns = [
  { key: 'prop', title: '属性', width: 150 },
  { key: 'type', title: '类型', width: 90 },
  { key: 'required', title: '是否必填', width: 90 },
  { key: 'default', title: '默认值', width: 90 },
  { key: 'desc', title: '说明' }
]

const data = [
  {
    prop: 'i',
    type: 'String',
    required: 'true',
    default: '',
    desc: '栅格中元素的ID'
  },
  {
    prop: 'x',
    type: 'Number',
    required: 'true',
    default: '',
    desc: '标识栅格元素位于第几列，需为自然数'
  },
  {
    prop: 'y',
    type: 'Number',
    required: 'true',
    default: '',
    desc: '标识栅格元素位于第几行，需为自然数'
  },
  {
    prop: 'w',
    type: 'Number',
    required: 'true',
    default: '',
    desc: '标识栅格元素的初始宽度，值为colWidth的倍数'
  },
  {
    prop: 'h',
    type: 'Number',
    required: 'true',
    default: '',
    desc: '标识栅格元素的初始高度，值为rowHeight的倍数'
  },
  {
    prop: 'minW',
    type: 'Number',
    required: 'false',
    default: '1',
    desc: '栅格元素的最小宽度，值为colWidth的倍数。如果w小于minW，则minW的值会被w覆盖'
  },
  {
    prop: 'minH',
    type: 'Number',
    required: 'false',
    default: '1',
    desc: '栅格元素的最小高度，值为rowHeight的倍数。如果h小于minH，则minH的值会被h覆盖'
  },
  {
    prop: 'maxW',
    type: 'Number',
    required: 'false',
    default: 'Infinity',
    desc: '栅格元素的最大宽度，值为colWidth的倍数。如果w大于maxW，则maxW的值会被w覆盖'
  },
  {
    prop: 'maxH',
    type: 'Number',
    required: 'false',
    default: 'Infinity',
    desc: '栅格元素的最大高度，值为rowHeight的倍数。如果h大于maxH，则maxH的值会被h覆盖'
  },
  {
    prop: 'isDraggable',
    type: 'Boolean',
    required: 'false',
    default: 'null',
    desc: '标识栅格元素是否可拖拽。如果值为null则取决于父容器'
  },
  {
    prop: 'isResizable',
    type: 'Boolean',
    required: 'false',
    default: 'null',
    desc: '标识栅格元素是否可调整大小。如果值为null则取决于父容器'
  },
  {
    prop: 'static',
    type: 'Boolean',
    required: 'false',
    default: 'false',
    desc: '标识栅格元素是否为静态的（无法拖拽、调整大小或被其他元素移动）'
  },
  {
    prop: 'dragIgnoreFrom',
    type: 'String',
    required: 'false',
    default: 'a, button',
    desc: '标识栅格元素中哪些子元素无法触发拖拽事件，值为css-like选择器'
  },
  {
    prop: 'dragAllowFrom',
    type: 'String',
    required: 'false',
    default: 'null',
    desc: '标识栅格元素中哪些子元素可以触发拖拽事件，值为css-like选择器。如果值为null则表示所有子元素（dragIgnoreFrom的除外）'
  },
  {
    prop: 'resizeIgnoreFrom',
    type: 'String',
    required: 'false',
    default: 'a, button',
    desc: '标识栅格元素中哪些子元素无法触发调整大小的事件，值为css-like选择器'
  },
  {
    prop: 'dragOption',
    type: 'Object',
    required: 'false',
    default: '{}',
    desc: '拖拽附加参数'
  },
  {
    prop: 'resizeOption',
    type: 'Object',
    required: 'false',
    default: '{}',
    desc: '缩放大小附加参数'
  }
]
</script>

<style scoped></style>
