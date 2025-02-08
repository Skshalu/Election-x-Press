import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router'
import Index from './pages/Index'
import Services from './pages/Services'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
