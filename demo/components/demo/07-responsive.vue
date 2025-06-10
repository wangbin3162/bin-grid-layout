<template>
  <div class="container">
    <DisplayLayout :layout="state.layout" />
    <b-checkbox v-model="state.draggable">Draggable</b-checkbox>
    <b-checkbox v-model="state.resizable">Resizable</b-checkbox>
    <b-checkbox v-model="state.responsive">Responsive</b-checkbox>
    <b-divider />
    <b-grid-layout
      v-model:layout="state.layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="state.draggable"
      :is-resizable="state.resizable"
      :responsive="state.responsive"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <b-grid-item
        v-for="item in state.layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <div class="item-box">
          <span class="text">{{ itemTitle(item) }}</span>
        </div>
      </b-grid-item>
    </b-grid-layout>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  layout: [
    { x: 0, y: 0, w: 2, h: 2, i: '00' },
    { x: 2, y: 0, w: 2, h: 4, i: '01' },
    { x: 4, y: 0, w: 2, h: 5, i: '02' },
    { x: 6, y: 0, w: 2, h: 3, i: '03' },
    { x: 8, y: 0, w: 2, h: 3, i: '04' },
    { x: 10, y: 0, w: 2, h: 3, i: '05' },
    { x: 0, y: 5, w: 2, h: 5, i: '06' },
    { x: 2, y: 5, w: 2, h: 5, i: '07' },
    { x: 4, y: 5, w: 2, h: 5, i: '08' },
    { x: 6, y: 4, w: 2, h: 4, i: '09' },
    { x: 8, y: 4, w: 2, h: 4, i: '10' },
    { x: 10, y: 4, w: 2, h: 4, i: '11' },
    { x: 0, y: 10, w: 2, h: 5, i: '12' },
    { x: 2, y: 10, w: 2, h: 5, i: '13' },
    { x: 4, y: 8, w: 2, h: 4, i: '14' },
    { x: 6, y: 8, w: 2, h: 4, i: '15' },
    { x: 8, y: 10, w: 2, h: 5, i: '16' },
    { x: 10, y: 4, w: 2, h: 2, i: '17' },
    { x: 0, y: 9, w: 2, h: 3, i: '18' },
    { x: 2, y: 6, w: 2, h: 2, i: '19' }
  ],
  draggable: true,
  resizable: true,
  responsive: true
})

function itemTitle(item) {
  let result = item.i
  if (item.static) {
    result += ' - Static'
  }
  return result
}
</script>

<style scoped>
.container {
  .item-box {
    padding: 8px;
    .text {
      font-size: 18px;
      text-align: center;
      margin: auto;
      height: 100%;
      width: 100%;
    }
    .remove {
      position: absolute;
      right: 2px;
      top: 0;
      cursor: pointer;
    }
  }
}
</style>
