import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import { Outlet } from 'react-router'

function App() {
  
  return (
    <>
    <NavBar />
      <Outlet />
    </>
    
  )
}

export default App
