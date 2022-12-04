import { Pokemon } from '../interfaces/pokemon.interface'

export const initCachedData = () => {
  localStorage.setItem('cachedPokemons', '[]')
}

const getAllCachedPokemons = () => {
  const cached = JSON.parse(localStorage.getItem('cachedPokemons') || '{}')
  return cached
}

export const cachePokemon = (pokemonData: Pokemon) => {
  const { id } = pokemonData
  const cached = getAllCachedPokemons()
  if (cached.some(pokemon => pokemon.id === id)) return
  cached.push({ id, pokemonData })
  localStorage.setItem('cachedPokemons', JSON.stringify(cached))
}

export const checkCachedPokemon = ({ url, name }) => {
  if (url) {
    const pokemonId = url.split('/').at(-1)
    return
  }
}
