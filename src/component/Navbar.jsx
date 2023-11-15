import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/navbar.css'
import { UserContext } from '../contex/UserContext'
import axios from 'axios'
import { useCart } from 'react-use-cart'

function Navbar() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const {UserLogged,setUserLogged,carts} = useContext(UserContext)
  // let testttt = carts ? carts?.data.items.length : 0
  // console.log(testttt)
  if(carts){
  console.log(carts?.data?.items.length)}
 
    const [showBar,setShowBar] = useState(false)
    const histoyy = useNavigate()
    const handaleShowBar = () => {
      setShowBar(!showBar)
    }// } ,{}, { withCredentials: true }
    const handleLogout = () => {
      const token = localStorage.getItem('jwtToken')
      axios.post('http://localhost:8080/users/logout',{
      
        
      },{
        headers: {
          Authorization: token
        }
      })
      .then((response) => {
        setUserLogged(response.data.LoggedIn)
       
        
      })
      .catch((error) => {
        console.error('An error occurred during logout:', error);
      });
      
    }
    const dropdownss = <div className="dropdown">
    {/* <button className="dropbtn">Dropdown</button> */}
    <Link   className="rounded-2xl flex justify-center  items-center text-black text-center  w-8 h-8 bg-white  ms-3" ><i className="bi bi-person"></i></Link>
    <div className="dropdown-content ">
    <a href="#">Link 1</a>
    <Link to={'/dashboard'}>Dashboard</Link>
    <Link  onClick={handleLogout} >Logout</Link>
    </div>
  </div>
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
        {
          UserLogged ?  dropdownss
          : <Link to={'/login'} className={window.location.pathname === "/contact" ? "activeLink" : ""}>Login</Link>
        }
            <div className="carts">
            <a className="rounded-2xl  flex justify-center items-center w-8 h-8 bg-white text-center text-black  ms-3" href="#"><i className="bi bi-bag"></i></a>
            <span className='carttcount'> {totalUniqueItems}  </span>
            <div className="testt">
              {/* <h1>{carts ? carts.data.items.length : 0} items</h1> {carts?.data?.bill} {carts ? carts?.data?.items.length : 0} */}
              <h1>subtotal:  </h1> 
              <h1>test</h1>
              <button>view Cart</button>
            </div>
            </div>
            
          </div>
      </nav>
      </div>
      {/*   */}
      {/* <Link to={'/login'} className={window.location.pathname === "/contact" ? "activeLink" : ""}>Login</Link> */}
      {/* <Link   className="rounded-2xl flex justify-center items-center text-black text-center  w-8 h-8 bg-white  ms-3" ><i className="bi bi-person"></i></Link> */}
    </header>
    </>
  )
}

export default Navbar