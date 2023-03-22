import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import { ProductProvider } from './context/ProductContext'
import Home from './pages/Home'
import MainFooter from './components/footer/MainFooter'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { CartProvider } from 'react-use-cart'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <TopHeader />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path="/:url" element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <MainFooter />
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App