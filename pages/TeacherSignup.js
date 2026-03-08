'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

// ✅ Firebase Configuration (can be reused from a separate file if needed)
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
const db = getFirestore(app);

export default function TeacherSignup() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (!fullName || !email || !password || !role) {
      setError('All fields are required!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'teachers', user.uid), {
        fullName,
        email: user.email,
        role,
        profileImage: '',
        createdAt: new Date(),
      });

      alert('Signup successful!');
      router.push('/teacher-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center bg-gray-50 min-h-screen py-12 px-6">
      <button onClick={() => router.back()} className="absolute top-5 left-5 p-2">
        <IoArrowBack className="text-blue-500 text-2xl" />
      </button>

      <Image src="/teacherlog2.png" width={150} height={150} alt="Teacher Login" className="mb-4" />

      <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Teacher Sign Up</h2>
      <p className="text-center text-gray-600 mb-6">Join iLearn to start inspiring minds! 📚</p>

      {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

      <form onSubmit={handleSignUp} className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm text-gray-700">Full Name:</label>
          <input
            type="text"
            placeholder="e.g., Mrs. Dlamini"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Email:</label>
          <input
            type="email"
            placeholder="e.g., teacher@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Password:</label>
          <input
            type="password"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">Role (e.g., Teacher):</label>
          <input
            type="text"
            placeholder="e.g., Literature Teacher"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link href="/TeacherLogin" className="text-blue-600 hover:underline">Log In</Link>
        </p>
      </form>
    </div>
  );
}
