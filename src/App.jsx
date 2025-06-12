import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Favourites from './pages/favourites'
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {

  

  return (
    <>
    <Container fluid>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      
      <Route path='/Favourites' element={<Favourites/>}/></Routes>
    </Router>
    
    </Container>
    </>
   
  )
}

export default App
