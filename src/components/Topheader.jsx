import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Logo from "../asset/Logos/Aachi-logo.png";

const Topheader = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [infraOpen, setInfraOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Get scroll progress (0-1)
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white" : "bg-white"
      } px-6 py-3 flex items-center justify-between font-sans relative`}
    >
      {/* Red progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-red-600 origin-left"
        style={{ scaleX }}
      />

      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-28 md:w-36" />
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium text-[15px]">
        <a href="#" className="hover:text-red-600 transition-colors">Home</a>

        {/* About Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button className="hover:text-red-600 transition-colors">About Us</button>
          <AnimatePresence>
            {aboutOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute left-0 mt-2 bg-white rounded-lg p-4 w-64 grid gap-2 shadow-lg"
              >
                {[
                  "Company Overview",
                  "Corporate Story",
                  "A.D. Padmasingh Isaac",
                  "Ashwin Pandian Padmasingh",
                  "Abishek Abraham Padmasingh",
                  "Our Brands",
                  "Our Ventures",
                  "Board of Visionaries",
                  "Awards",
                  "CSR",
                  "Annual Return",
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Infrastructure Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setInfraOpen(true)}
          onMouseLeave={() => setInfraOpen(false)}
        >
          <button className="hover:text-red-600 transition-colors">Infrastructure</button>
          <AnimatePresence>
            {infraOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute left-0 mt-2 bg-white rounded-lg p-4 w-52 shadow-lg"
              >
                <a href="#" className="block text-gray-600 hover:text-red-600 mb-2">Infrastructure</a>
                <a href="#" className="block text-gray-600 hover:text-red-600">Healing with Happiness</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#" className="hover:text-red-600 transition-colors">Gallery</a>
        <a href="#" className="hover:text-red-600 transition-colors">Careers</a>
        <a href="#" className="hover:text-red-600 transition-colors">Shop</a>
        <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
      </nav>

      {/* Right: HoReCa Button */}
      <div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors">
          HoReCa
        </button>
      </div>
    </header>
  );
};

export default Topheader;
