import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Yes from './components/Yes'

function App() {
  

  return (
    <>
    <Navbar/>
      <div className='app' >
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/haanBolDiya' element={<Yes/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
