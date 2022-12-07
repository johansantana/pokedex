<script setup>
import { ref, onBeforeMount, watch, computed, capitalize } from 'vue'
import { getPokemonById, getAverageImageColor, typesColors } from '../../utils'

const props = defineProps({
  pokemonId: {
    type: Number,
    required: true
  }
})

const pokemon = ref(null)

onBeforeMount(async () => {
  pokemon.value = await getPokemonById(props.pokemonId)
  pokemon.value.name = capitalize(pokemon.value.name)
})

const pokemonTypes = computed(() => {
  return pokemon.value.types.map(typeObject => {
    return typeObject.type
  })
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
  <article
    v-if="pokemon"
    class="bg-neutral border-2 border-gray-300 rounded-2xl hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-secondary/50 transition-transform"
  >
    <a :href="`#${pokemon.name}`" class="px-3 flex flex-col relative">
      <img
        ref="imageReference"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name + ' picture'"
        crossorigin="anonymous"
        class="relative z-10"
      />
      <div
        class="w-[100px] h-[100px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        :style="`background-color: rgb(${circleColor.r}, ${circleColor.g}, ${circleColor.b}, .4)`"
      >
      </div>
      <p class="text-xl font-medium text-slate-600">
        {{ pokemon.name }}
        <span class="text-base font-bold font-mono text-slate-400/70">
          #{{ pokemon.id }}
        </span>
      </p>
    </a>
    <div class="flex items-center mt-2 gap-2 px-3 pb-3">
      <span
        v-for="type in pokemonTypes"
        :key="type.name"
        class="badge p-3 font-mono font-medium text-white border-none"
        :class="typesColors[type.name]"
      >
        <a :href="`#${type.name}`">
          {{ capitalize(type.name) }}
        </a>
      </span>
    </div>
  </article>
</template>
