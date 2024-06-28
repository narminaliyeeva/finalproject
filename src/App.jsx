import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


import Home from './pages/Home'
import Admin from './pages/Admin'
import Add from './pages/Add'
import './App.css';
import Contact from './pages/Contact'
import More from './pages/More';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <Routes>
      
        <Route element={<Home/>} path='/'/>
         <Route element={<Admin/>} path='/admin'></Route>
         <Route element={<Login/>} path='/login'></Route>
         <Route element={<UserProfile/>} path='/userpofile'></Route>
          <Route element={<Add/>} path='/add'></Route>
          <Route element={<More/>} path='/more'></Route>
          <Route element={<Contact/>} path='/contact'></Route>
       

      
    </Routes>
  )
}

export default App