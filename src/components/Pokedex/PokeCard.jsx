import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPokemon from './StatPokemon'
import './style/pokestyle.css'
import { useNavigate } from 'react-router-dom'
import './style/pokeColors.css'

const PokeCard = ({ url }) => {

  const [pokemon, setPokemon] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleClick = () => navigate(`/pokedex/${pokemon.name}`)

  return (
    <article onClick={handleClick} className={`Pokemon__container ${pokemon?.types[0].type.name}-border`}>
      <header className={`Pokemon__header bg-${pokemon?.types[0].type.name}`}>
        <img className='Pokemon__header-img' src={pokemon?.sprites.other['official-artwork']['front_default']} alt="" />
      </header>
      <section className='Pokemon__section'>
        <h2 className={`Pokemon__section-title color-text-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <ul className='Pokemon__section-ul__type'>
          {
            pokemon?.types.map(slot => (
              <li className='Pokemon__section-li' key={slot.type.url}>{slot.type.name}</li>
            ))
          }
        </ul>
        <p className='Pokemon__section-subtitle'>Type</p>
      </section>
      <hr className='Pokemon__hr'/>
      <footer className='Pokemon__footer'>
        <ul className='Pokemon__ul-stats'>
          {
            pokemon?.stats.map(stat => (
              <StatPokemon
                key={stat.stat.url}
                infoStat={stat}
                color={pokemon?.types[0].type.name}
              />
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokeCard