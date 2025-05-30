import React, { useState } from 'react';
import "./BankAccount.css";
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import {
  deposit as depositAction,
  withdraw as withdrawAction,
} from '../../features/card/cardSlice';
import Loan from './Loan';
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
      toast.success(`${amount} rupees deposit successful!`);
      setDepositAmount('');
    } else {
      toast.error("0 rupee can't be deposited");
    }
  };

  const remove = () => {
    const amount = Number(withdrawAmount);

    if (!withdrawAmount || isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid withdrawal amount!');
      return;
    }

    if (amount <= balance) {
      dispatch(withdrawAction(amount));
      toast.success(`₹${amount} withdrawn successfully!`);
      setWithdrawAmount('');
    } else {
      toast.error('Insufficient balance!');
    }
  };
  return (
    <div className='bank-account'>
      <h1 className='heading'>👋 Welcome <span>{userInfo.name}</span></h1>
      <div>
        <div>
          <div className='operation-heading'>
            <h3>Your Account Operation</h3>
            <h1> <span>{balance}$</span></h1>
          </div>
          <div className='deposit-amount'>
            <div>
              <label htmlFor="deposit">Deposit</label>
              <input
                type="number"
                id="deposit"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
            </div>

            <button onClick={add}>Deposit</button>
          </div>

          <div className='withdraw'>
            <div>
              <label htmlFor="withdraw">Withdraw</label>
              <input
                type="number"
                id="withdraw"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
            </div>
            <button onClick={remove}>Withdraw</button>
          </div>
        </div>


        <Loan />
      </div>

    </div>
  );
};

export default BankAccount;
