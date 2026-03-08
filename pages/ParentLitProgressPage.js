'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaSearch, FaBook, FaLanguage, FaAccessibleIcon, FaSignOutAlt, FaBell, FaReceipt, FaChartLine } from "react-icons/fa";
import {
    IoPerson,
    IoBook,
    IoSchool,
    IoMegaphone,
  } from "react-icons/io5"; // Ionicons for web (react-icons)

const ParentLitProgressPage = () => {
  const router = useRouter();
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
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
      {/* Header */}
     <div className="bg-indigo-700 mt-35 text-white p-4 rounded-xl flex items-center justify-between">
      {/* Back Button */}
      <button onClick={() => router.back()}>
        <Image src="/pointer.png" alt="Back" width={24} height={24} />
      </button>

      {/* Search Bar / Icon */}
      {isSearchBarVisible ? (
        <input
          className="flex-1 mx-4 px-2 py-1 rounded text-black"
          autoFocus
          placeholder="Type to search..."
          onBlur={() => setSearchBarVisible(false)}
        />
      ) : (
        <button onClick={() => setSearchBarVisible(true)} className="mx-4">
          <FaSearch size={20} />
        </button>
      )}

      {/* Icon Navigation */}
      <div className="flex justify-evenly items-center flex-1 gap-3">
        {[
          {
            icon: <IoPerson size={24} />,
            label: "Profile",
            route: "/ParentPage",
          },
          {
            icon: <IoBook size={24} />,
            label: "Subjects",
            route: "/ParentsSubjectsPage",
          },
          {
            icon: <FaChartLine size={24} />,
            label: "Progress",
            route: "/ProgressTrackerPage",
          },
          {
            icon: <IoMegaphone size={24} />,
            label: "Announcements",
            route: "/Announcements",
          },
          {
            icon: <FaReceipt size={20} />,
            label: "Reports",
            route: "/parent-subject-progress",
          },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.route)}
            className="group flex flex-col items-center text-white hover:text-orange-400 transition"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}

        {/* Static Icons */}
        <button className="hover:text-orange-400 transition">
          <FaBell size={20} />
        </button>

        <button className="hover:text-orange-400 transition">
          <FaSignOutAlt size={20} />
        </button>

        <Image
          src="/dad.png"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>

      {/* Title */}
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold text-indigo-800">Literature Progress Overview</h1>
        <p className="text-gray-600">Track your child's weekly activities and assignments in Literature.</p>
      </div>

      {/* Weeks */}
      <div className="px-4">
        {weeks.map((week, wIndex) => (
          <div key={wIndex} className="mb-4 border border-indigo-200 rounded-lg shadow-sm bg-white">
            <button
              onClick={() => setExpandedWeek(expandedWeek === week ? null : week)}
              className="w-full p-3 bg-indigo-100 text-indigo-800 font-semibold hover:bg-indigo-200 transition text-left"

            >
              {week} {expandedWeek === week ? '🔼' : '🔽'}
            </button>

            {expandedWeek === week && (
              <div className="p-3">
                {days.map((day, dIndex) => (
                  <div key={dIndex} className="mt-2 border-t border-gray-200 pt-2">
                    <button
                      onClick={() => setExpandedDay(expandedDay === `${week}-${day}` ? null : `${week}-${day}`)}
                      className="w-full text-left text-lg font-medium text-gray-700 hover:text-indigo-600"
                    >
                      {day} {expandedDay === `${week}-${day}` ? '🔼' : '🔽'}
                    </button>

                    {expandedDay === `${week}-${day}` && (
                      <div className="pl-4 mt-2">
                        {Object.keys(activities).map((activity, aIndex) => (
                          <div key={aIndex} className="mt-2">
                            <button
                              onClick={() => setExpandedActivity(expandedActivity === `${week}-${day}-${activity}` ? null : `${week}-${day}-${activity}`)}
                              className="w-full text-left text-md text-indigo-700 font-semibold"
                            >
                              {activity} {expandedActivity === `${week}-${day}-${activity}` ? '🔼' : '🔽'}
                            </button>

                            {expandedActivity === `${week}-${day}-${activity}` && (
                              <div className="pl-4 mt-1 space-y-1">
                                {activities[activity].map((link, lIndex) => (
                                  <Link
                                    key={lIndex}
                                    href={`/studentlitprogress/${week}/${day}/${activity}/${link.replace(/\s+/g, '-').toLowerCase()}`}
                                    className="block text-blue-600 underline hover:text-blue-800"
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

export default ParentLitProgressPage;
