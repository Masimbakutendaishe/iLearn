import Image from "next/image";

// components/Footer.js
const Footer = () => {
  return (
    <section className="bg-black py-12 text-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4">

        {/* LOGO + DESCRIPTION */}
        <div className="box">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/loggo.png"
              alt="iLEARN Logo"
              width={60}
              height={60}
            />
            <h3 className="text-2xl font-bold">
              iLEARN Academy
            </h3>
          </div>

          <p className="text-lg leading-loose">
            Choose us, where tech meets quality foundational learning.
          </p>

          {/* ADDRESS */}
          <p className="mt-4 text-lg leading-relaxed">
          4 Hospital Road, Northmead, Benoni, 1501
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="box">
          <h3 className="text-2xl py-4 font-bold">Quick Links</h3>

          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Enroll Now
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Parent Portal
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            School Calendar
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Lunch Menu
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            School Supply List
          </a>
        </div>

        {/* CATEGORY */}
        <div className="box">
          <h3 className="text-2xl py-4 font-bold">Category</h3>

          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            About Us
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Awards & Prizegving
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Admissions
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            News & Events
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Contact Us
          </a>
        </div>

        {/* EXTRA LINKS */}
        <div className="box">
          <h3 className="text-2xl py-4 font-bold">Extra Links</h3>

          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Privacy Policy
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Terms of Use
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Site Map
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            FAQs
          </a>
          <a href="#" className="text-lg py-2 block hover:text-orange-400">
            Accessibility Statement
          </a>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-black text-white py-6 text-center mt-8 border-t border-gray-700">

        <p className="text-lg">
          &copy; 2026 iLEARN Academy. All Rights Reserved.
        </p>

        <div className="mt-4 flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank">
            <Image src="/fbicon.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://instagram.com" target="_blank">
            <Image src="/igicon.png" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <Image src="/liicon.png" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="mailto:ilearnacademy@gmail.com">
            <Image src="/gmailicon.png" alt="Gmail" width={24} height={24} />
          </a>
          <a href="tel:0738434227">
            <Image src="/phone.png" alt="Contact Number" width={24} height={24} />
          </a>
        </div>

      </div>

    </section>
  );
};

export default Footer;
