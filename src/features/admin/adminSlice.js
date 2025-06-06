import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  branches: [],
  staff: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addBranch: (state, action) => {},
    updateBranch: (state, action) => {},
    deleteBranch: (state, action) => {},
    addStaff: (state, action) => {},
    updateStaff: (state, action) => {},
    deleteStaff: (state, action) => {},
  },
});

export const {
  addBranch,
  updateBranch,
  deleteBranch,
  addStaff,
  updateStaff,
  deleteStaff
} = adminSlice.actions;

export default adminSlice.reducer;
