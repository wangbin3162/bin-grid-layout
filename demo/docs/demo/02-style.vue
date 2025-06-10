<template>
  <div class="container">
    <b-grid-layout
      v-model:layout="state.layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="state.draggable"
      :is-resizable="state.resizable"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <b-grid-item
        v-for="(item, index) in state.layout"
        :key="index"
        :static="item.static"
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
    { x: 0, y: 0, w: 2, h: 2, i: '0', static: false },
    { x: 2, y: 0, w: 2, h: 4, i: '1', static: true },
    { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
    { x: 6, y: 0, w: 2, h: 3, i: '3', static: false },
    { x: 8, y: 0, w: 2, h: 3, i: '4', static: false },
    { x: 10, y: 0, w: 2, h: 3, i: '5', static: false },
    { x: 0, y: 5, w: 2, h: 5, i: '6', static: false },
    { x: 2, y: 5, w: 2, h: 5, i: '7', static: false },
    { x: 4, y: 5, w: 2, h: 5, i: '8', static: false },
    { x: 6, y: 3, w: 2, h: 4, i: '9', static: true },
    { x: 8, y: 4, w: 2, h: 4, i: '10', static: false }
  ],
  draggable: true,
  resizable: true,
  index: 0
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
  :deep(.bin-grid-layout) {
    --item-radius: 8px;
    background-color: #fafafa;
  }
  :deep(.bin-grid-item) {
    &.vue-grid-placeholder {
      background: #1677ff;
      opacity: 0.2;
      transition-duration: 200ms;
      z-index: 2;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
    &:not(.vue-grid-placeholder) {
      box-shadow:
        1em 1em 1em #d8dae0b1,
        -0.35em -0.35em 1em #ffffff;
      border: 1.5px solid #f2f3f7;
      &:hover {
        background-color: #d3ddf1;
        border: 1.5px solid #1677ff;
      }
    }
    &.static {
      background: #cce;
    }
  }
  .item-box {
    padding: 8px;
    .text {
      font-size: 24px;
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
