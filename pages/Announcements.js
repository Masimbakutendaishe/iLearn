import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IoSearch, IoNotificationsOutline, IoLogOutOutline, IoPerson, IoBook, IoSchool, IoMegaphone } from 'react-icons/io5';
import classNames from 'classnames';
import { FaSearch, FaBook, FaLanguage, FaAccessibleIcon, FaSignOutAlt, FaBell, FaReceipt, FaChartLine } from "react-icons/fa";
export default function Announcements() {
  const router = useRouter();
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const handleUpload = async (type) => {
    alert(`${type} upload simulated`);
    // Add actual file upload logic here
  };

  return (
    <div className="min-h-screen bg-white p-5">
    <div className="mt-30 bg-blue-600 text-white p-4 rounded-xl flex items-center justify-between">
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
            route: "/ProgressTrackerPage",
          },
          {
            icon: <IoMegaphone size={24} />,
            label: "Announcements",
            route: "/Announcements",
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

      {/* Profile Section */}
      <div className="flex flex-col items-center my-5 text-center">
        <Image src="/dad.png" alt="Profile Large" width={100} height={100} className="rounded-full" />
        <p className="mt-4 text-lg text-gray-700">
          Hello Dear Parent, welcome to the iLearn Announcements Notice Board, where important updates pertaining to iLearn Academy are provided. Check here frequently!
        </p>
      </div>

      {/* Announcement Cards */}
      <div className="relative h-[140px] flex justify-center items-start">
        <button onClick={() => router.push('/activity')} className="absolute z-30 w-4/5 shadow-lg">
          <div className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 rounded-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-white font-bold text-lg">ANNOUNCEMENTS FOR PARENTS</h2>
              <p className="text-white">Stay Updated!</p>
            </div>
            <Image src="/megaphone.png" alt="Megaphone" width={60} height={60} />
          </div>
        </button>
        <div className="absolute top-8 z-20 w-3/4 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 rounded-lg h-20 shadow-lg"></div>
        
      </div>

      {/* Announcements List */}
      <div className="mt-0 mb-10 space-y-6">
        {[
          {
            title: 'Sports Day 2025',
            content: 'There is a Sports Day on the 25th of March in 2025. Parents are urged to come watch their little stars.'
          },
          {
            title: 'Fees for First Term Due',
            content: 'The First Term Fees are now due. Make sure to pay at the Accounts Department.'
          },
          {
            title: 'Welcome Our New Teacher Mrs Dlamini',
            content: 'Mrs Dlamini will be taking the Grade R class for the Life Skills subjects. She will also be responsible for extracurricular activities.'
          }
        ].map((item, idx) => (
          <div key={idx} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-blue-700">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.content}</p>
            <button className="mt-3 text-blue-500 hover:underline">Read More</button>
          </div>
        ))}
      </div>

    </div>
  );
}
