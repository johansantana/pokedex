<script setup>
import { capitalize, computed, ref } from 'vue'
import FilterOptions from './FilterOptions.vue'
import AppButton from '../AppButton.vue'
import { ChevronDownIcon, XCircleIcon } from '@heroicons/vue/20/solid'
import { onClickOutside } from '@vueuse/core'
import { useRoute } from 'vue-router'

const isShowingOptions = ref(false)
const route = useRoute()

const toggleShow = () => {
  isShowingOptions.value = !isShowingOptions.value
}

const filterReference = ref(null)

const typeFiltered = computed(() => {
  return route.query?.type || ''
})

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
      <div class="flex justify-between">
        <div class="flex items-center gap-4">
          <AppButton id="filter-btn" @click="toggleShow">
            <span>Type</span>
            <ChevronDownIcon
              class="w-5 h-5 transition-transform"
              :class="{ 'rotate-180': isShowingOptions }"
            />
          </AppButton>
          <span class="text-lg text-gray-400 italic font-medium">{{
            capitalize(typeFiltered)
          }}</span>
        </div>

        <AppButton
          v-if="$route.query.type"
          class="bg-red-200 text-red-500 border-none hover:bg-red-300"
          @click="$router.push('/')"
        >
          <span>Clear filter</span>
          <XCircleIcon class="w-5 h-5" />
        </AppButton>
      </div>
      <FilterOptions
        class="absolute mt-1"
        v-if="isShowingOptions"
        ref="filterReference"
      />
    </div>
  </div>
</template>
