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
    <section>
      <h2 class="text-4xl font-medium mt-10 mb-6">Pokémon List</h2>
      <PokemonList />
    </section>
  </main>
</template>
