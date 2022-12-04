<script setup>
import { ref, onBeforeMount } from 'vue'
import { getPokemonByUrl } from '../../api/pokemon'
import { cachePokemon, checkCachedPokemon } from '../../utils/localStorage'
import { getTypeColorBg } from '../../utils/theme'

const props = defineProps({
  pokemonUrl: {
    type: String,
    required: true
  }
})

const pokemon = ref()
const pokemonTypes = ref()
const isLoading = ref(true)

onBeforeMount(async () => {
  const cachedPokemonData = checkCachedPokemon({ url: props.pokemonUrl })
  if (cachedPokemonData) {
    pokemon.value = cachedPokemonData
  } else {
    pokemon.value = await getPokemonByUrl(props.pokemonUrl)
    cachePokemon(pokemon.value)
  }

  pokemonTypes.value = pokemon.value.types.map(typeObject => {
    return typeObject.type
  })
  isLoading.value = false
})
</script>

<template>
  <article
    v-if="!isLoading"
    class="bg-neutral border-2 border-gray-300 rounded-2xl hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-secondary/50 transition-transform"
  >
    <a :href="`#${pokemon.name}`" class="px-3 flex flex-col">
      <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name + ' picture'"
      />
      <p class="text-xl font-medium text-slate-600">
        {{ pokemon.name }}
        <span class="text-base font-semibold text-slate-300">
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
