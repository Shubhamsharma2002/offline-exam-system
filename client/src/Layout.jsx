import React from 'react'
import Navbar from './components/layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/layouts/Footer'



const Layout = () => {
  return (
    /* flex-col: Stack children vertically
       min-h-screen: Make the container at least the full height of the screen
    */
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      {/* flex-grow: This pushes the footer down by taking up all available space 
      */}
      <main className='grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout