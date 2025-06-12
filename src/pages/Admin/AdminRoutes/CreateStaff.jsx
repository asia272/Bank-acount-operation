import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { addStaff } from '../../../features/admin/adminSlice';
import { toast } from 'react-hot-toast';

const CreateStaff = () => {
  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const dispatch = useDispatch();
  const staff = useSelector(state => state.admin.staff);
  const branches = useSelector(state => state.admin.branches);
  // console data of staff for testing/buging
  useEffect(() => {
    console.log(staff);
  }, [staff]);

  const onSubmit = (data) => {
    dispatch(addStaff(data))
        toast.success(`Create Stuff successfully`);
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
        <h3>Create New Staff</h3>
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

      {/* Email Field */}
      <div className={`form-field ${errors.email ? "input-error" : ""}`}>
        <label>Email Address</label>
        <div>
          <input

            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

      </div>
      {/* Phone Field*/}
      <div className={`form-field ${errors.phone ? "input-error" : ""}`}>
        <label>Phone</label>
        <div>
          <input

            type="number"
            {...register('phone', {
              required: 'Phone number is required',

            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

      </div>
      {/*CNIC*/}
      <div className={`form-field ${errors.cnic ? "input-error" : ""}`}>
        <label>CNIC</label>
        <div>
          <input
            type="number"
            {...register('cnic', {
              required: 'CNIC number is required',

            })}
          />
          {errors.cnic && <p>{errors.cnic.message}</p>}
        </div>
      </div>
      {/* Date of birth Field */}
      <div className={`form-field ${errors.dateOfBirth ? "input-error" : ""}`}>
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <div>
          <input
            type="date"
            id="dateOfBirth"
            {...register("dateOfBirth", {
              required: "Date of birth is required",
            })}
          />
          {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
        </div>
      </div>
      {/* Branch Field */}
      <div className={`form-field ${errors.branch ? "input-error" : ""}`}>
        <label>Branch</label>
        <div>
          <select
            {...register("branch")} >
            <option value="">Select a branch</option>
            {branches.map((br, idx) => (
                <option key={idx} value={br.bName}>
                  {br.bName}
                </option>
              ))}
          </select>
        </div>
      </div>
      <button type="submit" >Create Staff</button>
    </motion.form>

  )
}

export default CreateStaff
