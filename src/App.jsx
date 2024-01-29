import React from 'react'
import NavBar from './componentes/NavBar/NavBar'

import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={ <ItemListConteiner /> } />
        <Route path='/categoria/:idCategoria' element={ <ItemListConteiner />} />
        <Route path='/Item/:idItem' element={ <ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>

      </>
  )
}

export default App