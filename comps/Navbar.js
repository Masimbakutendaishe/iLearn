'use client';

import { useState } from 'react';
import { FaUser, FaBars, FaTimes, FaUserGraduate, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const router = useRouter();
  const colors = ['text-orange','text-green-500', 'text-yellow-400'];
  const text = "iLEARN ACADEMY";
  
  const [authOpen, setAuthOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5 bg-white/90 backdrop-blur-lg shadow-xl border-b border-gray-200">

      {/* LOGO + TEXT */}
      <a href="/" className="flex items-center text-3xl font-extrabold tracking-wide select-none">
        <Image 
          src="/loggo.png" 
          width={35} 
          height={35} 
          alt="Logo" 
          className="mr-3 drop-shadow-xl animate-bounce"
        />

        {/* Animated Text */}
        <div className="flex">
          {text.split('').map((letter, index) => (
            <span
              key={index}
              className={`${colors[index % colors.length]} transition-all duration-500 hover:scale-150 hover:-translate-y-2 hover:rotate-12 hover:shadow-[0_0_12px_rgba(255,200,0,0.6)] cursor-pointer`}
              style={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.2)"
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </a>
{/* ✅ HAMBURGER ICON (FIXED) */}
<div className="md:hidden text-2xl text-green-900 z-50 ml-auto mr-3">
  {menuOpen ? (
    <FaTimes onClick={() => setMenuOpen(false)} />
  ) : (
    <FaBars onClick={() => setMenuOpen(true)} />
  )}
</div>

      {/* NAV LINKS */}


      <nav className={`absolute mt-7 md:static top-20 left-0 w-full md:w-auto md:flex bg-white md:bg-transparent transition-all duration-500 ease-in-out ${menuOpen ? 'block animate-fadeIn' : 'hidden md:block'}`}>

<div className="flex flex-col md:flex-row md:items-center text-lg font-semibold px-4 md:px-0 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-lg md:shadow-none mt-2 md:mt-0 border border-gray-200 md:border-0">


          {[
            { name: 'ABOUT US', color: 'text-yellow-400', link: '/About' },
            { name: 'THE TEAM', color: 'text-green-500', link: '/Teacher' },
            { name: 'ACTIVITIES', color: 'text-yellow-400', link: '/Activities' },
            { name: 'GALLERY', color: 'text-green-500', link: '/Gallery' },
            { name: 'CONTACT', color: 'text-yellow-400', link: '/Contact' }
          ].map((item, index) => (
            <a
            key={index}
            href={item.link}
            className={`group relative p-4 my-1 rounded-xl ${item.color} transition-all duration-300 
            hover:bg-gray-100 hover:scale-[1.03] active:scale-95`}
          >
            {item.name}
          
            {/* underline */}
            <span className="absolute left-4 bottom-2 w-0 h-[3px] bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 rounded-full transition-all duration-300 group-hover:w-[80%]"></span>
          
            {/* soft glow */}
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-green-300 via-yellow-300 to-pink-400 blur-lg transition duration-300"></span>
          </a>
          ))}

        </div>
      </nav>

      <div className="relative group">
  <FaUser
    className="text-2xl text-green-900 cursor-pointer mr-6 transition-all duration-300 hover:text-orange-500 hover:scale-125 hover:rotate-12"
    onClick={() => setAuthOpen(true)}
  />

  {/* Tooltip */}
  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
    Open Admin Centre
  </span>
</div>

      {/* LOGIN DROPDOWN */}
      {loginOpen && (
        <div className="absolute top-24 right-6 md:right-8 w-80 p-6 bg-white shadow-2xl rounded-3xl text-center border border-gray-200 animate-fadeIn transform transition-transform duration-500 hover:-translate-y-1 hover:scale-105">

          <h3 className="text-2xl font-bold text-green-600 mb-4 drop-shadow-lg animate-pulse">
            Login to iLearn
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Select your role:
          </p>

          {/* STUDENT */}
          <Link href="/StudentLogin">
            <button className="flex items-center justify-center w-full p-3 mb-3 bg-gradient-to-r from-green-500 to-yellow-400 text-white rounded-2xl shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300">
              <FaUserGraduate className="mr-2" />
              Student
            </button>
          </Link>

          {/* TEACHER */}
          <Link href="/TeacherLogin">
            <button className="flex items-center justify-center w-full p-3 mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300">
              <FaChalkboardTeacher className="mr-2" />
              Teacher
            </button>
          </Link>

          {/* PARENT */}
          <Link href="/ParentLogin">
            <button className="flex items-center justify-center w-full p-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300">
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

      {/* NUNITO FONT + ANIMATIONS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');

        * {
          font-family: 'Nunito', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .animate-pulse {
          animation: pulse 1.2s infinite;
        }
      `}</style>

{authOpen && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

    <div className="bg-white p-6 mt-60 rounded-2xl w-80 shadow-2xl relative flex flex-col justify-center">

      <h2 className="text-2xl font-bold mb-4 text-green-600 text-center">
        Admin Login
      </h2>

      {/* USERNAME */}
      <input
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* PASSWORD */}
      <input
        type="password"
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* ERROR */}
      {error && (
        <p className="text-red-500 text-sm mb-2 text-center">
          {error}
        </p>
      )}

      {/* LOGIN BUTTON */}
      <button
        className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition-all"
        onClick={() => {
          if (username === "admin" && password === "1234") {
            setAuthOpen(false);
            router.push("/Admin");
          } else {
            setError("Invalid username or password");
          }
        }}
      >
        Login
      </button>

      {/* CLOSE */}
      <button
        className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        onClick={() => setAuthOpen(false)}
      >
        ✕
      </button>

    </div>
  </div>
)}
    </header>
  );

  
};


export default Navbar;
