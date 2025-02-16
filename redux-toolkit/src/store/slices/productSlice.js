import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoaded: false,
  data: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateDetails: (state, action) => {
      const { isLoaded, data } = action.payload
      state.isLoaded = isLoaded
      state.data = data
    }
  }
})

export const { updateDetails } = productSlice.actions
export default productSlice.reducer