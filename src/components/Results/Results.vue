<script setup>
import { ref } from 'vue'

const props = defineProps({
  search: {
    type: String
  }
})
</script>

<template>
  <div class="min-w-[500px] p-5 border-t-2 font-light border-gray-100">
    <p>{{ search }}</p>
  </div>
</template>
