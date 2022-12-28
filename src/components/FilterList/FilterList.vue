<script setup>
import { capitalize, computed, ref } from 'vue'
import FilterOptions from './FilterOptions.vue'
import AppButton from '../AppButton.vue'
import AppBadge from '../AppBadge.vue'
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
    <div class="mb-3 flex gap-3 items-center">
      <span class="text-lg text-slate-500 italic">Filter by:</span>
      <AppBadge
        v-if="$route.query.type"
        class="border-red-500 border-2 p-2 text-red-500 hover:scale-105 hover:text-white hover:bg-red-500/80 hover:border-transparent transition flex cursor-pointer justify-between gap-3"
        @click="$router.push('/')"
      >
        <span>{{ capitalize(typeFiltered) }}</span>
        <XCircleIcon class="w-5 h-5" />
      </AppBadge>
    </div>
    <div class="border-2 p-2 rounded-full relative">
      <div class="flex justify-between">
        <AppButton id="filter-btn" @click="toggleShow">
          <span>Type</span>
          <ChevronDownIcon
            class="w-5 h-5 transition-transform"
            :class="{ 'rotate-180': isShowingOptions }"
          />
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
