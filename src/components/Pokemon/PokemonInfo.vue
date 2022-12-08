<script setup>
import { onBeforeMount, ref, watch } from 'vue'
import { getPokemonDescription, getAverageImageColor } from '../../utils'

const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const pokemonDescription = ref(null)

onBeforeMount(async () => {
  pokemonDescription.value = await getPokemonDescription(props.pokemon.id)
})

const imageReference = ref(null)
const circleColor = ref({})

watch(imageReference, async () => {
  if (imageReference.value) {
    circleColor.value = await getAverageImageColor(imageReference.value.src)
  }
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-32">
    <section class="md:max-w-[50%] pt-10 md:pt-20">
      <p v-if="pokemonDescription" class="font-mono text-lg text-slate-500">
        {{ pokemonDescription }}
      </p>
    </section>
    <section class="grow-0">
      <div class="relative hidden md:block">
        <img
          :src="pokemon.sprites.other.home.front_default"
          :alt="pokemon.name + ' picture'"
          ref="imageReference"
          class="relative z-10 min-h-[415px]"
        />
        <span
          class="absolute -bottom-10 left-0 text-9xl font-black z-20 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-600 to-blue-400 opacity-90"
        >
          #{{ props.pokemon.id }}
        </span>
        <div
          class="w-[300px] h-[300px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          :style="`background-color: rgb(${circleColor.r}, ${circleColor.g}, ${circleColor.b}, .4)`"
        ></div>
      </div>
    </section>
  </div>
</template>
