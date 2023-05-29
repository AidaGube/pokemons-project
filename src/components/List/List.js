import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import classes from './list.module.css'

const List = ({ pokemonList }) => {
    return (
        <div className={classes.container}>
            <div className={classes.card__lists}>
                {
                    pokemonList.map(pokemon => <PokemonCard
                        // key={id}
                        pokemon={pokemon}
                    />)}
            </div>
        </div>
    )
}

export default List