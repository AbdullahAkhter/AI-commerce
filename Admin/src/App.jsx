import React from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
import {Routes,Route, useLocation, Navigate} from "react-router-dom"
import Add from './Pages/Add'
import List from './Pages/List'
import { useUserContext } from './context/userContext'
function App() {
  const location=useLocation();
  const{userdata}= useUserContext()
  return (
    <div>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />
        <Route
        path='/login'
        element={<Login/>}/>
         <Route
        path='/add'
        element={<Add/>}/>
         <Route
        path='/list'
         element={<List/>}/>

        
      </Routes>
    </div>
  )
}

export default App