<script setup>
import { ref, onBeforeMount } from 'vue'
import { getAllPokemons } from '../../api/pokemon'
import PokemonCard from './PokemonCard.vue'
import AppPagination from '../AppPagination.vue'
import FilterList from '../FilterList/FilterList.vue'

const pokemonItemsList = ref([])

onBeforeMount(async () => {
  const { results } = await getAllPokemons()
  pokemonItemsList.value = [...results]
})
</script>

<template>
  <div>
    <FilterList />
    <div
      class="grid rounded-3xl gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 my-10"
    >
      <PokemonCard
        v-for="pokemon in pokemonItemsList"
        :key="pokemon.name"
        :pokemonUrl="pokemon.url"
      />
    </div>
    <div class="flex justify-center">
      <AppPagination class="w-1/2" />
    </div>
  </div>
</template>
