import Image from "next/image";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={geist.className}>

      <style jsx>{`
        /* 🌈 Soft Pastel Rainbow Flicker */
@keyframes rainbowFlicker {
  0% { color: #f4a6b8; }   /* soft pink */
  16% { color: #f7c59f; }  /* soft peach */
  33% { color: #f9e79f; }  /* soft yellow */
  50% { color: #a8e6a3; }  /* soft green */
  66% { color: #a3c9f9; }  /* soft blue */
  83% { color: #c3a6e8; }  /* soft purple */
  100% { color: #f4a6b8; } /* back to pink */
}

        .rainbow-text {
          animation: rainbowFlicker 3s infinite;
        }

        /* 🫧 Image Breathing */
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }

        .breathe {
          animation: breathe 4s ease-in-out infinite;
        }

        /* 🎭 3D Shadow Text */
        .text-3d {
          text-shadow:
            2px 2px 0 #000,
            4px 4px 0 rgba(0,0,0,0.3);
        }

        /* 🔘 Button 3D Effect */
        .btn-3d {
          box-shadow: 0 6px 0 pink;
          transition: all 0.2s ease;
          
        }

        .btn-3d:hover {
          background: white;
          color: orange;
          box-shadow: 0 2px 0 orange;
          transform: translateY(4px);
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        className="relative flex flex-wrap items-center min-h-screen gap-6 p-6"
        id="home"
      >
        <div className="flex-1">

          <h3 className="text-6xl font-bold rainbow-text text-3d leading-tight">
            Welcome To <br />
            <span className="rainbow-text text-3d">
              iLEARN ACADEMY
            </span>
          </h3>

          <p className="text-gray-500 font-semibold">
            iYanda iMfundo
          </p>

          <p className="mt-4 text-lg text-gray-500">
            iLEARN ACADEMY is a future-driven preschool in South Africa,
            dedicated to providing an engaging, nurturing, and innovative learning environment.
          </p>

          {/* BUTTON */}
          <a
            href="#"
            className="inline-block px-6 py-3 mt-6 text-pink bg-white rounded-lg btn-3d font-semibold"
          >
            Learn More
          </a>

        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/home.png"
            alt="Kindergarten Image"
            width={500}
            height={500}
            className="breathe"
          />
        </div>

        {/* WAVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[107px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#f78da7"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        className="about"
        style={{ backgroundColor: "#f78da7" }}
        id="about"
      >
        <h1 className="text-5xl font-bold text-center text-white mb-12 text-3d">
          <span className="text-orange-400">About</span> Us
        </h1>

        <div className="flex flex-wrap items-center gap-6">

          <div className="flex-1 flex justify-center">
            <Image
              src="/about us.png"
              alt="About Us"
              width={500}
              height={500}
              className="breathe"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-3xl text-white leading-snug text-3d">
              Exploring, Growing, And Thriving Together
            </h3>

            <p className="text-lg text-white mt-4 leading-relaxed">
              At iLEARN ACADEMY, we believe in holistic development.
            </p>

            <p className="text-lg text-white mt-4 leading-relaxed">
              We provide nutritious meals and a safe inspiring environment.
            </p>

            {/* BUTTON */}
            <a
              href="#"
              className="inline-block px-6 py-3 mt-6 text-white bg-orange-400 rounded-lg btn-3d font-semibold"
            >
              Read More
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}
