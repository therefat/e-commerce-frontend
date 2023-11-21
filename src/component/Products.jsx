import React, { useEffect, useState } from 'react'
import Dashboard from '../pages/Dashboard'
import axios from 'axios'

function Products() {
  const [products,setProducts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/items')
    .then((respone)=>{
      
      setProducts(respone.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  
  return (
    <Dashboard>
        <h1>Product List</h1>
        <div>

        
          
        </div>

    </Dashboard>
  )
}

export default Products