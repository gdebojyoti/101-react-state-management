import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'

import Header from "src/components/Header"

import fetchData from './fetchData'

const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    fetchData(dispatch, id)
  }, [])

  return (
    <div>
      <Header />
      <h1>Product page</h1>
      <div>
        Book ID: {id}
      </div>
    </div>
  )
}

export default Product