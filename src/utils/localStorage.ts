import { CachedPokemon, Pokemon } from '../interfaces/pokemon.interface'

export const initCachedData = (): void => {
  const cachedPokemons = getAllCachedPokemons()
  if (Object.keys(cachedPokemons).length === 0) {
    localStorage.setItem('cachedPokemons', '[]')
  }
}

const getAllCachedPokemons = (): CachedPokemon[] => {
  const cached = JSON.parse(localStorage.getItem('cachedPokemons') || '{}')
  return cached
}

export const cachePokemon = (pokemonData: Pokemon): void => {
  const { id } = pokemonData
  const cached = getAllCachedPokemons()
  if (cached.some(pokemon => pokemon.id === id)) return
  cached.push({ id, data: pokemonData })
  localStorage.setItem('cachedPokemons', JSON.stringify(cached))
}

export const checkCachedPokemon = ({ url, name }): Pokemon | undefined => {
  if (url) {
    const pokemonId = Number(url.split('/').at(-2))
    const cached = getAllCachedPokemons()
    const pokemonOnSearch = cached.find(cachedPokemon => {
      return cachedPokemon.id === pokemonId
    })
    return pokemonOnSearch?.data
  }
}
