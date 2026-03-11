'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Dummy Login
  const handleLogin = async () => {
    if (email && password) {
      alert('Welcome Back! (Dummy Login Successful)');
      router.push('/StudentCoursePage');
    } else {
      alert('Login Failed: Please enter email and password.');
    }
  };

  // Dummy Sign Up
  const handleSignUp = async () => {
    alert('Sign Up Successful! (Dummy Placeholder)');
  };

  // Dummy Forgot Password
  const handleForgotPassword = async () => {
    if (!email) {
      alert('Please enter your email address first.');
      return;
    }
    alert('Password reset link sent! (Dummy Placeholder)');
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-8">
      <Link href="/" className="absolute top-4 left-4 text-blue-500 text-xl">← Back</Link>

      <Image
        src="/student.png"
        width={200}
        height={150}
        alt="Student Login"
        className="mb-6"
      />

      <h1 className="text-2xl font-bold text-blue-500 mb-2">
        Hello, Future Star! 🌟
      </h1>

      <p className="text-gray-600 mb-6 text-center">
        Log in to explore the magical world of iLearning!
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full max-w-md p-3 border border-gray-300 rounded-lg mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        className="w-full max-w-md p-3 border border-gray-300 rounded-lg mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full max-w-md p-3 bg-blue-500 text-white font-semibold rounded-lg mb-3"
      >
        Log In
      </button>

      <Link
        href="/StudentSignup"
        className="w-full max-w-md bg-green-500 text-white font-semibold rounded-lg"
      >
        <button className="w-full max-w-md bg-green-500 text-white font-semibold rounded-lg mb-3 mt-3">
          Sign Up
        </button>
      </Link>

      <button
        onClick={handleForgotPassword}
        className="text-blue-500 text-sm"
      >
        Forgot Password?
      </button>
    </div>
  );
}
