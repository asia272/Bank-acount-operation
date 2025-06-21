import React from 'react';
import { useSelector } from 'react-redux';
import "../Customer.css"

const CustomerDashboard = () => {
  const user = useSelector(state => state.auth.user);
  const customer = useSelector(state => state.customer);

  if (!user) {
    return <p>No customer information available.</p>;
  }

  return (
<div className='customer-dashboard'>
  <div className='balanc-div'>
    <h2>PKR {customer.balance}</h2>
    <p>Total Balance</p>
  </div>

  <div>
    <h2>{user.accountNumber}</h2>
    <p>Account Number</p>
  </div>

  <div>
    <h2>{user.name}</h2>
    <p>Customer Name</p>
  </div>

  <div>
    <h2>{user.branchId}</h2>
    <p>Branch ID</p>
  </div>

  <div>
    <h2>{user.accountType}</h2>
    <p>Account Type</p>
  </div>

  <div>
    <h2>{user.accountOpeningDate}</h2>
    <p>Account Opening Date</p>
  </div>

  <div className='total-loans'>
    <h2>
      PKR {customer.loans.reduce((total, loan) => total + parseFloat(loan.amount), 0)}
    </h2>
    <p>Outstanding Loan</p>
  </div>
</div>

  );
};

export default CustomerDashboard;
