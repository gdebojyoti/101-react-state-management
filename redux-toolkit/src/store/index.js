import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './slices/homeSlice'
import cartReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer
  }
})

export default store