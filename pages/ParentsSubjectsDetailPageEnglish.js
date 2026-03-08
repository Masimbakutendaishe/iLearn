import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaSearch, FaBook, FaLanguage, FaAccessibleIcon, FaSignOutAlt, FaBell, FaReceipt, FaChartLine } from "react-icons/fa";
import {
    IoPerson,
    IoBook,
    IoSchool,
    IoMegaphone,
} from "react-icons/io5";

export default function ParentsSubjectsDetailPageEnglish() {
  const router = useRouter();
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 text-gray-800">
      {/* Header */}
      <div className="bg-blue-600 text-white mt-30 p-4 rounded-xl flex items-center justify-between">
        <button onClick={() => router.back()}>
          <Image src="/pointer.png" alt="Back" width={24} height={24} />
        </button>

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

        <div className="flex justify-evenly items-center flex-1 gap-3">
          {[
            { icon: <IoPerson size={24} />, label: "Profile", route: "/ParentPage" },
            { icon: <IoBook size={24} />, label: "Subjects", route: "/ParentsSubjectsPage" },
            { icon: <FaChartLine size={24} />, label: "Progress", route: "/ProgressTrackerPage" },
            { icon: <IoMegaphone size={24} />, label: "Announcements", route: "/Announcements" },
            { icon: <FaReceipt size={20} />, label: "Reports", route: "/parent-subject-progress" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.route)}
              className="group flex flex-col items-center text-white hover:text-yellow-200 transition"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}

          <button className="hover:text-yellow-200 transition">
            <FaBell size={20} />
          </button>

          <button className="hover:text-yellow-200 transition">
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

      {/* Intro */}
      <div className="px-4 py-6 text-center">
        <p className="text-lg mb-4">
          Hello parent of, @emailuser.com, I am Mrs Dlamini, your child&apos;s English Teacher!
        </p>
        <div className="flex justify-center mb-4">
          <Image src="/teacher1.png" alt="Teacher" width={100} height={100} />
        </div>
        <p className="text-lg">
          Welcome to our exciting English Language journey!
        </p>
      </div>

      {/* English Activity */}
      <div className="mt-6 px-4 flex flex-col items-center">
        <div className="relative w-full max-w-md">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-400 to-green-400 z-10 rounded shadow-md flex items-center justify-center">
            <Image src="/book2.png" alt="Books" width={60} height={60} className="absolute right-6 bottom-5 z-20" />
            <p className="text-lg font-semibold text-white">
              Today we explore: &quot;Nouns+Verbs&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Homework Section */}
      <div className="mt-36 px-4 flex flex-col items-center">
        <div className="relative w-full max-w-md">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-300 to-blue-500 z-10 rounded shadow-md flex items-center justify-center">
            <Image src="/pencil.png" alt="Pencil" width={60} height={60} className="absolute right-6 bottom-5 z-20" />
            <p className="text-lg font-semibold text-white">
              Today&apos;s English Homework
            </p>
          </div>
        </div>
      </div>

      {/* Homework Card */}
      <div className="mt-36 flex justify-center">
        <div className="bg-green-100 p-4 rounded shadow-md w-full max-w-md text-center">
          <p className="text-lg font-bold mb-2">Week 1 English Homework</p>
          <p className="text-sm">Assist your child in identifying nouns and verbs in simple sentences.</p>
          <p className="text-sm">Due: 02/01/2025, 5PM</p>
          <button
            onClick={handleSubmit}
            className={`mt-3 px-4 py-2 rounded text-white ${isSubmitted ? 'bg-green-600' : 'bg-blue-600'}`}
          >
            {isSubmitted ? 'Submitted 🎉' : 'Read More and Submit ✍️'}
          </button>
        </div>
      </div>

      {/* Timetable Section */}
      <div className="mt-10 px-4 flex flex-col items-center">
        <div className="relative w-full max-w-md">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-teal-300 to-blue-400 z-10 rounded shadow-md flex items-center justify-center">
            <Image src="/clock.png" alt="Clock" width={60} height={60} className="absolute right-6 bottom-5 z-20" />
            <p className="text-lg font-semibold text-white">Their Timetable</p>
          </div>
        </div>
      </div>

      {/* Timetable */}
      <div className="mt-36 px-4 overflow-x-auto">
        <table className="w-full table-auto border border-collapse border-gray-300 text-center bg-white rounded shadow-md">
          <thead>
            <tr className="bg-blue-200">
              <th className="border px-2 py-1">Day/Time</th>
              <th className="border px-2 py-1">8-10 AM</th>
              <th className="border px-2 py-1">10-11 AM</th>
              <th className="border px-2 py-1">11-12 NOON</th>
              <th className="border px-2 py-1">12-1 PM</th>
              <th className="border px-2 py-1">1-2 PM</th>
            </tr>
          </thead>
          <tbody>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
              <tr key={day} className="odd:bg-white even:bg-gray-100">
                <td className="border px-2 py-1 font-bold">{day}</td>
                {["English", "Life Skills", "Maths", "English", "Reading"].map((subj, idx) => (
                  <td key={idx} className="border px-2 py-1">{subj}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}