import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import Login from './component/login/Login'
import Home from './component/home/Home'
import Signup from './component/signup/Signup'
import {BrowserRouter } from 'react-router-dom'
const App = () => {
 const user = localStorage.getItem("token")
  return (
    <> 
    <BrowserRouter>
    <Routes>
      {user &&<Route path='/' element={ <Home /> } /> }
      <Route path='/login' element={  <Login />} />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/' element={<Navigate replace to="/login" />} />
      <Route path='/signup' element={user && <Navigate replace to='/' />} />
      <Route path='/' element={user ? <Home /> :<Login />} exact />
      <Route path='*' element={<Navigate to={user ? 'home' : '/'} />} />
    </Routes>
    </BrowserRouter>


 
    </>
    )
}

export default App