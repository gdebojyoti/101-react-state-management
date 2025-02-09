import { useSelector, useDispatch } from 'react-redux'

import Nav from "../../components/Nav"
import { updateAllProducts } from '../../store/slices/homeSlice'
import { useEffect } from 'react'

const HomePage = () => {
  const allProducts = useSelector((state) => state.home.allProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateAllProducts([1, 2, 3]))
  }, [])

  console.log(allProducts)
  return (
    <div>
      <Nav />
      <h1>Home page</h1>
    </div>
  )
}

export default HomePage