import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../layout/Layout'

function ProductInfo() {
    const parass = useParams()
    console.log(parass)
  return (
    <Layout> 
      <div>
        <h1>jdfkd</h1>
        <h1>{parass.name}</h1>
    </div>
    </Layout>
  )
}

export default ProductInfo