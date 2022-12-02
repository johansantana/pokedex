<script setup>
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import Results from './Results.vue'

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
      class="min-w-[500px] flex items-center flex-col justify-center relative"
      @submit.prevent
    >
      <input
        ref="inputRef"
        type="text"
        placeholder="Write some pokémon name..."
        v-model="search"
        class="input lg:min-w-[500px] border-b-none bg-white min-w-full max-w-md input-lg select-none focus:outline-none"
        :class="{ 'rounded-b-none': search }"
      />

      <div class="bg-white rounded-b-lg overflow-hidden">
        <!-- Results -->
        <Results v-if="search" :search="search" class="max-w-[500px]" />
      </div>
    </form>
  </div>
</template>
