<script setup>
import { ref } from 'vue'
import AppButton from './AppButton.vue'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/20/solid'

const currentPage = ref(1)

const showNext = () => {
  currentPage.value++
}
const showPrevious = () => {
  currentPage.value--
}
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <AppButton :disabled="currentPage < 2" @click="showPrevious">
      <ChevronLeftIcon class="w-5 h-5" />
    </AppButton>
    <span class="font-medium text-slate-400 text-lg">
      Page {{ currentPage }}
    </span>
    <AppButton @click="showNext">
      <ChevronRightIcon class="w-5 h-5" />
    </AppButton>
  </div>
</template>
