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

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }

        .breathe {
          animation: breathe 4s ease-in-out infinite;
        }

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

        /* 🔥 MOBILE BACKGROUND SLIDE */
        @keyframes bgSlide {
          0% { background-position: left center; }
          50% { background-position: right center; }
          100% { background-position: left center; }
        }

        /* 🔥🔥🔥 ENHANCED MOBILE EXPERIENCE 🔥🔥🔥 */
        @media (max-width: 768px) {

          .hero-section {
            padding: 3rem 1.2rem;
            text-align: center;
            background-size: cover;
            animation: bgSlide 18s ease-in-out infinite;
          }

          h1 {
            font-size: 2.5rem !important;
            line-height: 1.15;
            letter-spacing: 1.5px;
          }

          p {
            font-size: 1.05rem;
            line-height: 1.6;
          }

          .hero-section p:first-of-type {
            font-size: 1.3rem;
            font-weight: 700;
          }

          .btn-3d {
            width: 100%;
            max-width: 300px;
            font-size: 1.05rem;
            padding: 0.9rem;
          }

          .hero-section .relative {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.6rem;
          }

          .hero-section .relative {
            background: rgba(0,0,0,0.45);
            padding: 1.8rem 1.2rem;
            border-radius: 20px;
            backdrop-filter: blur(12px);
          }

          .about-bg {
            padding: 3.5rem 1.3rem;
          }

          .about-bg h1 {
            font-size: 2.2rem;
          }

          .about-bg .flex {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .about-bg img {
            max-width: 280px;
          }

          .about-bg .flex-1:last-child {
            background: rgba(0,0,0,0.45);
            padding: 1.6rem;
            border-radius: 20px;
            backdrop-filter: blur(12px);
          }

          .about-bg h3 {
            font-size: 1.6rem;
          }

        }

        /* 🎞️ ABOUT SLIDESHOW */
.slideshow {
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  border-radius: 20px;
}

.slides {
  display: flex;
  width: 300%;
  animation: slideShow 12s infinite;
}

.slides :global(img) {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* ✨ SMOOTH SLIDE ANIMATION */
@keyframes slideShow {
  0% { transform: translateX(0%); }
  30% { transform: translateX(0%); }

  35% { transform: translateX(-100%); }
  65% { transform: translateX(-100%); }

  70% { transform: translateX(-200%); }
  100% { transform: translateX(-200%); }
}

      `}</style>

      {/* HERO SECTION */}
      <section className="hero-section relative flex items-center justify-center min-h-screen text-center p-6">

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">

            {welcomeText.split('').map((letter, i) => (
              <span
                key={i}
                className="fun-letter active:scale-125 transition-transform duration-150"
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
  <div className="slideshow">
    <div className="slides">
      <Image src="/abt_main_1.png" alt="About 1" width={500} height={500} />
      <Image src="/about_main_2.png" alt="About 2" width={500} height={500} />
      <Image src="/about_main_3.png" alt="About 3" width={500} height={500} />
    </div>
  </div>
</div>

          <div className="flex-1">

            <h3 className="text-3xl text-white leading-snug text-3d">
              Exploring, Growing, And Thriving Together
            </h3>

            <p className="text-lg text-white mt-4 leading-relaxed">
              Our primary school education program is tutor facilitated, allowing a comprehensive 
              one-on-one approach to a learner's educational needs. With different curriculum 
              options to choose from, parents can provide a tailored education that prepares 
              each child to their fullest potential.
            </p>

            <p className="text-lg text-white mt-4 leading-relaxed">
              Social interaction and physical education are also vital for holistic development. 
              We create opportunities for learners to explore their unique interests in safe, 
              nurturing environments led by licensed and qualified instructors.
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
