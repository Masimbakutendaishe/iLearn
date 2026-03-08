import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeft, FaSearch, FaBook, FaUser } from "react-icons/fa";
import { IoGameController, IoNotifications, IoReceiptOutline } from "react-icons/io5";
import Link from "next/link";

const StudentCoursePage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const timetableActivity = "Mathematics Class";

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
    </header>

      {/* Greeting Section */}
      <div className="p-6 text-lg font-semibold">
        👋 Hello, {username || "Student"}!
      </div>

      {/* Welcome Section */}
      <div className="p-6 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-lg m-4">
        <h2 className="text-xl font-bold">Welcome to Your iLearn Portal!</h2>
        <p className="mt-2">It's time for your: {timetableActivity}</p>
      </div>

      {/* Subjects Section */}
      <div className="p-6 items-center">
        <h2 className="text-xl font-bold">📖 Subjects:</h2>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Link href="SubjectsDetailPageLit">
            <FaBook className="text-yellow-500 text-4xl" />
            </Link>
            <span>Literature</span>
            
          </div>
          <div className="flex flex-col items-center">
          <Link href="SubjectsDetailPageLifeSkills">
            <FaUser className="text-blue-500 text-4xl" />
            </Link>
            <span>Life Skills</span>
          </div>
          <div className="flex flex-col items-center">
          <Link href="SubjectsDetailPageLanguage">
            <FaBook className="text-green-500 text-4xl" />
            </Link>
            <span>Language</span>
          </div>
        </div>
      </div>

      {/* Video Courses Section */}
      <div className="p-6">
        <h2 className="text-xl font-bold">🎥 Video Courses:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image src="/teach.jpg" width={200} height={150} alt="Course Thumbnail" />
            <h3 className="mt-2 font-semibold">Life Skills for Babies 101</h3>
            <p>by Mrs. Dlamini</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Watch Now</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <Image src="/teach2.jpg" width={200} height={150} alt="Course Thumbnail" />
            <h3 className="mt-2 font-semibold">First Literature Lecture</h3>
            <p>by Mr. Gumede</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Watch Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCoursePage;
