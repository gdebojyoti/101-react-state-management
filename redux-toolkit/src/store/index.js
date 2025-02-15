import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './slices/homeSlice'
import cartReducer from './slices/cartSlice'
import productSlice from './slices/productSlice'

const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer,
    product: productSlice
  }
})

export default store