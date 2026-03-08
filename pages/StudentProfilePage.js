'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaSearch, FaBook, FaUser } from "react-icons/fa";
import { IoGameController, IoNotifications } from "react-icons/io5";
import { IoSearch, IoBook, IoAccessibilitySharp, IoLanguage } from 'react-icons/io5';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';

const StudentProfilePage = () => {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Navigation Bar */}
      <div className="mt-30 flex items-center justify-between bg-blue-600 p-4 rounded-lg text-white w-full">
        <button onClick={() => window.history.back()} className="flex-1 flex justify-center">
          <Image src="/pointer.png" alt="Back" width={30} height={30} />
        </button>

        <div className="flex-1 flex justify-center">
          <Link href="/StudentProfilePage">
            <FaBook className="text-4xl cursor-pointer" />
          </Link>
        </div>
        
        <div className="flex-1 flex justify-center">
          <Link href="/profile">
            <FaUser className="text-4xl cursor-pointer" />
          </Link>
        </div>
        
        <div className="flex-1 flex justify-center">
          <Link href="/games">
            <IoGameController className="text-4xl cursor-pointer" />
          </Link>
        </div>
        
        <div className="flex-1 flex justify-center">
          <Link href="/notifications">
            <IoNotifications className="text-4xl cursor-pointer" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center relative">
          {isSearchBarVisible ? (
            <input
              type="text"
              className="px-4 py-2 rounded-lg border w-64 text-black"
              placeholder="Type to search..."
              onBlur={() => setSearchBarVisible(false)}
            />
          ) : (
            <IoSearch
              size={30}
              className="cursor-pointer"
              onClick={() => setSearchBarVisible(true)}
            />
          )}
        </div>

        <div className="flex-1 flex justify-center">
          <Image src="/ppic.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-6">
        <Image src="/ppic.jpg" alt="Profile" width={100} height={100} className="rounded-full" />
        <p className="mt-2 text-lg">
          email@example.com, this is your personal profile!
        </p>
      </div>

      {/* Homework Section */}
      <div className="bg-white text-center p-4 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Today's Homework</h2>
        <div className="flex space-x-4 overflow-x-auto p-2">
          {[
            { subject: 'Literature', icon: IoBook, color: 'text-yellow-500' },
            { subject: 'Life Skills', icon: IoAccessibilitySharp, color: 'text-blue-500' },
            { subject: 'Language', icon: IoLanguage, color: 'text-green-500' }
          ].map((hw, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg min-w-[150px] flex flex-col items-center">
              <hw.icon size={30} className={hw.color} />
              <p className="mt-2 font-semibold">{hw.subject}</p>
              <p className="text-sm">Due: 02/01/2025, 5PM</p>
              <button
                className={`mt-2 px-4 py-2 rounded ${isSubmitted ? 'bg-green-500' : 'bg-red-500'} text-white`}
                onClick={() => setIsSubmitted(!isSubmitted)}
              >
                {isSubmitted ? 'Submitted 😄' : 'Submit 🤔'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Marks Section */}
      <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Your Recent Marks</h2>
        <div className="flex space-x-4 overflow-x-auto p-2">
          {[
            { subject: 'Literature Activity', progress: 75 },
            { subject: 'Life Skills Test', progress: 46 },
            { subject: 'Language Homework', progress: 66 }
          ].map((mark, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg min-w-[150px] flex flex-col items-center">
              <CircularProgressbar value={mark.progress} text={`${mark.progress}%`} />
              <p className="mt-2 font-semibold">{mark.subject}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overlapping Rectangles for Weekly Timetable */}
      <div className="flex justify-center items-center w-full mt-6">
        <div className="relative w-full max-w-md h-20 flex justify-center items-center">
          <Image src="/clock.png" width={50} height={50} alt="Clock" className="absolute top-2 z-30" />
          <div className="absolute top-0 w-3/4 h-12 bg-red-500 rounded-lg shadow-lg z-10 flex justify-center items-center">
            <span className="text-white font-bold">Your Weekly Timetable</span>
          </div>
          <div className="absolute top-2 w-3/4 h-12 bg-red-400 rounded-lg shadow-md z-0"></div>
          <div className="absolute top-4 w-3/4 h-12 bg-red-300 rounded-lg shadow-sm z-[-1]"></div>
        </div>
      </div>

      {/* Timetable Table */}
      <div className="w-full overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Day👇/Time👉</th>
              <th className="border border-gray-300 px-4 py-2">8-10 AM</th>
              <th className="border border-gray-300 px-4 py-2">10-11 AM</th>
              <th className="border border-gray-300 px-4 py-2">11-12 NOON</th>
              <th className="border border-gray-300 px-4 py-2">12-1 PM</th>
              <th className="border border-gray-300 px-4 py-2">1-2 PM</th>
            </tr>
          </thead>
          <tbody>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
              <tr key={day} className="odd:bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-bold">{day}</td>
                <td className="border border-gray-300 px-4 py-2">Literature</td>
                <td className="border border-gray-300 px-4 py-2">Life Skills</td>
                <td className="border border-gray-300 px-4 py-2">Language</td>
                <td className="border border-gray-300 px-4 py-2">Literature</td>
                <td className="border border-gray-300 px-4 py-2">Life Skills</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfilePage;