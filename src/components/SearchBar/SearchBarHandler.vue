<script setup>
import { ref } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import SearchBar from './SearchBar.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

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
        class="border-[3px] border-base-100 text-slate-50 flex items-center gap-2 p-2 px-4 hover:bg-neutral/30 transition-colors"
        @click="isOpen = true"
      >
        <span class="">Press</span>
        <kbd class="kbd kbd-sm bg-primary p-1 px-2 text-yellow-600 font-medium"
          >Ctrl K</kbd
        >
        <span>to search</span>
        <MagnifyingGlassIcon class="w-5 h-5" />
      </button>
    </section>
  </div>
</template>
