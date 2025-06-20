import { createSlice } from '@reduxjs/toolkit';


const savedCustomer = JSON.parse(localStorage.getItem('customerState'));

const initialState = savedCustomer || {
    balance: 2000,
    transactions: [],
    loans: [],
    bills: [],
    profile: {},
};

const saveToLocalStorage = (state) => {
    localStorage.setItem('customerState', JSON.stringify(state));
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
            });
            saveToLocalStorage(state);
        },

        addMoney: (state, action) => {

            saveToLocalStorage(state);
        },

        recordTransaction: (state, action) => {

            saveToLocalStorage(state);
        },

        payBill: (state, action) => {

            saveToLocalStorage(state);
        },

        applyLoan: (state, action) => {
            state.loans.push({
                ...action.payload,
                date: new Date().toDateString(),
                isApproved: false
            });
            saveToLocalStorage(state);
        }
    },
});

export const {
    sendMoney,
    addMoney,
    recordTransaction,
    payBill,
    applyLoan,
} = customerSlice.actions;

export default customerSlice.reducer;
