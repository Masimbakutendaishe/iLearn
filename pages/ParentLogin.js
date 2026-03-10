'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

export default function ParentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both email and password.');
      return;
    }

    alert('Welcome Back! Login successful');
    router.push('/ParentPage');
  };

  const handleForgotPassword = () => {
    if (!username) {
      alert('Please enter your email first.');
      return;
    }

    alert('Password reset instructions would normally be sent to your email.');
  };

  return (
    <div className="mt-30 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      
      <button
        onClick={() => router.back()}
        className="absolute top-5 left-5 text-blue-500 text-2xl"
      >
        <IoArrowBack />
      </button>

      <Image src="/parents.png" width={200} height={200} alt="Parents" className="mb-5" />

      <h1 className="text-2xl font-bold text-blue-500">
        Hello, Beloved Parent! 🌟
      </h1>

      <p className="text-gray-600 text-center mb-6">
        Log in to explore the magical world of iLearning with your little one!
      </p>

      <div className="w-full max-w-md">

        <label className="block text-gray-700">
          Enter your username (email):
        </label>

        <input
          type="email"
          className="w-full p-3 border rounded-md mb-3 focus:ring focus:ring-blue-300"
          placeholder="e.g., john.doe@example.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block text-gray-700">
          Enter your password:
        </label>

        <input
          type="password"
          className="w-full p-3 border rounded-md mb-4 focus:ring focus:ring-blue-300"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-3 rounded-md mb-3 hover:bg-blue-600"
        >
          Log In
        </button>

        <Link href="/ParentSignup">
          <button className="w-full bg-green-500 text-white font-semibold rounded-lg py-3 mb-3">
            Sign Up
          </button>
        </Link>

        <button
          onClick={handleForgotPassword}
          className="text-blue-500 text-center w-full"
        >
          Forgot Password?
        </button>

      </div>
    </div>
  );
}
