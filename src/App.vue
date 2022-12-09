<script setup>
import SearchbarHandler from './components/Searchbar/SearchbarHandler.vue'
</script>

<template>
  <div class="min-h-screen max-w-[1200px] m-auto bg-white p-6 md:p-10 lg:p-14">
    <SearchbarHandler />
    <main class="pt-5 md:pt-10">
      <RouterView />
    </main>
  </div>
</template>
