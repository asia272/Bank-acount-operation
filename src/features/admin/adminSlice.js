import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  branches: [],
  staff: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    // add Branch
    addBranch: (state, action) => {
      state.branches.push(action.payload);
    },
    // update Branch
    updateBranch: (state, action) => { 
      
    },
    // Delete Branch
    deleteBranch: (state, action) => {
      const branchName = action.payload;
      state.branches = state.branches.filter(branch => branch.bName !== branchName);
    },
    // add stuff
    addStaff: (state, action) => {
      state.staff.push(action.payload);
    },
    updateStaff: (state, action) => { },
    deleteStaff: (state, action) => { },
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
