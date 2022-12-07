import { API_URL } from '.'
import { Pokemon } from '../interfaces/pokemon.interface'

export const getPokemonsByCount = async (limit: number): Promise<Pokemon[]> => {
  try {
    const result = await fetch(`${API_URL}/pokemon/?limit=${limit}`)
    const data = await result.json()
    return data.results.map(pokemon => {
      return { ...pokemon, id: Number(pokemon.url.split('/').at(-2)) }
    })
  } catch (err) {
    throw new Error(err)
  }
}

export const getAllPokemons = async (): Promise<Pokemon[]> => {
  try {
    const pokemons = await getPokemonsByCount(5000)
    return pokemons
  } catch (err) {
    throw new Error(err)
  }
}

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    if (!id) throw new Error('No Pokemon Id was provided')
    const url = `${API_URL}/pokemon/${id}`
    const cache = await caches.open('pokemon_caches')

    const cachedPokemonResult = await caches.match(url)
    const cachedPokemonData = await cachedPokemonResult?.json()
    if (cachedPokemonData) return cachedPokemonData

    const result = await fetch(url)
    cache.put(url, result.clone())
    const pokemonData = await result.json()

    return pokemonData
  } catch (err) {
    throw new Error(err)
  }
}
