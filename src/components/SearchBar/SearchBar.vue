<script setup>
import { ref, watch } from 'vue'
import {
  useMagicKeys,
  onClickOutside,
  whenever,
  useBreakpoints,
  breakpointsTailwind
} from '@vueuse/core'
import Results from './Results.vue'

const props = defineProps({
  isOpen: {
    type: Boolean
  }
})

const isOpen = ref(false)
const inputRef = ref(null)
const search = ref(null)

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smallerOrEqual('sm')
const md = breakpoints.isGreater('sm')

watch(sm, () => {
  if (sm.value) isOpen.value = true
  else isOpen.value = false
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
  watch(inputRef, () => {
    if (inputRef.value) {
      search.value = null
      inputRef.value.focus()
    }
  })
}

onClickOutside(inputRef, e => {
  isOpen.value = !isOpen.value
})
</script>

<template>
  <div
    v-if="isOpen"
    :class="{
      'backdrop-blur-sm backdrop-brightness-95 p-4': md,
      relative: sm
    }"
  >
    <div
      class="min-w-[500px] flex items-center flex-col justify-center relative"
      :class="{ fixed: sm }"
    >
      <input
        ref="inputRef"
        type="text"
        placeholder="Write some pokémon name..."
        v-model="search"
        class="input lg:min-w-[500px] border-b-none bg-white min-w-full max-w-md input-lg select-none focus:outline-none"
        :class="{ 'rounded-b-none': search, 'input-bordered': sm }"
      />
      <div class="lg:min-w-[500px] bg-white">
        <!-- Results -->
        <Results
          v-if="search"
          :search="search"
          class="min-w-[500px]"
          :class="{ 'border absolute left-0': sm, 'rounded-b-lg': md }"
        />
      </div>
    </div>
  </div>
</template>
