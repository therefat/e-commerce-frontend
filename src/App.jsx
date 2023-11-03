import { useState } from 'react'

import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
      <h1 className='text-lg text-red-500 text-center'>Home Page</h1>
       
    </>
  )
}

export default App
