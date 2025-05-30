import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loan as loanAction, payLoan as payLoanAction } from '../../features/card/cardSlice';
import toast from 'react-hot-toast';
import "./Loan.css"

const Loan = () => {
    const dispatch = useDispatch();
    const loanTaken = useSelector((state) => state.card.loan);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const handlePayLoan = () => {
        if (loanTaken.amount > 0) {
            dispatch(payLoanAction());
           toast.success(`Paid ₹${loanTaken.amount} towards loan`);

        }
    };

    const onSubmit = (data) => {
        const amount = Number(data.loanAmount);
        if (loanTaken.amount > 0) {
            toast.error('Loan already taken.');
            return;
        }
        dispatch(loanAction({ amount, purpose: data.loanPurpose }));
        reset();
        toast.success(`Loan of ₹${amount} taken successfully`);
    };


    return (
        <div className='loan-request'>
            <h2>Request for loan</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="loanAmount">Loan Amount</label>
                    <input
                        type="number"
                        id="loanAmount"
                        placeholder="Loan amount"
                        {...register("loanAmount", {
                            required: "Loan amount is required",
                            min: {
                                value: 1,
                                message: "Amount must be greater than 0"
                            }
                        })}
                        className={errors.loanAmount ? "input-error" : ""}
                    />
                    {errors.loanAmount && <p>{errors.loanAmount.message}</p>}
                </div>
                <div>
                    <label htmlFor="loanPurpose">Loan Purpose</label>
                    <input
                        type="text"
                        placeholder="Loan purpose"
                        id='loanPurpose'
                        {...register("loanPurpose", {
                            required: "Loan purpose is required",
                            validate: {
                                noNumbers: value => !/\d/.test(value) || "Purpose cannot contain numbers",
                                noSpecialChars: value => /^[A-Za-z\s]+$/.test(value) || "No special characters allowed"
                            },
                            minLength: {
                                value: 3,
                                message: "Purpose must be at least 3 characters"
                            }
                        })}
                        className={errors.loanPurpose ? "input-error" : ""}
                    />
                    {errors.loanPurpose && <p>{errors.loanPurpose.message}</p>}
                </div>




                <button type="submit">Request Loan</button>
            </form>

            {loanTaken.amount > 0 && (
                <p>
                    💰 Taken loan of <i>${loanTaken.amount}</i>  for: <span>{loanTaken.purpose}</span>
                </p>
            )}

            <div className='pay-loan-div'>
                <button
                    onClick={handlePayLoan}
                    className={`pay-loan-btn ${loanTaken.amount === 0 ? "disable-btn" : ""}`}
                    disabled={!loanTaken || Number(loanTaken.amount) === 0}>
                    Pay Loan
                </button>
            </div>
        </div>
    );
};

export default Loan;
