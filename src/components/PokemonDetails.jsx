import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CardDetails from './pokemonDetails/CardDetails'
import './pokemonDetails/style/Details.css'
import Header from './extras/Header'
import Movements from './pokemonDetails/Movements'

const PokemonDetails = () => {

  const [pokemonInfo, setPokemonInfo] = useState()
  const [activeScroll, setActiveScroll] = useState(false)

  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemonInfo(res.data))
      .catch(err => console.log(err))
  }, [id])

  document.addEventListener('scroll', e => {
    if(scrollY > 400){
      setActiveScroll(true)
    }else{
      setActiveScroll(false)
    }
  })

  const PageUp = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'  
    })
  }

  return (
    <div className='info__container'>
      <Link className='back-to__pokedex' to='/pokedex'>&lt;</Link>
      {
        activeScroll && 
        <button className='info__scroll-up' onClick={PageUp}>&#94;</button>
      }
      <Header className='Header__info'/>
      <CardDetails pokemonInfo={pokemonInfo} />
      <Movements pokemonInfo={pokemonInfo} />
    </div>
  )
}

export default PokemonDetails