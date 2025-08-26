import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AbiSir from "../asset/photo/MD.jpg";
import I from "../asset/photo/i.png";
import image1 from "../asset/photo/h1.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TimelineSection from "../../Reuse/TimeLine";

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

    animateNumber(premiumRef, 5000);
    animateNumber(customerRef, 1);
    animateNumber(awardsRef, 60);
    animateNumber(projectsRef, 231);
    animateNumber(countRef, 1995);
    animateNumber(oneRef, 100000);
    animateNumber(twoRef, 200);
    animateNumber(threeRef, 14);
    animateNumber(fourRef, 30);
    animateNumber(fiveRef, 50);

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
                <span ref={oneRef} className="text-white">
                  0
                </span>
                <span className="text-white"> Retail Outlets</span>
              </p>
            </div>

            {/* Square Div 2 */}
            <div className="absolute top-10 left-0 w-45 h-36 bg-gray-800 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={twoRef} className="text-white">
                  0
                </span>
                <span className="text-white">+ Products</span>
              </p>
            </div>

            {/* Square Div 3 */}
            <div className="absolute top-38 left-20 w-36 h-40 bg-yellow-500 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={threeRef} className="text-black">
                  0
                </span>
                <span className="text-black"> States</span>
              </p>
            </div>

            {/* Square Div 4 */}
            <div className="absolute top-48 left-65 w-28 h-28 bg-blue-600 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={fourRef} className="text-white">
                  0
                </span>
                <span className="text-white"> Years Experience</span>
              </p>
            </div>

            {/* Square Div 5 */}
            <div className="absolute left-90 w-44 h-28 bg-gray-800 shadow-lg flex items-center justify-center text-center p-4">
              <p className="font-bold text-lg">
                <span ref={fiveRef} className="text-white">
                  0
                </span>
                <span className="text-white"> Awards</span>
              </p>
            </div>

            {/* Square Div 6 */}
            <div className="absolute top-80 left-15 w-40 h-32 bg-green-600 shadow-lg flex items-center justify-center text-center p-4">
              <p className="text-white font-bold text-lg">Global Exports</p>
            </div>

            {/* Square Div 7 */}
            <div className="absolute top-80 left-60 w-32 h-44 bg-purple-600 shadow-lg flex items-center justify-center text-center p-4">
              <p className="text-white font-bold text-lg">
                Trusted by Millions
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
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
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
      <section className="py-20 px-4 md:px-16 bg-white font-serif">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-x-8 items-stretch">
          {/* Left: Headline + Stats */}
          <div className="md:col-span-2 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-4 fade-left">
                A Legacy of
                <br />
                Quality & Care
              </h2>
              <p className="text-gray-700 text-lg mb-8 fade-left">
                With decades of expertise, we create products that define trust.
              </p>
              <div className="mt-3">
                <p className="text-amber-700 italic text-[17px] fade-left">
                  Every milestone achieved reflects our customer’s confidence in
                  us.
                </p>
              </div>
              <div className="flex gap-6 relative -mb-8 z-20">
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div
                    ref={premiumRef}
                    className="text-xl font-bold text-teal-700"
                  >
                    0
                  </div>
                  <div className="text-[15px] text-gray-500">
                    Distributors Across
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div className="text-xl font-bold text-teal-700">1M</div>
                  <div className="text-[15px] text-gray-500">
                    Retailers Outlets
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div
                    ref={awardsRef}
                    className="text-xl font-bold text-teal-700"
                  >
                    0
                  </div>
                  <div className="text-[15px] text-gray-500">
                    Global Presence
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow text-center min-w-[110px]">
                  <div
                    ref={projectsRef}
                    className="text-xl font-bold text-teal-700"
                  >
                    0
                  </div>
                  <div className="text-[15px] text-gray-500">
                    Total Products
                  </div>
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
              <div className="relative w-full h-[500px] perspective card-hover">
                <div className="card-inner w-full h-full relative">
                  {/* Front Side */}
                  <div className="card-front w-full max-w-md h-64 rounded-md shadow overflow-hidden">
                    <img
                      src={I}
                      alt="image"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Back Side */}
                  <div className="card-back bg-gray-200 rounded-md p-6 shadow-lg flex flex-col justify-center gap-4 overflow-auto">
                    <h3 className="text-xl font-bold">
                      Spice Up Every Meal with Aachi
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Aachi’s legacy grows through quality, trust, and flavors
                      uniting homes everywhere. Aachi Masala is a trusted name
                      in Indian households, known for bringing authentic flavors
                      to every kitchen. With a wide range of spice blends and
                      ready-to-cook products, Aachi ensures convenience without
                      compromising on taste. Rooted in tradition and crafted
                      with care, each product is designed to meet the evolving
                      needs of modern families while preserving the rich
                      culinary heritage of India. From everyday meals to festive
                      feasts, Aachi adds a touch of home to every dish. Its
                      commitment to quality, hygiene, and affordability has made
                      it a preferred choice for millions seeking flavorful,
                      wholesome, and easy-to-make food solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <video
                src="assets/h2.mp4"
                autoPlay
                loop
                muted
                className="w-[500px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />
    </div>
  );
};

export default Home;
