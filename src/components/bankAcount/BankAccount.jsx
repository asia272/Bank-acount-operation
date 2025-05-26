import React, { useState } from 'react';
import "./BankAccount.css";
import { useSelector, useDispatch } from 'react-redux';
import {
  deposit as depositAction,
  withdraw as withdrawAction,
} from '../../features/card/cardSlice';
import Loan from './Loan'; // ✅ Corrected import path

const BankAccount = () => {
  const balance = useSelector((state) => state.card.balance);
  const userInfo = useSelector((state) => state.card.userInfo);
  const dispatch = useDispatch();

  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const add = () => {
    const amount = Number(depositAmount);
    if (amount > 0) {
      dispatch(depositAction(amount));
      setDepositAmount('');
    } else {
      alert("0 rupee can't be added");
    }
  };

  const remove = () => {
    const amount = Number(withdrawAmount);
    if (amount > 0 && amount <= balance) {
      dispatch(withdrawAction(amount));
      setWithdrawAmount('');
    } else {
      alert("Invalid rupees");
    }
  };

  return (
    <div className='bank-account'>
      <div className='heading'>
        <div>
          <h1>👋 Welcome <span>{userInfo.name}</span></h1>
          <h3>Your Account Operation</h3>
        </div>
        <div>
          <h1>{balance}$</h1>
        </div>
      </div>

      <div>
        <label htmlFor="deposit">Deposit:</label>
        <input
          type="number"
          id="deposit"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button onClick={add}>Deposit</button>
      </div>

      <div>
        <label htmlFor="withdraw">Withdraw:</label>
        <input
          type="number"
          id="withdraw"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button onClick={remove}>Withdraw</button>
      </div>

      <Loan />
    </div>
  );
};

export default BankAccount;
