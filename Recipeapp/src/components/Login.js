import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fakeLoginAPI(loginData);

      if (response.success) {
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container flex justify-center items-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <form
        onSubmit={handleLogin}
        className="login-form bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Hello
        </h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-shadow duration-300 shadow-md"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 transition-shadow duration-300 shadow-md"
          />
        </div>
        <Button
          title="Login"
          btnType="submit"
          containerStyle="bg-gradient-to-r from-black-400 to-black-500 text-white px-6 py-3 rounded-full hover:from-blue-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
        />
      </form>
    </div>
  );
};

// Fake API call for demonstration purposes
const fakeLoginAPI = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (data.email === 'mithu@gmail.com' && data.password === '333') {
        resolve({ success: true, data: { token: 'fake-token', user: 'John Doe' } });
      } else {
        resolve({ success: false });
      }
    }, 1000);
  });
};

export default Login;