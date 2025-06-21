import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logout from '../../Logout/Logout';

const Beneficiary = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Beneficiary Dashboard</h1>
      </div>

      <div className="sidebar">
        <div className="actions-btns">
          <NavLink to="" end className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Dashboard</button>
          </NavLink>

          <NavLink to="upload-bills" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Receive Money</button>
          </NavLink>

          <NavLink to="bill-status" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Transactions</button>
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

export default Beneficiary;
