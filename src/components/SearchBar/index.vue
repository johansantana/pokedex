<script setup>
import { onMounted, ref, watchEffect } from 'vue'

const isOpen = ref(false)
const searchInput = ref(null)

watchEffect(() => {
  if (searchInput.value) searchInput.value.focus()
})

onMounted(() => {
  window.addEventListener('keydown', evt => {
    if (evt.code == 'KeyK' && evt.ctrlKey) {
      evt.preventDefault()
      isOpen.value = !isOpen.value
    }
  })
  window.addEventListener('click', evt => {
    if (evt.target === searchInput.value) return
    if (!isOpen.value) return
    isOpen.value = !isOpen.value
  })
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="min-h-screen min-w-full flex items-center justify-center absolute top-0 backdrop-blur-sm backdrop-brightness-95"
    >
      <input
        ref="searchInput"
        type="text"
        placeholder="Write some pokemon name..."
        class="input input-bordered bg-white w-full -translate-y-60 max-w-md input-lg select-none"
      />
      <div> </div>
    </div>
  </Teleport>
</template>
