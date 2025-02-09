import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header'

import { updateAllProducts, updateSectionTitle } from '../../store/slices/homeSlice'

const HomePage = () => {
  /*
   * NOTE: DON'T DO THIS
   * this will cause component to re-render if any of the items (allProducts, sectionTitle, etc) inside home's initial state is updated - something that is not desirable
   * // const { allProducts } = useSelector((state) => state.home)
   */
  
  const allProducts = useSelector((state) => state.home.allProducts)
  // const sectionTitle = useSelector((state) => state.home.sectionTitle)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateAllProducts([1, 2, 3]))
    setTimeout(() => {
      console.log('updating section title from setTimeout..')
      dispatch(updateSectionTitle('It\'s Sale Time!'))
    }, 2000)
  }, [])

  console.log(allProducts)
  // console.log(allProducts, sectionTitle)
  
  return (
    <div>
      <Header navKey='home' />
      <h1>Home page</h1>
    </div>
  )
}

export default HomePage