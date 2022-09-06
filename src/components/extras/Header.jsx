import React from 'react'
import './styles/header.css'
import pokedex from '../../img/pokedex.png'
import { Link } from 'react-router-dom'

const Header = ({handleHome}) => {
  return (
    <header className='red-rectangle-header'>
      <Link to='/'>
      <img className='header-img' src={pokedex} alt="" />
      </Link>
      <div className='black-rectangle-header'></div>
      <div className='circle-ext-header' onClick={handleHome}>
        <div className="circle-int-header"></div>
      </div>
    </header>
  )
}

export default Header