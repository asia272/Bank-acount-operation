import React from 'react'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { addBranch } from '../../../features/admin/adminSlice';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast';


const CreateBranch = () => {
  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const branches = useSelector(state => state.admin.branches);

  // for debuging
  useEffect(() => {
    console.log(branches);
  }, [branches]);


  const onSubmit = (data) => {
    dispatch(addBranch(data))
    toast.success(`Create Branch successfully`);
    reset()
  };

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 160 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="heading">
        <h3>Create New Branch</h3>
      </div>
      {/* Name filed */}

      <div className={`form-field ${errors.bName ? "input-error" : ""}`}>
        <label>Branch Name</label>
        <div>
          <input
            placeholder='Branch Name'
            type="text"
            {...register('bName', {
              required: 'Branch name is required',
            })}
          />
          {errors.bName && <p>{errors.bName.message}</p>}
        </div>

      </div>

      {/* Address Field */}
      <div className={`form-field ${errors.bAddress ? "input-error" : ""}`}>
        <label>Branch Address</label>
        <div>
          <input
            placeholder='Branch Address'
            type="text"
            {...register('bAddress', {
              required: 'Branch Address is required',

            })}
          />
          {errors.bAddress && <p>{errors.bAddress.message}</p>}
        </div>

      </div>
      {/* Phone Field*/}
      <div className={`form-field ${errors.bPhone ? "input-error" : ""}`}>
        <label>Branch Phone</label>
        <div>
          <input
            placeholder='Branch Phone'
            type="number"
            {...register('bPhone', {
              required: 'Branch Phone number is required',

            })}
          />
          {errors.bName && <p>{errors.bName.message}</p>}
        </div>

      </div>
      <button type="submit" >Create Branch</button>
    </motion.form>
  )
}

export default CreateBranch
