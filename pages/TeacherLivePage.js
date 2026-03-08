import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {  IoReceiptOutline } from "react-icons/io5";
import {
  IoSearch,
  IoVideocamOutline,
  IoTime,
  IoAdd,
  IoPlay,
  IoLaptop,
  IoCloudUpload,
  IoBook,
  IoFileTrayFull,
} from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';

export default function TeacherLivePage() {
  const router = useRouter();
  const [report, setReport] = useState(null);
  const [assignment, setAssignment] = useState(null);
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const handleUpload = async (setter) => {
    alert('File uploaded successfully!');
    setter('Uploaded file');
  };

  const startLiveLesson = () => alert('Starting live lesson...');
  const recordLesson = () => alert('Recording the lesson...');

  return (
    <div className="bg-white min-h-screen flex flex-col pb-20">
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
      <div className="text-center p-6">
        <Image src="/teacher1.png" alt="Teacher" width={100} height={100} className="mx-auto rounded-full" />
        <p className="mt-4 text-lg">Mrs Dlamini, This is where you can record and keep track of all your:</p>
        <h2 className="text-2xl font-bold mt-2">Live Lessons</h2>
      </div>

      {/* Card Sections */}
      <div className="space-y-10 px-4">

        {/* Start Live Lesson */}
        <div className="bg-blue-100 rounded-xl p-6 shadow-md text-center">
          <div className="flex justify-center items-center mb-4">
            <h3 className="text-xl font-bold text-blue-800">Start Live Lesson</h3>
            <div className="ml-4">
              <Image src="/live.png" alt="Live Icon" width={60} height={60} />
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="text-center">
              <button onClick={startLiveLesson} className="p-4 bg-gray-100 rounded-full">
                <IoVideocamOutline size={40} className="text-green-500" />
              </button>
              <p className="mt-2">Start Live</p>
            </div>
            <div className="text-center">
              <button className="p-4 bg-gray-100 rounded-full">
                <IoTime size={40} className="text-blue-500" />
              </button>
              <p className="mt-2">Check Schedule</p>
            </div>
          </div>
        </div>

        {/* Pre-record Lesson */}
        <div className="bg-purple-100 rounded-xl p-6 shadow-md text-center">
          <div className="flex justify-center items-center mb-4">
            <h3 className="text-xl font-bold text-purple-800">Pre-record and Upload Lessons</h3>
            <div className="ml-4">
              <Image src="/camcorder.png" alt="Camcorder" width={60} height={60} />
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="text-center">
              <button onClick={() => handleUpload(setAssignment)} className="p-4 bg-gray-100 rounded-full">
                <IoAdd size={40} className="text-green-500" />
              </button>
              <p className="mt-2">Upload Video</p>
            </div>
            <div className="text-center">
              <button onClick={recordLesson} className="p-4 bg-gray-100 rounded-full">
                <IoVideocamOutline size={40} className="text-orange-500" />
              </button>
              <p className="mt-2">Pre-record</p>
            </div>
          </div>
        </div>

        {/* Past Uploads */}
        <div className="bg-green-100 rounded-xl p-6 shadow-md text-center">
          <div className="flex justify-center items-center mb-4">
            <h3 className="text-xl font-bold text-green-800">Past Uploads</h3>
            <div className="ml-4">
              <Image src="/live.png" alt="Live Icon" width={60} height={60} />
            </div>
          </div>
          <div className="flex overflow-x-auto mt-4 justify-center space-x-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="text-center min-w-[100px]">
                <button className="p-4 bg-gray-100 rounded-full">
                  <IoPlay size={40} className="text-red-500" />
                </button>
                <p className="mt-2 text-sm">Week {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

  
    </div>
  );
}
