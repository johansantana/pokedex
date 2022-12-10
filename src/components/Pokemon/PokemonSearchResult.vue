<script setup>
import { ref, onBeforeMount, watch, capitalize, computed } from 'vue'
import { getPokemon, typesColors } from '../../utils'

const props = defineProps({
  pokemonId: {
    type: Number,
    required: true
  }
})

const pokemon = ref(null)

onBeforeMount(async () => {
  pokemon.value = await getPokemon(props.pokemonId)
})

const imageReference = ref(null)
const backgroundColor = ref({})

const pokemonTypes = computed(() => {
  return pokemon.value.types.map(typeObject => {
    return typeObject.type
  })
})

watch(imageReference, async () => {
  if (imageReference.value) {
    backgroundColor.value = await getAverageImageColor(imageReference.value.src)
  }
})
</script>

<template>
  <RouterLink
    v-if="pokemon"
    class="flex p-3 gap-4 hover:bg-neutral transition-colors"
    :to="`/pokemon/${pokemon.name}`"
  >
    <div
      class="min-w-[60px] min-h-[60px] bg-blue-100 rounded-2xl relative overflow-hidden"
    >
      <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name + 'picture'"
        class="absolute"
      />
    </div>
    <div class="grow">
      <p class="text-slate-600 text-xl font-medium mb-2">
        {{
          pokemon.name
            ?.split('-')
            ?.map(word => capitalize(word))
            ?.join(' ')
        }}
      </p>
      <span
        v-for="type in pokemonTypes"
        :key="type.name"
        class="badge p-3 font-mono font-medium text-white border-none mr-3"
        :class="typesColors[type.name]"
      >
        {{ capitalize(type.name) }}
      </span>
    </div>
  </RouterLink>
</template>
