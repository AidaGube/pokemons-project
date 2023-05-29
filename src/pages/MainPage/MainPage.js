import React from 'react'
import { useEffect, useState } from "react";
import { fetchPokemonS, } from '../../api/fetchPokemons';
import List from '../../components/List/List';
import Pagination from '../../components/Pagination/Pagination';
import './mainPage.css'
import { fetchPokemons } from './../../api/fetchPokemons';

const MainPage = () => {
  const [pokemonList, setPokimonList] = useState([])
  // const [pageCount, setPageCount] = useState(0)
  const [offset, setOffset] = useState(1)
  const [page, setPage] = useState(1)


  const limit = 12;
  useEffect(() => {
    fetchPokemons(limit, offset).then((data) => {
      setPokimonList(data.results)
      // setPageCount(Math.ceil(data.count / 10))
    })
  }, [offset])

  // const limit = 1;
  // useEffect(() =>{
  //   fetchPokemonS(limit, 24).then(data =>  setPokimonList(data))
  // })

  const handleChangePage = (type) => {
    if (type === 'next') {
      setOffset(prev => prev += 10)
      setPage(prev => prev += 1);
    } else {
      if (offset <= 10) return
      setOffset(prev => prev - 10)
      setPage(prev => prev -= 1)
    }
  }
  // const handlePageClick = (selectedPage) => {
  //   setPage(selectedPage)
  // }
  // const lastIndex = offset * page
  // const fisrtIndex = lastIndex - offset
  // const currentPost = pokemonList.slice(fisrtIndex, lastIndex)
   
  const handleSortWeight = () => {
    fetchPokemonS(12,24, 'weight').then(data => setPokimonList(data))
  }
  const handleSortAttack = () => {
    fetchPokemonS(12,24, 'atttack').then(data2 => setPokimonList(data2))
  }

  return (
    <div >
     <div className='poke__sort'>
     <span>Сортировать по: </span>
     <button onClick={handleSortAttack}>Силе</button>
      <button onClick={handleSortWeight}>Весу</button>
     </div>
      <List pokemonList={pokemonList} />
      <Pagination
        // pageCount={pageCount}
        changeOffset={handleChangePage}
        // setOffset={setOffset}
        // totalPosts={pokemonList.length}
        // offset={offset}
        page={page}
      />
    </div>
  )
}

export default MainPage