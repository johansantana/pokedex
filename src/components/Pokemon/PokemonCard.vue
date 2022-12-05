<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'
import { getPokemonByUrl } from '../../api/pokemon'
import { getAverageImageColor } from '../../utils/imageColor.ts'
import { cachePokemon, checkCachedPokemon } from '../../utils/localStorage'
import { getTypeColorBg } from '../../utils/theme'

const props = defineProps({
  pokemonUrl: {
    type: String,
    required: true
  }
})

const pokemon = ref(null)
const pokemonTypes = ref(null)
const isLoading = ref(true)

onBeforeMount(async () => {
  const cachedPokemonData = checkCachedPokemon({ url: props.pokemonUrl })
  if (cachedPokemonData) {
    pokemon.value = cachedPokemonData
    isLoading.value = false
  } else {
    pokemon.value = await getPokemonByUrl(props.pokemonUrl)
    cachePokemon(pokemon.value)
    isLoading.value = false
  }

  pokemonTypes.value = pokemon.value.types.map(typeObject => {
    return typeObject.type
  })
})

const imageReference = ref(null)
const circleColor = ref([])

onMounted(async () => {
  if (pokemon.value) {
    const { r, g, b } = await getAverageImageColor(imageReference.value.src)
    circleColor.value = [r, g, b]
  }
})
</script>

<template>
  <article
    v-if="!isLoading"
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
        :style="`background-color: rgb(${circleColor[0]}, ${circleColor[1]}, ${circleColor[2]}, .4)`"
      >
      </div>
      <p class="text-xl font-medium text-slate-600">
        {{ pokemon.name }}
        <span class="text-base font-semibold text-slate-400/70">
          #{{ pokemon.id }}
        </span>
      </p>
    </a>
    <div class="flex items-center mt-2 gap-2 px-3 pb-3">
      <span
        v-for="type in pokemonTypes"
        :key="type.name"
        class="badge p-3 text-white border-none"
        :class="getTypeColorBg[type.name]"
      >
        <a :href="`#${type.name}`">
          {{ type.name }}
        </a>
      </span>
    </div>
  </article>
</template>
