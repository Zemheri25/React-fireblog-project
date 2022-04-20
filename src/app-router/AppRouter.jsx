import React from 'react'
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Login from "../Pages/Login"
import Navbar from "../components/Navbar"
import Register from '../Pages/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element = {<Dashboard />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/register' element = {<Register />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter