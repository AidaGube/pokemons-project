import React from 'react'
import classes from './pokemonCard.module.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {

  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get(pokemon.url).then(data => {
      console.log(data);
      setImage(data.data.sprites.other.dream_world.front_default)
    })

    
  }, [pokemon.url]) //массив зависимости следм за обновление наших зависимостей то что используем за тем и следим

  return (
    <React.Fragment>
      <Link to={`./info/${pokemon.name}`}>
      <div className={classes.card__pokemons}>
        <div className={classes.card__list}>
          <div className={classes.card__img}>
            <img src={image} alt='pokemon images' />
          </div>
          <div className={classes.card__title}>
            <h3>{pokemon.name}</h3>
          </div>
        </div>
      </div>
      </Link>
    </React.Fragment>

  )
}

export default PokemonCard