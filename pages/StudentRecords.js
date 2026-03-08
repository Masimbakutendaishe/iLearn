import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {  IoReceiptOutline } from "react-icons/io5";
import { IoSearch, IoSchool, IoFunnel, IoBarbell, IoChatbubbles, IoFolder, IoLaptop, IoCloudUpload, IoBook, IoFileTrayFull } from "react-icons/io5";
import { FiSearch } from 'react-icons/fi';
export default function StudentRecords() {
  const router = useRouter();
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [report, setReport] = useState(null);
  const [assignment, setAssignment] = useState(null);

  const recentSubmission = "Thebogo";

  const handleUpload = async (type) => {
    alert(`${type} upload simulated (use actual file upload handler)`);
  };

  return (
    <div className="min-h-screen bg-white px-4 pb-24">
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
      <div className="text-center my-8">
        <Image
          src="/teacher1.png"
          width={100}
          height={100}
          alt="Teacher"
          className="mx-auto rounded-full"
        />
        <p className="text-gray-600 mt-4">
          Mrs Dlamini, Welcome to the page where the performance of the iLearn
          Academy stars can be recorded for future reference!
        </p>
        <h2 className="text-xl font-bold mt-2">The Student Records Page</h2>
      </div>

      {/* Info Cards */}
      <div className="flex flex-col items-center space-y-6">
        <div
          onClick={() => router.push("/ActivityPage")}
          className="relative w-11/12 p-6 rounded-xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white shadow-lg cursor-pointer"
        >
          <p>The iLearn Star of The Week is:</p>
          <h3 className="text-lg font-bold">{recentSubmission}</h3>
          <Image
            src="/girl.png"
            alt="Star Girl"
            width={80}
            height={80}
            className="absolute bottom-2 right-4"
          />
        </div>

        <div className="w-11/12 p-6 rounded-xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white shadow-lg"></div>
        <div className="w-11/12 p-6 rounded-xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white shadow-lg"></div>

        <div
          onClick={() => router.push("/ActivityPage")}
          className="w-11/12 p-6 rounded-xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white shadow-lg cursor-pointer"
        >
          <p>Click Here To See All Students and Their Records</p>
        </div>

        <div
          onClick={() => router.push("/ActivityPage")}
          className="w-11/12 p-6 rounded-xl bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white shadow-lg cursor-pointer"
        >
          <p>Overall Marks Table</p>
        </div>
      </div>

    </div>
  );
}
