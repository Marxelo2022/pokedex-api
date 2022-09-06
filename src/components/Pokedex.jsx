import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokeCard from './Pokedex/PokeCard'
import { useSelector } from 'react-redux'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import Header from './extras/Header'
import Pagination from './Pagination'
import './Pokedex/style/PokeHeadStyle.css'

export const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
  const [offSet, setOffSet] = useState(0)
  const [limit, setLimit] = useState(20)
  const [allPokemon, setAllPokemon] = useState(0)

  useEffect(() => {

    if (pokeSearch) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;
      const obj = {
        results: [{ url }],
      };
      setPokemons(obj);
    } else if (optionType !== "All") {
      const URL = `https://pokeapi.co/api/v2/type/${optionType}`;
      axios
        .get(URL)
        .then((res) => {
          const arr = res.data.pokemon.map((e) => e.pokemon);
          setAllPokemon(arr.length);
          const arr2 = arr.slice(offSet, offSet + limit);
          setPokemons({ results: arr2 });
        })
        .catch((err) => console.log(err));

    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`;
      axios
        .get(URL)
        .then((res) => setPokemons(res.data))
        .catch((err) => console.log(err));
    }
  }, [pokeSearch, optionType, offSet])

  let FullPokemons = pokemons?.count ? pokemons?.count : allPokemon;

  const nameTrainer = useSelector(state => state.NameTrainer)

  const handleHome = () => {
    setPokeSearch('')
    setOptionType('All')
    setOffSet(0)
    setLimit(20)
  }

  console.log(pokemons)

  return (
    <div>
      <Header handleHome={handleHome} />
      <header>
        <h1 className='Principal__title'>Welcome <span className='title__span'>{nameTrainer}</span>, here you can find your favorite pokemon</h1>
        <div className='Child__header'>
          <SearchInput
            setPokeSearch={setPokeSearch}
            setOptionType={setOptionType} />
          <SelectType
            setOptionType={setOptionType}
            optionType={optionType}
            setPokeSearch={setPokeSearch} />
        </div>
      </header>
      <div className='Pokemons'>
        {
          pokemons?.results.map(pokemon => (
            <PokeCard
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
      <div className='Pagination'>
        <Pagination
          FullPokemons={FullPokemons}
          offSet={offSet}
          limit={limit}
          setOffSet={setOffSet}
          setPokemons={setPokemons}
          setPokeSearch={setPokeSearch}
          setOptionType={setOptionType}
        />
      </div>
    </div>
  )
}
