import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import '../assets/css/Product/productDetail.css'

function ProductDetail({item}) {
    
  return (
    
      <Link to={"/" + item.name}>
        <div className='productCard'>
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
        <h1>Price {item.price}</h1>
        <div className='btns'>
          <button>Add To Cart</button>
          <button>Buy Now</button>
        </div>
    </div>
    </Link>
    
  )
}

export default ProductDetail