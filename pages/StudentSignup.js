'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import { IoArrowBack } from 'react-icons/io5';
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
const db = getFirestore(app);

export default function StudentSignup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !role) {
      alert('All fields are required!');
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
      alert('Sign Up Successful! You can now log in.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className=" mt-20 flex flex-col items-center bg-white min-h-screen py-12 px-6">
      <button onClick={() => router.back()} className="absolute top-5 left-5 p-2">
        <IoArrowBack className="text-blue-500 text-2xl" />
      </button>
      <Image src="/student.png" width={250} height={250} alt="Student" className="mb-6" />
      <h1 className="text-2xl font-bold text-blue-500 text-center">Hello, Future Star! 🌟</h1>
      <p className="text-gray-600 text-center mb-6">Register on iLearn to explore the magical world of iLearning!</p>
      <div className="w-full max-w-md">
        <label className="block text-sm text-gray-700">Enter your full name:</label>
        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg mb-3" placeholder="e.g., John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <label className="block text-sm text-gray-700">Enter your email:</label>
        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg mb-3" placeholder="e.g., john.doe@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="block text-sm text-gray-700">Enter your password:</label>
        <input type="password" className="w-full p-3 border border-gray-300 rounded-lg mb-3" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label className="block text-sm text-gray-700">Select your role:</label>
        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg mb-3" placeholder="e.g., Teacher, Student, Admin" value={role} onChange={(e) => setRole(e.target.value)} />
        <button onClick={handleSignUp} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">Sign Up</button>
      </div>
      <Link href="StudentLogin">
      <p className="text-blue-500 mt-4 cursor-pointer" onClick={() => router.push('/login')}>Already Signed Up? Log In</p> </Link>
    </div>
  );
}
