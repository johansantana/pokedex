<script setup>
import { ref, onBeforeMount } from 'vue'
import { getAllPokemons } from '../../api/pokemon'
import PokemonCard from './PokemonCard.vue'
import AppPagination from '../App/AppPagination.vue'

const pokemonItemsList = ref([])

onBeforeMount(async () => {
  const { results } = await getAllPokemons()
  pokemonItemsList.value = [...results]
})
</script>

<template>
  <div class="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-4">
    <PokemonCard
      v-for="pokemon in pokemonItemsList"
      :pokemonUrl="pokemon.url"
    />
  </div>
  <div class="flex justify-center">
    <AppPagination />
  </div>
</template>
