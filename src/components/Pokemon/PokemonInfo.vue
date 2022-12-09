<script setup>
import { computed, onBeforeMount, ref, watch, capitalize } from 'vue'
import {
  getPokemonDescription,
  getAverageImageColor,
  typesColors
} from '../../utils'

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
const backgroundColor = ref({})

watch(imageReference, async () => {
  if (imageReference.value) {
    backgroundColor.value = await getAverageImageColor(imageReference.value.src)
  }
})

const height = computed(() => {
  return props.pokemon.height / 10
})
const weight = computed(() => {
  return props.pokemon.weight / 10
})

const pokemonTypes = computed(() => {
  return props.pokemon.types.map(typeObject => {
    return typeObject.type
  })
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-32">
    <section class="md:min-w-[45%] md:max-w-[50%] pt-10 md:pt-20">
      <p v-if="pokemonDescription" class="font-mono text-lg text-slate-500">
        {{ pokemonDescription }}
      </p>
      <div class="flex gap-32 my-10">
        <div>
          <p class="text-3xl text-yellow-500 font-semibold">Height</p>
          <p class="font-mono font-medium text-slate-500 text-xl">
            {{ height }} m
          </p>
        </div>
        <div>
          <p class="text-3xl text-yellow-500 font-semibold">Weight</p>
          <p class="font-mono font-medium text-slate-500 text-xl">
            {{ weight }} kg
          </p>
        </div>
      </div>
      <h3 class="text-3xl font-semibold text-yellow-500">{{
        pokemonTypes.length > 1 ? 'Types' : 'Type'
      }}</h3>
      <div class="flex gap-5 my-3">
        <span
          v-for="type in pokemonTypes"
          :key="type.name"
          class="badge text-lg p-4 font-mono font-medium text-white border-none"
          :class="typesColors[type.name]"
        >
          {{ capitalize(type.name) }}
        </span>
      </div>
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
          :style="`background-color: rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, .4)`"
        ></div>
      </div>
    </section>
  </div>
</template>
