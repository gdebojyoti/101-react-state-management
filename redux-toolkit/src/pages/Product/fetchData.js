import products from 'src/data/products.json'

import { updateDetails } from 'src/store/slices/productSlice'

export default function fetchData (dispatch, id) {
  const item = products.find(({ key }) => key === id)
  dispatch(updateDetails({
    isLoaded: true,
    data: item
  }))
}