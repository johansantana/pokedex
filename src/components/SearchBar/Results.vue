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
    <p>Here will appear pokemons based on your input search</p>
    <br />
    <p
      >Your actual <span class="underline decoration-2 decoration-emerald-700/30">search</span> is: <br />{{
        search
      }}</p
    >
  </div>
</template>
