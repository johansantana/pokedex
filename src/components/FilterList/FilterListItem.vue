<script setup>
import { capitalize } from 'vue'

const props = defineProps({
  name: String
})
</script>

<template>
  <span
    class="cursor-pointer hover:text-gray-700 hover:underline hover:decoration-wavy text-lg"
    @click="$router.push({ query: { type: props.name } })"
  >
    {{ capitalize(props.name) }}
  </span>
</template>
