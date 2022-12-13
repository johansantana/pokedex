<script setup>
import { ref, watch } from 'vue'
import AppButton from './AppButton.vue'
import { useRouter, useRoute } from 'vue-router'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/20/solid'

const emits = defineEmits(['paginationClick'])
const router = useRouter()
const route = useRoute()

const currentPage = ref(route.query.page || 1)
watch(currentPage, () => {
  emits('paginationClick', currentPage.value)
  if (currentPage.value != 1) {
    router.push({ query: { page: currentPage.value } })
  } else {
    router.push('/')
  }
})
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <AppButton :disabled="currentPage < 2" @click="currentPage--">
      <ChevronLeftIcon class="w-5 h-5" />
    </AppButton>
    <span class="font-medium text-slate-400 text-lg">
      Page {{ currentPage }}
    </span>
    <AppButton @click="currentPage++">
      <ChevronRightIcon class="w-5 h-5" />
    </AppButton>
  </div>
</template>
