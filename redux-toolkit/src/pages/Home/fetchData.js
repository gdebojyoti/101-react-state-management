import { updateAllProducts } from '../../store/slices/homeSlice'

import products from 'src/data/products.json'

// hit API to get list of all products
export default function fetchData (dispatch) {
  setTimeout(() => {
    dispatch(updateAllProducts(products))
  }, 1000)
}