import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState(0)
    const [newUsers,setUsers] = useState()
    const hisotoyr = useNavigate()

    const submitForm = (e) => {
        e.preventDefault(e);
        axios.post('http://localhost:8080/users',{
            name: name,
            email: email,
            password: password
        })
        .then(response => {
            setUsers(response)
            hisotoyr('/login')

        })
        .catch((error) => {
            console.log(error)
        })
        
    }
  return (
    <Layout> 
        <div className="mt-3"> 
        <div className="flex flex-col w-1/2 m-auto shadow-lg shadow-gray-400 p-5 justify-items-center ">
            <h1 className='text-2xl text-center'>Sign Up</h1>
            <form method='post' onSubmit={(e) => submitForm(e)} className='flex flex-col'>
            <div className='mb-3'>
                 <label htmlFor="name" className='block'>Enter Your Name</label>
                  <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} id='name' className='border rounded-lg border-gray-900' />
                 </div>
                 <div className='mb-3'>
                 <label htmlFor="email" className='block'>Enter Your Email</label>
                  <input type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} id='email' className='border rounded-lg border-gray-900' />
                 </div>
                 <div className='mb-3'>
                 <label htmlFor="password" className='block'>Enter Your Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' id='password' className='border rounded-lg border-gray-900' />
                 </div>
                 <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>
                </form>
               
                <Link to={'/login'}>You Have A An Account Login Here </Link>
        </div>
        </div>
    </Layout>
  )
}

export default SignUp