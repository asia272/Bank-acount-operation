import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
    balance: 0,
    loan:0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload
        },
        withdraw: (state, action) => {
            state.balance -= action.payload
        },
        loan:(state,action)=>{
            state.loan = action.payload
            state.balance += state.loan.amount
        },
        payLoan:(state,action)=>{
            state.balance -= state.loan.amount
            state.loan = 0
        }

    }
});

export default cartSlice.reducer;
export const { deposit, withdraw,loan,payLoan } = cartSlice.actions;
