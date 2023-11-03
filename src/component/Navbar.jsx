import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

function Navbar() {
  
    const [showBar,setShowBar] = useState(false)
    const handaleShowBar = () => {
      setShowBar(!showBar)
    }
  return (
    <>
      <header className='fixed-nav'>
      
      <div className="container  ">
      <nav className='navbar '>
        
      <div onClick={handaleShowBar} className={`hamburger ${showBar ? 'active' : ""}`}> 
            
            <span className="bar bg-white"></span>
            <span className="bar bg-white" ></span>
            <span className="bar bg-white"></span>
         </div>
        {/* <a href="" className='logo'>Logo</a> */}
        <Link className='logo' to={'/'}>Eccommece</Link>
        {/* <a href="/">Logo</a> */}
        <ul className={`nav-menu ${showBar ? 'active' : ""}`}> 
            <li><Link to={'/'} className={window.location.pathname === "/" ? "activeLink" : ""}>Home</Link></li>
            <li><Link to={'/product'} className={window.location.pathname === "/product" ? "activeLink" : ""}>Product</Link></li>
            <li><Link to={'/contact'} className={window.location.pathname === "/contact" ? "activeLink" : ""}>Contact</Link></li>
        </ul>
       
        
         <div  className="user-cart d-flex ms-2">
            <a   className="rounded-2xl flex justify-center items-center text-black text-center  w-8 h-8 bg-white  ms-3" href=""><i className="bi bi-person"></i></a>
            <a className="rounded-2xl  flex justify-center items-center w-8 h-8 bg-white text-center text-black  ms-3" href=""><i className="bi bi-bag"></i></a>
          </div>
      </nav>
      </div>

    </header>
    </>
  )
}

export default Navbar