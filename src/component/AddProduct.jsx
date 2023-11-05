import React, { useState } from 'react'
import Dashboard from '../pages/Dashboard'
import axios from 'axios'

function AddProduct() {
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [category,setCategory] = useState('')
    const [price,setPrice] = useState()
    const submitProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/items',{
            name : name,
            description: description,
            category: category,
            price: price,
            

        },)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
        console.log('test')
        const proo = {
            name : name,
            description: description,
            category: category,
            price: price
        }
        console.log(proo)
    }
  return (
    <Dashboard>
        <div className="container">
        <h1 className='text-center text-2xl'>Add Product</h1>
        <div className="product-add flex flex-col w-1/2 m-auto shadow-lg shadow-gray-400 p-5 justify-items-center">
            <form method='post' onSubmit={(e) => submitProduct(e)}>
                <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="name">Name:</label>
                <input type="text" className='border h-8 rounded-lg border-gray-900' name='name' value={name} id='name' onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="description">Description</label>
                <input type="text" className='border h-8 rounded-lg border-gray-900' name='description' value={description}  id='description' onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
               <div className="mb-3 flex flex-col gap-1">
               <label htmlFor="category">Category</label>
                <input type="text" className='border h-8 rounded-lg border-gray-900' name='category' value={category} id='category' onChange={(e) => {setCategory(e.target.value)}} />
               </div>
                <div className="mb-3 flex flex-col gap-1">
                <label htmlFor="price">Price</label>
                <input type="number" className='border h-8 rounded-lg border-gray-900' name='price' value={price} id='price' onChange={(e) => {setPrice(e.target.value)}} />
                </div>
                <button className='bg-gray-900 p-3  text-white rounded'   >Submit</button>
            </form>
        </div>
        </div>
    </Dashboard>
  )
}

export default AddProduct