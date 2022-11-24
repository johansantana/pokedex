<script setup>
import { ref } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import SearchBar from './SearchBar.vue'

const isOpen = ref(false)

const setOpen = val => {
  isOpen.value = val
}

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
whenever(escape, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="relative">
    <Teleport to="#search">
      <SearchBar
        @setOpen="setOpen"
        :isOpen="isOpen"
        class="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      />
    </Teleport>
    <section>
      <button
        class="border p-2 px-3 rounded-xl hover:bg-gray-50"
        @click="isOpen = true"
      >
        <div class="flex items-center gap-2">
          <span class="">Press</span>
          <kbd class="kbd kbd-sm p-1 px-2">Ctrl K</kbd>
          <span>to search</span>
        </div>
      </button>
    </section>
  </div>
</template>
