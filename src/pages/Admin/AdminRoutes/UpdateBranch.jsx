import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast';
import { updateBranch } from '../../../features/admin/adminSlice';


const UpdateBranch = () => {

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    let handleBranchSelect = (branchName) => {
        let branch = branches.find((br) => br.bName == branchName)

        if (branch) {
            reset({
                branch: branch.bName,
                bName: branch.bName,
                bAddress: branch.bAddress || "",
                bPhone: branch.bPhone || "",
            });
        }
    }

    const dispatch = useDispatch();
    const branches = useSelector(state => state.admin.branches);

    // Fort debuging
    useEffect(() => {
        console.log(branches);
    }, [branches]);

    const onSubmit = (data) => {
        const confirmUpdate = window.confirm(`Are you sure you want to update "${data.branch}"?`);
        if (!confirmUpdate) return;

        dispatch(updateBranch({
            originalName: data.branch,
            updatedData: {
                bName: data.bName,
                bAddress: data.bAddress,
                bPhone: data.bPhone,
            }
        }));

        toast.success(`Branch ${data.branch} updated successfully`);
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
                <h3>Update Branch</h3>
            </div>
            {/* Branch Field */}
            <div className="form-field">
                <label>Branch</label>
                <div>
                    <select
                        {...register("branch", {
                            required: "Please select a branch",
                        })}
                        onChange={(e) => handleBranchSelect(e.target.value)}
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
            {/* branch Field */}
            <div className={`form-field ${errors.bName ? "input-error" : ""}`}>
                <label>Branch Name</label>
                <div>
                    <input
                        placeholder='Branch name'
                        type="text"
                        {...register('bName', {
                            required: 'Branch name is required',
                        })}
                    />
                    {errors.bName && <p>{errors.bName.message}</p>}
                </div>
            </div>
            {/* Address Field */}
            <div className={`form-field ${errors.bAddress ? "input-error" : ""}`}>
                <label>Branch Address</label>
                <div>
                    <input
                        placeholder='Branch Address'
                        type="text"
                        {...register('bAddress', {
                            required: 'Branch Address is required',

                        })}
                    />
                    {errors.bAddress && <p>{errors.bAddress.message}</p>}

                </div>
            </div>

            {/* Phone Field */}
            <div className={`form-field ${errors.bPhone ? "input-error" : ""}`}>
                <label>Branch Phone</label>
                <div>
                    <input
                        placeholder='Branch Phone'
                        type="tel"
                        {...register('bPhone', {
                            required: 'Branch Phone number is required',

                        })}
                    />
                    {errors.bPhone && <p>{errors.bPhone.message}</p>}
                </div>
            </div>

            <button type="submit" className="update-btn">Update Branch</button>
        </motion.form>
    )
}

export default UpdateBranch
