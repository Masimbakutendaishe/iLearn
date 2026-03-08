'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Ensure this file contains your Firebase config
import Link from 'next/link';
import Image from 'next/image';

const auth = getAuth(app);
const db = getFirestore(app);

export default function ParentSignup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !role) {
      alert('All fields are required!');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'teachers', user.uid), {
        fullName,
        email,
        role,
        profileImage: '',
        createdAt: new Date(),
      });
      alert('Sign Up Successful! You can now log in.');
      router.push('/ParentLogin');
    } catch (error) {
      alert(`Sign Up Failed: ${error.message}`);
    }
  };

  return (
    <div className="mt-30 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <Image src="/parents.png" width={200} height={200} alt="Parents" className="mb-5" />
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
      
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Parent Sign Up</h2>
        <p className="text-center text-gray-600 mb-4">Join iLearn and support your child's education!</p>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Role (e.g., Parent)"
            className="w-full p-3 border rounded-lg"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link href="/ParentLogin" className="text-blue-600 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
