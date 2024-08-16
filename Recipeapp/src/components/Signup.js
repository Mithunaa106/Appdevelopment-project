import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const signupData = { email, password };

    try {
      // Replace with your actual signup logic and API call
      const response = await fakeSignupAPI(signupData);

      if (response.success) {
        alert('Signup successful! Please login.');
        navigate('/login');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="signup-container flex justify-center items-center h-screen">
      <form onSubmit={handleSignup} className="signup-form bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <Button
          title="Signup"
          btnType="submit"
          containerStyle="bg-green-600 text-white px-4 py-2 rounded-full"
        />
      </form>
    </div>
  );
};

// Fake API call for demonstration purposes
const fakeSignupAPI = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

export default Signup;