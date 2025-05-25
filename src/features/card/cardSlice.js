import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    balance: 0,
    loan: {
        amount: 0,
        purpose: ''
    },
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
        loan: (state, action) => {
            state.loan = {
                amount: action.payload.amount,
                purpose: action.payload.purpose
            };
            state.balance += state.loan.amount
        },
        payLoan: (state, action) => {
            state.balance -= state.loan.amount
            state.loan = { amount: 0, purpose: '' };
        }

    }
});

export default cartSlice.reducer;
export const { deposit, withdraw, loan, payLoan } = cartSlice.actions;
