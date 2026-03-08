'use client';
import { useState } from "react";
import Image from "next/image";
import { IoIosSearch, IoIosNotifications, IoIosPerson } from "react-icons/io";
import { FaArrowLeft, FaSearch, FaBook, FaUser } from "react-icons/fa";
import { IoGameController, IoNotifications, IoReceiptOutline } from "react-icons/io5";
import Link from "next/link";

const SubjectsDetailPageLanguage = () => {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleHomeworkSubmit = () => setIsSubmitted(!isSubmitted);

  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-blue-200 min-h-screen">
      {/* Top Navbar */}
      <header className="mt-30 flex items-center justify-between px-6 py-4 bg-green-600 text-white shadow-lg rounded-b-lg">
        <button onClick={() => router.back()} className="text-xl">
          <Link href="Page1">
            <FaArrowLeft />
          </Link>
        </button>
        <div className="flex flex-1 justify-around items-center space-x-4">
          {isSearchBarVisible ? (
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              onBlur={() => setSearchBarVisible(false)}
              className="p-2 rounded-full text-black shadow-md transition-all transform focus:ring-2 focus:ring-green-500"
            />
          ) : (
            <FaSearch className="text-2xl cursor-pointer hover:text-gray-300 transition-all transform" onClick={() => setSearchBarVisible(true)} />
          )}

          <Link href="SubjectsPage"> 
            <FaBook className="text-2xl cursor-pointer hover:text-gray-300 transition-all transform" />
          </Link>
          <Link href="StudentProfilePage"> 
            <FaUser className="text-2xl cursor-pointer hover:text-gray-300 transition-all transform" />
          </Link>
          <Link href="GamesPage">  
            <IoGameController className="text-2xl cursor-pointer hover:text-gray-300 transition-all transform" />
          </Link>
          <Link href="page">  
            <IoNotifications className="text-2xl cursor-pointer hover:text-gray-300 transition-all transform" />
          </Link>
          <Link href="StudentSubjectProgressPage">  
            <IoReceiptOutline className="text-2xl cursor-pointer hover:text-gray-300 transition-all transform" />
          </Link>
        </div>
        <Image src="/ppic.jpg" width={40} height={40} className="rounded-full border-2 border-white" alt="Profile" />
      </header>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-8 px-4 space-y-4">
        <p className="text-center text-lg text-gray-700 font-semibold">
          Hello, @emailuser.com, I am Mr. Gumede, your Language Teacher!
        </p>
        <Image
          src="/teacher1.png"
          alt="Teacher"
          width={120}
          height={120}
          className="rounded-full border-4 border-orange-400 shadow-xl transform hover:scale-110 transition-all"
        />
        <p className="text-center text-lg text-gray-600">
          This is where we will have all the Language Fun!
        </p>

        {/* Overlapping Rectangles with modern design */}
        <div className="flex justify-center items-center relative w-full mt-8 space-y-4">
          <div className="absolute w-4/5 h-16 bg-pink-500 rounded-lg flex justify-center items-center top-0 shadow-xl transform hover:scale-105 transition-all ease-in-out duration-300">
            <p className="text-white text-lg font-semibold">
              Today we are doing: &quot;Nouns and Verbs&quot;
            </p>
          </div>
          <div className="absolute w-4/5 h-16 bg-pink-500 rounded-lg flex justify-center items-center top-20 shadow-xl transform hover:scale-105 transition-all ease-in-out duration-300">
            <p className="text-white text-lg font-semibold">
              Today&apos;s Language Homework
            </p>
          </div>
        </div>

        {/* Homework Section */}
        <div className="mt-40">
          <div className="w-full bg-white rounded-lg p-6 shadow-xl transform hover:scale-105 transition-all ease-in-out duration-300">
            <h2 className="text-pink-500 text-center text-2xl font-bold">
              Week 1 Language Homework
            </h2>
            <p className="text-blue-300 text-center">
              Get your parents to help you...
            </p>
            <p className="text-blue-300 text-center">
              Due: 02/01/2025, 5PM
            </p>
            <button
              onClick={handleHomeworkSubmit}
              className={`text-center mt-4 px-6 py-3 rounded-lg text-white ${isSubmitted ? 'bg-green-400' : 'bg-orange-400'} transition-all ease-in-out duration-300 transform hover:scale-105`}
            >
              {isSubmitted ? 'Submitted 😄' : 'Read More and Submit 🤔'}
            </button>
          </div>
        </div>

        {/* Timetable Section */}
        <div className="flex justify-center items-center relative w-full mt-8 space-y-4">
          <div className="absolute w-4/5 h-16 bg-pink-500 rounded-lg flex justify-center items-center top-0 shadow-xl transform hover:scale-105 transition-all ease-in-out duration-300">
            <p className="text-white text-lg font-semibold">TIMETABLE</p>
          </div>
        </div>

        {/* Timetable Table */}
        <div className="overflow-x-auto mt-20">
          <table className="min-w-full shadow-xl transform hover:scale-105 transition-all ease-in-out duration-300">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200 text-sm">Day / Time</th>
                <th className="px-4 py-2 bg-gray-200 text-sm">8-10 AM</th>
                <th className="px-4 py-2 bg-gray-200 text-sm">10-11 AM</th>
                <th className="px-4 py-2 bg-gray-200 text-sm">11-12 NOON</th>
                <th className="px-4 py-2 bg-gray-200 text-sm">12-1 PM</th>
                <th className="px-4 py-2 bg-gray-200 text-sm">1-2 PM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-sm">Monday</td>
                <td className="px-4 py-2 text-sm">Literature</td>
                <td className="px-4 py-2 text-sm">Life Skills</td>
                <td className="px-4 py-2 text-sm">Language</td>
                <td className="px-4 py-2 text-sm">Literature</td>
                <td className="px-4 py-2 text-sm">Life Skills</td>
              </tr>
              {/* Repeat for other days */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubjectsDetailPageLanguage;