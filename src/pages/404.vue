<script setup>
import AppButton from '../components/AppButton.vue'
import { HomeIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div
    class="text-center flex flex-col items-center justify-center gap-5 h-[500px]"
  >
    <h1 class="text-5xl text-yellow-500 font-semibold">Not Found</h1>
    <p class="text-slate-500 text-lg">
      Oops!, looks like there is nothing to see here.
    </p>
    <img src="../assets/404.gif" alt="notfound" class="w-[250px] mb-4" />
    <AppButton @click="$router.push('/')">
      <span>Go Home</span>
      <HomeIcon class="h-4 w-4" />
    </AppButton>
  </div>
</template>
