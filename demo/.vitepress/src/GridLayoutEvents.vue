<template>
  <div>
    <b-table :columns="columns" :data="data" size="small"></b-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'GridLayoutEvents' })

const columns = [
  { key: 'eventName', title: '事件名', width: 220 },
  { key: 'params', title: '参数' },
  { key: 'desc', title: '说明' }
]

const data = [
  { eventName: 'layoutCreated', params: '(newLayout)=>{}', desc: '对应Vue生命周期的created' },
  {
    eventName: 'layoutBeforeMount',
    params: '(newLayout)=>{}',
    desc: '对应Vue生命周期的beforeMount'
  },
  { eventName: 'layoutMounted', params: '(newLayout)=>{}', desc: '对应Vue生命周期的mounted' },
  {
    eventName: 'layoutReady',
    params: '(newLayout)=>{}',
    desc: '当完成mount中的所有操作时生成的事件'
  },
  {
    eventName: 'layoutUpdated',
    params: '(newLayout)=>{}',
    desc: '布局updated事件，更新事件（布局更新或栅格元素的位置重新计算）'
  },
  {
    eventName: 'breakpointChanged',
    params: '(newBreakpoint, newLayout)=>{}',
    desc: '断点更改事件，每次断点值由于窗口调整大小而改变'
  }
]
</script>

<style scoped></style>
