<script setup>
import SearchBar from './components/SearchBar/index.vue'

const IMAGE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png'
</script>

<template>
  <div class="min-h-screen bg-white p-14">
    <div class="z-10">
      <h1 class="mx-auto w-fit text-4xl font-medium mb-10">Pokemon Search</h1>
      <div class="w-fit mx-auto select-none">
        <div class="mb-4">
          <span class="text-2xl font-light mr-4">Press</span>
          <kbd class="kbd bg-transparent mr-4">Ctrl</kbd> +
          <kbd class="kbd ml-4 bg-transparent">K</kbd>
        </div>
        <span class="w-fit text-xl font-light block mx-auto">to make a search</span>
      </div>
      <SearchBar />
    </div>
  </div>
</template>
