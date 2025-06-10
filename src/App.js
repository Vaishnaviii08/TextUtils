// App.js
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 4000);
  };

  const toggleTheme = (theme) => {
    setMode(theme);
    theme === 'dark'
      ? showAlert('Dark mode has been enabled', 'success')
      : showAlert('Light mode has been enabled', 'success');
  };

  const appStyle = {
    backgroundColor: mode === 'dark' ? '#1a1a1a' : '#ffffff',
    color: mode === 'dark' ? '#ffffff' : '#000000',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    transition: 'all 0.3s ease'
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar title="TextUtils" mode={mode} toggleTheme={toggleTheme} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}
            />
            <Route path="/about" element={<About mode = {mode}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
