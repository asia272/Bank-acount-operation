import React from 'react'
import Logout from '../Logout/Logout'

const Customer = () => {
  return (
    <div>
      <div className="main-container">
        <div className="header">
          <h1>Customer</h1>
        </div>
        <div className="sidebar">
          <div className='actions-btns'>
            <button>Dashboard</button>
            <button>Send Money</button>
            <button>Add mony</button>
            <button>Transactions</button>
            <button>Pay Bills</button>
            <button>Loan Management</button>
            <button>Profile Setting</button>
          </div>
          <div className="log-out-btn">
            <Logout/>
          </div>
        </div>
        <div className="main-content">maincontent is here</div>
      </div>
    </div>
  )
}

export default Customer
