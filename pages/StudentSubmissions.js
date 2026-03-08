"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


import Link from "next/link";
import {  IoReceiptOutline } from "react-icons/io5";
import { IoSearch, IoSchool, IoFunnel, IoBarbell, IoChatbubbles, IoFolder, IoLaptop, IoCloudUpload, IoBook, IoFileTrayFull } from "react-icons/io5";
import { FiSearch } from 'react-icons/fi';
export default function StudentSubmissions() {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [report, setReport] = useState(null);
  const [assignment, setAssignment] = useState(null);
  const router = useRouter();

  const handleUpload = async (setter) => {
    alert("Document upload not supported in browser yet!");
  };

  return (
    <div className="min-h-screen bg-white px-5 py-8">
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
      

      {/* Profile Section */}
      <div className="text-center mt-8">
        <Image
          src="/teacher1.png"
          alt="Teacher"
          width={80}
          height={80}
          className="mx-auto rounded-full"
        />
        <p className="mt-4 text-gray-600">
          Mrs Dlamini, Welcome to the page where the work of our little stars can
          be received and viewed,
        </p>
        <h2 className="text-xl font-bold text-blue-600 mt-2">
          The Student Submissions Page
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6 mt-10">
        <div className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 p-6 rounded-xl relative shadow-xl">
          <p className="text-white">Most Recent Submission was by:</p>
          <h3 className="text-white font-bold text-xl">Thebogo</h3>
          <Image
            src="/girl.png"
            alt="Girl"
            width={100}
            height={100}
            className="absolute right-4 bottom-4"
          />
        </div>

        <Link href="/submissions">
          <div className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 p-6 rounded-xl text-white shadow-xl">
            Click Here To See All Submissions
          </div>
        </Link>

        <Link href="/review">
          <div className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 p-6 rounded-xl text-white shadow-xl">
            Click Here To Review and Give Feedback
          </div>
        </Link>
      </div>

    </div>
  );
}
