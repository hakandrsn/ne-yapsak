import { configureStore } from '@reduxjs/toolkit'
import foodSlice from './features/foods/foodSlice'

export const store = configureStore({
  reducer: {
    foods:foodSlice
  },
})