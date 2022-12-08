<script setup>
import { ref, onBeforeMount } from 'vue'
import PokemonList from '../components/Pokemon/PokemonList.vue'
import { getPokemonsByCount } from '../utils'

const pokemonItems = ref(null)
onBeforeMount(async () => (pokemonItems.value = await getPokemonsByCount(20)))
</script>

<template>
  <div>
    <section class="my-5 md:my-10">
      <div class="flex gap-10 items-center">
        <h1
          class="text-6xl md:text-7xl lg:text-8xl w-fit my-5 md:my-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-500 to-violet-300"
        >
          Pokémon List
        </h1>
        <img
          src="/pokeball.png"
          alt="pokeball image"
          class="max-h-[100px] hidden md:block"
        />
      </div>
    </section>
    <section v-if="pokemonItems">
      <PokemonList :list="pokemonItems" />
    </section>
    <section v-else class="grid place-content-center place-items-center">
      <p class="text-3xl text-slate-400 font-medium mt-36">Loading...</p>
    </section>
  </div>
</template>
