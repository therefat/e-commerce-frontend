import React, { useContext } from 'react'

import {Outlet,Navigate} from 'react-router-dom'
import { UserContext } from '../contex/UserContext'

function PrivetOulet() {
    const auth = true
    const {UserLogged,setUserLogged} = useContext(UserContext)
  return UserLogged ? <Outlet/> : <Navigate to='/login'></Navigate>  
}

export default PrivetOulet