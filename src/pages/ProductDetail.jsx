import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import '../assets/css/Product/productDetail.css'
import { UserContext } from '../contex/UserContext'
import axios from 'axios'

function ProductDetail({item}) {
  const {carts,setCarts} = useContext(UserContext)
    const addToCarts = () => {
      setCarts(carts + 1)
      const token = localStorage.getItem("jwtToken");
      axios.post('http://localhost:8080/cart',{
        itemId : item._id,
        quantity: carts
      },{headers: {
        Authorization: token,
        
      },})
      .then((response) => {
        console.log(response)
      })
      .catch((err) =>{
        console.log(err)
      })
    }
  return (
    
      
        <div className='productCard'>
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
        <h1>Price {item.price}</h1>
        <div className='btns'>
          <button onClick={addToCarts}>Add To Cart</button>
          <button>Buy Now</button>
        </div>
    </div>
    
    
  )
}

export default ProductDetail