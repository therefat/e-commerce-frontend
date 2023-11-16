import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import '../assets/css/Product/productDetail.css'
import { UserContext } from '../contex/UserContext'
import axios from 'axios'
import { useCart } from 'react-use-cart'

function ProductDetail({item}) {
  // console.log(item)
  const {addItem} = useCart()
  const {carts,setCarts,UserLogged} = useContext(UserContext)
    const addToCarts = (item,items) => {
      // setCarts(carts + 1)
      const token = localStorage.getItem("jwtToken");
      if(UserLogged){
        axios.post('http://localhost:8080/cart',{
        itemId : item._id,
        quantity: 1
      },{headers: {
        Authorization: token,
        
      },})
      .then((response) => {
        console.log(response)
      let datas = response.data.items.length
       setCarts(response)
      })
      .catch((err) =>{
        console.log(err)
      })
    } else {
      addItem(items)
    }
      }
      
  return (
    
      
        <div className='productCard'>
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
        <h1>Price {item.price}</h1>
        <div className='btns'>
          <button onClick={() => {
            const items = {
              id: item._id,
              category: item.category,
              createdAt : item.createdAt,
              description : item.description,
              image: item.image,
              name : item.name,
              owner : item.owner,
              price : item.price,
              updatedAt : item.updatedAt

            }
            console.log(items.id)
            addToCarts(item,items)
            
          }}>Add To Cart</button>
          <button>Buy Now</button>
        </div>
    </div>
    
    
  )
}

export default ProductDetail