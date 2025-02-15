const Nav = () => {
  return (
    <nav>
      <ul>
        {items.map(({ key, url, label }) => (
          <li key={key}>
            <a href={url}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const items = [
  {
    key: 'home',
    url: '/',
    label: 'Home'
  },
  {
    key: 'cart',
    url: '/cart',
    label: 'Cart'
  },
  {
    key: 'profile',
    url: '/profile',
    label: 'Profile'
  }
]

export default Nav