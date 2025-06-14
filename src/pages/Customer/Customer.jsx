import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logout from '../Logout/Logout';

const Customer = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Customer Dashboard</h1>
      </div>

      <div className="sidebar">
        <div className="actions-btns">
          <NavLink to="" end className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Dashboard</button>
          </NavLink>

          <NavLink to="send-money" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Send Money</button>
          </NavLink>
          <NavLink to="add-money" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Add Money</button>
          </NavLink>
          <NavLink to="transactions" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Transactions</button>
          </NavLink>
          <NavLink to="pay-bills" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Pay Bills</button>
          </NavLink>
          <NavLink to="loan-management" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Loan Management</button>
          </NavLink>
          <NavLink to="profile-setting" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Profile Setting</button>
          </NavLink>
        </div>
        <Logout />
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Customer;
