import React from 'react'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';


const LoanManagement = () => {

  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {

  };
  return (
    <motion.form onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="heading">
        <h3>Apply For New Loan</h3>
      </div>

      {/* Amount */}
      <div className={`form-field ${errors.amount ? 'input-error' : ''}`}>
        <label>Amount (PKR)</label>
        <div>
          <input
            type='number'
            {...register('amount', {
              required: 'Please enter you amount',
            })}
          />

          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
      </div>
      {/* Amount */}
      <div className={`form-field ${errors.tenure ? 'input-error' : ''}`}>
        <label>Tenure (Month)</label>
        <div>
          <input
            type='number'
            {...register('tenure', {
              required: "Please enter you'r loan tenure",
            })}
          />

          {errors.tenure && <p>{errors.tenure.message}</p>}
        </div>
      </div>
      {/* Branch Field */}
      <div className={`form-field ${errors.purpose ? "input-error" : ""}`}>
        <label>Purpose</label>
        <div>
          <select
            {...register("purpose", {
              required: "purpose is required",
            })} >
            <option value="Education">Education</option>
            <option value="Personal">Bills</option>
            <option value="Business">Business</option>
            <option value="Vehicle">Vehicle</option>
          </select>
            {errors.purpose && <p>{errors.purpose.message}</p>}
        </div>
      </div>

      <button type="submit">Submit Application</button>
    </motion.form>
  )
}

export default LoanManagement
