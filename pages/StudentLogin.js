'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Image from 'next/image';
import Link from 'next/link';

const firebaseConfig = {
  apiKey: "AIzaSyCVa10GbxFyIq30cQwdWsHjYxKcMEcZa8c",

  authDomain: "ilearn3.firebaseapp.com",

  projectId: "ilearn3",

  storageBucket: "ilearn3.firebasestorage.app",

  messagingSenderId: "12005226459",

  appId: "1:12005226459:web:a246554ad95563789819fe",

  measurementId: "G-S3E0J7J0LL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Welcome Back! Login successful');
      router.push('/StudentCoursePage');
    } catch (error) {
      alert('Login Failed: ' + error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Sign Up Successful! You can now log in.');
    } catch (error) {
      alert('Sign Up Failed: ' + error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert('Please enter your email address first.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Check your email for the reset link.');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className=" mt-20 flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-8">
      <Link href="/" className="absolute top-4 left-4 text-blue-500 text-xl">← Back</Link>
      <Image src="/student.png" width={200} height={150} alt="Student Login" className="mb-6" />
      <h1 className="text-2xl font-bold text-blue-500 mb-2">Hello, Future Star! 🌟</h1>
      <p className="text-gray-600 mb-6 text-center">Log in to explore the magical world of iLearning!</p>

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

      <button onClick={handleLogin} className="w-full max-w-md p-3 bg-blue-500 text-white font-semibold rounded-lg mb-3">
        Log In
      </button>
      <Link href="/StudentSignup" className="w-full max-w-md bg-green-500 text-white font-semibold rounded-lg ">
      <button  className="w-full max-w-md bg-green-500 text-white font-semibold rounded-lg mb-3 mt-3">
        Sign Up
      </button>
      </Link>
      <button onClick={handleForgotPassword} className="text-blue-500 text-sm">
        Forgot Password?
      </button>
    </div>
  );
}
