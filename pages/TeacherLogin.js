 'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '@/firebaseConfig';
import Image from 'next/image';
import Link from 'next/link';

const auth = getAuth(app);

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/TeacherPage');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Password reset email sent. Check your inbox.');
    } catch (err) {
      setError('Error sending reset email. Try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center">
          <Image src="/teacherlog2.png" width={150} height={150} alt="Teacher Login" />
        </div>
        <h2 className="text-2xl font-bold text-center text-blue-600 mt-4">Hello, Esteemed Teacher! 🍎</h2>
        <p className="text-gray-600 text-center">Log in to manage your courses and students.</p>
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        <form onSubmit={handleLogin} className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            className="w-full p-3 mt-1 border rounded-md"
            placeholder="e.g., john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-sm font-medium text-gray-700 mt-3">Password:</label>
          <input
            type="password"
            className="w-full p-3 mt-1 border rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
          <Link href="/TeacherSignup">
          <button
            type="submit"
            className="w-full mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-blue-700"
          >
            
            Sign Up
         
          </button>
          </Link>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <button onClick={handleForgotPassword} className="text-blue-500 hover:underline">
            Forgot Password?
          </button>
          
           
        
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
