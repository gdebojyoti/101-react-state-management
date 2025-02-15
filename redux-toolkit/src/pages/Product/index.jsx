import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Header from "src/components/Header"

import fetchData from './fetchData'

const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  // do this only if 100% sure that all fields (isLoaded, data) will be updated together - thereby not causing unnecessary re-renders
  const { isLoaded, data } = useSelector((state) => state.product)

  useEffect(() => {
    fetchData(dispatch, id)
  }, [])

  console.log(isLoaded, data)

  const { title, thumbnailUrl, price } = data || {}

  return (
    <div>
      <Header />

      {!isLoaded && <div>Loading..</div>}

      {isLoaded && (
        !data
          ? (<div>No product found for ID {id}</div>)
          : (<div>
              <h1>{title}</h1>
              <img src={thumbnailUrl} />
              <div>Price: USD {price}</div>
            </div>)
      )}
    </div>
  )
}

export default Product