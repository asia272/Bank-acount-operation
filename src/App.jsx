import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/Login/LoginForm';
import Admin from './pages/Admin/Admin';
import Customer from './pages/Customer/Customer';
import Staff from './pages/Staff/Staff';
import Signup from './pages/Signup';
import './pages/error.css';
import './pages/layouts.css'
import './App.css';

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>
    </>
  )
}

export default App
  
        


