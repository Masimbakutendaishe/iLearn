import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaArrowLeft, FaSearch, FaBook, FaUser } from "react-icons/fa";
import { IoGameController, IoNotifications, IoSearch } from "react-icons/io5";
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';

const GamesPage = () => {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = (key) => {
    router.push('/submission'); // Navigate to the submission page
  };

  return (
    <div className="flex flex-col bg-white min-h-screen pb-20">
      
      {/* Top Navigation Bar */}
      <div className="mt-30 flex items-center justify-between bg-blue-600 p-4 rounded-lg text-white w-full">
        <button onClick={() => window.history.back()} className="flex-1 flex justify-center">
          <Image src="/pointer.png" alt="Back" width={30} height={30} />
        </button>

        <div className="flex-1 flex justify-center">
          <Link href="/StudentProfilePage">
            <FaBook className="text-4xl cursor-pointer" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Link href="/profile">
            <FaUser className="text-4xl cursor-pointer" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Link href="/games">
            <IoGameController className="text-4xl cursor-pointer" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Link href="/notifications">
            <IoNotifications className="text-4xl cursor-pointer" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center relative">
          {isSearchBarVisible ? (
            <input
              type="text"
              className="px-4 py-2 rounded-lg border w-64 text-black"
              placeholder="Type to search..."
              onBlur={() => setSearchBarVisible(false)}
            />
          ) : (
            <IoSearch
              size={30}
              className="cursor-pointer"
              onClick={() => setSearchBarVisible(true)}
            />
          )}
        </div>

        <div className="flex-1 flex justify-center">
          <Image src="/ppic.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
        </div>
      </div>

      {/* Navbar Text */}
      <div className="text-center mt-4 mb-4">
        <p className="text-sm text-blue-600">Let&apos;s play some</p>
        <h1 className="text-3xl font-bold text-blue-600">GAMES</h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-5">
        <button
          className="relative w-full"
          onClick={() => router.push('/subjectsdetailpage')}
        >
          <div className="w-full h-32 bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg relative shadow-lg">
            <Image
              src="/book2.png"
              alt="book"
              width={80}
              height={80}
              className="mt-10 mb-3 absolute bottom-22 left-1/2 transform -translate-x-1/2"
              style={{ objectFit: 'contain' }}
            />
            <div className="text-center top-5 text-white font-bold text-6xl sm:text-8xl">
              <p>LANGUAGE MATCH!</p>
            </div>
          </div>
        </button>
      </div>

      {/* Horizontal Scrolling Section */}
      <div className="mt-15 flex sm:space-x-55 space-x-5 overflow-x-auto py-5 px-4">
        {['Test Your Literature Skills', 'Test Your Literature Skills', 'Test Your Literature Skills'].map((text, index) => (
          <div key={index} className="relative w-60 bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg overflow-hidden">
            <button
              className="p-5"
              onClick={() => router.push('/subjectsdetailpage')}
            >
              <Image
                src="/ginger.png"
                alt="ginger"
                width={80}
                height={80}
                className="mx-auto"
                style={{ objectFit: 'contain' }}
              />
              <p className="text-white text-center">{text}</p>
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GamesPage;