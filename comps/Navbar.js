'use client';

import { useState } from 'react';
import { FaUser, FaBars, FaTimes, FaUserGraduate, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // OCRS Color Theme
  const colors = [
    'text-green-500',
    'text-yellow-400',
    'text-orange-500',
    'text-black'
  ];

  const text = "iLEARN ACADEMY";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-lg shadow-xl border-b border-gray-200">

      {/* LOGO + TEXT */}
      <a href="/" className="flex items-center text-3xl font-extrabold tracking-wide">
        <Image 
          src="/loggo.png" 
          width={30} 
          height={30} 
          alt="Logo" 
          className="mr-3 drop-shadow-lg"
        />

        {/* Animated Text */}
        <div className="flex">
          {text.split('').map((letter, index) => (
            <span
              key={index}
              className={`${colors[index % colors.length]} transition-all duration-500 hover:scale-125 hover:-translate-y-1`}
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.2)"
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </a>

      {/* NAV LINKS */}
      <nav className={`absolute md:static top-20 left-0 w-full md:w-auto md:flex bg-white md:bg-transparent transition-all duration-500 ease-in-out ${menuOpen ? 'block animate-fadeIn' : 'hidden md:block'}`}>
        
        <div className="flex flex-col md:flex-row md:items-center text-lg font-semibold">

          {[
            { name: 'ABOUT US', color: 'text-orange-500', link: '/About' },
            { name: 'EDUCATION', color: 'text-yellow-500', link: '/Education' },
            { name: 'TEACHERS', color: 'text-green-500', link: '/Teacher' },
            { name: 'ACTIVITIES', color: 'text-orange-400', link: '/Activities' },
            { name: 'GALLERY', color: 'text-yellow-400', link: '/Gallery' },
            { name: 'CONTACT', color: 'text-green-600', link: '/Contact' }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`p-4 ${item.color} relative group transition-all duration-300`}
            >
              {item.name}

              {/* Underline animation */}
              <span className="absolute left-0 bottom-1 w-0 h-[3px] bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>

              {/* Glow effect */}
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-gradient-to-r from-green-400 to-orange-400 blur-md transition duration-300"></span>
            </a>
          ))}

        </div>
      </nav>

      {/* RIGHT ICONS */}
      <div className="flex items-center">
        
        <FaUser
          className="text-2xl text-black cursor-pointer mr-6 transition-all duration-300 hover:text-orange-500 hover:scale-125"
          onClick={() => setLoginOpen(!loginOpen)}
        />

        <div
          className="text-2xl text-black cursor-pointer md:hidden transition-all duration-300 hover:text-orange-500 hover:scale-125"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* LOGIN DROPDOWN */}
      {loginOpen && (
        <div className="absolute top-24 right-8 w-80 p-6 bg-white shadow-2xl rounded-2xl text-center border border-gray-200 animate-fadeIn">

          <h3 className="text-2xl font-bold text-green-600 mb-4 drop-shadow">
            Login to iLearn
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Select your role:
          </p>

          {/* STUDENT */}
          <Link href="/StudentLogin">
            <button className="flex items-center justify-center w-full p-3 mb-3 bg-gradient-to-r from-green-500 to-yellow-400 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <FaUserGraduate className="mr-2" />
              Student
            </button>
          </Link>

          {/* TEACHER */}
          <Link href="/TeacherLogin">
            <button className="flex items-center justify-center w-full p-3 mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <FaChalkboardTeacher className="mr-2" />
              Teacher
            </button>
          </Link>

          {/* PARENT */}
          <Link href="/ParentLogin">
            <button className="flex items-center justify-center w-full p-3 bg-gradient-to-r from-orange-500 to-black text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <FaUsers className="mr-2" />
              Parent
            </button>
          </Link>

          <p className="text-sm text-gray-600 mt-4">
            Forgot your password?{' '}
            <a href="#" className="text-orange-500 underline hover:text-orange-600">
              Click here
            </a>
          </p>
        </div>
      )}

      {/* NUNITO FONT */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');

        * {
          font-family: 'Nunito', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>

    </header>
  );
};

export default Navbar;
