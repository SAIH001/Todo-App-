import React from 'react'
import './Stylesheet.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Registration from './Pages/Registration'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'


import Admin from './AdminPanel/Pages/Admin'

const App = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admindashboard' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App