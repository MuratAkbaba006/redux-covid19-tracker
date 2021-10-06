import {configureStore} from '@reduxjs/toolkit'
import CovidSlice from './CovidSlice/CovidSlice'
export const store = configureStore({
  reducer:{
    covid : CovidSlice
  }
})