import { useEffect, useState } from 'react'

import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Login from './pages/Login'

import PrivetOulet from './component/PrivetOulet'
import { UserContext } from './contex/UserContext'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Products from './component/Products'
import AddProduct from './component/AddProduct'
import ProductInfo from './pages/ProductInfo'
import { CartProvider } from 'react-use-cart'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'


function App() {
  const [count, setCount] = useState(0)
  const [UserLogged,setUserLogged] = useState()
  const [carts,setCarts] = useState([])
  

  return (
    <>
    <ToastContainer/>
    <UserContext.Provider value={{UserLogged,setUserLogged,carts,setCarts}}>
      <CartProvider>
    <Routes>
    
    
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
   <Route exact path='/product' element={<Product></Product>}></Route>
    <Route path='/*' element={<PrivetOulet></PrivetOulet>}>
      {/* <Route path='product' element={<Product/>} /> */}
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='profile' element={<Profile/>}></Route>
      <Route path='products' element={<Products></Products>}></Route>
      <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
    </Route>
    <Route path='/:name' element={<ProductInfo/>}></Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    {/* <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route> */}
      
    
  
   
     
     </Routes>
     </CartProvider>
    </UserContext.Provider>
    
    </>
  )
}

export default App
