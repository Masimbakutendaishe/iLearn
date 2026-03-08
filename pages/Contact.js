import Image from 'next/image';

export default function Contact() {
  

  


  return (
    <section className="mt-20 contact py-16 px-6" id="contact">
      <h1 className="text-5xl font-bold text-center text-orange-400 mb-12">
        <span className="text-orange-400">Contact</span> Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 shadow-lg rounded-2xl">
          <i className="fas fa-clock text-4xl text-orange-400"></i>
          <h3 className="text-2xl font-bold mt-4 text-blue-300">Opening Hours</h3>
          <p className="text-blue-300">Mon - Thurs: 08:00 AM - 12:30 PM</p>
          <p className="text-blue-300">Friday: 09:00 AM - 12:00 PM</p>
        </div>
        <div className="text-center p-6 shadow-lg rounded-2xl">
          <i className="fas fa-envelope text-4xl text-orange-400"></i>
          <h3 className="text-2xl font-bold mt-4 text-blue-300">Email</h3>
          <p className="text-blue-300">sphiwe4@ilearn.com</p>
          <p className="text-blue-300">ilearnacademy@gmail.com</p>
        </div>
        <div className="text-center p-6 shadow-lg rounded-2xl">
          <i className="fas fa-phone text-4xl text-orange-400"></i>
          <h3 className="text-2xl font-bold mt-4 text-blue-300">Phone Number</h3>
          <p className="text-blue-300"> +2712345679</p>
          <p className="text-blue-300">+2712345679</p>
        </div>
      </div>
      <div className="flex flex-wrap mt-12 gap-6">
        <div className="flex-1">
          <Image src="/contact.gif" alt="Contact" width={600} height={400} className="w-full" />
        </div>
        <form className="flex-1 bg-white p-6 shadow-lg rounded-2xl">
          <h3 className="text-3xl font-bold mb-4 text-blue-300">Get in Touch</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Your Name" className="border p-3 rounded" />
            <input type="email" placeholder="Your Email" className="border p-3 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="number" placeholder="Your Number" className="border p-3 rounded" />
            <input type="text" placeholder="Your Subject" className="border p-3 rounded" />
          </div>
          <textarea placeholder="Your Message" className="border p-3 rounded w-full h-32 mb-4"></textarea>
          <button type="submit" className="bg-orange-400 text-white py-3 px-6 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
}
