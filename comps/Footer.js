import Image from "next/image";
// components/Footer.js
const Footer = () => {
    return (
      <section className="bg-black py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4">
          <div className="box">
            <h3 className="text-2xl text-orange-500 py-4"> <i className="fas fa-school"></i> iLEARN Academy </h3>
            <p className="text-white text-lg leading-loose">Choose us, where tech meets quality foundational learning</p>
          </div>
  
          <div className="box">
            <h3 className="text-2xl text-orange-500 py-4">Quick Links</h3>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Enroll Now</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Parent Portal</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> School Calendar</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Lunch Menu</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> School Supply List</a>
          </div>
  
          <div className="box">
            <h3 className="text-2xl text-orange-500 py-4">Category</h3>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> About Us</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Academics</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Admissions</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> News & Events</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Contact Us</a>
          </div>
  
          <div className="box">
            <h3 className="text-2xl text-orange-500 py-4">Extra Links</h3>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Privacy Policy</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Terms of Use</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Site Map</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> FAQs</a>
            <a href="#" className="text-white text-lg py-2 block hover:text-orange-500"><i className="fas fa-caret-right pr-2"></i> Accessibility Statement</a>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="bg-black text-white py-3 text-center">
                <p>&copy; 2026 TEEM SHE x iLEARN Academy.</p>
                <div className="mt-2 flex justify-center gap-4">
                    <a href="https://facebook.com" target="_blank" >
                        <Image src="/fbicon.png" alt="Facebook" width={24} height={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" >
                        <Image src="/igicon.png" alt="Instagram" width={24} height={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" >
                        <Image src="/liicon.png" alt="LinkedIn" width={24} height={24} />
                    </a>
                    <a href="mailto:info@vekannfitness.com">
                        <Image src="/gmailicon.png" alt="Gmail" width={24} height={24} />
                    </a>
                    <a href="mailto:info@vekannfitness.com">
                        <Image src="/whatsapp.png" alt="Gmail" width={40} height={40} />
                    </a>
                    <a href="tel:+263772716084">
                        <Image src="/phone.png" alt="Contact Number" width={24} height={24} />
                    </a>
                </div>
            </div>
      </section>
    );
  };
  
  export default Footer;
  