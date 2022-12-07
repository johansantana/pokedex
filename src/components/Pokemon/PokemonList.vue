<script setup>
import PokemonCard from './PokemonCard.vue'
import AppPagination from '../AppPagination.vue'
import FilterList from '../FilterList/FilterList.vue'

const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <FilterList />
    <div
      class="grid rounded-3xl gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 my-10"
    >
      <PokemonCard
        v-for="pokemon in props.list"
        :key="pokemon.name"
        :pokemon-id="pokemon.id"
      />
    </div>
    <div class="flex justify-center">
      <AppPagination class="w-1/2" />
    </div>
  </div>
</template>
