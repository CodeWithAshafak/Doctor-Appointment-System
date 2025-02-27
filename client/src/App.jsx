import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Searchdoctor from './pages/searchdoctor'
import Doctorlogin from './pages/Doctorlogin'


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Layout/>}>
      <Route index  element={<Home/>} />
      <Route path='home'  element={<Home/>} />
      <Route path='searchdoctor'  element={<Searchdoctor/>} />
      <Route path='doctorlogin'  element={<Doctorlogin/>} />
     


        
      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App