<script setup>
import { ref, onBeforeMount } from 'vue'
import { getPokemonByUrl } from '../../api/pokemon'
import { capitalize } from '../../utils'

const props = defineProps({
  pokemonUrl: {
    type: String,
    required: true
  }
})

const pokemon = ref({})
const isLoading = ref(true)

onBeforeMount(() => {
  getPokemonByUrl(props.pokemonUrl).then(pokemonData => {
    pokemon.value = pokemonData
    pokemon.value.name = capitalize(pokemon.value.name)
    isLoading.value = false
  })
})
</script>

<template>
  <article
    v-if="!isLoading"
    class="bg-white border rounded-lg hover:scale-105 cursor-pointer"
  >
    <a href="#" class="flex flex-col p-3">
      <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name + ' picture'"
      />
      <p>{{ pokemon.name }}</p>
      <p></p>
    </a>
  </article>
</template>
