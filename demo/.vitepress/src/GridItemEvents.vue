<template>
  <div>
    <b-table :columns="columns" :data="data" size="small"></b-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'GridItemEvents' })

const columns = [
  { key: 'eventName', title: '事件名', width: 220 },
  { key: 'params', title: '参数' },
  { key: 'desc', title: '说明' }
]

const data = [
  { eventName: 'move', params: '(i, newX, newY)=>{}', desc: '移动时的事件' },
  { eventName: 'resize', params: '(i, newH, newW, newHPx, newWPx)=>{}', desc: '调整大小时的事件' },
  { eventName: 'moved', params: '(i, newX, newY)=>{}', desc: '移动后的事件' },
  { eventName: 'resized', params: '(i, newH, newW, newHPx, newWPx)=>{}', desc: '调整大小后的事件' },
  {
    eventName: 'containerResized',
    params: '(i, newH, newW, newHPx, newWPx)=>{}',
    desc: '栅格元素/栅格容器更改大小的事件（浏览器窗口或其他）'
  }
]
</script>

<style scoped></style>
