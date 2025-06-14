import React from 'react'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { sendMoney } from "../../../features/customer/customerSlice"

const SendMoney = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.customer.balance);

  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if (data.amount > balance) {
      toast.error("Insufficiant balance for this amount")
    } else {
      dispatch(sendMoney(data))
      toast.success("Mony Send successfully");
      reset();
      console.log(balance)
    }
  };
  return (
    <motion.form onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="heading">
        <h3>Receiver Details:</h3>
      </div>
      {/* Acount Number*/}
      <div className={`form-field ${errors.accountNo ? 'input-error' : ''}`}>
        <label>Account No</label>
        <div>
          <input
            type='number'
            {...register('accountNo', {
              required: 'Please enter account number',
            })}
          />

          {errors.accountNo && <p>{errors.accountNo.message}</p>}
        </div>
      </div>
      {/* Name */}
      <div className={`form-field ${errors.name ? 'input-error' : ''}`}>
        <label>Name</label>
        <div>
          <input
            {...register('name', {
              required: 'Please enter name',
            })}
          />

          {errors.name && <p>{errors.name.message}</p>}
        </div>
      </div>
      <div className="heading">
        <h3>Transaction Details:</h3>
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
      {/* Name */}
      <div className={`form-field ${errors.description ? 'input-error' : ''}`}>
        <label>Description</label>
        <div>
          <textarea
            {...register('description', {
              required: 'Please enter description',
            })}
          />

          {errors.description && <p>{errors.description.message}</p>}
        </div>
      </div>


      <button type="submit">Send Money</button>
    </motion.form>
  )
}

export default SendMoney
