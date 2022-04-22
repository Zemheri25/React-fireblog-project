import React from 'react'
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Login from "../Pages/Login"
import Navbar from "../components/Navbar"
import Register from '../Pages/Register';
import Profile from "../Pages/Profile";
import NewBlog from "../Pages/NewBlog";
import Details from "../Pages/Details";
import UpdateBlog from '../Pages/UpdateBlog';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element = {<Dashboard />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/register' element = {<Register />}/>
        <Route path='/profile' element = {<Profile />}/>
        <Route path='/newblog' element = {<NewBlog />}/>
        <Route path='/details' element = {<Details />}/>
        <Route path='/updateblog' element = {<UpdateBlog />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter