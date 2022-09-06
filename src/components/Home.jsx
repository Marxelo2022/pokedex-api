import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameGlobal } from '../store/slices/nameTrainer.slice'
import { useNavigate } from 'react-router-dom'
import desktop from '../img/pokedex.png'
import mobile from '../img/mobile.png'
import Footer from './extras/Footer'

const Home = () => {
  
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()
    if(inputValue.length !== 0){ 
      dispatch(setNameGlobal(inputValue))
      navigate('/pokedex')
    }
  }


  return (
    <div className='Home__container'>
      <img className='Home__img' src={desktop} alt="" />
      <img className='Home__img-mobile' src={mobile} alt="" />
      <h1 className='Home__title'>¡Hi Trainer!</h1>
      <p className='Home__text'>To start put your name</p>
      <form className='Home__form' onSubmit={handleSubmit}>
        <input className='Home__input' id='name' type="text" placeholder='Your name...' />
        <button className='Home__btn'>Start</button>
      </form>
      <Footer />
    </div>
  )
}

export default Home