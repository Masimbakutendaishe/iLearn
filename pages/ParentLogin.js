'use client';

import { useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

const firebaseConfig = {
  apiKey: 'AIzaSyCIcsjZ3a6Q8vftiuv3wsvZX93vrlIIhx4',
  authDomain: 'ilearn2-1d1ba.firebaseapp.com',
  projectId: 'ilearn2-1d1ba',
  storageBucket: 'ilearn2-1d1ba.firebasestorage.app',
  messagingSenderId: '693927597891',
  appId: '1:693927597891:web:f99a8189e2b0687074c1f6',
  measurementId: 'G-NF5SGL1M0J',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export default function ParentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      alert('Welcome Back! Login successful');
      router.push('/ParentPage');
    } catch (error) {
      alert('Login Failed: ' + error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      alert('Sign Up Successful! You can now log in.');
    } catch (error) {
      alert('Sign Up Failed: ' + error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!username) {
      alert('Error: Please enter your email address first.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, username);
      alert('Password Reset: Check your email for a reset link.');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="mt-30 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button onClick={() => router.back()} className="absolute top-5 left-5 text-blue-500 text-2xl">
        <IoArrowBack />
      </button>
      
      <Image src="/parents.png" width={200} height={200} alt="Parents" className="mb-5" />
      <h1 className="text-2xl font-bold text-blue-500">Hello, Beloved Parent! 🌟</h1>
      <p className="text-gray-600 text-center mb-6">Log in to explore the magical world of iLearning with your little one!</p>

      <div className="w-full max-w-md">
        <label className="block text-gray-700">Enter your username (email):</label>
        <input
          type="email"
          className="w-full p-3 border rounded-md mb-3 focus:ring focus:ring-blue-300"
          placeholder="e.g., john.doe@example.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block text-gray-700">Enter your password:</label>
        <input
          type="password"
          className="w-full p-3 border rounded-md mb-4 focus:ring focus:ring-blue-300"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-3 rounded-md mb-3 hover:bg-blue-600">
          Log In
        </button>

    <Link href="/ParentSignup" className="w-full max-w-md bg-green-500 text-white font-semibold rounded-lg ">
      <button  className="w-full max-w-md bg-green-500 text-white font-semibold rounded-lg pt-3 pb-3 mb-3 mt-3">
        Sign Up
      </button>
      </Link>

        <button onClick={handleForgotPassword} className="text-blue-500 text-center w-full">
          Forgot Password?
        </button>
      </div>
    </div>
  );
}
