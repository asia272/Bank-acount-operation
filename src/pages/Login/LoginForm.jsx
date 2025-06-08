import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from "../../features/auth/authSlice";
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import "./LoginForm.css"

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        let { role } = data
        dispatch(login(data));


        if (role === 'admin') navigate('/admin');
        else if (role === 'staff') navigate('/staff');
        else navigate('/customer');
    };

    return (
        <main>

            <motion.form onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, x: -160 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="login-form"
            >
                <div className="heading">
                    <h1>Fintal</h1>
                    <p>Fintal_Digitally Engineerd for Finance.</p>
                </div>


                {/* Email Field */}
                <div className="form-field">
                    <label>Email Address</label><br />
                    <input
                        className={errors.email ? "input-error" : ""}
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

                {/* Password Field */}
                <div  className="form-field">
                    <label>Password</label><br />
                    <input
                        className={errors.password ? "input-error" : ""}
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <br />

                {/* Role Field */}
                <div className="form-field">
                    <label>Role</label><br />
                    <select
                        className={errors.role ? "input-error" : ""}
                        {...register('role', { required: 'Role is required' })}
                    >
                        <option value="">Select a role</option>
                        <option value="admin">admin</option>
                        <option value="customer">customer</option>
                        <option value="staff">staff</option>
                    </select>
                    {errors.role && <p>{errors.role.message}</p>}
                </div>

                <br />

                <button type="submit" className="login-btn">Login</button>
            </motion.form>

        </main>
    )
};
export default LoginForm
