<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md'
  }
})

const sm = props.size === 'sm'
const md = props.size === 'md'
const lg = props.size === 'lg'
</script>

<template>
  <span
    :class="{
      'badge p-3 font-mono font-medium text-white': sm,
      'text-sm rounded-full text-left p-2 px-4 font-mono font-medium text-white':
        md,
      'badge text-lg p-4 font-mono font-medium text-white': lg
    }"
  >
    <slot></slot>
  </span>
</template>
