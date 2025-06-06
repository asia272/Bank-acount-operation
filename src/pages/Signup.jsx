import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Signup.css';
import { useDispatch } from 'react-redux';
import { submitSignup } from '../features/signup/signupSlice';
import { motion } from 'framer-motion';


const FormContainer = () => {

  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  let formSubmit = (data) => {
    // console.log(data)
    dispatch(submitSignup(data))
    reset();

  }
  return (
    <>
      <motion.form onSubmit={handleSubmit(formSubmit)}
        initial={{ opacity: 0, x: 160 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}


      >

        <h1>Sign Up</h1>
        {/* First Name */}
        <div className='form-group'>
          <div className='fname'>
            <label htmlFor="fname">First Name  <span>*</span></label>
            <input
              {...register("fname", { required: "This field is required" })} id='fname'
              className={errors.lname ? "input-error" : ""} />

            {errors.fname && <p>{errors.fname.message}</p>}
          </div>
          {/* Last Name */}
          <div className='lname'>
            <label htmlFor="lname">Last Name <span>*</span></label>
            <input type="text"
              {...register("lname", { required: "This field is required" })} id='lname'
              className={errors.lname ? "input-error" : ""} />
            {errors.lname && <p>{errors.lname.message}</p>}
          </div>
        </div>

        {/* CNIC */}
        <div className='cnic'>
          <label htmlFor="cnic">CNIC No<span>*</span></label>
          <input type="number"
            {...register("cnic", { required: "CNIC is required" })} id='cnic'
            className={errors.lname ? "input-error" : ""} />
          {errors.cnic && <p>{errors.cnic.message}</p>}
        </div>
        <div className='form-group'>
          {/* Phone */}
          <div className='phone'>
            <label htmlFor="phone">Phone <span>*</span></label>
            <input type="number"
              {...register("phone", { required: "Phone number is required" })} id='phone'
              className={errors.phone ? "input-error" : ""} />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
          {/* Address */}
          <div className='address'>
            <label htmlFor="address">Address <span>*</span></label>
            <input type="text"
              {...register("address", { required: "Address  is required" })} id='address'
              className={errors.address ? "input-error" : ""} />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
        </div>

        {/* Password*/}
        <div className='pwd'>
          <label htmlFor="pwd">Password <span>*</span></label>
          <input type="password"
            autoComplete="new-password"
            {...register("password", { required: "Password is required" })} id='pwd'
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* confirmed password */}
        {/* District */}
        {/* Ehsil */}
        <button>Submit</button>
      </motion.form>
    </>

  );
}

export default FormContainer;
