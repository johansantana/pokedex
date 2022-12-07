<script setup>
import SearchBarHandler from './components/SearchBar/SearchBarHandler.vue'
</script>

<template>
  <main class="min-h-screen max-w-[1200px] m-auto bg-white p-6 md:p-10 lg:p-14">
    <SearchBarHandler />
    <div class="pt-10">
      <RouterView />
    </div>
  </main>
</template>
