import { API } from '.'

export const getAllPokemons = async () => {
  try {
    const result = await fetch(`${API}/pokemon/`)
    const data = await result.json()
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const getPokemonByUrl = async (url: string, options: Object) => {
  try {
    if (!url) throw new Error('No Pokemon Url has been defined')
    const result = await fetch(url, options ? options : {})
    const data = await result.json()
    return data
  } catch (err) {
    throw new Error(err)
  }
}
