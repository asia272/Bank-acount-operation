import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {
        name: "",
        IdNumber: ""
    }
    ,
    balance: 0,
    loan: {
        amount: 0,
        purpose: ''
    },
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload;
        },
        withdraw: (state, action) => {
            state.balance -= action.payload;
        },
        loan: (state, action) => {
            state.loan = {
                amount: action.payload.amount,
                purpose: action.payload.purpose
            };
            state.balance += state.loan.amount;
        },
        payLoan: (state, action) => {
            state.balance -= state.loan.amount;
            state.loan = { amount: 0, purpose: '' };
        },
        createUser: (state, action) => {
            state.userInfo = {
                name: action.payload.name,
                IdNumber: action.payload.IdNumber
            }
        }
    }
});

export default cardSlice.reducer;
export const { deposit, withdraw, loan, payLoan, createUser } = cardSlice.actions;
