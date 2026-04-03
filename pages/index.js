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
       /* 🔥 TABLET + MOBILE FIX (DOES NOT AFFECT DESKTOP) */
@media (max-width: 1024px) {

  .hero-section {
    padding: 4rem 1.5rem;
    text-align: center;
    background-size: cover;
    animation: bgSlide 18s ease-in-out infinite;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  /* Make the content actually fill the screen */
  .hero-section .relative {
    width: 100%;
  }

   h1 {
    font-size: 4rem !important;
    line-height: 1.2;
  }

  p {
    font-size: 2rem !important;
    line-height: 1.7;
  }

    h3 {
    font-size: 2.2rem !important;
  }

    button {
    font-size: 1.6rem !important;
    padding: 1.2rem 2.5rem !important;
  }
  /* 🔥 FORCE CONTENT TO FILL SPACE (fix blank area issue) */
  .hero-section .content-wrapper {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* 🔥 GLASS EFFECT FIX */
  .glass-card {
    background: rgba(0,0,0,0.45);
    backdrop-filter: blur(12px);
    border-radius: 20px;
    padding: 1.5rem;
    width: 100%;
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
    {/* HERO SECTION */}
<section className="mt-20 hero-section relative flex flex-col items-center justify-start min-h-screen text-center p-6">

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 w-full max-w-6xl">

  {/* TITLE */}
  <h1 className="mt-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center">
    <span className="block">
      {welcomeText.split('').map((letter, i) => (
        <span key={i} className="fun-letter" style={{ animationDelay: `${i * 0.05}s` }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>

    <span className="block whitespace-nowrap">
      {academyText.split('').map((letter, i) => (
        <span key={i} className="fun-letter" style={{ animationDelay: `${i * 0.05}s` }}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  </h1>

  {/* 🔥 DESKTOP LAYOUT */}
  <div className="hidden lg:flex gap-8 mt-12">

    {/* LEFT CARD */}
    <div className="flex-1 bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-white">
      <p className="text-lg md:text-xl leading-relaxed">
        iLEARN ACADEMY is a future-driven school dedicated to providing
        an engaging, nurturing, and innovative learning environment.
      </p>

      <button className="mt-6 px-6 py-3 bg-orange-500 rounded-lg font-bold btn-3d">
        Apply Now
      </button>
    </div>

    {/* RIGHT CARD */}
    <div className="flex-1 bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-white">

      <h3 className="text-xl font-bold mb-4">2026 Year Plan</h3>

      <table className="w-full text-sm text-left">
        <thead>
          <tr>
            <th>Term</th>
            <th>Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Term 1</td><td>Jan - Mar</td></tr>
          <tr><td>Term 2</td><td>Apr - Jun</td></tr>
          <tr><td>Term 3</td><td>Jul - Sep</td></tr>
          <tr><td>Term 4</td><td>Oct - Dec</td></tr>
        </tbody>
      </table>

      <button className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold btn-3d">
        Download PDF
      </button>
    </div>

  </div>

  {/* 🔥 MOBILE / TABLET LAYOUT */}
  <div className="lg:hidden mt-10 flex flex-col items-center gap-6">

    {/* MAIN MESSAGE CARD */}
    <div className="w-full bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-white">
      <p className="text-lg leading-relaxed">
        iLEARN ACADEMY is a future-driven preschool dedicated to providing
        an engaging, nurturing, and innovative learning environment.
      </p>
    </div>

    <button className="px-10 py-5 text-lg md:text-xl bg-green-600 rounded-xl text-white font-extrabold btn-3d">
  APPLY NOW
</button>

    {/* TWO SMALL CARDS */}
    <div className="flex gap-4 w-full">

      {/* LEFT */}
      <div className="flex-1 bg-white/10 backdrop-blur-lg p-4 rounded-xl text-white text-sm">
        <h3 className="font-bold mb-2">2026 Plan</h3>
        <p>Full academic calendar available.</p>

        <button className="mt-3 px-3 py-2 bg-yellow-400 text-black rounded font-bold">
          Download
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex-1 bg-white/10 backdrop-blur-lg p-4 rounded-xl text-white text-sm">
        <h3 className="font-bold mb-2">Parents Notice</h3>
        <p>New term starts soon. Prepare uniforms and stationery.</p>
      </div>

    </div>

  </div>

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
      <Image src="/abt_main_2.png" alt="About 2" width={500} height={500} />
      <Image src="/abt_main_3.png" alt="About 3" width={500} height={500} />
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
