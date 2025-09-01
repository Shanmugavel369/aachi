import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AbiSir from "../asset/photo/MD.jpg";
import I from "../asset/photo/i.png";
import image1 from "../asset/photo/h1.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TimelineSection from "../Reuse/TimeLine";
import MidSection from "../Reuse/MidSection";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Refs for USP counters and labels
  const premiumRef = useRef(null);
  const customerRef = useRef(null);
  const awardsRef = useRef(null);
  const projectsRef = useRef(null);
  const countRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);
  const heroRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      ScrollTrigger.addEventListener("refreshInit", () => {
        gsap.set(".parallax-image", { willChange: "transform" });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log("Mouse move detected");
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40; // 40px max left/right
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30; // 30px max up/down
      setOffset({ x, y });
    };
    const node = heroRef.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseleave", () => setOffset({ x: 0, y: 0 }));
    }
    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseleave", () => setOffset({ x: 0, y: 0 }));
      }
    };
  }, []);

  useEffect(() => {
    // Animate number helper function animating from 0 to end value on scroll trigger
    const animateNumber = (ref, end) => {
      if (!ref.current) return;

      let obj = { val: 0 };

      gsap.to(obj, {
        val: end,
        duration: 2,
        ease: "power1.inOut",
        snap: "val",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.floor(obj.val);
          }
        },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      });
    };

    animateNumber(premiumRef, 5);
    animateNumber(customerRef, 10);
    animateNumber(awardsRef, 60);
    animateNumber(projectsRef, 231);
    animateNumber(countRef, 1995);
    animateNumber(oneRef, 1);
    animateNumber(twoRef, 231);
    animateNumber(threeRef, 65);
    animateNumber(fourRef, 30);
    animateNumber(fiveRef, 12);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section
        ref={heroRef}
        className="bg-white min-h-screen flex items-center justify-center px-4 py-4 -mt-14 relative"
      >
        <motion.div
          style={{
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          }}
          className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Content (Absolute Freedom Layout) */}
          <motion.div
            className="relative w-full h-[400px]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          >
            {/* Square Div Extra (optional top right counter box) */}
            {/* Square Div 1 */}
            <div className="absolute top-0 left-40 w-45 h-36 bg-red-600 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={oneRef} className="text-white text-4xl">
                  0
                </span>
                <span className="text-white text-4xl">M+ <br /> <span className="text-sm">Retailers</span></span>
              </p>
            </div>

            {/* Square Div 2 */}
            <div className="absolute top-10 left-0 w-45 h-36 bg-gray-800 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={twoRef} className="text-white text-4xl">
                  0
                </span>
                <span className="text-white text-4xl">+ </span>
                <br />
                <span className="text-white"> Products</span>
              </p>
            </div>

            {/* Square Div 3 */}
            <div className="absolute top-38 left-20 w-36 h-40 bg-yellow-500 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={threeRef} className="text-black text-4xl">
                  0
                </span>
                <span className="text-black text-4xl">+ </span>
                <br />
                <span className="text-black"> Countries</span>
              </p>
            </div>

            {/* Square Div 4 */}
            <div className="absolute top-48 left-65 w-28 h-28 bg-blue-600 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={fourRef} className="text-white text-3xl">
                  0
                </span>
                <span className="text-white text-3xl">+ </span>
                <br />
                
                <span className="text-white">Years Experience</span>
              </p>
            </div>

            {/* Square Div 5 */}
            <div className="absolute left-90 w-44 h-28 bg-gray-800 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={fiveRef} className="text-white text-4xl">
                  0
                </span>
                <br />
                <span className="text-white"> Awards</span>
              </p>
            </div>

            {/* Square Div 6 */}
            <div className="absolute top-80 left-15 w-40 h-32 bg-green-600 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={premiumRef} className="text-white text-4xl">
                  0
                </span>
                <span className="text-white text-4xl">k+ </span>
                <br />
                <span className="text-white"> Distributors</span>
              </p>
            </div>

            {/* Square Div 7 */}
            <div className="absolute top-80 left-60 w-32 h-44 bg-purple-600 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={customerRef} className="text-white text-4xl">
                  0
                </span>
                <span className="text-white text-4xl">M+ </span>
                <br />
                <span className="text-white"> Happy Customers</span>
              </p>
            </div>
          </motion.div>

          {/* Center Images with Decor */}
          <motion.div
            className="flex flex-col items-center justify-center gap-2 relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative Plus Between */}
            <motion.span
              className="text-6xl font-extrabold text-black select-none -mr-32"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              +
            </motion.span>

            {/* Counter box replacing top image */}
            <motion.div
              className="w-40 h-40 flex items-center justify-center text-4xl font-extrabold text-white bg-red-500 -ml-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-lg font-normal block">Since</span>
              <span ref={countRef}>0</span>
            </motion.div>

            {/* Bottom Video */}
            <motion.video
              src="assets/h3.mp4"
              autoPlay
              loop
              muted
              className="w-100 h-100 object-cover -ml-26"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>

          {/* Right Images */}
          <motion.div
            className="flex flex-col justify-center gap-10 px-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={image1}
              alt="image1"
              className="w-100 h-70 object-cover -ml-22 -mb-16"
            />

            <motion.video
              src= "assets/v2.mp4"
              autoPlay
              loop
              muted
              className="w-100 h-86 -mb-38"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Decorative plus and arrow on right side */}
        <motion.span
          className="absolute right-1/8 top-100 hidden md:block text-7xl font-extrabold text-black select-none"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          +
        </motion.span>
      </section>

      {/* USP Section */}
      <section className="mx-auto justify-center flex px-6 py-4 mt-10">
        <div className="mb-10 text-center max-w-md">
        <p className="text-3xl font-bold mb-2 text-red-600">Aachi Key Moments</p>
        <p className="text-gray-600 text-sm">
          Celebrating the moments that define the spirit of the Aachi family.
        </p>
      </div>
      </section>

      <MidSection />

      <TimelineSection />

      
    </div>
  );
};

export default Home;
