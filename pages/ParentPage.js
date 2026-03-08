import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaSearch, FaBook, FaLanguage, FaAccessibleIcon, FaSignOutAlt, FaBell, FaReceipt, FaChartLine } from "react-icons/fa";
import { IoPerson, IoBook, IoSchool, IoMegaphone } from "react-icons/io5"; 

export default function ParentPage() {
  const router = useRouter();
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleToggleSubmit = () => {
    setIsSubmitted(!isSubmitted);
  };

  const SubjectCard = ({ icon, color, subject, due }) => (
    <div className="bg-white rounded-xl shadow-lg p-4 m-2 w-48 flex-shrink-0 text-center">
      <div className="text-2xl mx-auto" style={{ color }}>{icon}</div>
      <p className="font-semibold text-gray-700 mt-2">{subject}</p>
      <p className="text-xs text-gray-500">Due: {due}</p>
      <button
        className={`mt-2 px-4 py-1 rounded-full text-white text-sm ${
          isSubmitted ? "bg-green-500" : "bg-blue-500"
        }`}
        onClick={handleToggleSubmit}
      >
        {isSubmitted ? "Submitted 😄" : "Submit 🤔"}
      </button>
    </div>
  );

  const SectionHeader = ({ title, imgSrc, gradientFrom, gradientTo }) => (
    <div className="relative flex items-center justify-between bg-gradient-to-r rounded-2xl shadow-xl p-4" style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <Image src={imgSrc} alt="Icon" width={60} height={60} className="" />
    </div>
  );

  return (
    <div className="mt-30 min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
     
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 rounded-xl flex items-center justify-between">
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

          <Image src="/dad.png" alt="Profile" width={32} height={32} className="rounded-full" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="text-center mt-6">
        <Image src="/dad.png" alt="Dad" width={80} height={80} className="rounded-full mx-auto" />
        <p className="text-sm text-gray-600 mt-2">
          email@example.com, this is your iLearn Parental Profile, where you can engage actively in your little one&apos;s development!
        </p>
      </div>

      {/* Homework Section */}
      <div className="mt-8">
        <SectionHeader
          title="Your Star&apos;s Homework"
          imgSrc="/book2.png"
          gradientFrom="#a18cd1"
          gradientTo="#fbc2eb"
        />

        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <SubjectCard icon={<FaBook />} color="gold" subject="Literature" due="02/01/2025, 5PM" />
          <SubjectCard icon={<FaAccessibleIcon />} color="blue" subject="Life Skills" due="23/02/2025, 5PM" />
          <SubjectCard icon={<FaLanguage />} color="green" subject="Language" due="02/03/2025, 5PM" />
        </div>
      </div>

      {/* Announcement Section */}
      <div className="mt-12">
        <SectionHeader
          title="Announcements"
          imgSrc="/book2.png"
          gradientFrom="#fddb92"
          gradientTo="#d1fdff"
        />

        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <SubjectCard icon={<FaBook />} color="gold" subject="Literature" due="02/01/2025, 5PM" />
          <SubjectCard icon={<FaAccessibleIcon />} color="blue" subject="Life Skills" due="23/02/2025, 5PM" />
          <SubjectCard icon={<FaLanguage />} color="green" subject="Language" due="02/03/2025, 5PM" />
        </div>
      </div>

      {/* Weekly Timetable Section */}
      <div className="mt-12">
        <SectionHeader
          title="The Weekly Timetable"
          imgSrc="/clock.png"
          gradientFrom="#a1ffce"
          gradientTo="#faffd1"
        />
      </div>
    </div>
  );
}