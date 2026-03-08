'use client';

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


import { FaArrowLeft, FaSearch, FaBook, FaUser } from "react-icons/fa";
import { IoGameController, IoNotifications, IoReceiptOutline } from "react-icons/io5";
import Link from "next/link";
const StudentSubjectProgressPage = () => {
  const router = useRouter();
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [homeworkStatus, setHomeworkStatus] = useState({
    hw1: false,
    hw2: false,
    hw3: false,
    hw4: false,
  });

  const homeworks = [
    { key: "hw1", subject: "Mathematics", due: "2025-01-30 12:00 PM" },
    { key: "hw2", subject: "Science", due: "2025-01-31 10:00 AM" },
    { key: "hw3", subject: "History", due: "2025-02-01 2:00 PM" },
    { key: "hw4", subject: "English", due: "2025-02-02 11:59 PM" },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
       {/* Top Navbar */}
       <header className="mt-30 flex items-center justify-between px-6 py-4 bg-green-600 text-white">
     
      <button onClick={() => router.back()} className="text-xl">
      <Link href="Page1">
        <FaArrowLeft />
        </Link>
      </button>
      <div className="flex flex-1 justify-around items-center">
        {isSearchBarVisible ? (
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            onBlur={() => setSearchBarVisible(false)}
            className="p-2 rounded text-black"
          />
        ) : (
          <FaSearch className="text-2xl cursor-pointer" onClick={() => setSearchBarVisible(true)} />
        )}
        
       <Link href="SubjectsPage"> <FaBook className="text-2xl cursor-pointer"  /> </Link>
       <Link href="StudentProfilePage"> <FaUser className="text-2xl cursor-pointer" /> </Link>
       <Link href="GamesPage">  <IoGameController className="text-2xl cursor-pointer"  /> </Link>
       <Link href="page">  <IoNotifications className="text-2xl cursor-pointer" /> </Link>
       <Link href="StudentSubjectProgressPage">  <IoReceiptOutline className="text-2xl cursor-pointer" /> </Link>
      </div>
      <Image src="/ppic.jpg" width={40} height={40} className="rounded-full" alt="Profile" />
    </header>
        
      

      {/* Profile Section */}
      <div className="text-center mt-5 px-5">
        <p className="text-lg text-gray-700">
          Welcome to The Subjects Progress Page! Click on a subject to see your progress so far and activities you have completed (And those you are to complete in the future!)
        </p>
      </div>

      {/* Subject Progress Sections */}
      <div className="flex flex-col items-center mt-5 gap-5">
        
          
          <button         
            className="w-4/5 bg-gradient-to-r from-pink-500 to-pink-300 text-white py-6 rounded-2xl shadow-lg flex justify-center items-center"  
          ><Link href="StudentLitProgressPage">
            <span className="text-lg font-semibold"> LITERATURE PROGRESS</span></Link>
          </button>
          
          <button         
            className="w-4/5 bg-gradient-to-r from-pink-500 to-pink-300 text-white py-6 rounded-2xl shadow-lg flex justify-center items-center"  
          >
            <Link href="Pager"><span className="text-lg font-semibold"> LIFE SKILLS PROGRESS</span></Link>
          </button>
          <button         
            className="w-4/5 bg-gradient-to-r from-pink-500 to-pink-300 text-white py-6 rounded-2xl shadow-lg flex justify-center items-center"  
          >
             <Link href="Pager"><span className="text-lg font-semibold"> ENGLISH PROGRESS</span></Link>
          </button>
       
      </div>

    
    </div>
  );
};

export default StudentSubjectProgressPage;
