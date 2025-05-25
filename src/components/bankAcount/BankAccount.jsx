import React, { useState } from 'react';
import "./BankAccount.css";
import { useSelector, useDispatch } from 'react-redux';
import {
  deposit as depositAction,
  withdraw as withdrawAction,
  loan as loanAction,
  payLoan as payLoanAtion,
} from '../../features/card/cardSlice';

const BankAccount = ({ userInfo }) => {
  const balance = useSelector((state) => state.card.balance);
  const loanTaken = useSelector((state) => state.card.loan);
  const dispatch = useDispatch();

  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [loan, setLoan] = useState({
    loanAccount: 1,
    loanAmount: '',
    loanPurpose: ''
  });

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

  const reqLoan = () => {
    const { loanAccount, loanAmount, loanPurpose } = loan;
    const amount = Number(loanAmount);

    if (amount > 0 && loanAccount === 1) {
      dispatch(loanAction({ amount, purpose: loanPurpose }));

      setLoan((prevLoan) => ({
        ...prevLoan,
        loanAccount: 0,
        loanAmount: '',
        loanPurpose: '',
      }));
    } else {
      alert('Loan already taken.');
    }
  };
  let payLoan = () => {
    let { loanAccount } = loan;
    if (loanAccount === 0) {
      dispatch(payLoanAtion())
      setLoan((prevLoan) => ({
        ...prevLoan,
        loanAccount: 1
      }))
    }

  }

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

      <div>
        <label htmlFor="req">Request Loan:</label>
        <input
          type="text"
          placeholder="loan amount"
          id="req"
          value={loan.loanAmount}
          onChange={(e) =>
            setLoan((prevLoan) => ({
              ...prevLoan,
              loanAmount: e.target.value,
            }))
          }
        /><br />
        <input
          type="text"
          placeholder="loan purpose"
          value={loan.loanPurpose}
          onChange={(e) =>
            setLoan((prevLoan) => ({
              ...prevLoan,
              loanPurpose: e.target.value,
            }))
          }
          id="req"
        />
        <button onClick={reqLoan}>Request Loan</button>
        {loanTaken && loanTaken.amount > 0 && (
          <p>💰 Taken loan of ${loanTaken.amount} for: <span>{loanTaken.purpose}</span></p>
        )}
      </div>
      <div>
        <button onClick={payLoan}>Pay Loan</button>
      </div>
    </div>
  );
};

export default BankAccount;
