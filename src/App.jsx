import { useState } from 'react'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { Pokedex } from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import Error404 from './components/Error404'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokemonDetails />} />
        </Route>
      </Routes>   
    </div>
  )
}

export default App
