import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/Login/LoginForm';
import Admin from './pages/Admin/Admin';
import Customer from './pages/Customer/Customer';
import Staff from './pages/Staff/Staff';
import Signup from './pages/Signup';
import CreateBranch from './pages/Admin/AdminRoutes/CreateBranch';
import CreateStaff from './pages/Admin/AdminRoutes/CreateStaff';
import DeletBranch from './pages/Admin/AdminRoutes/DeletBranch';
import DeleteStaff from './pages/Admin/AdminRoutes/DeleteStaff';
import TransactionsLog from './pages/Admin/AdminRoutes/TransactionsLog';
import './pages/error.css';
import AdminWelcome from './pages/Admin/AdminRoutes/AdminWelcome';
import './pages/layouts.css'
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminWelcome />} />
          <Route path="create-branch" element={< CreateBranch />} />
          <Route path="delete-branch" element={<DeletBranch />} />
          <Route path="create-staff" element={<CreateStaff />} />
          <Route path="delete-staff" element={<DeleteStaff />} />
          <Route path="transactions-log" element={<TransactionsLog />} />
        </Route>
        {/* Staff routes */}
        <Route path="/staff" element={<Staff />} />
        {/* Customer routes */}
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </>
  )
}

export default App




