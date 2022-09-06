import React from 'react'

const SearchInput = ({setPokeSearch,setOptionType, setOffSet, setLimit}) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    setLimit(20)
    setOffSet(0)
    e.target.searchText.value = ""
  }

  return (
    <form className='Form__container' onSubmit={handleSubmit}>
        <input className='Form__input' id='searchText' type="text" placeholder='Search Pokemon' />
        <button className='Form__btn'>Search</button>
    </form>
  )
}

export default SearchInput