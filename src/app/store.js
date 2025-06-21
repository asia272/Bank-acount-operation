import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import adminReducer from '../features/admin/adminSlice';
import cardReducer from '../features/card/cardSlice';
// import staffReducer from '../features/staff/staffSlice';
import customerReducer from '../features/customer/customerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    // staff: staffReducer,
    customer: customerReducer,
    card: cardReducer,
  },
});
