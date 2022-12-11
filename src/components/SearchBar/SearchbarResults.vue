<script setup>
import { ref, watch } from 'vue'
import { getAllPokemons } from '../../utils'
import PokemonSearchResult from '../Pokemon/PokemonSearchResult.vue'

const props = defineProps({
  search: String
})

const isLoading = ref(true)
const searchResults = ref([])

const renderResults = value => {
  isLoading.value = true
  getAllPokemons().then(pokemons => {
    const matches = pokemons.filter(pokemon =>
      pokemon.name.startsWith(value.trim().toLowerCase().split(' ').join('-'))
    )
    searchResults.value = matches.slice(0, 3)
    isLoading.value = false
  })
}

if (props.search) renderResults(props.search)
watch(
  () => props.search,
  value => renderResults(value)
)
</script>

<template>
  <div class="min-w-[500px]">
    <div v-if="!isLoading" class="flex flex-col">
      <PokemonSearchResult
        v-if="searchResults.length"
        v-for="pokemon in searchResults"
        :key="pokemon.id"
        :pokemon-id="pokemon.id"
        class="border-t-2 border-t-slate-100"
      />
      <div v-else class="border-t-2 border-t-slate-100 p-5">
        <p class="text-slate-400 text-center">
          No pokémon matches with your search.
        </p>
      </div>
    </div>
    <div v-else class="border-t-2 border-t-slate-100 p-5">
      <p class="text-slate-400 text-center">Loading...</p>
    </div>
  </div>
</template>
