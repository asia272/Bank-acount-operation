import React from 'react';
import { useForm } from 'react-hook-form';
import './UserInput.css';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../features/card/cardSlice';
import '../../pages/error.css';
import { motion } from 'framer-motion';




const UserInput = () => {

  const userInfo = useSelector((state) => state.card.userInfo);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createUser(data))
    // setUserInfo(data);
    reset()

  };

  return (
    <motion.div className='user-info'
       initial={{ opacity: 0, x: -160 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        {/* full name */}
        <div>
          <label htmlFor="name">Customer Full Name</label>
          <input
            type="text"
            id="name"
            className=''
            placeholder="Enter your name"
            {...register("name", { required: "Name must not be empty" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        {/* CNIC Number */}
        <div>
          <label htmlFor="idNumber">National ID</label>
          <input
            type="number"
            id="idNumber"
            placeholder="Enter your ID"
            {...register("IdNumber", { required: "ID Number must not be empty" })}
          />
          {errors.IdNumber && <p>{errors.IdNumber.message}</p>}
        </div>


        <button type="submit">Create Account</button>
      </form>
    </motion.div>
  );
};

export default UserInput;
