import axios from "axios"
import { sortItem } from "../components/common/helpers"

const baseUrl = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async (limit, offset) => {
    try {
        const { data } = await axios.get(baseUrl + `pokemon/?limit=${limit}&offset=${offset}`)
        return data
    } catch (error) {
        console.log('error');
    }
}
export const fetchPokemonS = async (from, till, type) => {
    let list = [];
    for (let i = from; i < till; i++) {
        const {data} = await axios.get(baseUrl + `pokemon/` + i)
        list.push(data)
    }
    console.log(sortItem(list, 'attach'), 'sortList');
    return sortItem(list, type)
}

export const getPokemon = async (id) => {
    try { //помогает улавливать ошибки
        const { data } = await axios.get(baseUrl + `pokemon/${id}`)
        return data
    } catch (error) {
        console.log('error');
    }
}