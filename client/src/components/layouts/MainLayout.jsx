import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar />

      {/* grow allows this section to take up all available space */}
      <main className='grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <Outlet /> 
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout