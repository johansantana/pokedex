<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import Results from './Results.vue'

const isOpen = ref(false)
const searchInput = ref(null)
const hasResults = ref(true)
const search = ref(null)
watchEffect(() => {
  if (searchInput.value) searchInput.value.focus()
})

onMounted(() => {
  window.addEventListener('keydown', e => {
    if (e.code === 'KeyK' && e.ctrlKey) {
      e.preventDefault()
      isOpen.value = !isOpen.value
    }
    if (e.code === 'Escape' && isOpen.value) {
      isOpen.value = !isOpen.value
    }
  })
  window.addEventListener('click', e => {
    if (e.target === searchInput.value) return
    if (!isOpen.value) return
    isOpen.value = !isOpen.value
  })
})
</script>

<template>
  <Teleport to="#search">
    <div
      v-if="isOpen"
      class="min-h-screen min-w-full flex items-center justify-center absolute top-0 backdrop-blur-sm backdrop-brightness-95 p-4"
    >
      <div class="min-w-full flex items-center flex-col justify-center relative -translate-y-60">
        <input
          ref="searchInput"
          type="text"
          placeholder="Write some pokémon name..."
          v-model="search"
          class="input lg:min-w-[500px] border-b-none bg-white w-full max-w-md input-lg select-none focus:outline-none"
          :class="{ 'rounded-b-none': hasResults }"
        />
        <div class="min-w-[500px]">
          <!-- Results -->
          <Results :search="search" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
