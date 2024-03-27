import { useState } from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Product from './component/Product'
import Cart from './component/Cart'
import Navbar from './component/Navbar'


function App() {
 

  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Product/>}></Route>
        <Route path='/cart' element= {<Cart/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
