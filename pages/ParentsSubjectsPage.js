import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Link from "next/link";
import classNames from "classnames";
import { FaSearch, FaBook, FaLanguage, FaAccessibleIcon, FaSignOutAlt, FaUser, FaBullhorn, FaBell, FaReceipt,FaChartLine  } from "react-icons/fa";
import {
    IoPerson,
    IoBook,
    IoSchool,
    IoMegaphone,
  } from "react-icons/io5"; // Ionicons for web (react-icons)
export default function ParentsSubjectsPage() {
  const router = useRouter();
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const homeworks = [
    { key: "hw1", subject: "Mathematics", due: "2025-01-30 12:00 PM" },
    { key: "hw2", subject: "Science", due: "2025-01-31 10:00 AM" },
    { key: "hw3", subject: "History", due: "2025-02-01 2:00 PM" },
    { key: "hw4", subject: "English", due: "2025-02-02 11:59 PM" },
  ];

  const timetable = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => ({
    day,
    slots: ["Literature", "Life Skills", "Language", "Literature", "Life Skills"],
  }));

  return (
    <div className="min-h-screen bg-white pb-24">
        <div className="mt-30 bg-pink-600 text-white p-4 rounded-xl flex items-center justify-between">
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
                 route: "/progress-tracker",
               },
               {
                 icon: <IoMegaphone size={24} />,
                 label: "Announcements",
                 route: "/announcements",
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

      {/* Intro Text */}
      <div className="p-4">
        <p className="text-gray-800 text-lg">
          This is your Parental Subjects Page, where you can take a look at the material your little one is exploring with the help of the teacher.
        </p>

        <div className="grid gap-4 mt-6 grid-cols-1 md:grid-cols-3">
          {[
            { title: "LITERATURE", link: "/ParentsSubjectsDetailPageLit" },
            { title: "LIFE SKILLS", link: "/ParentsSubjectsDetailPageLifeSkills" },
            { title: "LANGUAGE", link: "/ParentsSubjectsDetailPageEnglish" },
          ].map(({ title, link }, i) => (
            <Link key={i} href={link} className="relative bg-gradient-to-r from-pink-500 to-pink-300 p-6 rounded-xl text-white shadow-lg">
              <div className="text-xl font-bold mb-2">{title}</div>
              <Image src="/book2.png" width={50} height={50} alt={title} className="absolute bottom-2 right-2" />
            </Link>
          ))}
        </div>
      </div>

      {/* Timetable */}
      <div className="p-4">
        <div className="relative bg-gradient-to-r from-pink-500 to-pink-300 p-6 rounded-xl text-white shadow-lg mb-4">
          <div className="text-xl font-bold mb-2">Time Table</div>
          <Image src="/clock.png" width={50} height={50} alt="Clock" className="absolute bottom-2 right-2" />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border">
            <thead>
              <tr className="bg-pink-100">
                <th className="border px-2 py-1">Day / Time</th>
                <th className="border px-2 py-1">8-10 AM</th>
                <th className="border px-2 py-1">10-11 AM</th>
                <th className="border px-2 py-1">11-12 NOON</th>
                <th className="border px-2 py-1">12-1 PM</th>
                <th className="border px-2 py-1">1-2 PM</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((row, i) => (
                <tr key={i} className="even:bg-gray-100">
                  <td className="border px-2 py-1 font-semibold">{row.day}</td>
                  {row.slots.map((slot, j) => (
                    <td key={j} className="border px-2 py-1">{slot}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  
    </div>
  );
}
