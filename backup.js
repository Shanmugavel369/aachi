import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Map from "../../Reuse/map"
import AbiSir from "../assets/Abi-sir.jpg";
import video from "../assets/v2.mp4";
import AachiLogo from "../assets/Logos/Aachi-logo.png";
import video1 from "../assets/v1.mp4";
import video2 from "../assets/v3.mp4";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image from "../assets/photo/Ashwin.jpg";

gsap.registerPlugin(ScrollTrigger);

const explosionOffsets = [
  { x: 90, y: 90 }, // top center video explode top-left
  { x: 90, y: 90 },  // bottom left video explode bottom-left
  { x: 90, y: 90 },    // bottom right video explode bottom-right
];



const Home = () => {
  const rightRef = useRef(null);

  
  // Number refs
  const yearsRef = useRef(null);
  const clientsRef = useRef(null);
  const futureRef = useRef(null);
  const loremRef = useRef(null);
  const premiumRef = useRef(null);
  const customerRef = useRef(null);
  const awardsRef = useRef(null);
  const projectsRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {
      // === Existing batch animations ===
      ScrollTrigger.batch(".fade-left", {
        onEnter: (batch) =>
          gsap.from(batch, { x: -50, opacity: 0, stagger: 0.2, duration: 1 }),
      });

      ScrollTrigger.batch(".fade-right", {
        onEnter: (batch) =>
          gsap.from(batch, { x: 50, opacity: 0, stagger: 0.2, duration: 1 }),
      });

      ScrollTrigger.batch(".fade-up", {
        onEnter: (batch) =>
          gsap.from(batch, { y: 50, opacity: 0, stagger: 0.2, duration: 1 }),
      });

      // === Parallax images ===
      gsap.utils.toArray(".parallax-image").forEach((img, i) => {
        const depth = (i + 1) * 15;
        gsap.fromTo(
          img,
          { y: 0, scale: 1.05, opacity: 0.8 },
          {
            y: -depth,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // === Rendering optimization ===
      ScrollTrigger.addEventListener("refreshInit", () => {
        gsap.set(".parallax-image", { willChange: "transform" });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!rightRef.current) return;

    // === Floating cards/videos ===
    const floatEls = rightRef.current.querySelectorAll(".float");
    gsap.to(floatEls, {
      y: "random(-30,30)",
      x: "random(-30,30)",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      stagger: { each: 0.3, from: "random" },
    });

    // === Number counters ===
    const animateNumber = (ref, end) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { innerText: 0 },
        {
          innerText: end,
          duration: 1.5,
          ease: "power1.inOut",
          snap: { innerText: 1 },
          onUpdate() {
            if (ref.current) {
              ref.current.textContent = Math.floor(this.targets()[0].innerText);
            }
          },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "restart none none none",
          },
        }
      );
    };

    animateNumber(yearsRef, 50);
    animateNumber(clientsRef, 1000);
    animateNumber(futureRef, 800);
    animateNumber(loremRef, 1500);
    animateNumber(premiumRef, 4000);
    animateNumber(customerRef, 10000);
    animateNumber(awardsRef, 45);
    animateNumber(projectsRef, 45);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const [hasSettled, setHasSettled] = useState(false);

  React.useEffect(() => {
    // Trigger settle animation after explosion completes (600ms delay)
    const timer = setTimeout(() => setHasSettled(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const finalPositions = [
    { top: "-2rem", left: "40%", x: "-100%" },  // middle top center video
    { top: "14rem", left: "25%", x: "-50%" }, // bottom left
    { top: "14rem", left: "47%", x: "0%" },   // bottom right
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-20 bg-white font-sans">
        <div
          ref={rightRef}
          className="relative flex flex-col items-center justify-center w-full h-full min-h-[500px] px-4 md:px-0 max-w-5xl"
        >
          {/* Logo */}
          <img
  src={AachiLogo}
  alt="Aachi Logo"
  className="absolute float -top-16 right-8 -mr-26 w-[200px] md:w-[260px] drop-shadow-lg z-30"
/>


          {/* Floating Cards */}
          <div className="card float absolute top-29 right-10 bg-red-600 rounded-xl px-5 py-3 shadow-lg text-white font-bold z-40 w-[110px] md:w-[160px] fade-left">
            <span ref={yearsRef} className="block text-xl">0</span>
            <span className="text-xs opacity-80 font-normal">Years of Excellence</span>
          </div>
          <div className="card float absolute top-28 right-100 bg-[#ffbe25] rounded-xl px-5 py-3 shadow-lg text-white font-bold z-40 w-[110px] md:w-[160px] fade-left">
            <span ref={clientsRef} className="block text-xl">0</span>
            <span className="text-xs opacity-80 font-normal">Happy Clients</span>
          </div>
          <div className="card float absolute bottom-20 right-0 bg-[#ffbe25] rounded-xl px-5 py-3 shadow-lg text-black font-bold z-40 w-[110px] md:w-[160px] fade-left">
            <span ref={futureRef} className="block text-xl">0</span>
            <span className="text-xs opacity-80 font-normal">Leading the future</span>
          </div>
          <div className="card float absolute bottom-8 left-2 bg-[#ffbe25] rounded-xl px-5 py-3 shadow-lg text-black font-bold z-40 w-[110px] md:w-[160px]">
            <span ref={loremRef} className="block text-xl">0</span>
            <span className="text-xs opacity-80 font-normal">Lorem ipsum dolor</span>
          </div>

          {/* Hero Videos */}
          {[
  { src: video, index: 0 },
  { src: video1, index: 1 },
  { src: video2, index: 2 },
].map(({ src, index }) => {
  // Define variable sizes based on index
  const videoSizes = [
    { width: "480px", height: "260px" }, // wider (index 0)
    { width: "300px", height: "160px" }, // smaller (index 1)
    { width: "320px", height: "180px" }, // medium (index 2)
  ];

  const size = videoSizes[index];

  return (
    <motion.div
      key={index}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
      }}
      initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
      animate={
        hasSettled
          ? {
              scale: 1,
              x: finalPositions[index].x,
              y: 0,
              opacity: 1,
              top: finalPositions[index].top,
              left: finalPositions[index].left,
              transition: { duration: 0.8, ease: "easeOut" },
            }
          : {
              scale: 1.3,
              x: explosionOffsets[index].x,
              y: explosionOffsets[index].y,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            }
      }
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        alt={`Hero Industrial ${index + 1}`}
        className="float"
        style={{
          width: size.width,
          height: size.height,
          objectFit: "cover",
          borderRadius: "0.5rem", // match rounded-lg
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // match shadow-md
          zIndex: 10,
        }}
      />
    </motion.div>
  );
})}


          {/* Decorative Shapes */}
          <div className="absolute top-30 right-1/4 w-12 h-12 bg-[#ffbe25] rotate-45 z-20 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-12 right-1/4 w-6 h-6 bg-[#ffd6d6] rounded-full z-10 animate-pulse" /> 
          <div className="absolute top-2 w-8 h-8 bg-[#ffe396] rounded-full z-10 animate-bounce" />
          <div className="absolute bottom-40 right-2 w-10 h-10 bg-red-100 rounded-full z-10" />
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-red-600 rounded-full opacity-70 z-10" />
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 px-4 md:px-16 bg-white font-serif">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-x-8 items-stretch">
          {/* Left: Headline + Stats */}
          <div className="md:col-span-2 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-4 fade-left">
                When We Say<br /> Custom, We Mean It
              </h2>
              <p className="text-gray-700 text-lg mb-8 fade-left">
                Utilize small areas to their full potential by using creative and ingenious space-saving furniture.
              </p>
              <div className="mt-3">
                <p className="text-amber-700 italic text-[17px] fade-left">
                  We’ll include your distinctive design preferences into our work!
                </p>
              </div>
              <div className="flex gap-6 relative -mb-8 z-20">
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div ref={premiumRef} className="text-xl font-bold text-teal-700">0</div>
                  <div className="text-[15px] text-gray-500">Premium Product</div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div ref={customerRef} className="text-xl font-bold text-teal-700">0</div>
                  <div className="text-[15px] text-gray-500">Happy Customer</div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div ref={awardsRef} className="text-xl font-bold text-teal-700">0</div>
                  <div className="text-[15px] text-gray-500">Awards Winning</div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div ref={projectsRef} className="text-xl font-bold text-teal-700">0</div>
                  <div className="text-[15px] text-gray-500">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="md:col-span-2 flex items-center justify-center -mb-8 fade-up">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={AbiSir}
                alt="Visual Center"
                className="max-h-[300px] object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right: Video + Approach */}
          <div className="md:col-span-2 flex flex-col justify-between fade-right">
            <div className="mb-6">
              <img src={image} alt="image" className="w-full h-[500px] relative -mt-45"/>
            </div>
            <div>
              <video src={video} autoPlay loop muted className="w-[500px] h-[200px]" />
            </div>
          </div>
        </div>
      </section>

<Map />

    </div>
  );
};

export default Home;
