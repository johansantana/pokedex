<script setup>
import { capitalize } from 'vue'
import AppBadge from '../AppBadge.vue'

const props = defineProps({
  name: String
})
</script>

<template>
  <AppBadge
    class="cursor-pointer flex items-center justify-between gap-1 hover:scale-105 transition-transform"
    @click="$router.push({ query: { type: props.name } })"
  >
    <span>
      {{ capitalize(props.name) }}
    </span>
  </AppBadge>
</template>
