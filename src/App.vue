<script setup>
import SearchBar from './components/SearchBar/index.vue'
import PokemonList from './components/Pokemon/PokemonList.vue'

const IMAGE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png'
</script>

<template>
  <SearchBar />
  <div class="min-h-screen bg-white p-14">
    <h1 class="mx-auto w-fit text-4xl font-medium mb-10">Pokémon Search</h1>
    <div class="w-fit mx-auto mb-20">
      <div class="mb-4 flex items-center text-xl font-light">
        <span class="mr-4">Press</span>
        <kbd class="kbd bg-transparent mr-4">Ctrl</kbd> +
        <kbd class="kbd mx-4 bg-transparent">K</kbd>
        <span>to make a search</span>
      </div>
      <div class="flex justify-center font-light text-lg">
        <p>Or browse the list</p>
      </div>
    </div>
    <h2 class="text-4xl font-medium">Pokémon List</h2>
    <div>
      <PokemonList />
    </div>
  </div>
</template>
