import Image from 'next/image';

export default function Activities() {
  const activities = [
    { id: 1, image: '/activities1.png', title: 'Story Time' },
    { id: 2, image: '/activities2.png', title: 'Outdoor Play' },
    { id: 3, image: '/activities3.png', title: 'Arts & Crafts' },
    { id: 4, image: '/activities4.png', title: 'Music & Singing' },
    { id: 5, image: '/activities5.png', title: 'Learning Numbers' },
    { id: 6, image: '/activities6.png', title: 'Alphabet Practice' },
    { id: 7, image: '/activities7.png', title: 'Creative Drawing' },
    { id: 8, image: '/activities8.png', title: 'Group Games' },
  ];

  return (
    <section className="mt-20 activities py-16 px-6" id="activities">
      <h1 className="text-5xl font-bold text-center text-orange-400 mb-12">
        Our <span className="text-black">Activities</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white p-6 text-center shadow-lg rounded-2xl outline outline-1 outline-gray-200 hover:scale-105 transition"
          >
            <Image
              src={activity.image}
              alt={activity.title}
              width={150}
              height={150}
              className="mx-auto h-32 object-cover transition-transform hover:scale-110"
            />

            <h3 className="text-2xl font-bold text-gray-800 mt-4">
              {activity.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}