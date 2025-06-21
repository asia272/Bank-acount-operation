import React from 'react';
import { useForm } from "react-hook-form";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from "../../features/auth/authSlice";
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const formSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }


    dispatch(signup({
      name: data.fname,
      cnic: data.cnic,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      password: data.password,
      accountType: data.accountType,
      branchId: data.branchId,
      role: data.accountType === 'admin' ? 'admin' : 'customer',
    }));

    navigate("/");
    toast.success("Signup successful! Please log in.");
    reset();
  };

  return (
    <main>
      <motion.form
        onSubmit={handleSubmit(formSubmit)}
        initial={{ opacity: 0, x: 160 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className='signup-form'
      >
        <div className="heading">
          <h2>Create New Account</h2>
        </div>

        {/* Full Name */}
        <div className={`form-field ${errors.fname ? "input-error" : ""}`}>
          <label>Full Name</label>
          <div>
            <input {...register("fname", { required: "First name is required" })} />
            {errors.fname && <p>{errors.fname.message}</p>}
          </div>
        </div>

        {/* CNIC */}
        <div className={`form-field ${errors.cnic ? "input-error" : ""}`}>
          <label>CNIC No</label>
          <div>
            <input {...register("cnic", { required: "CNIC is required" })} />
            {errors.cnic && <p>{errors.cnic.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div className={`form-field ${errors.email ? "input-error" : ""}`}>
          <label>Email</label>
          <div>
            <input type="email" {...register("email", { required: "Email is required" })} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone */}
        <div className={`form-field ${errors.phone ? "input-error" : ""}`}>
          <label>Phone</label>
          <div>
            <input {...register("phone", { required: "Phone is required" })} />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
        </div>

        {/* Date of Birth */}
        <div className={`form-field ${errors.dateOfBirth ? "input-error" : ""}`}>
          <label>Date of Birth</label>
          <div>
            <input type="date" {...register("dateOfBirth", { required: "Date of birth is required" })} />
            {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
          </div>
        </div>

        {/* Account Type */}
        <div className={`form-field ${errors.accountType ? "input-error" : ""}`}>
          <label>Account Type</label>
          <div>
            <select
              {...register('accountType', { required: 'Account type is required' })}
            >
              <option value="">Select an account type</option>
              <option value="beneficiary">Beneficiary</option>
              <option value="current">Current</option>
              <option value="saving">Saving</option>
            </select>
            {errors.accountType && <p>{errors.accountType.message}</p>}
          </div>
        </div>


        {/* Branch ID */}
        <div className={`form-field ${errors.branchId ? "input-error" : ""}`}>
          <label>Branch ID</label>
          <div>
            <input {...register("branchId", { required: "Branch ID is required" })} />
            {errors.branchId && <p>{errors.branchId.message}</p>}
          </div>
        </div>

        {/* Password */}
        <div className={`form-field ${errors.password ? "input-error" : ""}`}>
          <label>Password</label>
          <div>
            <input
              type="password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        {/* Confirm Password */}
        <div className={`form-field ${errors.confirmPassword ? "input-error" : ""}`}>
          <label>Confirm Password</label>
          <div>
            <input
              type="password"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <button type="submit">Sign Up</button>
      </motion.form>
    </main>
  );
};

export default SignupForm;
