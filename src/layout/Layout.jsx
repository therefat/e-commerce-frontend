import React from 'react'
import Navbar from '../component/Navbar'

function Layout({children}) {
  return (
    <> 
        <Navbar></Navbar>
        {children}
    </>
  )
}

export default Layout