<script setup>
import { ref, onBeforeMount, watch, computed, capitalize } from 'vue'
import { getPokemon, getAverageImageColor, typesColors } from '../../utils'

const props = defineProps({
  pokemonId: {
    type: Number,
    required: true
  }
})

const pokemon = ref(null)

onBeforeMount(async () => {
  pokemon.value = await getPokemon(props.pokemonId)
})

const pokemonTypes = computed(() => {
  return pokemon.value.types.map(typeObject => {
    return typeObject.type
  })
})

const imageReference = ref(null)
const backgroundColor = ref({})

watch(imageReference, async () => {
  if (imageReference.value) {
    backgroundColor.value = await getAverageImageColor(imageReference.value.src)
  }
})
</script>

<template>
  <article
    v-if="pokemon"
    class="bg-neutral border-2 border-gray-300 rounded-2xl hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-secondary/50 transition-transform"
  >
    <RouterLink
      :to="`/pokemon/${pokemon.name}`"
      class="p-3 flex flex-col relative"
    >
      <img
        ref="imageReference"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name + ' picture'"
        crossorigin="anonymous"
        class="relative z-10"
      />
      <div
        class="w-[100px] h-[100px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        :style="`background-color: rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, .4)`"
      >
      </div>
      <p class="text-xl font-medium text-slate-600">
        {{ capitalize(pokemon.name) }}
        <span class="text-base font-bold font-mono text-slate-400/70">
          #{{ pokemon.id }}
        </span>
      </p>

      <div class="flex items-center mt-2 gap-2">
        <span
          v-for="type in pokemonTypes"
          :key="type.name"
          class="badge p-3 font-mono font-medium text-white border-none"
          :class="typesColors[type.name]"
        >
          {{ capitalize(type.name) }}
        </span>
      </div>
    </RouterLink>
  </article>
</template>
