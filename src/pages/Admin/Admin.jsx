import React from 'react';
import Logout from '../Logout/Logout';
import { Outlet, NavLink } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1> ADMIN DASHBOARD</h1>
      </div>
      <div className="sidebar">

        <div className='actions-btns'>
          <NavLink to="create-staff" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Create Staff</button>
          </NavLink>
          <NavLink to="update-staff" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Update Staff</button>
          </NavLink>
          <NavLink to="delete-staff" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Delete Staff</button>
          </NavLink>
          <NavLink to="create-branch" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Create Branch</button>
          </NavLink>
          <NavLink to="update-branch" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Update Branch</button>
          </NavLink>
          <NavLink to="delete-branch" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Delete Branch</button>
          </NavLink>
          <NavLink to="transactions-log" className={({ isActive }) => isActive ? 'active' : ''}>
            <button>Transactions Log</button>
          </NavLink>
        </div>
        <Logout />
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
