'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaArrowLeft, FaSearch, FaBook, FaUser } from "react-icons/fa";
import { IoGameController, IoNotifications, IoReceiptOutline } from "react-icons/io5";
const StudentLitProgressPage = () => {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedActivity, setExpandedActivity] = useState(null);

  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const activities = {
    'Introduction': ['Basic Introduction'],
    'Videos': ['Join Live Lesson', 'Contribute to Chat'],
    'Assignment': ['Read/Download Assignment', 'Assignment Deadline', 'Submit Assignment'],
    'Test': ['Attempt Quiz', 'Submit', 'See Grades'],
    'Interactive Activity': ['Read Activity', 'Submit Activity']
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
      <div className="text-center p-4">
        <h1 className="text-xl font-semibold">Welcome to The Literature Progress Page!</h1>
        <p className="text-gray-700">Scroll through each activity by Week and make sure to complete them all!</p>
      </div>

      {/* Weeks and Activities */}
      <div className="p-4">
        {weeks.map((week, wIndex) => (
          <div key={wIndex} className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
            <button onClick={() => setExpandedWeek(expandedWeek === week ? null : week)}
              className="w-full p-3 bg-blue-500 text-white text-left">
              {week} {expandedWeek === week ? '⬆️' : '⬇️'}
            </button>
            {expandedWeek === week && (
              <div className="p-2 bg-white">
                {days.map((day, dIndex) => (
                  <div key={dIndex} className="border-t pt-2">
                    <button onClick={() => setExpandedDay(expandedDay === `${week}-${day}` ? null : `${week}-${day}`)}
                      className="w-full text-left text-lg font-semibold">
                      {day} {expandedDay === `${week}-${day}` ? '⬆️' : '⬇️'}
                    </button>
                    {expandedDay === `${week}-${day}` && (
                      <div className="pl-4">
                        {Object.keys(activities).map((activity, aIndex) => (
                          <div key={aIndex} className="mt-2">
                            <button onClick={() => setExpandedActivity(expandedActivity === `${week}-${day}-${activity}` ? null : `${week}-${day}-${activity}`)}
                              className="w-full text-left text-md font-medium">
                              {activity} {expandedActivity === `${week}-${day}-${activity}` ? '⬆️' : '⬇️'}
                            </button>
                            {expandedActivity === `${week}-${day}-${activity}` && (
                              <div className="pl-6">
                                {activities[activity].map((link, lIndex) => (
                                  <Link key={lIndex} href={`/studentlitprogress/${week}/${day}/${activity}/${link.replace(/\s+/g, '-').toLowerCase()}`} className="block text-blue-600 underline mt-1">
                                    {link}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentLitProgressPage;
