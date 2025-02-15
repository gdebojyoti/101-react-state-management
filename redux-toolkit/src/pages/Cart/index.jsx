import { useSelector } from "react-redux"

import Header from "../../components/Header"

const Cart = () => {
  const items = useSelector(state => state.cart.items)
  const title = useSelector(state => state.home.sectionTitle)
  console.log(items, title)
  
  return (
    <div>
      <Header />
      <h1>Cart page</h1>
    </div>
  )
}

export default Cart