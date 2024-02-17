import React from 'react'
import NavBar from './componentes/NavBar/NavBar'

import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './componentes/Cart/Cart'
import { Checkout } from './componentes/Checkout/Checkout'



const App = () => {
  return (
    <>
      <BrowserRouter>
       <CarritoProvider>
        <NavBar />
        <Routes>
        <Route path='/' element={ <ItemListConteiner /> } />
        <Route path='/categoria/:idCategoria' element={ <ItemListConteiner />} />
        <Route path='/Item/:idItem' element={ <ItemDetailConteiner />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>

      </>
  )
}

export default App