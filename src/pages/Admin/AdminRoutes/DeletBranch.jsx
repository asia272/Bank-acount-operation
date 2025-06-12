import React from 'react'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast';
import { deleteBranch } from '../../../features/admin/adminSlice';

const DeletBranch = () => {

  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const branches = useSelector(state => state.admin.branches);


  const onSubmit = (data) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${data.branch}"?`);
    if (!confirmDelete) return;

    dispatch(deleteBranch(data.branch));
    toast.success(`Branch "${data.branch}" deleted successfully`);
    reset();
  };

  return (
    <motion.form onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="heading">
        <h3>Delete Branch</h3>
      </div>
      {/* Branch Field */}
      <div className={`form-field ${errors.branch ? "input-error" : ""}`}>
        <label>Select Branch</label>
        <div>
          <select
            {...register("branch", {
              required: "Please select branch first.",
            })}
          >
            <option value="">Select a branch</option>
            {branches.map((br, idx) => (
                <option key={idx} value={br.bName}>
                  {br.bName}
                </option>
              ))}
          </select>
          {errors.branch && <p>{errors.branch.message}</p>}
        </div>
      </div>
      <button type="submit" className='delete-btn' >Delete Branch</button>
    </motion.form>
  )
}

export default DeletBranch
