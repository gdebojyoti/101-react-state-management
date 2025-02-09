import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: ['some'],
  sectionTitle: 'All products'
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
    },
    updateSectionTitle (initialState, action) {
      initialState.sectionTitle = action.payload
    }
  }
})

export const { updateAllProducts, updateSectionTitle } = homeSlice.actions
export default homeSlice.reducer