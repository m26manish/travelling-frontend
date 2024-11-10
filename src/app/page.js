"use client";
import { useState } from 'react';
import Login from './components/Login';
import Packages from './components/Package';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      {!isLoggedIn ? <Login onLogin={setIsLoggedIn} /> : <Packages />}
    </div>
  );
}
