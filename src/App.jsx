import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { ToastContainer } from 'react-toastify';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <Router>
      <div className="">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;