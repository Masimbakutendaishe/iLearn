import Image from "next/image";

export default function About() {
  return (
    <section className="mt-20 py-20 px-6 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50" id="about">

      {/* TITLE */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
        <span className="text-green-500 drop-shadow-md">About </span>
        <span className="text-orange-500 drop-shadow-md">Us</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE (3D FLOAT EFFECT) */}
        <div className="flex-1 group perspective">
          <div className="relative transform transition duration-500 group-hover:rotate-y-6 group-hover:-translate-y-4">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400"></div>

            <Image
              src="/about us.png"
              alt="About iLearn Academy"
              width={500}
              height={500}
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* TEXT CARD */}
        <div className="flex-1 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40">

          <h3 className="text-3xl font-extrabold text-gray-800 leading-snug">
            Learning Through Play, Discovery & Growth
          </h3>

          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            At <strong className="text-green-600">iLearn Academy</strong>, we provide a safe, caring, and joyful
            learning environment where children can explore, grow, and develop
            essential skills. We focus on nurturing curiosity, creativity, and confidence
            while building strong educational foundations.
          </p>

          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Our primary school education program is tutor facilitated, allowing a comprehensive 
            one-on-one approach to a learner's educational needs. With different curriculum 
            options to choose from, parents can provide a tailored education that prepares 
            each child to their fullest potential.
          </p>

          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Social interaction and physical education are also vital for holistic development. 
            We create opportunities for learners to explore their unique interests in safe, 
            nurturing environments led by licensed and qualified instructors.
          </p>

          {/* BUTTON */}
          <button className="mt-6 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 shadow-lg hover:scale-110 hover:shadow-2xl transition duration-300">
            Learn More
          </button>
        </div>

      </div>

      {/* GLOBAL STYLES */}
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
