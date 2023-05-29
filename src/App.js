import {Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import { PokemonInfo } from "./pages/PokemonInfo";
import {AboutPokemon} from './pages/AboutPokemon';
import {MainPage} from './pages/MainPage';
import { fetchPokemonS } from "./api/fetchPokemons";

const App = () => {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  useEffect(() => {
    fetchPokemonS(12, 24)
  }, [])

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="button"> Change theme </button>
      {/* <Link to={'/about'}>
        <button>About</button>
      </Link> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPokemon />} />
        <Route path="/info/:id" element={<PokemonInfo />} />
      </Routes>
     
    </div>
  );
}
export default App;
