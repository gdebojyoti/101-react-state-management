import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: [],
  sectionTitle: 'All products'
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateAllProducts: (initialState, action) => {
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