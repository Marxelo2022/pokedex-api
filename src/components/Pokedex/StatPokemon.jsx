import React from 'react'

const StatPokemon = ({infoStat, color}) => {
  return (
    <li className='Stats__container'>
        <h4 className='Stats__name'>{infoStat.stat.name}</h4>
        <p className={`Stats__base color-text-${color}`}>{infoStat.base_stat}</p>
    </li>
  )
}

export default StatPokemon