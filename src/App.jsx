import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './pages/Login/LoginForm';
import Admin from './pages/Admin/Admin';
import Customer from './pages/Customer/Customer';
import Staff from './pages/Staff/Staff';
import Signup from "./pages/Signup/Signup"
import CreateBranch from './pages/Admin/AdminRoutes/CreateBranch';
import CreateStaff from './pages/Admin/AdminRoutes/CreateStaff';
import DeletBranch from './pages/Admin/AdminRoutes/DeletBranch';
import DeleteStaff from './pages/Admin/AdminRoutes/DeleteStaff';
import TransactionsLog from './pages/Admin/AdminRoutes/TransactionsLog';
import UpdateStaff from './pages/Admin/AdminRoutes/UpdateStaff';
import AdminWelcome from './pages/Admin/AdminRoutes/AdminWelcome';
import UpdateBranch from './pages/Admin/AdminRoutes/UpdateBranch';
import CustomerDashboard from './pages/Customer/CustomerRoutes/CustomerDashboard';
import SendMoney from './pages/Customer/CustomerRoutes/SendMoney';
import AddMoney from './pages/Customer/CustomerRoutes/AddMoney';
import CustomerTransactions from './pages/Customer/CustomerRoutes/CustomerTransactions';
import PayBills from './pages/Customer/CustomerRoutes/PayBills';
import LoanManagement from './pages/Customer/CustomerRoutes/LoanManagement';
import ProfileSetting from './pages/Customer/CustomerRoutes/ProfileSetting';
import Beneficiary from './pages/Customer/BeneficiaryAccount/Beneficiary';
import BeneficiaryDashboard from './pages/Customer/BeneficiaryAccount/BeneficiaryRoutes/BeneficiaryDashboard';

import './pages/layouts.css';
import './pages/error.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminWelcome />} />
          <Route path="create-branch" element={<CreateBranch />} />
          <Route path="delete-branch" element={<DeletBranch />} />
          <Route path="update-branch" element={<UpdateBranch />} />
          <Route path="create-staff" element={<CreateStaff />} />
          <Route path="delete-staff" element={<DeleteStaff />} />
          <Route path="update-staff" element={<UpdateStaff />} />
          <Route path="transactions-log" element={<TransactionsLog />} />
        </Route>

        {/* Staff Routes */}
        <Route path="/staff" element={<Staff />} />

        {/* Customer Routes */}
        <Route path="/customer" element={<Customer />}>
          <Route index element={<CustomerDashboard />} />
          <Route path="send-money" element={<SendMoney />} />
          <Route path="add-money" element={<AddMoney />} />
          <Route path="transactions" element={<CustomerTransactions />} />
          <Route path="pay-bills" element={<PayBills />} />
          <Route path="loan-management" element={<LoanManagement />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
        </Route>
        {/* Beneficiary acount Routes */}
        <Route path="/beneficiary" element={<Beneficiary />}>
          <Route index element={<BeneficiaryDashboard />} />
         
        </Route>

      </Routes>
    </>
  );
}

export default App;
