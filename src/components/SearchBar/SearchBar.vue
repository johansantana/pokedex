<script setup>
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import Results from '../Results/Results.vue'

const props = defineProps({
  isOpen: {
    type: Boolean
  }
})

const emits = defineEmits(['setOpen'])

const inputRef = ref(null)
const search = ref(null)

watch(inputRef, () => {
  if (inputRef.value) {
    search.value = null
    inputRef.value.focus()
  }
})

onClickOutside(inputRef, () => {
  emits('setOpen', false)
})
</script>

<template>
  <div v-if="props.isOpen" class="backdrop-blur-sm backdrop-brightness-95 p-4">
    <form
      class="min-w-[500px] flex items-center flex-col border-slate-300 rounded-2xl justify-center relative overflow-hidden"
      @submit.prevent
    >
      <input
        ref="inputRef"
        type="text"
        placeholder="Write some pokémon name..."
        v-model="search"
        class="input rounded-none bg-white min-w-full input-lg select-none focus:outline-none"
      />

      <div class="bg-white overflow-hidden">
        <!-- Results -->
        <Results v-if="search" :search="search" />
      </div>
    </form>
  </div>
</template>
