<script setup>
import FilterListItem from './FilterListItem.vue'
import { typesColors } from '../../utils'
const types = Object.keys(typesColors)
</script>

<template>
  <div
    class="bg-base-100 border grid grid-cols-3 gap-x-6 gap-y-3 rounded-3xl z-30 p-4 text-gray-400"
  >
    <FilterListItem v-for="type in types" :key="type" :name="type" />
  </div>
</template>
