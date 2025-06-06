import React from 'react'
import Logout from '../Logout/Logout'

const Staff = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1> STUFF DASHBOARD</h1>
      </div>
      <div className="sidebar">
        <div className='actions-btns'>
          <button>Account Applications</button>
          <button>Loan Applications</button>
          <button>Customer Data</button>
          <button>Acount Data</button>
          <button>Staff Directory</button>
          <button>Edit Profile</button>
        </div>
        <div className="log-out-btn">
          <Logout />
        </div>
      </div>
      <div className="main-content">maincontent is here</div>
    </div>
  )
}

export default Staff
