import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Add from './pages/Add'
import './App.css';
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      
        <Route  element={<Home/>} path='/'/>
         <Route element={<Admin/>} path='/admin'></Route>
          <Route element={<Add/>} path='/add'></Route>
          <Route element={<Contact/>} path='/contact'></Route>
       

      
    </Routes>
  )
}

export default App