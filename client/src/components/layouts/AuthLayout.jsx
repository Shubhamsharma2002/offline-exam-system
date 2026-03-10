import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        {/* Logo ya Branding yahan aa sakti hai */}
        <h2 className="text-center text-2xl font-bold mb-6">Exam System</h2>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout