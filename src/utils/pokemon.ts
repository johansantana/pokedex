import { API_URL, typesColors } from '.'
import { Pokemon } from '../interfaces/pokemon.interface'
import { useRoute } from 'vue-router'

export const getPokemonsByPage = async (limit: number): Promise<Pokemon[]> => {
  try {
    const route = useRoute()
    const page = route.query?.page ?? 1
    const offset = limit * (Number(page) - 1)

    const type = route.query?.type
    if (!type) {
      const result = await getAllPokemons()
      return result.slice(offset, offset + limit)
    }

    const result = type
      ? await getAllPokemonsByType(type)
      : await getAllPokemons()
    return result.slice(offset, offset + limit)
  } catch (err) {
    throw new Error(err)
  }
}

export const getAllPokemons = async (): Promise<Pokemon[]> => {
  try {
    const result = await fetch(`${API_URL}/pokemon/?limit=5000`)
    const data = await result.json()
    return data.results.map((pokemon: any) => {
      return { ...pokemon, id: Number(pokemon.url.split('/').at(-2)) }
    })
  } catch (err) {
    throw new Error(err)
  }
}

export const getAllPokemonsByType = async (
  type: string | string[]
): Promise<Pokemon[]> => {
  try {
    const typeNumber =
      Object.keys(typesColors).findIndex(elem => elem === type) + 1

    const result = await fetch(`${API_URL}/type/${typeNumber}`)
    const data = await result.json()
    return data.pokemon.map((pokemonIndex: any) => {
      const pokemon = pokemonIndex.pokemon
      return { ...pokemon, id: Number(pokemon.url.split('/').at(-2)) }
    })
  } catch (err) {
    throw new Error(err)
  }
}

export const getPokemon = async (
  id: number,
  requestType?: string
): Promise<any> => {
  try {
    if (!id) throw new Error('No Pokémon ID was provided')

    const URL = requestType
      ? `${API_URL}/pokemon-${requestType}/${id}`
      : `${API_URL}/pokemon/${id}`
    const CACHE_NAME = requestType ? 'series_cache' : 'pokemon_cache'

    const cache = await caches.open(CACHE_NAME)

    const cachedResult = await caches.match(URL)
    const cachedData = await cachedResult?.json()
    if (cachedData) return cachedData

    const result = await fetch(URL)
    cache.put(URL, result.clone())
    const pokemonData = await result.json()

    return pokemonData
  } catch (err) {
    throw new Error(err)
  }
}

export const getPokemonDescription = async (id: number): Promise<string> => {
  try {
    if (!id) throw new Error('No Pokémon ID was provided')
    if (id > 904) return 'This Pokémon does not have a description.'

    const cache = await caches.open('description_cache')
    const cachedResult = await caches.match(String(id))
    const cachedData = await cachedResult?.text()
    if (cachedData) return cachedData

    const data = await getPokemon(id, 'species')

    const textEntries: string[] = []

    while (textEntries.length < 2) {
      let end = false
      data?.flavor_text_entries.forEach((entry: any, index: number) => {
        if (entry.language.name !== 'en') return
        if (index === data?.flavor_text_entries.length - 1) {
          end = true
        }
        if (!textEntries.includes(entry.flavor_text))
          textEntries.push(entry.flavor_text)
      })
      if (end) break
    }
    const string = textEntries.slice(0, 2).join(' ')
    const description = string
      .split('\f')
      .join(' ')
      .replace(/POKéMON/g, 'Pokémon')

    cache.put(String(id), new Response(description))

    return description
  } catch (err) {
    throw new Error(err)
  }
}
