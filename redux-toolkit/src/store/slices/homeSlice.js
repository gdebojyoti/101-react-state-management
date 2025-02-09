import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: ['some']
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateAllProducts: (initialState, action) => {
      const { allProducts } = initialState
      console.log("i was called..")
      initialState.allProducts = [
        ...initialState.allProducts,
        ...action.payload
      ]
    }
  }
})

export const { updateAllProducts } = homeSlice.actions
export default homeSlice.reducer