import React from 'react'

import {Outlet,Navigate} from 'react-router-dom'

function PrivetOulet() {
    const auth = true
  return auth ? <Outlet/> : <Navigate to='/login'></Navigate>  
}

export default PrivetOulet