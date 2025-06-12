import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage
const savedAdmin = JSON.parse(localStorage.getItem('adminState'));

const initialState = savedAdmin || {
  branches: [],
  staff: [],
};

// Save to localStorage helper
const saveToLocalStorage = (state) => {
  localStorage.setItem('adminState', JSON.stringify(state));
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    // Add Branch
    addBranch: (state, action) => {
      state.branches.push(action.payload);
      saveToLocalStorage(state);
    },
    // Update Branch
    updateBranch: (state, action) => {
      const { originalName, updatedData } = action.payload;
      const index = state.branches.findIndex(br => br.bName === originalName);
      if (index !== -1) {
        state.branches[index] = updatedData;
        saveToLocalStorage(state);
      }
    },
    // Delete Branch
    deleteBranch: (state, action) => {
      const branchName = action.payload;
      state.branches = state.branches.filter(branch => branch.bName !== branchName);
      saveToLocalStorage(state);
    },
    // Add Staff
    addStaff: (state, action) => {
      state.staff.push(action.payload);
      saveToLocalStorage(state);
    },
    // Update Staff
    updateStaff: (state, action) => {
      const { username, updatedData } = action.payload;
      const staffIndex = state.staff.findIndex((s) => s.name === username);
      if (staffIndex !== -1) {
        state.staff[staffIndex] = {
          ...state.staff[staffIndex],
          ...updatedData,
        };
        saveToLocalStorage(state);
      }
    },
    // Delete Staff
    deleteStaff: (state, action) => {
      const username = action.payload;
      state.staff = state.staff.filter(s => s.name !== username);
      saveToLocalStorage(state);
    },
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
