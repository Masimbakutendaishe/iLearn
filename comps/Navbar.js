'use client';

import { useState } from 'react';
import { FaSchool, FaUser, FaBars, FaTimes, FaUserGraduate, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import Education from '@/pages/Education';
import Teacher from '@/pages/Teacher';
import Contact from '@/pages/Contact';
import Gallery from '@/pages/Gallery';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
 
  
  const colors = [
    'text-red-500',
    'text-orange-400',
    'text-yellow-500',
    'text-green-500',
    'text-blue-500',
    'text-indigo-500',
    'text-purple-500'
  ];

  const text = "iLEARN  ACADEMY";
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8 bg-white shadow-md">
      <a href="/" className="text-3xl  font-bold text-gray-600 flex items-center">
      <Image src="/loggo.png" width={25} height={25} alt="Student Login" className="mr-3 mb-2" />
      {text.split('').map((letter, index) => (
        <span key={index} className={colors[index % colors.length]}>
          {letter}
        </span>
      ))}
    </a>
      
    <nav className={`navbar absolute md:static top-20 left-0 w-full md:w-auto md:flex bg-white md:bg-transparent transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
  <div className="flex flex-col md:flex-row md:items-center text-lg">
    
    <a href="/About" className="p-4 text-orange-400 hover:text-yellow-500">ABOUT US</a>
    <a href="/Education" className="p-4 text-yellow-500 hover:text-green-500">EDUCATION</a>
    <a href="/Teacher" className="p-4 text-green-500 hover:text-blue-500">TEACHERS</a>
    <a href="/Activities" className="p-4 text-red-500 hover:text-orange-400">ACTIVITIES</a>
    <a href="/Gallery" className="p-4 text-blue-500 hover:text-indigo-500">GALLERY</a>
    <a href="/Contact" className="p-4 text-indigo-500 hover:text-purple-500">CONTACT</a>
  </div>
</nav>


      {/* Icons for User and Menu */}
      <div className="flex items-center">
        <FaUser 
          className="text-2xl text-black cursor-pointer hover:text-orange-400 mr-6" 
          onClick={() => setLoginOpen(!loginOpen)}
        />
        <div 
          className="text-2xl text-black cursor-pointer hover:text-orange-400 md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Dropdown Menu for Login */}
      {loginOpen && (
        <div className="absolute top-24 right-8 w-80 p-6 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-bold text-green-500 mb-4">Login to iLearn Web App</h3>
          <p className="text-sm text-gray-600 mb-3">Select your role:</p>
          <Link href="/StudentLogin" >
          <button className="flex items-center justify-center w-full p-3 mb-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            <FaUserGraduate className="mr-2" /> I am a Student
          </button>
          </Link>
          <Link href="/TeacherLogin" >
          <button className="flex items-center justify-center w-full p-3 mb-3 bg-green-500 text-white rounded hover:bg-green-600">
            <FaChalkboardTeacher className="mr-2" /> I am a Teacher
          </button>
          </Link>
          <Link href="/ParentLogin" >
          <button className="flex items-center justify-center w-full p-3 bg-purple-500 text-white rounded hover:bg-purple-600">
            <FaUsers className="mr-2" /> I am a Parent
          </button>
          </Link>
          
          <p className="text-sm text-gray-600 mt-4">Forgot your password? <a href="#" className="text-orange-400 underline">Click here</a></p>
        </div>
      )}
    
    </header>
  );
};



export default Navbar;
