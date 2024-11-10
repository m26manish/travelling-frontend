"use client";

import { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      // Use environment variable for API URL
      const response = await axios.post(`https://travelling-frontend-lovat.vercel.app/`, { username, password });
      setIsSuccess(true);
      onLogin(true);
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form max-w-sm mx-auto mt-10 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Login to Your Account</h2>
      
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring focus:border-green-500 dark:bg-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-700"
      />
      
      {error && <p className="text-red-500 text-center mb-2">{error}</p>}
      {isSuccess && <p className="text-green-500 text-center mb-2">Login successful!</p>}

      <button
        onClick={handleLogin}
        disabled={isLoading || !username || !password}
        className={`py-2 w-full rounded text-white ${isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} transition-all duration-200`}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}
