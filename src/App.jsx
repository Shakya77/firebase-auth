import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login.jsx';

function App() {
  return (
    <Router>
      <div className="">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;