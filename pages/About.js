import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="about py-16 px-6 mt-20" style={{ backgroundColor: "#f78da7" }} id="about">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          <span className="text-orange-400 ">About</span> Us
        </h1>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex-1">
            <Image
              src="/about us.png"
              alt="About iLearn Academy"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-3xl text-white leading-snug">
              Learning Through Play, Discovery, and Care
            </h3>

            <p className="text-lg text-white mt-4 leading-relaxed">
              At <strong>iLearn Academy</strong>, we provide a safe, caring, and joyful
              learning environment where young children can explore, grow, and
              develop important early skills. Our kindergarten focuses on
              nurturing curiosity, creativity, and confidence while helping
              children build strong foundations for their future education.
            </p>

            <p className="text-lg text-white mt-4 leading-relaxed">
              Through fun activities such as storytelling, music, art, outdoor
              play, and early literacy and numeracy lessons, our dedicated
              teachers support each child’s development at their own pace.
              At iLearn Academy, we believe every child is unique and deserves
              encouragement, kindness, and opportunities to learn through play.
            </p>

            <a
              href="#"
              className="inline-block px-6 py-3 mt-6 text-orange-400 border border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}