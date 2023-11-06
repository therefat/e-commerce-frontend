import React, { useContext, useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios'
import { UserContext } from '../contex/UserContext'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [user,setUser] = useState([])
  const {UserLogged,setUserLogged} = useContext(UserContext)
  const [errors,setErrors] = useState([])
  const history = useNavigate()
  // const hiss = 
  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users/login",{
      email : email,
      password: password,
      withCredentials: true
    })
    .then(response => {
     
      setUserLogged(response.data) 
      console.log(response)
      history('/')
      localStorage.setItem('jwtToken',response.data.token)
      axios.defaults.headers.common= 'Bearer' + response.data.token
    })
    .catch(error => {
    setErrors(error)
      console.log(error.message)
    })
    .catch(err => {
      console.log(err)
      setErrors(err)
    })
    
  }
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user")
  //   if(loggedInUser){
  //     const foundUser = JSON.stringify(loggedInUser)
  //     setUserLogged(foundUser)
  //   }
  // },[])
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
               
                <Link to={'/signup'}>You Have A No Accoutn Sign Up </Link>
            </div>

              {UserLogged ? <h1>Login Succeful</h1> : <h1>Login</h1>}
            </div>
        </Layout>
    </>
  )
}

export default Login