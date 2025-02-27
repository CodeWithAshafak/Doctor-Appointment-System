import React from 'react'
// import TopMenu from './componets/topmenu'


import {Outlet} from "react-router-dom"
import Footer from './componets/Footer'
import TopMenu from './componets/topmenu'
const Layout = () => {
  return (
    <>
    <TopMenu/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout