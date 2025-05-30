import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login/Login'
import Navbar from './components/Navbar/Navbar';


const App = () => {


  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Navigate to="/login" />} />
        </Routes>
      </main>

    </>


  );
};

export default App;

