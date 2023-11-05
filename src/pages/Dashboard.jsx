import React from 'react'
import Layout from '../layout/Layout'
import DashSideBar from '../component/DashSideBar'
import DashLayot from '../layout/DashLayot'

function Dashboard({children}) {
  return (
    <Layout>
        <div className="container  mt-1 flex flex-row">
            <div className="sidebar basis-1/6">
                <DashSideBar></DashSideBar>
            </div>
            <div className="content basis-4/6">
            {children}
            </div>
        </div>
       
 
        
    </Layout>
  )
}

export default Dashboard