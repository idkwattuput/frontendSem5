import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <div className='font-poppins bg-slate-200'>
        <Header/>
        <Outlet/>
        <hr className='border-slate-800'/>
        <Footer/>
    </div>
  )
}

export default Layout