import React from "react";
import PropTypes from 'prop-types';

export default function About(props) {
  const {mode, toggleTheme} = props;

  const aboutStyle1 = {
      backgroundColor: mode === 'dark' ? '#212529' : '#f8f9fa',
      color: mode === 'dark' ? 'white' : 'black',
  }

  return (
    <div className="container my-5" style={aboutStyle1}>
      <h1 className="mb-4 text-primary">About TextUtils</h1>
      <p className="fs-5">
        TextUtils is a versatile text utility web application that allows users to analyze and manipulate their text efficiently. Whether you’re writing emails, coding, or preparing documents, TextUtils helps you quickly format and understand your content.
      </p>

      <h2 className="mt-4">✨ Features</h2>
      <ul className="list-group list-group-flush fs-5">
        <li className="list-group-item">🔠 Convert text to UPPERCASE</li>
        <li className="list-group-item">🔡 Convert text to lowercase</li>
        <li className="list-group-item">🧮 Count characters and words</li>
        <li className="list-group-item">🔍 Preview your text before using</li>
        <li className="list-group-item">🎯 Simple and intuitive interface</li>
      </ul>

      <h2 className="mt-4">🎯 Our Mission</h2>
      <p className="fs-5">
        Our goal is to make text editing easier and faster. We believe in creating tools that are simple, fast, and useful for everyone — from students to professionals.
      </p>

      <h2 className="mt-4">📍 Built With</h2>
      <ul className="list-group list-group-flush fs-5">
        <li className="list-group-item">⚛️ React.js for the frontend</li>
        <li className="list-group-item">🎨 Bootstrap for styling</li>
      </ul>

      <p className="mt-4 fs-6 ">
        &copy; {new Date().getFullYear()} TextUtils. All rights reserved.
      </p>
    </div>
  );
}
