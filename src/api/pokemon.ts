import { API } from '.'
import { capitalize } from 'vue'
import { Pokemon } from '../interfaces/pokemon.interface'

export const getAllPokemons = async () => {
  try {
    const result = await fetch(`${API}/pokemon/`)
    const pokemonArray = await result.json()
    return pokemonArray
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Fetches a pokemon by its url
 * @param url The fetch url with pokemon id e.g "https://pokeapi.co/api/v2/pokemon/1"
 * @returns The pokemon data specified in the url
 */
export const getPokemonByUrl = async (url: string): Promise<Pokemon> => {
  try {
    if (!url) throw new Error('No Pokemon Url has been defined')

    const result = await fetch(url)
    const pokemonData = await result.json()
    pokemonData.name = capitalize(pokemonData.name)
    return pokemonData
  } catch (err) {
    throw new Error(err)
  }
}

export const getPokemonByName = async (name: string) => {}
