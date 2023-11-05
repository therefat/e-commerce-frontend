import React from 'react'
import { Link } from 'react-router-dom'

function DashSideBar() {
  return (
    <div className='bg-gray-950 text-center h-72 pt-8 text-white'>
        <Link className='block mt-2'  to={'/profile'}>Profile</Link>
        <Link className='block mt-2' to={'/products'}>Products</Link>
        <Link className='block mt-2' to={'/addproduct'}>Add Product</Link>
    </div>
  )
}

export default DashSideBar