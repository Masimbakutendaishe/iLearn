import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-black py-16 text-white">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <Image src="/loggo.png" alt="iLEARN Logo" width={70} height={70} />
            <h3 className="text-3xl md:text-4xl font-extrabold">
              iLEARN Academy
            </h3>
          </div>

          <p className="text-lg md:text-xl leading-relaxed">
            Choose us, where tech meets quality foundational learning.
          </p>

          <p className="mt-6 text-lg md:text-xl">
            📍 4 Hospital Road, Northmead, Benoni, 1501
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-lg md:text-xl">
            <a className="hover:text-orange-400">Enroll Now</a>
            <a className="hover:text-orange-400">Parent Portal</a>
            <a className="hover:text-orange-400">School Calendar</a>
            <a className="hover:text-orange-400">Lunch Menu</a>
            <a className="hover:text-orange-400">School Supply List</a>
          </div>
        </div>

        {/* CONTACT INFO (NEW CLEAN DESIGN) */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Contact</h3>

          <div className="flex flex-col gap-3 text-lg md:text-xl leading-relaxed">

            <p><strong>Operating Hours:</strong><br /> 06:30 - 18:30</p>

            <p><strong>After Care:</strong><br /> 16:30 - 19:00</p>

            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+27738434227" className="text-orange-400">
                +27 73 843 4227
              </a>
            </p>

            <p>
              <strong>Instagram:</strong><br />
              <a
                href="https://instagram.com/ilearn_imfundo_academy"
                target="_blank"
                className="text-orange-400"
              >
                @ilearn_imfundo_academy
              </a>
            </p>

            <p>
              <strong>Website:</strong><br />
              <a
                href="https://www.ilearnacademy.co.za"
                target="_blank"
                className="text-orange-400"
              >
                www.ilearnacademy.co.za
              </a>
            </p>

            <p>
              <strong>Email:</strong><br />
              <a
                href="mailto:ilearnacademyinfo@gmail.com"
                className="text-orange-400"
              >
                ilearnacademyinfo@gmail.com
              </a>
            </p>

          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Follow Us</h3>

          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com">
              <Image src="/fbicon.png" alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://instagram.com">
              <Image src="/igicon.png" alt="Instagram" width={32} height={32} />
            </a>
            <a href="https://linkedin.com">
              <Image src="/liicon.png" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="mailto:ilearnacademyinfo@gmail.com">
              <Image src="/gmailicon.png" alt="Email" width={32} height={32} />
            </a>
            <a href="tel:+27738434227">
              <Image src="/phone.png" alt="Phone" width={32} height={32} />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">

        <p className="text-lg md:text-xl">
          &copy; 2026 TEEM SHE x iLEARN Academy. All Rights Reserved.
        </p>

      </div>

    </section>
  );
};

export default Footer;
