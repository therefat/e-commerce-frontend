import React, { useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios'

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState(0)
  const [user,setUser] = useState([])
  const [isloggedIn,setLoggedIn] = useState()
  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users/login",{
      email : email,
      password: password
    })
    .then(response => {
     
      setLoggedIn(response.data) 
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  return (
    <>
        <Layout>
          <div className='mt-3'>
            <div className='flex flex-col w-1/2 m-auto shadow-lg shadow-gray-400 p-5 justify-items-center  '>
                <h1 className='text-2xl text-center'>Login</h1>
                <form method='post' onSubmit={(e) => submitForm(e)} className='flex flex-col'>
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
            </div>
              {isloggedIn ? <h1>Login Succeful</h1> : <h1>Login</h1>}
            </div>
        </Layout>
    </>
  )
}

export default Login