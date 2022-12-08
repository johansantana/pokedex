import getAverageColor from 'get-average-color'

export {
  getAllPokemons,
  getPokemon,
  getPokemonDescription,
  getPokemonsByCount
} from './pokemon'

export const API_URL = 'https://pokeapi.co/api/v2'

export const getAverageImageColor = async imgPath => {
  return getAverageColor(imgPath)
}

export const typesColors = {
  normal: 'bg-[#d6d1a3]',
  fighting: 'bg-[#e85454]',
  flying: 'bg-[#9c88df]',
  poison: 'bg-[#b6a7eb]',
  ground: 'bg-[#f0cd81]',
  rock: 'bg-[#dec75f]',
  bug: 'bg-[#b2cf4e]',
  ghost: 'bg-[#9578c2]',
  steel: 'bg-[#858599]',
  fire: 'bg-[#eb7e3b]',
  water: 'bg-[#47a4ed]',
  grass: 'bg-[#78c47f]',
  electric: 'bg-[#f2cf41]',
  psychic: 'bg-[#f05d8f]',
  ice: 'bg-[#96d8e3]',
  dragon: 'bg-[#7e57c2]',
  dark: 'bg-[#453f3d]',
  fairy: 'bg-[#e68cb8]'
}
