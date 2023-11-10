import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios'
import ProductDetail from './ProductDetail'

function Product() {
  const  [products,setProduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/items/')
    .then((response) => {
      setProduct(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  console.log(products)
  return (
    <Layout>
        <div className='container   m-auto'>
          <h1 className='text-3xl mt-3 text-center'>Products</h1>
          <div className="product-detail">
            {
              products.map((item) => <ProductDetail item={item}/>)
            }
          </div>
        </div>
    </Layout>
  )
}

export default Product