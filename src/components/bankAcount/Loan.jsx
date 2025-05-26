import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loan as loanAction, payLoan as payLoanAction } from '../../features/card/cardSlice';

const Loan = () => {
    const dispatch = useDispatch();
    const loanTaken = useSelector((state) => state.card.loan);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        const amount = Number(data.loanAmount);
        if (loanTaken.amount > 0) {
            alert('Loan already taken.');
            return;
        }
        dispatch(loanAction({ amount, purpose: data.loanPurpose }));
        reset();
    };

    const handlePayLoan = () => {
        if (loanTaken.amount > 0) {
            dispatch(payLoanAction());
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="loanAmount">Request Loan:</label>
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
                />
                {errors.loanAmount && <p>{errors.loanAmount.message}</p>}

                <br />

                <input
                    type="text"
                    placeholder="Loan purpose"
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
                />
                {errors.loanPurpose && <p>{errors.loanPurpose.message}</p>}

                <button type="submit">Request Loan</button>
            </form>

            {loanTaken.amount > 0 && (
                <p>
                    💰 Taken loan of ${loanTaken.amount} for: <span>{loanTaken.purpose}</span>
                </p>
            )}

            <div>
                <button onClick={handlePayLoan} disabled={loanTaken.amount === 0}>
                    Pay Loan
                </button>
            </div>
        </div>
    );
};

export default Loan;
