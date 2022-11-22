<script setup>
import SearchBar from './SearchBar.vue'
</script>

<template>
  <div class="relative">
    <Teleport to="#search">
      <SearchBar
        class="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      />
    </Teleport>
  </div>
</template>
