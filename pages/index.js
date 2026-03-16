import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Home() {
  return (
    <div className={nunito.className}>

      <style jsx>{`

        /* 🌈 Welcome Text Flicker */
        @keyframes welcomeFlicker {
          0% { color: #22c55e; }   /* green */
          25% { color: #facc15; }  /* yellow */
          50% { color: #f97316; }  /* orange */
          75% { color: #000000; }  /* black */
          100% { color: #22c55e; }
        }

        .welcome-flicker {
          animation: welcomeFlicker 3s infinite;
        }

        /* 🫧 Image Breathing */
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }

        .breathe {
          animation: breathe 4s ease-in-out infinite;
        }

        /* 🎭 3D Text Shadow */
        .text-3d {
          text-shadow:
            2px 2px 0 #000,
            4px 4px 0 rgba(0,0,0,0.5),
            6px 6px 12px rgba(0,0,0,0.4);
        }

        /* Apply 3D shadows to headings and text */
        h1, h2, h3, p {
          text-shadow:
            2px 2px 0 #000,
            3px 3px 8px rgba(0,0,0,0.5);
        }

        /* Remove text shadow from buttons */
        a {
          text-shadow: none;
        }

        /* 🔘 Button 3D Press Effect */
        .btn-3d {
          box-shadow: 0 6px 0 #c2410c;
          transition: all 0.2s ease;
        }

        .btn-3d:hover {
          background: #facc15;
          color: black;
          box-shadow: 0 2px 0 #c2410c;
          transform: translateY(4px);
        }

        /* 🎨 ABOUT BACKGROUND COLOR ANIMATION */
        @keyframes aboutColors {
          0% { background-color: #22c55e; }
          50% { background-color: #facc15; }
          100% { background-color: #f97316; }
        }

        .about-bg {
          animation: aboutColors 8s infinite alternate;
        }

      `}</style>

      {/* HERO SECTION */}
      <section
        className="relative flex items-center justify-center min-h-screen text-center p-6"
        id="home"
        style={{
          backgroundImage: "url('/ilearnmain.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-6xl font-extrabold welcome-flicker text-3d leading-tight">
            Welcome To <br />
            <span className="welcome-flicker">
              iLEARN ACADEMY
            </span>
          </h1>

          <p className="text-white font-semibold mt-4 text-xl">
            iYanda iMfundo
          </p>

          <p className="mt-6 text-lg text-gray-200">
            iLEARN ACADEMY is a future-driven preschool in South Africa,
            dedicated to providing an engaging, nurturing, and innovative
            learning environment for young minds.
          </p>

          {/* BUTTON */}
          <a
            href="#about"
            className="inline-block px-8 py-3 mt-8 text-black bg-orange-500 rounded-lg btn-3d font-bold"
          >
            Learn More
          </a>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section
        className="py-20 px-6 about-bg"
        id="about"
      >

        <h1 className="text-5xl font-extrabold text-center text-white mb-12 text-3d">
          About Us
        </h1>

        <div className="flex flex-wrap items-center gap-10 max-w-6xl mx-auto">

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
              At iLEARN ACADEMY, we believe in holistic development and
              nurturing every child’s curiosity and creativity.
            </p>

            <p className="text-lg text-white mt-4 leading-relaxed">
              We provide nutritious meals, caring teachers, and a safe
              inspiring environment where children can learn, grow,
              and build confidence.
            </p>

            {/* BUTTON */}
            <a
              href="#"
              className="inline-block px-6 py-3 mt-6 text-black bg-yellow-400 rounded-lg font-bold btn-3d"
            >
              Read More
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}
