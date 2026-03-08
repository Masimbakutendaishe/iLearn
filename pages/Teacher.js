import Image from 'next/image';

export default function Teacher() {

  const teachers = [
    { name: "Ma'am Sphiwe", role: "Instructor", image: "/teacher1.png" },
    { name: "Ma'am Lerato", role: "Instructor", image: "/teacher2.png" },
    { name: "Ma'am Thandi", role: "Instructor", image: "/teacher3.png" }
  ];

  return (
    <>
      <section
        className="mt-20 teacher bg-cover bg-center py-16 px-6"
        style={{ backgroundImage: "url('/images/teacher-bg.png')" }}
        id="teacher"
      >
        <h1 className="text-5xl font-bold text-center text-blue-200 mb-12">
          Our <span className="text-orange-400">Teachers</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white p-6 text-center shadow-lg rounded-2xl hover:scale-105 transition"
            >
              <Image
                src={teacher.image}
                alt={teacher.name}
                width={300}
                height={300}
                className="mx-auto h-60 object-cover"
              />

              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                {teacher.name}
              </h3>

              <p className="text-lg text-gray-500">{teacher.role}</p>

              <div className="flex justify-center gap-3 mt-4">
                <i className="fab fa-facebook-f text-orange-400 border border-orange-400 rounded-full p-2 hover:bg-orange-400 hover:text-white"></i>
                <i className="fab fa-twitter text-orange-400 border border-orange-400 rounded-full p-2 hover:bg-orange-400 hover:text-white"></i>
                <i className="fab fa-instagram text-orange-400 border border-orange-400 rounded-full p-2 hover:bg-orange-400 hover:text-white"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}