import Image from 'next/image';

export default function Education() {
  return (
    <>
      <section className="mt-20 education bg-orange-200 py-16 px-6" id="education">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Our <span className="text-orange-400">Education</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-orange-500">Music Lessons</h3>
            <p className="text-lg text-gray-700 mt-2">
              At iLearn Academy, music helps children express themselves and
              develop listening and rhythm skills. Learners enjoy singing songs,
              playing simple instruments, and participating in fun musical
              activities that build confidence and creativity.
            </p>
            <Image
              src="/education1.png"
              alt="Music Lessons"
              width={400}
              height={300}
              className="w-full h-64 object-cover mt-4"
            />
          </div>

          <div className="bg-orange-400 rounded-2xl shadow-lg overflow-hidden p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-white">Sports Lessons</h3>
            <p className="text-lg text-white mt-2">
              Physical activity is an important part of early childhood
              development. Our sports and outdoor play activities help children
              build coordination, balance, teamwork, and healthy habits while
              having fun with their friends.
            </p>
            <Image
              src="/education2.png"
              alt="Sports Lessons"
              width={400}
              height={300}
              className="w-full h-64 object-cover mt-4"
            />
          </div>

          <div className="bg-pink-300 rounded-2xl shadow-lg overflow-hidden p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-white">Drawing Lessons</h3>
            <p className="text-lg text-white mt-2">
              Drawing and creative art activities allow children to explore
              their imagination. At iLearn Academy, learners use colours,
              shapes, and different materials to create fun artwork while
              developing fine motor skills and creativity.
            </p>
            <Image
              src="/education3.png"
              alt="Drawing Lessons"
              width={400}
              height={300}
              className="w-full h-64 object-cover mt-4"
            />
          </div>

        </div>
      </section>
    </>
  );
}