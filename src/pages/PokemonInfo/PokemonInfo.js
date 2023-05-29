import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { getPokemon } from '../../api/fetchPokemons';
import { useState } from 'react';
import './pokemoninfo.css'

const PokemonInfo = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon(id).then(data => {
      setPokemon(data)
    })
  }, [id])
  console.log(pokemon);
  return (
    <div className='pokemons'>
      <div className='container'>
        <h2 className='pokemon__name'>Характеристика покемона : {pokemon?.name}</h2>
        <div className='pokemons__info'>
          <div className='pokemons__right'>
            <img className='pok__img' src={pokemon?.sprites.other.dream_world.front_default} />
          </div>
          <div className='pokemons__left'>
            <h2>Имя: {pokemon?.name}</h2>
            <h2>Краткая характеристика:</h2>
            <p className='pokemons__title'>На спине {pokemon?.name} есть большой цветок. Он будет раскрашен в яркие цвета, если получит большое количество питательных веществ и солнечного света. Цветочный аромат успокаивает эмоции людей.</p>
            <p className='pokemons__text'><span>ID:</span> {pokemon?.id}</p>
            <p className='pokemons__text'><span>WEIGHT:</span> {pokemon?.weight} kilo</p>
            <p className='pokemons__text'><span>HEIGHT:</span> {pokemon?.height} cm</p>
            <p className='pokemons__text'><span>ATTACK:</span> {pokemon?.stats[0].base_stat}</p>
          </div>

        </div>
        <div className='pokemons__infos'>
        <h2>Характеры (Натуры) Покемонов</h2>
        <p className='pokemons__subtitle'>
          Существует 25 характеров покемонов, которые также называют натурами от английского «natures». Каждый характер увеличивает одну из характеристик на 10% и уменьшает другую на 10%. 5 из характеров уменьшают и увеличивают одну и ту же характеристику, поэтому ничего не меняют. Характер не влияет на характеристику здоровье (HP). Характер присваивается при появлении покемона, его нельзя поменять.
          В Pixelmon посмотреть характер покемона можно кликнув по нему правой кнопкой, затем выбрав Инфо → Стат.
          Опытные игроки подбирают покемона с подходящим характером так, чтобы увеличить итак большую характеристику и уменьшить ту, что не нужна. Например, если у покемона высокая базовая характеристика «Атака» и есть сильные атаки, тогда можно пожертвовать «Специальной атакой» и выбрать характер «Непреклонный (Adamant)»
        </p>
        </div>
      </div>
    </div >
  )
}

export default PokemonInfo