<script setup>
import SearchBarHandler from './components/SearchBar/SearchBarHandler.vue'
import PokemonList from './components/Pokemon/PokemonList.vue'
</script>

<template>
  <main class="min-h-screen max-w-[1200px] m-auto bg-white p-6 md:p-10 lg:p-14">
    <SearchBarHandler />
    <!-- Main content -->
    <section class="mb-5">
      <h2 class="text-2xl mt-10 mb-6">Pokémon List</h2>
      <PokemonList />
    </section>
  </main>
</template>
