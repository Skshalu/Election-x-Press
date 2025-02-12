import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router'
import Index from './pages/Index'
import Services from './pages/Services'
import ContactUs from './components/ContactUs'
import ElectionXPress from './pages/ElectionXPress'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <ElectionXPress/>
      {/* <Index/> */}
    </>
  )
}

export default App
