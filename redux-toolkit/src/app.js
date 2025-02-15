import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import store from './store'

const rootElm = document.getElementById('root')
const root = createRoot(rootElm)

const items = [
  {
    key: 'home',
    url: '/',
    component: Home
  },
  {
    key: 'product',
    url: '/product/:id',
    component: Product
  },
  {
    key: 'cart',
    url: '/cart',
    component: Cart
  },
  {
    key: 'profile',
    url: '/profile',
    component: Profile
  }
]

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {items.map(({ key, url, component }) => (
          <Route key={key} path={url} Component={component} />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
)