<script setup>
const props = defineProps({
  search: {
    type: String
  }
})
</script>

<template>
  <div class="bg-white p-5 rounded-b-lg min-w-full border-t-2 font-light border-gray-100">
    <p>This is the result component</p>
    <p>Here will appear Pokémons based on your input search</p>
    <p class="mt-4" v-if="search">{{ search }}</p>
  </div>
</template>
