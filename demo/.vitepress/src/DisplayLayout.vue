<template>
  <div class="layoutJSON">
    Displayed as
    <code>[x, y, w, h] (第几列,第几行,宽度,高度)</code>
    :
    <div class="columns">
      <div v-for="item in layout" :key="item.i">
        <b>{{ item.i }}</b>
        : [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'DisplayLayout'
})

const props = defineProps({
  layout: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.layoutJSON {
  background: #f3f3f3;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 20px;
  .columns {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 120px;
      margin-bottom: 5px;
    }
  }
}
</style>
