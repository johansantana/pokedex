<script setup>
import { onBeforeMount, ref, capitalize, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAllPokemons, getPokemon, getPokemonDescription } from '../utils'
import AppButton from '../components/AppButton.vue'
import PokemonInfo from '../components/Pokemon/PokemonInfo.vue'
import { ArrowUturnLeftIcon } from '@heroicons/vue/20/solid'

const route = useRoute()
const router = useRouter()

const pokemon = ref(null)
const pokemonDescription = ref('')

onBeforeMount(async () => {
  const pokemons = await getAllPokemons()
  const pokemonFound = pokemons.find(pokemon => {
    return pokemon.name === route.params.name
  })

  if (!pokemonFound) router.push('/' + route.params.name)
  pokemon.value = await getPokemon(pokemonFound.id)
  pokemonDescription.value = await getPokemonDescription(pokemonFound.id)
})
</script>

<template>
  <div v-if="pokemon" class="my-10">
    <div
      class="flex flex-col gap-10 items-start md:flex-row md:justify-between"
    >
      <AppButton class="px-4 grow-0" @click="$router.back()">
        <ArrowUturnLeftIcon class="w-4 h-4" />
        <span>Go Back</span>
      </AppButton>
      <h1
        class="text-7xl sm:text-8xl w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-600 to-blue-400"
      >
        {{
          pokemon.name
            ?.split('-')
            ?.map(word => capitalize(word))
            ?.join(' ')
        }}
      </h1>
    </div>
    <PokemonInfo :pokemon="pokemon" :description="pokemonDescription" />
  </div>
</template>
