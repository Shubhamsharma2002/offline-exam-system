import React from 'react'
import { Outlet } from 'react-router-dom'
// import Sidebar from './Sidebar'

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Sidebar - Fixed width on desktop */}
      <div className='hidden md:block w-64 bg-slate-900 text-white'>
        {/* <Sidebar /> */}
        sidebar
      </div>

      <div className='flex flex-col flex-1'>
        {/* Optional: Aap yahan ek chota "AdminHeader" bhi dal sakte hain profile toggle ke liye */}
        <header className='h-16 bg-white shadow-sm flex items-center px-6'>
          <h1 className='text-xl font-bold text-gray-800'>Admin Panel</h1>
        </header>

        {/* Dashboard Content */}
        <main className='p-6 overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout