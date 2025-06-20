import React from 'react'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../features/auth/authSlice"
import { toast } from 'react-hot-toast';
const ProfileSetting = () => {

    const dispatch = useDispatch();

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(updateProfile(data));
        toast.success("Profile Update successfully");
        reset()
    };


    return (
        <motion.form onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 160 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            <div className="heading">
                <h3>Edit Profile</h3>
            </div>
            {/* Name Field */}
            <div className={`form-field ${errors.name ? "input-error" : ""}`}>
                <label>Name</label>
                <div>
                    <input
                        type="text"
                        {...register('name', { required: 'name  is required' })}
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

            {/* Password Field */}
            <div className={`form-field ${errors.password ? "input-error" : ""}`}>
                <label>Password</label>
                <div>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
            </div>



            <div className={`form-field ${errors.phone ? "input-error" : ""}`}>
                <label>Phone</label>
                <div>
                    <input
                        type="number"
                        {...register('phone', {
                            required: ' Phone number is required',

                        })}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </div>
            </div>

            <button type="submit" className="update-btn">Update</button>
        </motion.form>
    )
}

export default ProfileSetting
