import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from "../../features/auth/authSlice";
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { fakeLoginAPI } from "../../features/auth/authAPI";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./LoginForm.css"

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    // const accountType = auth.user?.accountType;

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password, role } = data;


        const result = await fakeLoginAPI(email, password, auth.user);



        if (result.success) {
            dispatch(login({ user: result.user, role }));
            toast.success(`Welcome back to ${role} dashboard`);
            const accountType = result.user.accountType;

            if (role === 'admin') {
                navigate('/admin');
            }
            else if (role === 'staff') {
                navigate('/staff');
            }
            else if (role === 'customer') {
                if (accountType === 'beneficiary') {
                    navigate('/beneficiary');
                } else {
                    navigate('/customer');
                }
            }


            reset();
        } else {
            toast.error(result.message);
        }
    };

    return (
        <main>
            <motion.form onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, x: -160 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
            >
                <div className="heading">
                    <h1>Fintal</h1>
                    <p>Fintal_Digitally Engineerd for Finance.</p>
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
                {/* Role Field */}
                <div className={`form-field ${errors.role ? "input-error" : ""}`} >
                    <label>Role</label>
                    <div >
                        <select
                            {...register('role', { required: 'Role is required' })}
                        >
                            <option value="">Select a role</option>
                            <option value="admin">admin</option>
                            <option value="customer">customer</option>
                            <option value="staff">staff</option>
                        </select>
                        {errors.role && <p>{errors.role.message}</p>}
                    </div>

                </div>
                <NavLink to="/signup" className="signup-link">
                    Signup
                </NavLink>


                <button type="submit">Login</button>
            </motion.form>

        </main>
    )
};
export default LoginForm
