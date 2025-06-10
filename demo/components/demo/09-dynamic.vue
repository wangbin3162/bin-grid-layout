<template>
  <div class="container">
    <DisplayLayout :layout="state.layout" />
    <b-space>
      <b-checkbox v-model="state.draggable">Draggable</b-checkbox>
      <b-checkbox v-model="state.resizable">Resizable</b-checkbox>
      <b-button type="primary" size="small" icon="plus" @click="addItem">Add New Item</b-button>
    </b-space>
    <b-divider />
    <b-grid-layout
      v-model:layout="state.layout"
      :col-num="state.colNum"
      :row-height="30"
      :is-draggable="state.draggable"
      :is-resizable="state.resizable"
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

          <span class="remove" @click="removeItem(item.i)">
            <b-icon name="close"></b-icon>
          </span>
        </div>
      </b-grid-item>
    </b-grid-layout>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  layout: [
    { x: 0, y: 0, w: 2, h: 2, i: '0' },
    { x: 2, y: 0, w: 2, h: 2, i: '1' },
    { x: 4, y: 0, w: 2, h: 2, i: '2' },
    { x: 6, y: 0, w: 2, h: 2, i: '3' },
    { x: 8, y: 0, w: 2, h: 2, i: '4' }
  ],
  draggable: true,
  resizable: true,
  colNum: 12,
  index: 0
})
state.index = state.layout.length

function addItem() {
  // Add a new item. It must have a unique key!
  state.layout.push({
    x: (state.layout.length * 2) % (state.colNum || 12),
    y: state.layout.length + (state.colNum || 12), // puts it at the bottom
    w: 2,
    h: 2,
    i: state.index.toString()
  })
  // Increment the counter to ensure key is always unique.
  state.index++
}

function removeItem(val) {
  const index = state.layout.map(item => item.i).indexOf(val)
  state.layout.splice(index, 1)
}

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
