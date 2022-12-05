<script setup>
import { ref } from 'vue'
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
    <button
      class="btn border-slate-300"
      v-if="currentPage > 1"
      @click="showPrevious"
    >
      <ChevronLeftIcon class="w-5 h-5" />
    </button>
    <span class="font-medium text-slate-400 text-lg">
      Page {{ currentPage }}
    </span>
    <button class="btn border-slate-300" @click="showNext">
      <ChevronRightIcon class="w-5 h-5" />
    </button>
  </div>
</template>
