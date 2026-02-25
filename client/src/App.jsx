import React from 'react'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/public/Home'
import About from './pages/public/About'
import Exams from './pages/public/Exams'
import Layout from './Layout'



const App = () => {
  return (
    <div>
     <Routes>
        {/* Wrap all routes inside the Layout route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exams" element={<Exams />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App