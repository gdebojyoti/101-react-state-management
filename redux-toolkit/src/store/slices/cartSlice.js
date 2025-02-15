import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      key: 'hp1',
      count: 1
    }
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (initialState, action) => {
      const { key: itemKey } = action.payload

      // check if item already exists in cart
      const item = initialState.items.find(({ key }) => key === itemKey)

      // if so, increment the count
      if (item) {
        item.count++
        return
      }

      // otherwise, add item to items
      initialState.items = [
        ...initialState.items,
        {
          key: itemKey,
          count: 1
        }
      ]
    },
    removeItem: (initialState, action) => {
      const index = initialState.items.findIndex(({ key }) => key === itemKey)
      const item = initialState.items[index]
      
      // if multiple copies exist, decrement the count
      if (item.count > 1) {
        item.count--
        return
      }

      // else remove the item
      initialState.items.splice(index, 1)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer