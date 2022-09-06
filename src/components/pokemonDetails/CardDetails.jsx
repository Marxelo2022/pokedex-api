import React from 'react'
import './style/Details.css'
import './style/ColorsType.css'

const CardDetails = ({ pokemonInfo }) => {
  return (
    <article className='card__details'>
      <header className={`header__details bg-${pokemonInfo?.types[0].type.name}`}>
        <img className='header__details-img' src={pokemonInfo?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='section__details'>
        <div className='section__details-card'>
          <div className='section__details-id'>#{pokemonInfo?.id}</div>
          <hr className='section__hr' />
          <h1 className='section__details-name'>{pokemonInfo?.name}</h1>
          <ul className='section__details-ul'>
            <li className='list__details'>
              <span className='list__details-bold'>Weight</span>
              {pokemonInfo?.weight}
            </li>
            <li className='list__details'>
              <span className='list__details-bold'>Height</span>
              {pokemonInfo?.height}
            </li>
          </ul>
          <ul className='section__details-ul__abilities'>
            <li className='list__abilities'>
              <span className='span__list-bold'>Type</span>
              <div className='list__abilities-type'>
                {
                  pokemonInfo?.types.map(type => (
                    <div
                      key={type.slot}
                      className={`list__type type-${type.type.name}`}>
                      {type.type.name}
                    </div>
                  ))
                }
              </div>
            </li>
            <li className='list__abilities'>
              <span className='span__list-bold'>Abilities</span>
              <div className='list__abilities-type'>
                {
                  pokemonInfo?.abilities.map(ability => (
                    <div
                      key={ability.slot}
                      className='list__type abilitie-card-info'>
                      {ability.ability.name}
                    </div>
                  ))
                }
              </div>
            </li>
          </ul>
        </div>
        <section className='stats__container'>
          <hr className='stats__hr' />
          <h2 className="stats__title">Stats</h2>
          <div className='stats__container-info'>
            {
              pokemonInfo?.stats.map(stat => (
                <article className='stats__container-info' key={stat.stat.name}>
                  <header className='stats__name-container'>
                    <h3 className='stats__name-info'>{stat.stat.name}</h3>
                    <p className='stats__stadistic'>{`${stat.base_stat}/255`}</p>
                  </header>
                  <div className='stats__progres-container'>
                    <div
                      className='stats__progress'
                      style={{ width: `${stat.base_stat * 100 / 255}%`}}
                      >
                    </div>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
      </section>
    </article>
  )
}

export default CardDetails