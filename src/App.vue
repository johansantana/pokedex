<script setup>
import SearchBarHandler from './components/SearchBar/SearchBarHandler.vue'
import PokemonList from './components/Pokemon/PokemonList.vue'
</script>

<template>
  <main class="min-h-screen max-w-[1200px] m-auto bg-white p-6 md:p-10 lg:p-14">
    <SearchBarHandler />
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
    <section class="mb-5">
      <h2 class="text-2xl mt-10 mb-6">Pokémon List</h2>
      <PokemonList />
    </section>
  </main>
</template>
