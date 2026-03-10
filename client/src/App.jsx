import React from 'react'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    // 'antialiased' font ko smooth banata hai Tailwind mein
    <div className="antialiased">
     <AppRoutes/>
    </div>
  )
}

export default App