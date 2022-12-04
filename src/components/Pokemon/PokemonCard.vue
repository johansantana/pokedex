<script setup>
import { ref, onBeforeMount } from 'vue'
import { getPokemonByUrl } from '../../api/pokemon'
import { checkCachedPokemon } from '../../utils/localStorage'

const props = defineProps({
  pokemonUrl: {
    type: String,
    required: true
  }
})

const pokemon = ref()
const isLoading = ref(true)

onBeforeMount(async () => {
  const cachedPokemonData = checkCachedPokemon({ url: props.pokemonUrl })
  if (cachedPokemonData) {
    pokemon.value = cachedPokemonData
  } else {
    pokemon.value = await getPokemonByUrl(props.pokemonUrl)
  }
  isLoading.value = false
})
</script>

<template>
  <article
    v-if="!isLoading"
    class="p-3 bg-white border rounded-lg hover:scale-105"
  >
    <a href="#" class="flex flex-col">
      <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name + ' picture'"
      />
      <p>{{ pokemon.name }}</p>
    </a>
    <p></p>
  </article>
</template>
