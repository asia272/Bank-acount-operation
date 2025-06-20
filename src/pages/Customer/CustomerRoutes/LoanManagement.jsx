import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { applyLoan } from '../../../features/customer/customerSlice';
import "./LoanManagement.css";

const LoanManagement = () => {
  const dispatch = useDispatch();
  const loans = useSelector(state => state.customer.loans);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(applyLoan(data));
    reset();
    toast.success("Loan application submitted!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className='loan-manage-container'
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="heading">
          <h3>Apply For New Loan</h3>
        </div>

        {/* Amount */}
        <div className={`form-field ${errors.amount ? 'input-error' : ''}`}>
          <label>Amount (PKR)</label>
          <div>
            <input
              type='number'
              {...register('amount', { required: 'Please enter your loan amount' })}
            />
            {errors.amount && <p>{errors.amount.message}</p>}
          </div>
        </div>

        {/* Tenure */}
        <div className={`form-field ${errors.tenure ? 'input-error' : ''}`}>
          <label>Tenure (Month)</label>
          <div>
            <input
              type='number'
              {...register('tenure', { required: "Please enter you'r loan tenure" })}
            />
            {errors.tenure && <p>{errors.tenure.message}</p>}
          </div>

        </div>

        {/* Purpose */}
        <div className={`form-field ${errors.purpose ? 'input-error' : ''}`}>
          <label>Purpose</label>
          <select
            {...register('purpose', { required: 'Purpose is required' })}
          >
            <option value="Education">Education</option>
            <option value="Personal">Personal</option>
            <option value="Bills">Bills</option>
            <option value="Business">Business</option>
            <option value="Vehicle">Vehicle</option>
          </select>
          {errors.purpose && <p>{errors.purpose.message}</p>}
        </div>

        <button type="submit">Submit Application</button>
      </form>

      {/* Display loan applications */}
      <div className='display-loans'>
        <div className="loan-applications">
          <div>
            <h3>Loan Applications</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Amount</th>
                  <th>Tenure (Month)</th>
                  <th>Purpose</th>
                  <th>Apply Date</th>
                  <th>Is Approved</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{loan.amount}</td>
                    <td>{loan.tenure}</td>
                    <td>{loan.purpose}</td>
                    <td>{loan.date}</td>
                    <td>{loan.isApproved ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
        <div>
          <h5>Total application:{loans.length}</h5>
          <h5>Remaining amount: PKR 0</h5>
        </div>

      </div>

    </motion.div>
  );
};

export default LoanManagement;
