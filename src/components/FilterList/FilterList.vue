<script setup>
import { ref } from 'vue'
import FilterOptions from './FilterOptions.vue'
import AppButton from '../AppButton.vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { onClickOutside } from '@vueuse/core'

const isShowingOptions = ref(false)

const toggleShow = () => {
  isShowingOptions.value = !isShowingOptions.value
}

const filterReference = ref(null)

onClickOutside(filterReference, e => {
  if (e.target.matches('#filter-btn') || e.target.matches('#filter-btn *'))
    return
  if (isShowingOptions.value) {
    isShowingOptions.value = false
  }
})
</script>

<template>
  <div>
    <p class="mb-3 text-lg text-slate-500 italic">Filter by:</p>
    <div class="border-2 p-2 rounded-full relative">
      <AppButton id="filter-btn" @click="toggleShow">
        <span>Type</span>
        <ChevronDownIcon
          class="w-5 h-5 transition-transform"
          :class="{ 'rotate-180': isShowingOptions }"
        />
      </AppButton>

      <FilterOptions
        class="absolute mt-1"
        v-if="isShowingOptions"
        ref="filterReference"
      />
    </div>
  </div>
</template>
