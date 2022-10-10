<script setup>
import { ref, watchEffect } from 'vue'
import { useMagicKeys, onClickOutside, whenever, useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import Results from './Results.vue'

const props = defineProps({
  isOpen: {
    type: Boolean
  }
})

const isOpen = ref(false)
const inputRef = ref(null)
const hasResults = ref(false)
const search = ref(null)

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smallerOrEqual('sm')

watchEffect(() => {
  if (sm.value) isOpen.value = true
  else isOpen.value = false
})

watchEffect(() => {
  if (search.value) hasResults.value = true
})

if (!sm.value) {
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
}
onClickOutside(inputRef, e => {
  if (sm.value) {
    hasResults.value = false
    return
  }
  isOpen.value = !isOpen.value
})
</script>

<template>
  <div
    v-if="isOpen"
    class="flex min-w-full items-center justify-center top-0"
    :class="{ 'min-h-screen backdrop-blur-sm backdrop-brightness-95 absolute p-4': !sm }"
  >
    <div
      class="min-w-[500px] flex items-center flex-col justify-center relative"
      :class="{ '-translate-y-60': !sm }"
    >
      <input
        ref="inputRef"
        type="text"
        placeholder="Write some pokémon name..."
        v-model="search"
        class="input lg:min-w-[500px] border-b-none bg-white min-w-full max-w-md input-lg select-none focus:outline-none"
        :class="{ 'rounded-b-none': hasResults, 'input-bordered': sm }"
      />
      <div class="lg:min-w-[500px]">
        <!-- Results -->
        <Results
          v-if="hasResults"
          :search="search"
          class="min-w-[500px]"
          :class="{ 'border absolute left-0': sm }"
        />
      </div>
    </div>
  </div>
</template>
