import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {}
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateDetails: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { updateDetails } = productSlice.actions
export default productSlice.reducer