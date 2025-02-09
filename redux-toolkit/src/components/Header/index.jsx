import Nav from '../Nav'
import MiniCart from '../MiniCart'

const Header = ({ navKey }) => {
  return (
    <header>
      <Nav id={navKey} />
      <MiniCart />
    </header>
  )
}

export default Header