import React from 'react'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast';
import { deleteStaff } from '../../../features/admin/adminSlice';

const DeleteStaff = () => {

  const dispatch = useDispatch();
  const staffList = useSelector((state) => state.admin.staff);

  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${data.selectedStaff}"?`);
    if (!confirmDelete) return;

    dispatch(deleteStaff(data.selectedStaff));
    toast.success(`Staff ${data.selectedStaff} deleted successfully`);
    reset();
  };


  return (
    <motion.form onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="heading">
        <h3>Delete Staff</h3>
      </div>
      {/* Select Staff */}
      <div className={`form-field ${errors.selectedStaff ? 'input-error' : ''}`}>
        <label>Select Staff</label>
        <div>
          <select
            {...register('selectedStaff', {
              required: 'Please select a staff member',
            })}
            onChange={(e) => handleStaffSelect(e.target.value)}
          >
            <option value="">Select a staff</option>
            {staffList.map((s, idx) => (
              <option key={idx} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.selectedStaff && <p>{errors.selectedStaff.message}</p>}
        </div>
      </div>
      <button type="submit" className='delete-btn' >Delete Staff</button>
    </motion.form>
  )
}

export default DeleteStaff
