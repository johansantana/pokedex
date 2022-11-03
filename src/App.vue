<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import SearchBar from './components/SearchBar/index.vue'
import PokemonList from './components/Pokemon/PokemonList.vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smallerOrEqual('sm')
</script>

<template>
  <main class="min-h-screen max-w-[1200px] m-auto bg-white p-6 md:p-10 lg:p-14">
    <SearchBar v-if="sm" />
    <div v-else>
      <Teleport to="#search">
        <SearchBar />
      </Teleport>
      <!-- Main content -->
      <section>
        <div class="w-fit mx-auto mb-10">
          <div class="mb-4 flex items-center text-xl font-light">
            <span class="mr-4">Press</span>
            <kbd class="kbd bg-transparent mr-4">Ctrl</kbd> +
            <kbd class="kbd mx-4 bg-transparent">K</kbd>
            <span>to make a search</span>
          </div>
        </div>
      </section>
    </div>
    <div>
      <section class="mb-5">
        <h2 class="text-2xl mt-10 mb-6">Pokémon List</h2>
        <PokemonList />
      </section>
    </div>
  </main>
</template>
