import Image from 'next/image';

export default function Team() {
  const educators = [
    { name: "Ma'am Sphiwe", image: "/teacher1.png" },
    { name: "Ma'am Lerato", image: "/teacher2.png" },
    { name: "Ma'am Thandi", image: "/teacher3.png" },
  ];

  const healthTeam = [
    { name: "Nurse Zanele", image: "/teacher1.png" },
    { name: "Dr. Nkosi", image: "/teacher2.png" },
    { name: "Ms. Ayanda", image: "/teacher3.png" },
  ];

  const supportStaff = [
    { name: "Mr. Mthembu", image: "/teacher1.png" },
    { name: "Ms. Khumalo", image: "/teacher2.png" },
    { name: "Mr. Dlamini", image: "/teacher3.png" },
  ];

  return (
    <>
      <section
        className="mt-20 py-20 px-6 relative bg-gradient-to-br from-green-900 via-green-800 to-orange"
        id="team"
      >
        <div className="relative max-w-6xl mx-auto text-center text-white">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-orange-300">Team</span>
          </h1>

          {/* Main Paragraph */}
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-16">
            We are a dedicated team of qualified teachers and experienced health professionals 
            committed to supporting the holistic development of every child. Our approach ensures 
            that both educational and health needs are nurtured in a safe, caring, and structured 
            environment. Supporting this mission is a reliable team of security personnel, cooks, 
            and cleaners who work diligently to maintain a safe, clean, and high-quality facility 
            where children can thrive and grow with confidence.
          </p>

          {/* Team Categories */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Educators */}
            <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl hover:scale-105 transition text-gray-800">
              <Image src="/teacherc.jpg" alt="Teachers" width={80} height={80} className="mx-auto mb-4" />
              
              <h3 className="text-2xl font-bold mb-3">Educators</h3>
              <p className="text-gray-600 mb-6">
                Our passionate teachers create engaging learning experiences, ensuring each child 
                develops academically, socially, and emotionally.
              </p>

              <div className="flex justify-center gap-4">
                {educators.map((person, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover mx-auto"
                    />
                    <p className="text-sm mt-2 font-medium">{person.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Professionals */}
            <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl hover:scale-105 transition text-gray-800">
              <Image src="/nursec.jpg" alt="Health Professionals" width={80} height={80} className="mx-auto mb-4" />
              
              <h3 className="text-2xl font-bold mb-3">Health Professionals</h3>
              <p className="text-gray-600 mb-6">
                Our health team ensures children's physical well-being, monitoring development 
                and promoting healthy habits in a supportive environment.
              </p>

              <div className="flex justify-center gap-4">
                {healthTeam.map((person, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover mx-auto"
                    />
                    <p className="text-sm mt-2 font-medium">{person.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Staff */}
            <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl hover:scale-105 transition text-gray-800">
              <Image src="/policec.jpg" alt="Support Staff" width={80} height={80} className="mx-auto mb-4" />
              
              <h3 className="text-2xl font-bold mb-3">Support Staff</h3>
              <p className="text-gray-600 mb-6">
                From security to catering and cleaning, our support staff ensure a safe, hygienic, 
                and welcoming environment for every child.
              </p>

              <div className="flex justify-center gap-4">
                {supportStaff.map((person, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover mx-auto"
                    />
                    <p className="text-sm mt-2 font-medium">{person.name}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
