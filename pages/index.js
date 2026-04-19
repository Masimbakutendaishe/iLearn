import Image from "next/image";
import { Nunito } from "next/font/google";
import Link from 'next/link';
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

        .scroll-table {
  max-height: 350px;
  overflow-y: auto;
  padding-right: 8px;
}

/* 🔥 STICKY HEADER */
.scroll-table thead th {
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.9); /* keeps it readable */
  z-index: 10;
}

/* Optional: better table look */
.scroll-table table {
  border-collapse: collapse;
  width: 100%;
}

.scroll-table th,
.scroll-table td {
  padding: 8px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

/* Scrollbar styling (optional) */
.scroll-table::-webkit-scrollbar {
  width: 6px;
}

.scroll-table::-webkit-scrollbar-thumb {
  background: #facc15;
  border-radius: 10px;
}

/* ONLY main CTA button */
.main-btn {
  font-size: 1.6rem !important;
  padding: 1.2rem 2.5rem !important;
}

/* 🌈 GRADIENT BUTTON BASE */
.btn-gradient {
  background: linear-gradient(135deg, #22c55e, #facc15);
  color: white;
  font-weight: 800;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
}

/* ✨ HOVER EFFECT */
.btn-gradient:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
}

/* 🌟 SHINE EFFECT */
.btn-gradient::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: rgba(255,255,255,0.3);
  transform: rotate(25deg);
  transition: all 0.5s ease;
}

.btn-gradient:hover::after {
  left: 120%;
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
          box-shadow: 0 6px 0 orange;
          transition: all 0.2s ease;
        }

         .btn-3d2 {
         font-size: 1.7rem !important;
          box-shadow: 0 6px 0 orange;
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

     <Link href="/Apply">
  <button className="mt-10 px-10 py-5 text-lg md:text-xl bg-green-600 rounded-xl text-white font-extrabold btn-3d">
    APPLY NOW
  </button>
</Link>
   
      <div className="mt-6 flex gap-4">
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
  
      <a
  href="/yearplan.pdf"
  download
  className="text-sm px-4 py-2 rounded-lg font-semibold btn-gradient btn-3d"
>
  Download Year Plan PDF
</a>

<a
  href="/mealplan.pdf"
  download
  className="text-sm px-4 py-2 rounded-lg font-semibold btn-gradient btn-3d"
>
  Download Meal Plan PDF
</a>

</div>
</div>
    </div>

    {/* RIGHT CARD */}
    <div className="flex-1  bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-white">

      <h3 className="text-xl font-bold mb-4">2026 Year Plan</h3>

      <div className="scroll-table">

<table className="w-full text-sm text-left border-collapse">

<thead>
  <tr className="border-b border-white/40 bg-gradient-to-r from-green-900 to-orange text-white">
    <th className="p-2">DATE</th>
    <th className="p-2">EVENT</th>
    <th className="p-2">COST</th>
    <th className="p-2">DETAILS</th>
    <th className="p-2">DRESS CODE</th>
  </tr>
</thead>

  <tbody>

    <tr><td className="p-2">6TH JANUARY</td><td className="p-2">SCHOOL ADMIN AND CARE FACILITY OPENS</td><td className="p-2">NORMAL FEES</td><td className="p-2">SCHOOL OPENS</td><td className="p-2">UNIFORM</td></tr>

    <tr><td className="p-2">2ND FEBRUARY</td><td className="p-2">FORMAL CURRICULUM STARTS</td><td className="p-2">CLASSES RESUME</td><td className="p-2"></td><td className="p-2">UNIFORM</td></tr>

    <tr><td className="p-2">3RD - 6TH FEBRUARY</td><td className="p-2">PARENTS WELCOME MEETINGS</td><td className="p-2"></td><td className="p-2">GROUP INVITES</td><td className="p-2">-</td></tr>

    <tr><td className="p-2">13TH FEBRUARY</td><td className="p-2">VALENTINES DAY COLOUR RUN</td><td className="p-2">R50</td><td className="p-2">SPORTS PARTY</td><td className="p-2">WHITE OLD TSHIRTS</td></tr>

    <tr><td className="p-2">19TH MARCH</td><td className="p-2">GRADE R & RR TRIP</td><td className="p-2">R550</td><td className="p-2">CURRICULUM TRIP</td><td className="p-2">UNIFORM</td></tr>

    <tr><td className="p-2">26TH MARCH</td><td className="p-2">1ST TERM REPORTS</td><td className="p-2"></td><td className="p-2">TERM COMPLETE</td><td className="p-2">-</td></tr>

    <tr><td className="p-2">1ST APRIL</td><td className="p-2">EASTER EGG HUNT</td><td className="p-2">R20</td><td className="p-2">FUN DAY</td><td className="p-2">WHITE TOPS</td></tr>

    <tr><td className="p-2">7TH APRIL</td><td className="p-2">SCHOOL OPENS</td><td className="p-2"></td><td className="p-2">TERM RESUMES</td><td className="p-2">-</td></tr>

    <tr><td className="p-2">27TH APRIL</td><td className="p-2">FREEDOM DAY</td><td className="p-2"></td><td className="p-2">HOLIDAY</td><td className="p-2">-</td></tr>

    <tr><td className="p-2">30TH APRIL</td><td className="p-2">FLAG PAINTING</td><td className="p-2"></td><td className="p-2">FUN DAY</td><td className="p-2">UNIFORM</td></tr>

    <tr><td className="p-2">1ST MAY</td><td className="p-2">WORKERS DAY</td><td className="p-2"></td><td className="p-2">HOLIDAY</td><td className="p-2">-</td></tr>

    <tr><td className="p-2">8TH MAY</td><td className="p-2">MOTHER’S DAY</td><td className="p-2">PHOTO</td><td className="p-2">PHOTOSHOOT</td><td className="p-2">PINK</td></tr>

    <tr><td className="p-2">12TH JUNE</td><td className="p-2">FATHER’S DAY PARTY</td><td className="p-2">R150</td><td className="p-2">FUN EVENT</td><td className="p-2">BLUE</td></tr>

    <tr><td className="p-2">31ST JULY</td><td className="p-2">PYJAMA PARTY</td><td className="p-2">R30</td><td className="p-2">CINEMA DAY</td><td className="p-2">PYJAMAS</td></tr>

    <tr><td className="p-2">7TH AUGUST</td><td className="p-2">WOMEN’S DAY</td><td className="p-2">NONE</td><td className="p-2">STORYBOOK DAY</td><td className="p-2">CARTOON</td></tr>

    <tr><td className="p-2">11TH SEPTEMBER</td><td className="p-2">SPRING DAY TRIP</td><td className="p-2">R450</td><td className="p-2">WHOLE SCHOOL</td><td className="p-2">SWIMWEAR</td></tr>

    <tr><td className="p-2">23RD SEPTEMBER</td><td className="p-2">HERITAGE DAY</td><td className="p-2">R50</td><td className="p-2">FUN DAY</td><td className="p-2">TRADITIONAL</td></tr>

    <tr><td className="p-2">28TH NOVEMBER</td><td className="p-2">SCHOOL CONCERT</td><td className="p-2">R40 / R80</td><td className="p-2">GRADUATION</td><td className="p-2">FORMAL</td></tr>

    <tr><td className="p-2">11TH DECEMBER</td><td className="p-2">SCHOOL CLOSES</td><td className="p-2"></td><td className="p-2">FINAL REPORTS</td><td className="p-2">-</td></tr>

  </tbody>

</table>

</div>

     
    </div>

  </div>

  {/* 🔥 MOBILE / TABLET LAYOUT */}
  <div className="lg:hidden mt-10 flex flex-col items-center gap-6">

    {/* MAIN MESSAGE CARD */}
    <div className="w-full bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-white">
      <p className="text-lg leading-relaxed">
        iLEARN ACADEMY is a future-driven school dedicated to providing
        an engaging, nurturing, and innovative learning environment.
      </p>
    </div>

    <Link href="/Apply">
  <button className="mt-10 px-10 py-5 text-lg md:text-xl bg-green-600 rounded-xl text-white font-extrabold btn-3d">
    APPLY NOW
  </button>
</Link>

    {/* TWO SMALL CARDS */}
    <div className="flex gap-4 w-full">

      {/* LEFT */}
      <div className="flex-1 bg-white/10 backdrop-blur-lg p-4 rounded-xl text-white text-sm">
        <h3 className="font-bold mb-2">2026 Plan</h3>
        <p>Full academic calendar available.</p>

        <div className="mt-3 flex flex-col gap-3 w-full">

<a
  href="/yearplan.pdf"
  download
  className="px-6 py-3 rounded-lg font-bold btn-gradient btn-3d"
>
  Year Plan PDF
</a>

<a
  href="/mealplan.pdf"
  download
  className="px-6 py-3 rounded-lg font-bold btn-gradient btn-3d"
>
  Meal Plan PDF
</a>

</div>
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

<section className="py-24 px-6 about-bg" id="about">
  
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-16">
    About Us
  </h1>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* IMAGE SIDE */}
    <div className="flex justify-center">
      <div className="relative w-full max-w-[650px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <div className="slideshow">
          <div className="slides">
            <Image src="/abt_main_1.png" alt="About 1" width={650} height={500} />
            <Image src="/abt_main_2.png" alt="About 2" width={650} height={500} />
            <Image src="/abt_main_3.png" alt="About 3" width={650} height={500} />
          </div>
        </div>
      </div>
    </div>

    {/* TEXT SIDE */}
    <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl text-white">

      <h3 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
        Exploring, Growing, And Thriving Together
      </h3>

      <p className="text-xl md:text-2xl leading-relaxed mb-6">
        Our primary school education program is tutor facilitated, allowing a
        comprehensive one-on-one approach to a learner's educational needs.
      </p>

      <p className="text-xl md:text-2xl leading-relaxed mb-8">
        With different curriculum options to choose from, parents can provide a
        tailored education that prepares each child to their fullest potential.
      </p>

      <p className="text-xl md:text-2xl leading-relaxed mb-8">
        Social interaction and physical education are also vital for holistic
        development. We create opportunities for learners to explore their
        unique interests in safe, nurturing environments.
      </p>

      <a
        href="#"
        className="inline-block px-8 py-4 text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-bold shadow-lg hover:scale-105 transition"
      >
        Read More
      </a>

    </div>

  </div>
</section>

    </div>
  );
}
