<script setup>
import { onBeforeMount, ref } from 'vue'

const pokemonsList = ref([])

onBeforeMount(() => {
  fetch('./pokemons.json')
    .then(res => res.json())
    .then(res => (pokemonsList.value = res))
})

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <div
    class="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-3 bg-slate-100 rounded-xl border"
  >
    <div
      v-for="pokemon in pokemonsList"
      :key="pokemon.id"
      class="flex flex-col bg-white items-center border rounded-lg p-4 hover:scale-110 transition-transform cursor-pointer min-w-[100px]"
    >
      <img :src="pokemon.img" class="w-72 md:w-40" :alt="pokemon.name + 'img'" />
      <p class="text-lg mx-2">{{ capitalize(pokemon.name) }}</p>
    </div>
  </div>
</template>
