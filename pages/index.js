import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Home() {

  const welcomeText = "WELCOME TO";
  const academyText = "iLEARN ACADEMY";

  return (
    <div className={nunito.className}>

      <style jsx>{`

        /* 🌈 COLOR FLOW */
        @keyframes colorFlow {
          0% { color: #22c55e; }
          33% { color: #facc15; }
          66% { color: #f97316; }
          100% { color: #22c55e; }
        }

        /* 🎈 FLOATING */
        @keyframes floatText {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        /* ✨ GLOW PULSE */
        @keyframes glowPulse {
          0%,100% {
            text-shadow:
              0 0 6px #22c55e,
              0 0 12px #22c55e,
              2px 2px 0 #000;
          }
          50% {
            text-shadow:
              0 0 12px #facc15,
              0 0 20px #f97316,
              2px 2px 0 #000;
          }
        }

        /* 🌟 TRAIL EFFECT */
        @keyframes trail {
          0% {
            text-shadow:
              2px 2px 0 #000,
              6px 6px 12px rgba(0,0,0,0.4),
              0 0 0 rgba(255,255,255,0);
          }
          50% {
            text-shadow:
              2px 2px 0 #000,
              10px 10px 18px rgba(0,0,0,0.5),
              0 0 18px rgba(255,255,255,0.8);
          }
          100% {
            text-shadow:
              2px 2px 0 #000,
              6px 6px 12px rgba(0,0,0,0.4),
              0 0 0 rgba(255,255,255,0);
          }
        }

        /* 🚀 FINAL LETTER STYLE */
        .fun-letter {
          display: inline-block;

          animation:
            colorFlow 2s linear infinite,
            floatText 2.5s ease-in-out infinite,
            glowPulse 2s ease-in-out infinite,
            trail 2.5s ease-in-out infinite;

          filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
          will-change: transform, text-shadow;
        }

        /* 🫧 Image Breathing */
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }

        .breathe {
          animation: breathe 4s ease-in-out infinite;
        }

        /* 🎭 3D TEXT */
        .text-3d {
          text-shadow:
            2px 2px 0 #000,
            4px 4px 0 rgba(0,0,0,0.5),
            6px 6px 12px rgba(0,0,0,0.4);
        }

        h2, h3, p {
          text-shadow:
            2px 2px 0 #000,
            3px 3px 8px rgba(0,0,0,0.5);
        }

        a {
          text-shadow: none;
        }

        /* 🔘 BUTTON */
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

        /* 🌈 ABOUT BG */
        @keyframes aboutColors {
          0% { background: linear-gradient(135deg, #bbf7d0, #4ade80); }
          50% { background: linear-gradient(135deg, #fef3c7, #fcd34d); }
          100% { background: linear-gradient(135deg, #fed7aa, #fb923c); }
        }

        .about-bg {
          animation: aboutColors 14s ease-in-out infinite alternate;
        }

        .hero-section {
          background-image: url('/ilearnmain.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        @media (max-width: 768px) {
          .hero-section {
            background-size: contain;
            background-position: top center;
            background-color: black;
          }
        }

      `}</style>

      {/* HERO SECTION */}
      <section className="hero-section relative flex items-center justify-center min-h-screen text-center p-6">

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-6xl font-extrabold leading-tight">

            {welcomeText.split('').map((letter, i) => (
              <span
                key={i}
                className="fun-letter"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}

            <br />

            {academyText.split('').map((letter, i) => (
              <span
                key={i}
                className="fun-letter"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}

          </h1>

          <p className="text-white font-semibold mt-4 text-xl">
            iYanda iMfundo
          </p>

          <p className="mt-6 text-lg text-gray-200">
            iLEARN ACADEMY is a future-driven preschool in South Africa,
            dedicated to providing an engaging, nurturing, and innovative
            learning environment for young minds.
          </p>

          <a
            href="#about"
            className="inline-block px-8 py-3 mt-8 text-white bg-orange-500 rounded-lg btn-3d font-bold"
          >
            Learn More
          </a>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 about-bg" id="about">
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
