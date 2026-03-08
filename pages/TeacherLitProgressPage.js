'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FaArrowLeft, FaSearch, FaBook, FaUser } from "react-icons/fa";
import { IoGameController, IoNotifications, IoReceiptOutline } from "react-icons/io5";
import { FiSearch } from 'react-icons/fi';
import {  IoLaptop, IoCloudUpload, IoBook, IoFileTrayFull } from "react-icons/io5";

const TeacherLitProgressPage = () => {
  const router = useRouter();
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedActivity, setExpandedActivity] = useState(null);

  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const activities = {
    'Introduction': ['Overview with Learners'],
    'Videos': ['Monitor Live Lesson', 'Facilitate Discussion'],
    'Assignment': ['Upload/Review Assignment', 'Track Deadlines', 'Grade Submissions'],
    'Test': ['Create Quiz', 'Check Submissions', 'Enter Grades'],
    'Interactive Activity': ['Review Responses', 'Mark Activity']
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="mt-30 flex items-center justify-between px-4 py-2 bg-gradient-to-r from-pink-300 to-pink-500 text-white space-x-4 overflow-x-auto">
            {/* Back Button */}
            <button onClick={() => router.back()} className="flex-shrink-0">
              <Image src="/pointer.png" alt="Back" width={30} height={30} />
            </button>
      
            {/* Search Input or Icon */}
            <div className="flex-shrink-0">
              {isSearchBarVisible ? (
                <input
                  type="text"
                  autoFocus
                  onBlur={() => setSearchBarVisible(false)}
                  placeholder="Search..."
                  className="rounded px-2 py-1 text-black w-32 md:w-40"
                />
              ) : (
                <button onClick={() => setSearchBarVisible(true)}>
                  <FiSearch size={24} />
                </button>
              )}
            </div>
      
            {/* Nav Icons */}
            <Link href="/TeacherLitProgressPage" className="flex-shrink-0">
              <IoReceiptOutline size={24} />
            </Link>
            <Link href="/TeacherLivePage" className="flex-shrink-0">
              <IoLaptop size={24} />
            </Link>
            <Link href="/UploadsPage" className="flex-shrink-0">
              <IoCloudUpload size={24} />
            </Link>
            <Link href="/StudentSubmissions" className="flex-shrink-0">
              <IoBook size={24} />
            </Link>
            <Link href="/StudentRecords" className="flex-shrink-0">
              <IoFileTrayFull size={24} />
            </Link>
      
            {/* Profile Image */}
            <Link href="/teacher" className="flex-shrink-0">
              <Image
                src="/teacher1.png"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full"
              />
            </Link>
          </div>

      {/* Teacher Instructions */}
      <div className="text-center p-4">
        <h1 className="text-xl font-semibold">Welcome to the Teacher Literature Progress Page</h1>
        <p className="text-gray-700">Scroll through each activity by Week and Day to manage and track learner engagement and completion.</p>
      </div>

      {/* Weeks and Activities */}
      <div className="p-4">
        {weeks.map((week, wIndex) => (
          <div key={wIndex} className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedWeek(expandedWeek === week ? null : week)}
              className="w-full p-3 bg-blue-500 text-white text-left"
            >
              {week} {expandedWeek === week ? '⬆️' : '⬇️'}
            </button>
            {expandedWeek === week && (
              <div className="p-2 bg-white">
                {days.map((day, dIndex) => (
                  <div key={dIndex} className="border-t pt-2">
                    <button
                      onClick={() => setExpandedDay(expandedDay === `${week}-${day}` ? null : `${week}-${day}`)}
                      className="w-full text-left text-lg font-semibold"
                    >
                      {day} {expandedDay === `${week}-${day}` ? '⬆️' : '⬇️'}
                    </button>
                    {expandedDay === `${week}-${day}` && (
                      <div className="pl-4">
                        {Object.keys(activities).map((activity, aIndex) => (
                          <div key={aIndex} className="mt-2">
                            <button
                              onClick={() =>
                                setExpandedActivity(
                                  expandedActivity === `${week}-${day}-${activity}` ? null : `${week}-${day}-${activity}`
                                )
                              }
                              className="w-full text-left text-md font-medium"
                            >
                              {activity} {expandedActivity === `${week}-${day}-${activity}` ? '⬆️' : '⬇️'}
                            </button>
                            {expandedActivity === `${week}-${day}-${activity}` && (
                              <div className="pl-6">
                                {activities[activity].map((link, lIndex) => (
                                  <Link
                                    key={lIndex}
                                    href={`/teacherlitprogress/${week}/${day}/${activity}/${link.replace(/\s+/g, '-').toLowerCase()}`}
                                    className="block text-blue-600 underline mt-1"
                                  >
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

export default TeacherLitProgressPage;
