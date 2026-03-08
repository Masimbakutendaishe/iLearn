import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import homeImage from '../public/home.png';

export default function Home() {
  return (
    <div>
    <section className=" relative flex flex-wrap items-center min-h-screen gap-6 p-6 " id="home">
      <div className="flex-1 ">
        <h3 className="text-6xl font-bold text-black">
          Welcome To <br></br>
          <span className="text-orange-400">iLEARN ACADEMY</span>
        </h3>
        <p className="text-purple-500">"iYanda iMfundo"</p>
        <p className="mt-4 text-lg text-gray-500">
        iLEARN ACADEMY is a future-driven preschool in South Africa, dedicated to providing an engaging, nurturing, and innovative learning environment. We offer a structured Grade R CAPS program, fostering a love for learning from an early age.
        </p>
        <a href="#" className="inline-block px-6 py-3 mt-6 text-orange-400 border border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition">
          Learn More
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <Image src="/home.png" alt="Kindergarten Image" width={500} height={500} />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[107px] rotate-360">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f78da7"></path>
        </svg>
      </div>
    </section>
  
      
      <section className="about" style={{backgroundColor:"#f78da7"}} id="about">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          <span className="text-orange-400">About</span> Us
        </h1>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex-1">
            <Image src="/about us.png" alt="About Us" width={500} height={500} className="w-full h-full" />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl text-white leading-snug">
              Exploring, Growing, And Thriving Together
            </h3>
            <p className="text-lg text-white mt-4 leading-relaxed">
              At iLEARN ACADEMY, we believe in holistic development. Our curriculum integrates academics with extracurricular activities, including swimming lessons, creative arts, and interactive play to enhance cognitive and physical development.
            </p>
            <p className="text-lg text-white mt-4 leading-relaxed">
            We also provide a nutritious meal program designed to support healthy growth, along with on-site child health care nurses to ensure the well-being of every child. Our goal is to create a safe and inspiring environment where young minds can flourish.
            
            </p>
            <a href="#" className="inline-block px-6 py-3 mt-6 text-orange-400 border border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition">
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>

  );
}
