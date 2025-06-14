import React, { useState, useEffect } from 'react'
import "./CustomerTransaction.css"
import { useSelector } from "react-redux";

const CustomerTransactions = () => {
  const allTransactions = useSelector(state => state.customer.transactions);
  const [displayTransactions, SetDisplayTransactions] = useState([]);

  useEffect(() => {
    SetDisplayTransactions(allTransactions);
  }, [allTransactions]);

  const handleOnChange = (type) => {
    if (type === "all") {
      SetDisplayTransactions(allTransactions);
    } else {
      const selectedTransactions = allTransactions.filter(tran => tran.type === type);
      SetDisplayTransactions(selectedTransactions);
    }
  };

  return (
    <div className="transactions-container">
      <h3>Transaction History</h3>
      <div className='transaction-type'>
        <label htmlFor="type">Type:</label>
        <select id="type"
          onChange={(e) => handleOnChange(e.target.value)}>
          <option value="all">All</option>
          <option value="send">Send</option>
          <option value="pay-bill">pay-bills</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Counter-party A/C</th>
            <th>Counter-party Name</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {displayTransactions.map((tran, idx) =>
            <tr key={idx}>
              <td>{tran.type}</td>
              <td>{tran.amount}</td>
              <td>{tran.description}</td>
              <td>{tran.counterpartyAccount}</td>
              <td>{tran.counterpartyName}</td>
              <td>{tran.date}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>


  )
}

export default CustomerTransactions
