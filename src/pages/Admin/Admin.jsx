import React from 'react';
import Logout from '../Logout/Logout';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1> ADMIN DASHBOARD</h1>
      </div>
      <div className="sidebar">

        <div className='actions-btns'>
          <Link to="create-staff">
            <button>Create Staff</button>
          </Link>
          <Link to="update-staff">
            <button>Update Staff</button>
          </Link>
          <Link to="delete-staff">
            <button>Delete Staff</button>
          </Link>
          <Link to="create-branch">
            <button>Create Branch</button>
          </Link>
          <Link to="update-branch">
            <button>Update Branch</button>
          </Link>
          <Link to="delete-branch">
            <button>Delete Branch</button>
          </Link>
          <Link to="transactions-log">
            <button>Transactions Log</button>
          </Link>
        </div>
        <Logout />
      </div>

      <div className="main-content">
             <Outlet />

      </div>
    </div>

  )
}

export default Admin
