import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoritesPage from './pages/Favourites'
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation'

function App() {

  

  return (
    <>
    <Container fluid>
    <Router>
      <Navigation/>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      
      <Route path='/Favourites' element={<FavoritesPage/>}/>
      </Routes>
    </Router>
    
    </Container>
    </>
   
  )
}

export default App
