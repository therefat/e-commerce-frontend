import { useEffect, useState } from 'react'

import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Login from './pages/Login'

import PrivetOulet from './component/PrivetOulet'
import { UserContext } from './contex/UserContext'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)
  const [UserLogged,setUserLogged] = useState()
  

  return (
    <>
    <UserContext.Provider value={{UserLogged,setUserLogged}}>
    <Routes>
    
    
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
   
    <Route path='/*' element={<PrivetOulet></PrivetOulet>}>
      <Route path='product' element={<Product/>}/>
    </Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
      
    
  
   
     
     </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App
