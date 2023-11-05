import React from 'react'
import Layout from './Layout'
import DashSideBar from '../component/DashSideBar'

function DashLayot({children}) {
  return (
    <div className="container">
            <div className="sidebar">
                <DashSideBar></DashSideBar>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
  )
}

export default DashLayot