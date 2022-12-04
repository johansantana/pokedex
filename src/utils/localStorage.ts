import { CachedPokemon, Pokemon } from '../interfaces/pokemon.interface'

export const initCachedData = (): void => {
  const cachedPokemons = getAllCachedPokemons()
  if (Object.keys(cachedPokemons).length === 0) {
    localStorage.setItem('cachedPokemons', '[]')
  }
}

const getAllCachedPokemons = (): CachedPokemon[] => {
  const cachedPokemons = JSON.parse(
    localStorage.getItem('cachedPokemons') || '{}'
  )
  return cachedPokemons
}

export const cachePokemon = (pokemonData: Pokemon): void => {
  const { id } = pokemonData
  const cachedPokemons = getAllCachedPokemons()
  if (cachedPokemons.some(pokemon => pokemon.id === id)) return
  cachedPokemons.push({ id, data: pokemonData })
  localStorage.setItem('cachedPokemons', JSON.stringify(cachedPokemons))
}

export const checkCachedPokemon = ({ url, name }): Pokemon | undefined => {
  const cachedPokemons = getAllCachedPokemons()
  if (name) {
    const resultPokemon = cachedPokemons.find(cachedPokemon => {
      return cachedPokemon.data.name === name
    })
    return resultPokemon?.data
  }
  const pokemonId = Number(url.split('/').at(-2))
  const resultPokemon = cachedPokemons.find(cachedPokemon => {
    return cachedPokemon.id === pokemonId
  })
  return resultPokemon?.data
}
