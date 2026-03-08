'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { IoReceiptOutline, IoAdd, IoPlay } from 'react-icons/io5';
import { IoLaptop, IoCloudUpload, IoBook, IoFileTrayFull } from "react-icons/io5";
import Link from 'next/link';

export default function TeacherPage() {
  const router = useRouter();
  const params = useSearchParams();
  const teacherId = params.get('teacherId');
  const timetableActivity = 'Mathematics Class';

  const [teacherName, setTeacherName] = useState('');
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  useEffect(() => {
    const fetchTeacherData = async () => {
      const teacherDoc = await getDoc(doc(db, 'teachers', teacherId));
      if (teacherDoc.exists()) {
        setTeacherName(teacherDoc.data().name);
      }
    };
    if (teacherId) fetchTeacherData();
  }, [teacherId]);

  return (
    <div className="mt-30 min-h-screen bg-white text-black">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-pink-300 to-pink-500 text-white space-x-4 overflow-x-auto">
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
      <div className="text-center py-6">
        <Image src="/teacher1.png" alt="Profile" width={100} height={100} className="mx-auto rounded-full" />
        <p className="mt-4 text-lg font-semibold">
          {teacherName}, welcome to your personal profile where you can manage all the students in one space!
        </p>
      </div>

      {/* Welcome Card */}
      <div className="relative w-full max-w-xl mx-auto bg-gradient-to-r from-pink-300 to-pink-500 p-6 rounded-xl text-white mb-6">
        <h2 className="text-2xl font-bold">The iLearn Teacher&apos;s Portal!</h2>
        <p className="mt-2">It&apos;s time for the: {timetableActivity}</p>
        <Image src="/board.png" alt="Board" width={100} height={100} className="absolute right-4 top-4" />
      </div>

      {/* Live Lessons Card */}
      <div className="relative w-full max-w-xl mx-auto bg-gradient-to-r from-pink-300 to-pink-500 p-6 rounded-xl text-white mb-6">
        <h2 className="text-xl font-semibold">Live Lessons</h2>
        <Image src="/live.png" alt="Live" width={60} height={60} className="absolute right-4 top-4" />
      </div>

      {/* Subject Scroll Section */}
      <div className="overflow-x-auto px-4 py-2">
        <div className="flex justify-center space-x-4 min-w-full">
          <button
            onClick={() => router.push('/subjects/lit')}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <IoAdd size={40} className="text-green-500" />
            <span className="text-sm mt-1">Start Live Lesson</span>
          </button>

          <button
            onClick={() => router.push('/subjects/lifeskills')}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <IoPlay size={40} className="text-blue-500" />
            <span className="text-sm">Literature</span>
            <span className="text-sm">Week 1 Lesson</span>
          </button>

          <button
            onClick={() => router.push('/subjects/language')}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <IoPlay size={35} className="text-orange-500" />
            <span className="text-sm">Literature</span>
            <span className="text-sm">Monday Discussion</span>
          </button>
        </div>
      </div>

      {/* Timetable Card */}
      <div className="relative w-full max-w-xl mx-auto bg-gradient-to-r from-pink-300 to-pink-500 p-6 rounded-xl text-white mb-6 mt-6">
        <h2 className="text-xl font-semibold">Mrs Dlamini&apos;s Timetable</h2>
        <Image src="/clock.png" alt="Clock" width={60} height={60} className="absolute right-4 top-4" />
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto px-4">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">Day/Time</th>
              <th className="border px-2 py-1">8-10 AM</th>
              <th className="border px-2 py-1">10-11 AM</th>
              <th className="border px-2 py-1">11-12 NOON</th>
              <th className="border px-2 py-1">12-1 PM</th>
              <th className="border px-2 py-1">1-2 PM</th>
            </tr>
          </thead>
          <tbody>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
              <tr key={day}>
                <td className="border px-2 py-1 font-medium">{day}</td>
                <td className="border px-2 py-1">Literature</td>
                <td className="border px-2 py-1">Life Skills</td>
                <td className="border px-2 py-1">Language</td>
                <td className="border px-2 py-1">Literature</td>
                <td className="border px-2 py-1">Life Skills</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}