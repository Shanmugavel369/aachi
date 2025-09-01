import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import t1 from "../src/asset/timeline/t1.jpg";
import t2 from "../src/asset/timeline/t2.jpg";
import t3 from "../src/asset/timeline/t3.jpg";
import t4 from "../src/asset/timeline/t4.jpg";
import t5 from "../src/asset/timeline/t5.jpg";
import t6 from "../src/asset/timeline/t6.png";
import t7 from "../src/asset/timeline/t7.jpg";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    date: "1995",
    title: " Humble Beginning",
    desc: "Established by Mr. A.D. Padmasingh Isaac, Aachi began its journey to redefine authentic food experiences through spices.",
    img: t1,
  },
  {
    date: "2001",
    title: "Product Expansion",
    desc: "Expanded product range with blended masalas, catering to evolving culinary needs while maintaining purity and quality.",
    img: t2,
  },
  {
    date: "2006",
    title: "Regional Growth",
    desc: "Grew distribution beyond Tamil Nadu, building a strong regional presence across Southern India.",
    img: t3,
  },
  {
    date: "2011",
    title: "Diversified Portfolio",
    desc: "Entered new FMCG categories, diversifying into ready-to-cook and convenience products for modern households.",
    img: t4,
  },
  {
    date: "2016",
    title: "Global Reach",
    desc: "Strengthened export channels, reaching global markets with consistent quality and authentic flavor.",
    img: t5,
  },
  {
    date: "2021",
    title: "Tech Advancement",
    desc: "Adopted state-of-the-art manufacturing and packaging technologies to meet international food safety standards.",
    img: t6,
  },
  {
    date: "2025",
    title: "Global Legacy",
    desc: "Aachi Group today is a trusted global brand, delivering tradition with innovation across food, education, and lifestyle ventures.",
    img: t7,
  },
];

const TimeLinePinnedScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const tl = useRef(null);
  const lineRef = useRef(null);

useEffect(() => {
  // Main pinned timeline
  tl.current = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * slides.length}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progressIndex = Math.floor(self.progress * (slides.length - 1));
        setCurrentIndex(progressIndex);

        if (lineRef.current) {
          gsap.set(lineRef.current, { scaleY: self.progress });
        }
      },
      // markers: true,
    },
  });

  // Cleanup
  return () => {
    if (tl.current) {
      if (tl.current.scrollTrigger) tl.current.scrollTrigger.kill();
      tl.current.kill();
    }
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center px-6 py-4 relative overflow-visible"
    >
      <div className="justify-center mx-auto">
        <p className="text-3xl font-bold text-red-600">Our Journey</p>
        <p className="mt-2 text-gray-600 mb-4">
          Aachi Group has come a long way since its inception, evolving through
          various phases of growth and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center relative z-10 min-h-[500px] gap-x-0 overflow-visible">
        {/* Timeline line + years */}
        {/* Timeline line + years */}
<div className="absolute left-4 top-0 h-full w-[4px] bg-gray-300">
  {/* Red growing line */}
  <div
    ref={lineRef}
    className="absolute top-0 left-0 w-full h-full bg-red-500 origin-top"
    style={{ transform: "scaleY(0)", transformOrigin: "top" }}
  />

  {/* Static years */}
  {slides.map((slide, idx) => (
    <span
      key={slide.date}
      className={`absolute left-6 font-semibold ${
        idx <= currentIndex ? "text-red-600 font-extrabold" : "text-gray-500"
      }`}
      style={{
        top: `${(idx / (slides.length - 1)) * 100}%`,
      }}
    >
      {slide.date}
    </span>
  ))}
</div>


        {/* Left Column - Content Card */}
        <div className="absolute top-0 left-30 relative z-20 max-w-lg h-[350px] shadow-lg bg-white p-8 w-full">
          <div className="h-full flex flex-col p-8 transition-opacity duration-700 ease-in-out">
            <p className="text-red-600 font-semibold text-sm">
              {slides[currentIndex].date}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
              {slides[currentIndex].title}
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              {slides[currentIndex].desc}
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden -ml-26">
          <img
            src={slides[currentIndex].img}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default TimeLinePinnedScroll;
