import React from 'react';
import { useForm } from 'react-hook-form';
import './UserInput.css';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../features/card/cardSlice';


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
    <div className='user-info'>
      <div className="heading">
        <h1>The React-Redux Bank</h1>
        <h2>Create New Customer</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Customer Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: "Name must not be empty" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label htmlFor="idNumber">National ID</label>
        <input
          type="text"
          id="idNumber"
          placeholder="Enter your ID"
          {...register("IdNumber", { required: "ID Number must not be empty" })}
        />
        {errors.IdNumber && <p className="error">{errors.IdNumber.message}</p>}

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default UserInput;
