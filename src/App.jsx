import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favourites from './pages/favourites'
import Home from './pages/home'

function App() {


  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      
      <Route path='/Favourites' element={<Favourites/>}/></Routes>
    </Router>
    
    
    </>
   
  )
}

export default App
