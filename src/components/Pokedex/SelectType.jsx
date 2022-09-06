import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setOptionType, optionType, setPokeSearch,setLimit, setOffSet}) => {

  const [listTypes, setListTypes] = useState()

  useEffect(() => {
  const URL = 'https://pokeapi.co/api/v2/type/'
  axios.get(URL)
    .then(res => setListTypes(res.data.results))
    .catch(err => console.log(err))
  }, [])
  
  const handleChange = e => {
    setOptionType(e.target.value)
    setPokeSearch('')
    setLimit(20)
    setOffSet(0)
  }

  return (
    <select className='Filter__container' value={optionType} onChange={handleChange}>
        <option className='Filter__options' value="All">All Pokemons</option>
        {
          listTypes?.map(type => (
            <option className='Filter__options-name' key={type.name} value={type.name}>{type.name}</option>
          ))
        }
    </select>
  )
}

export default SelectType