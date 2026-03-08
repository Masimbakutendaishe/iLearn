import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaBook, FaUser } from "react-icons/fa";
import { IoGameController, IoNotifications, IoSearch } from "react-icons/io5";
import Link from 'next/link';

const SubjectsPage = () => {
  const subjects = [
    { name: "LITERATURE", bgColor: "bg-pink-500", textColor: "text-white", link: "/SubjectsDetailPageLit" },
    { name: "LIFE SKILLS", bgColor: "bg-purple-500", textColor: "text-white", link: "/SubjectsDetailPageLifeSkills" },
    { name: "LANGUAGE", bgColor: "bg-blue-500", textColor: "text-white", link: "/SubjectsDetailPageLanguage" },
  ];

  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
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

      <h1 className="mt-10 text-4xl font-bold text-orange-600 mb-6">Welcome to The Subjects Page!</h1>
      <p className="text-lg text-gray-600 mb-6">Click on a subject to explore more details.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {subjects.map((subject, index) => (
          <Link href={subject.link} key={index}>
            <div
              className={`p-6 rounded-lg shadow-lg ${subject.bgColor} cursor-pointer hover:scale-105 transition-transform`}
            >
              <h2 className={`text-xl font-semibold ${subject.textColor}`}>{subject.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectsPage;
