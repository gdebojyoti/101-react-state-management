import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from 'src/components/Header'
import ProductCard from 'src/components/ProductCard'

import fetchData from './fetchData'
import './style.css'

const HomePage = () => {
  /*
   * NOTE: DON'T DO THIS
   * this will cause component to re-render if any of the items (allProducts, sectionTitle, etc) inside home's initial state is updated - something that is not desirable
   * // const { allProducts } = useSelector((state) => state.home)
   */
  
  const allProducts = useSelector((state) => state.home.allProducts)
  
  const dispatch = useDispatch()

  useEffect(() => {
    fetchData(dispatch)
  }, [])

  console.log(allProducts)
  
  return (
    <div>
      <Header navKey='home' />
      <h1>Home page</h1>
      <div className='home__products'>
        {allProducts.map((data) => <ProductCard key={data.key} data={data} />)}
      </div>
    </div>
  )
}

export default HomePage