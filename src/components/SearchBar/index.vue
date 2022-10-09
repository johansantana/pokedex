<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { useMagicKeys, onClickOutside, whenever } from '@vueuse/core'
import Results from './Results.vue'

const isOpen = ref(false)
const inputRef = ref(null)
const hasResults = ref(true)
const search = ref(null)

const { ctrl_k, escape } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 'k' && e.type === 'keydown') e.preventDefault()
    if (e.Escape && e.type === 'keydown') e.preventDefault()
  }
})

whenever(ctrl_k, () => {
  isOpen.value = !isOpen.value
})
whenever(escape, () => (isOpen.value = !isOpen.value))
watchEffect(() => {
  if (inputRef.value) {
    search.value = null
    inputRef.value.focus()
  }
})

onClickOutside(inputRef, e => {
  isOpen.value = !isOpen.value
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
          ref="inputRef"
          type="text"
          placeholder="Write some pokémon name..."
          v-model="search"
          class="input lg:min-w-[500px] border-b-none bg-white w-full max-w-md input-lg select-none focus:outline-none"
          :class="{ 'rounded-b-none': hasResults }"
        />
        <div class="lg:min-w-[500px]">
          <!-- Results -->
          <Results :search="search" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
