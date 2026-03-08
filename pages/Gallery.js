import Image from 'next/image';

export default function Gallery() {
  



  const galleryImages = [
    { id: 1, image: '/gallery-1.jpg' },
    { id: 2, image: '/gallery-2.jpg' },
    { id: 3, image: '/gallery-3.jpg' },
    { id: 4, image: '/gallery-4.jpg' },
    { id: 5, image: '/gallery-5.jpg' },
    { id: 6, image: '/gallery-6.jpg' },
  ];

  return (
    <section className="gallery py-16 px-6" id="gallery">
      <h1 className="text-5xl font-bold text-center text-orange-400 mb-12">
        Our <span className="text-black">Gallery</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
            <Image src={image.image} alt={`Gallery image ${image.id}`} width={300} height={300} className="w-full h-80 object-cover transition-transform hover:scale-110" />
            <div className="absolute inset-0 bg-orange bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <i className="fas fa-plus text-white text-6xl"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
