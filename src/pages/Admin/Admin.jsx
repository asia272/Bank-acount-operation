import React from 'react';
import Logout from '../Logout/Logout';

const Admin = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1> ADMIN DASHBOARD</h1>
      </div>
      <div className="sidebar">
        <div className='actions-btns'>
          <button>Create Staff</button>
          <button>Update Staff</button>
          <button>Delete Staff</button>
          <button>Create Branch</button>
          <button>Update Branch</button>
          <button>Delte Branch</button>
          <button>Transactions Log</button>
        </div>
          <Logout />
      </div>
      <div className="main-content">maincontent is here</div>
    </div>

  )
}

export default Admin
