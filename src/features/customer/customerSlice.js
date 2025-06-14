import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    balance: 2000,
    transactions: [],
    loans: [],
    bills: [],
    profile: {},
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        sendMoney: (state, action) => {
            state.balance -= action.payload.amount;
            state.transactions.push({
                type: "send",
                amount: action.payload.amount,
                description: action.payload.description,
                counterpartyName: action.payload.name,
                counterpartyAccount: action.payload.accountNo,
                date: new Date().toISOString()
            })

        },
        addMoney: (state, action) => {

        },
        recordTransaction: (state, action) => {

        },
        payBill: (state, action) => {

        },
        applyLoan: (state, action) => {
            

        },
        updateProfile: (state, action) => {

        },

    },
});

export const {
    sendMoney,
    addMoney,
    recordTransaction,
    payBill,
    applyLoan,
    updateProfile,
} = customerSlice.actions;

export default customerSlice.reducer;
