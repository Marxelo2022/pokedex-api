import { configureStore } from '@reduxjs/toolkit'
import  NameTrainer  from './slices/nameTrainer.slice'

export default configureStore({
    reducer:{
      NameTrainer
    }
})