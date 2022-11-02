<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import SearchBar from './components/SearchBar/index.vue'
import PokemonList from './components/Pokemon/PokemonList.vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smallerOrEqual('sm')

const IMAGE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png'
</script>

<template>
  <main class="min-h-screen bg-white p-6 md:p-10 lg:p-14">
    <SearchBar v-if="sm" />
    <div v-else>
      <Teleport to="#search">
        <SearchBar />
      </Teleport>
      <!-- Main content -->
      <section>
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
      </section>
    </div>
    <div class="max-w-[1200px] m-auto">
      <section
        class="bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png')] bg-no-repeat pb-40"
      >
        <h2 class="text-4xl font-medium">POTD</h2>
        <p class="text-2xl italic">(Pokemon of the day)</p>
        <p class="text-7xl font-semibold mt-6">Calirex</p>
      </section>
      <section class="mb-5">
        <h2 class="text-2xl mt-10 mb-6">Pokémon List</h2>
        <PokemonList />
        <p class="max-w-[80%] m-auto w-fit cursor-pointer mt-20 hover:scale-105 transition-transform">
          More Pokemons ->
        </p>
      </section>
    </div>
  </main>
</template>
