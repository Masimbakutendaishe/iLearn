import Image from 'next/image';

export default function Activities() {
  const activities = [
    { id: 1, image: '/activities_1.JPG', title: 'Robotics & Coding' },
    { id: 2, image: '/activities_2.JPG', title: 'Technology Exploration' },
    { id: 3, image: '/activities_3.JPG', title: 'Creative Arts & Crafts' },
    { id: 4, image: '/activities_4.JPG', title: 'Numeracy Development' },
    { id: 5, image: '/activities_5.JPG', title: 'Literacy & Language' },
    { id: 6, image: '/activities_6.JPG', title: 'Educational Games' },
    { id: 7, image: '/activities_7.JPG', title: 'Dramatic Arts & Eisteddfod' },
    { id: 8, image: '/activities_8.JPG', title: 'Sports Education' },
  ];

  return (
    <section className="mt-20 py-20 px-6 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50" id="activities">

      {/* TITLE */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
        <span className="text-green-500 drop-shadow-md">Our </span>
        <span className="text-orange-500 drop-shadow-md">Fun </span>
        <span className="text-yellow-500 drop-shadow-md">Activities</span>
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="relative group perspective"
          >
            {/* 3D CARD */}
            <div className="bg-white rounded-3xl p-6 text-center shadow-xl transform transition duration-500 group-hover:rotate-y-6 group-hover:-translate-y-4 group-hover:shadow-2xl border border-white/50 backdrop-blur-lg">

              {/* GLOW BACKGROUND */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500 bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400"></div>

              {/* IMAGE */}
              <div className="relative z-10">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={150}
                  height={150}
                  className="mx-auto h-32 object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-lg font-extrabold mt-5 text-gray-800 group-hover:text-orange-500 transition duration-300">
                {activity.title}
              </h3>

            </div>
          </div>
        ))}

      </div>

      {/* FONT + 3D SUPPORT */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');

        * {
          font-family: 'Nunito', sans-serif;
        }

        .perspective {
          perspective: 1000px;
        }

        .group:hover .group-hover\\:rotate-y-6 {
          transform: rotateY(6deg) translateY(-10px);
        }
      `}</style>

    </section>
  );
}
