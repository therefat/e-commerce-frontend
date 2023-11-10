import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

function ProductDetail({item}) {
    
  return (
    
      <Link to={"/" + item.name}>
        <div className='productCard'>
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
        <h1>Price {item.price}</h1>
    </div>
    </Link>
    
  )
}

export default ProductDetail