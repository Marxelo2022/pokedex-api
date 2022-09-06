import React from 'react'

const Movements = ({pokemonInfo}) => {
  
    return (
    <article className='movement__principal-container'>
        <hr className='movement__hr'/>
        <h2 className='movement__title'>Movements</h2>
        <div className='movement__container'>
            {
              pokemonInfo?.moves.map(move => (
                <p className='movement' key={move.move.name}>{move.move.name}</p>
              ))
            }
        </div>
    </article>
  )
}

export default Movements