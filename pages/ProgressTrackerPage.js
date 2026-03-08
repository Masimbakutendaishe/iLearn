import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSearch, FaSignOutAlt, FaBell, FaReceipt, FaChartLine } from "react-icons/fa";
import {
  IoPerson,
  IoBook,
  IoMegaphone,
} from "react-icons/io5";

export default function ProgressTrackerPage() {
  const router = useRouter();

  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const [homeworkStatus, setHomeworkStatus] = useState({
    hw1: false,
    hw2: false,
    hw3: false,
    hw4: false,
  });

  const homeworks = [
    { key: "hw1", subject: "Mathematics", due: "2025-01-30 12:00 PM" },
    { key: "hw2", subject: "Science", due: "2025-01-31 10:00 AM" },
    { key: "hw3", subject: "History", due: "2025-02-01 2:00 PM" },
    { key: "hw4", subject: "English", due: "2025-02-02 11:59 PM" },
  ];

  const getColorForProgress = (progress) => {
    if (progress >= 0.8) return "bg-green-500";
    if (progress >= 0.6) return "bg-yellow-400";
    if (progress >= 0.5) return "bg-orange-400";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Header */}
      <div className="bg-blue-600 mt-35 text-white p-4 rounded-xl flex items-center justify-between">

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

      {/* Profile Section */}
      <div className="text-center px-6 mt-6">

        <p className="text-gray-600">
          This is the Parents&apos; Progress Tracker Page, which is a centralised platform
          solely for you to be able to see the strides your child has made so far!
        </p>

        {/* Cards */}
        <div className="mt-10 space-y-6">
          {[
            { title: "LITERATURE", href: "/ParentLitProgressPage" },
            { title: "LIFE SKILLS", href: "/ParentsSubjectsDetailPageLifeSkills" },
            { title: "LANGUAGE", href: "/ParentsSubjectsDetailPageLanguage" },
          ].map(({ title, href }) => (
            <Link href={href} key={title} className="block">

              <div className="relative w-11/12 mx-auto h-40 bg-gradient-to-br from-pink-400 to-pink-300 rounded-2xl shadow-lg flex items-center justify-center">

                <div className="text-center z-10">
                  <p className="text-white text-lg font-bold">CHECK</p>
                  <p className="text-white text-lg font-bold">{title}</p>
                  <p className="text-white text-lg font-bold">PROGRESS</p>
                </div>

                <Image
                  src="/progress.png"
                  alt="Books"
                  width={80}
                  height={80}
                  className="absolute bottom-2 right-2"
                />

              </div>

            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}