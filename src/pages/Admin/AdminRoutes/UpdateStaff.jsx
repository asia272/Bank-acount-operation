import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { updateStaff } from '../../../features/admin/adminSlice';

const UpdateStaff = () => {
  const dispatch = useDispatch();
  const staffList = useSelector((state) => state.admin.staff);
  const branches = useSelector((state) => state.admin.branches);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle selection from dropdown
  const handleStaffSelect = (username) => {
    const staff = staffList.find((s) => s.name === username);

    if (staff) {
      reset({
        selectedStaff: staff.name,
        name: staff.name,
        phone: staff.phone || '',
        email: staff.email || '',
        cnic: staff.cnic || '',
        dateOfBirth: staff.dateOfBirth || '',
        branch: staff.branch || '',
      });
    }
  };

  const onSubmit = (data) => {
    const confirmUpdate = window.confirm(`Are you sure you want to update "${data.selectedStaff}"?`);
    if (!confirmUpdate) return;

    dispatch(
      updateStaff({
        username: data.selectedStaff,
        updatedData: {
          name:data.name,
          phone: data.phone,
          email: data.email,
          cnic: data.cnic,
          dateOfBirth: data.dateOfBirth,
          branch: data.branch,
        },
      })
    );

    toast.success(`Staff "${data.name}" updated successfully`);


setTimeout(() => {
  reset();
}, 200); 
  };



  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="heading">
        <h3>Update Staff</h3>
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
      {/* Name filed */}

      <div className={`form-field ${errors.name ? "input-error" : ""}`}>
        <label>Name</label>
        <div>
          <input
            type="text"
            {...register('name', {
              required: 'name is required',
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

      </div>
      {/* Phone */}
      <div className={`form-field ${errors.phone ? 'input-error' : ''}`}>
        <label>Phone</label>
        <div>
          <input
            type="text"
            inputMode="numeric"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Phone number must be numeric',
              },
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div className={`form-field ${errors.email ? 'input-error' : ''}`}>
        <label>Email</label>
        <div>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </div>

      {/* CNIC */}
      <div className={`form-field ${errors.cnic ? 'input-error' : ''}`}>
        <label>CNIC</label>
        <div>
          <input
            type="text"
            inputMode="numeric"
            {...register('cnic', {
              required: 'CNIC number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'CNIC must be numeric',
              },
            })}
          />
          {errors.cnic && <p>{errors.cnic.message}</p>}
        </div>
      </div>

      {/* Date of Birth */}
      <div className={`form-field ${errors.dateOfBirth ? 'input-error' : ''}`}>
        <label>Date of Birth</label>
        <div>
          <input
            type="date"
            {...register('dateOfBirth', {
              required: 'Date of birth is required',
            })}
          />
          {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
        </div>
      </div>

      {/* Branch */}
      <div className={`form-field ${errors.branch ? 'input-error' : ''}`}>
        <label>Branch</label>
        <div>
          <select
            {...register('branch', {
              required: 'Branch is required',
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

      <button type="submit">Update Staff</button>
    </motion.form>
  );
};

export default UpdateStaff;
