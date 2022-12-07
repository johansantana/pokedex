<script setup>
import { useRouter } from 'vue-router'
import AppButton from '../components/AppButton.vue'
import PokemonInfo from '../components/Pokemon/PokemonInfo.vue'
import { ArrowUturnLeftIcon } from '@heroicons/vue/20/solid'

const router = useRouter()
</script>

<template>
  <div>
    <AppButton class="px-4" @click="router.back()">
      <ArrowUturnLeftIcon class="w-4 h-4" />
      <span>Go Back</span>
    </AppButton>
    <PokemonInfo class="mt-20" />
  </div>
</template>
