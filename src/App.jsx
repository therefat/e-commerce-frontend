import { useEffect, useState } from 'react'

import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Login from './pages/Login'

import PrivetOulet from './component/PrivetOulet'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <><Routes>
    
    
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
     
      <Route path='/*' element={<PrivetOulet></PrivetOulet>}>
        <Route path='product' element={<Product/>}/>
      </Route>
        
      
    
     
       
       </Routes>
    </>
  )
}

export default App
