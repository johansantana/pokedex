<script setup>
import { onBeforeMount } from 'vue'
import SearchBarHandler from './components/SearchBar/SearchBarHandler.vue'
import PokemonList from './components/Pokemon/PokemonList.vue'
import { initCachedData } from './utils/localStorage'

onBeforeMount(() => {
  initCachedData()
})
</script>

<template>
  <main class="min-h-screen max-w-[1200px] m-auto bg-white p-6 md:p-10 lg:p-14">
    <section class="h-[100px]">
      <div
        class="absolute w-full h-[180px] top-0 left-0 bg-gradient-to-r from-yellow-400 via-red-400 to-red-500"
      >
      </div>
      <SearchBarHandler />
    </section>
    <!-- Main content -->
    <section class="mb-5 mt-20">
      <div class="flex gap-10 items-center">
        <h1
          class="text-6xl md:text-7xl lg:text-8xl w-fit mt-10 mb-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-500 to-violet-300"
        >
          Pokemon List
        </h1>
        <img src="/pokeball.png" alt="pokeball image" class="max-h-[100px]" />
      </div>
    </section>
    <section>
      <PokemonList />
    </section>
  </main>
</template>
