import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {  IoReceiptOutline } from "react-icons/io5";
import { IoSearch, IoSchool, IoFunnel, IoBarbell, IoChatbubbles, IoFolder, IoLaptop, IoCloudUpload, IoBook, IoFileTrayFull } from "react-icons/io5";
import { FiSearch } from 'react-icons/fi';
import Link from "next/link";
export default function UploadsPage() {
  const router = useRouter();
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
      <section className="text-center px-4 py-6">
        <Image src="/teacher1.png" alt="Large Profile" width={100} height={100} className="mx-auto rounded-full" />
        <p className="mt-4 text-orange-400">
          Mrs Dlamini, This is where you can upload material for students to read in their portals:
        </p>
        <h2 className="text-2xl text-orange-400 font-bold mt-2">The Upload Page</h2>
      </section>

      {/* Grid Options */}
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-200">
          <IoSchool size={40} color="orange" />
          <p className="mt-2">Upload Assignment</p>
        </button>
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-200">
          <IoFunnel size={40} color="orange" />
          <p className="mt-2">Upload Test</p>
        </button>
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-200">
          <IoBarbell size={40} color="orange" />
          <p className="mt-2">Upload Exercise</p>
        </button>
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-200">
          <IoChatbubbles size={40} color="orange" />
          <p className="mt-2">Send Message</p>
        </button>
        <button className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-200">
          <IoFolder size={40} color="orange" />
          <p className="mt-2">View Previous Uploads</p>
        </button>
      </section>

    </div>
  );
}
