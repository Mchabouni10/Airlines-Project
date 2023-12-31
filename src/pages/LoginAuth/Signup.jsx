import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const { login } = useAuth();
  const { redirect, login: loginFunction } = useAuth(); // Destructure login function and redirect from useAuth

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    reEnterPassword: '',
    dateOfBirth: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('you sign succefully')

    // Call the login function from AuthContext with the redirect path
    loginFunction('/login'); // Specify the path you want to redirect to after signing up
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //w3 school help how to create a label form 
  return (
    <div className='Signup-page'>
  <h2>Sign Up</h2>
  <form onSubmit={handleSubmit}>
    <label>
      Username:
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter your username"
      />
    </label>
    <br />
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
    </label>
    <br />
    <label>
      Password:
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
    </label>
    <br />
    <label>
      Re-enter Password:
      <input
        type="password"
        name="reEnterPassword"
        value={formData.reEnterPassword}
        onChange={handleChange}
        placeholder="Re-enter your password"
      />
    </label>
    <br />
    <label>
      Date of Birth:
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        placeholder="Select your date of birth"
      />
    </label>
    <br />
    <button type="submit">Sign Up</button>
    <div>
      <h2>Already have an account? <Link className='Linktologin' to="/login">Login</Link></h2>
    </div>
  </form>
</div>

  );
};

export default SignUp;


