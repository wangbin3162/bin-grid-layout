<template>
  <div>
    {{ layout }}
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

<style scoped></style>
