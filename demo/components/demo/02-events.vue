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
      @layout-created="layoutCreatedEvent"
      @layout-before-mount="layoutBeforeMountEvent"
      @layout-mounted="layoutMountedEvent"
      @layout-ready="layoutReadyEvent"
      @layout-updated="layoutUpdatedEvent"
    >
      <b-grid-item
        v-for="item in state.layout"
        :key="item.i"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @resize="resizeEvent"
        @move="moveEvent"
        @resized="resizedEvent"
        @container-resized="containerResizedEvent"
        @moved="movedEvent"
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
    { x: 8, y: 4, w: 2, h: 4, i: '10', static: false },
    { x: 10, y: 4, w: 2, h: 4, i: '11', static: false },
    { x: 0, y: 10, w: 2, h: 5, i: '12', static: false },
    { x: 2, y: 10, w: 2, h: 5, i: '13', static: false },
    { x: 4, y: 8, w: 2, h: 4, i: '14', static: false },
    { x: 6, y: 8, w: 2, h: 4, i: '15', static: false },
    { x: 8, y: 10, w: 2, h: 5, i: '16', static: false },
    { x: 10, y: 4, w: 2, h: 2, i: '17', static: false },
    { x: 0, y: 9, w: 2, h: 3, i: '18', static: false },
    { x: 2, y: 6, w: 2, h: 2, i: '19', static: false }
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

function moveEvent(i, newX, newY) {
  const msg = `MOVE i=${i}, X=${newX}, Y=${newY}`
  console.info(msg)
}

function movedEvent(i, newX, newY) {
  const msg = `MOVED i=${i}, X=${newX}, Y=${newY}`
  console.info(msg)
}

function resizeEvent(i, newH, newW, newHPx, newWPx) {
  const msg = `RESIZE i=${i}, H=${newH}, W=${newW}, H(px)=${newHPx}, W(px)=${newWPx}`
  console.info(msg)
}

function resizedEvent(i, newX, newY, newHPx, newWPx) {
  const msg = `RESIZED i=${i}, X=${newX}, Y=${newY}, H(px)=${newHPx}, W(px)=${newWPx}`
  console.info(msg)
}

function containerResizedEvent(i, newH, newW, newHPx, newWPx) {
  const msg = `CONTAINER RESIZED i=${i}, H=${newH}, W=${newW}, H(px)=${newHPx}, W(px)=${newWPx}`
  console.info(msg)
}

function layoutCreatedEvent(newLayout) {
  console.info('Created layout: ', newLayout)
}

function layoutBeforeMountEvent(newLayout) {
  console.info('beforeMount layout: ', newLayout)
}

function layoutMountedEvent(newLayout) {
  console.info('Mounted layout: ', newLayout)
}

function layoutReadyEvent(newLayout) {
  console.info('Ready layout: ', newLayout)
}

function layoutUpdatedEvent(newLayout) {
  console.info('Updated layout: ', newLayout)
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
