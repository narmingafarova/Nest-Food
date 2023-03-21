import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import { ProductProvider } from './context/ProductContext'
import Home from './pages/Home'
import MainFooter from './components/footer/MainFooter'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <TopHeader />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <MainFooter />
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App