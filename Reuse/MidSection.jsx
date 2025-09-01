/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import e4 from "../src/asset/timeline/e4.png";
import e2 from "../src/asset/timeline/e2.png"
import e3 from "../src/asset/timeline/e3.png"
import e1 from "../src/asset/timeline/e1.png"
import e6 from "../src/asset/timeline/e6.png"
import e5 from "../src/asset/timeline/e5.png"


const imageCards = [
  {
    img: e1,
    alt: "Voice of Indian Spices",
    title: "Voice of Indian Spices",
    desc: "Represented our traditional Indian spices, masalas, and their role.",
    number: "",
    position: "top",
    size: { w: "w-64 md:w-70", h: "h-56 md:h-74" },
  },
  {
    img: e2,
    alt: "Assured Lab Testing",
    title: "Assured Lab Testing",
    desc: "Advanced lab facilities offering safe, pure and natural products.",
    number: "",
    position: "right",
    size: { w: "w-38 md:w-48", h: "h-48 md:h-64" },
  },
  {
    img: e3,
    alt: "Hands behind the Success",
    title: "Hands behind the Success",
    desc: "Source of strength behind every innovation",
    number: "",
    position: "left",
    size: { w: "w-60 md:w-68", h: "h-40 md:h-48" },
  },
  {
    img: e4,
    alt: "Authentic Golden Spices",
    title: "Authentic Golden Spices",
    desc: "Brings natural spices and masala  with pure colour & rich aroma",
    number: "",
    position: "bottom",
    size: { w: "w-52 md:w-56", h: "h-52 md:h-56" },
  },
  {
    img: e5,
    alt: "Leader With Strong Values",
    title: "Leader With Strong Values",
    desc: "A leader who encouraged progress with tradition, trust and excellence.",
    number: "",
    position: "top-left",
    size: { w: "w-60 md:w-74", h: "h-56 md:h-64" },
  },
  {
    img: e6,
    alt: "A legacy of trusted quality",
    title: "A legacy of trusted quality",
    desc: "Decades of unwavering dedication and promised taste.",
    number: "",
    position: "top-right",
    size: { w: "w-60 md:w-74", h: "h-66 md:h-72" },
  },
];

const initialPositions = {
  top: { x: -200, y: -400, rotate: -45 },
  right: { x: 400, y: -50, rotate: 45 },
  left: { x: -400, y: 100, rotate: -45 },
  bottom: { x: 300, y: 300, rotate: 45 },
  "top-left": { x: -500, y: -250, rotate: 45 },
  "top-right": { x: 500, y: -250, rotate: -45 },
};

export default function MagazineLayout() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  return (
    <div
      ref={ref}
      className="relative flex justify-center items-center h-[600px] bg-white px-4 mt-40 overflow-visible"
    >
      <div className="relative w-[620px] h-[620px] mx-auto -mr-50 -ml-10">
        {imageCards.map((card) => {
          const baseImg =
            `absolute overflow-hidden border-6 border-white bg-white flex items-center justify-center ` +
            `${card.size.w} ${card.size.h}`;

          const baseText =
            "absolute flex flex-col justify-center w-48 md:w-56 text-sm text-gray-800 z-10";

          let imgClasses = "";
          let textClasses = "";

          if (card.position === "top") {
            imgClasses = `${baseImg} left-1/3 -top-20 transform -translate-x-1/2 -rotate-0`;
            textClasses = `${baseText} -left-13 -top-14 transform -translate-x-1/2 text-right rotate-[0deg]`;
          } else if (card.position === "right") {
            imgClasses = `${baseImg} -right-10 top-50 z-10 transform -translate-y-1/2 rotate-0`;
            textClasses = `${baseText} -right-67 top-73 transform -translate-y-1/2 text-left rotate-[0deg]`;
          } else if (card.position === "left") {
            imgClasses = `${baseImg} left-0 top-1/2 z-10 transform -translate-y-1/2 -rotate-0`;
            textClasses = `${baseText} -left-57 top-90 transform -translate-y-1/2 text-right rotate-[0deg]`;
          } else if (card.position === "bottom") {
            imgClasses = `${baseImg} left-90 bottom-63 transform -translate-x-1/2 rotate-0`;
            textClasses = `${baseText} -right-21 bottom-45 transform -translate-x-1/2 text-left rotate-[0deg]`;
          } else if (card.position === "top-left") {
            imgClasses = `${baseImg} -left-20 top-3 transform -translate-x-1/2 rotate-0`;
            textClasses = `${baseText} -left-86 top-40 transform -translate-x-1/2 text-left rotate-[0deg]`;
          } else if (card.position === "top-right") {
            imgClasses = `${baseImg} -right-42 bottom-118 transform -translate-x-1/2 rotate-[0deg]`;
            textClasses = `${baseText} -right-90 -top-8 transform -translate-x-1/2 text-left rotate-[0deg]`;
          }

          const x = useTransform(scrollYProgress, [0, 1], [
            initialPositions[card.position].x,
            0,
          ]);
          const y = useTransform(scrollYProgress, [0, 1], [
            initialPositions[card.position].y,
            0,
          ]);
          const rotate = useTransform(scrollYProgress, [0, 1], [
            initialPositions[card.position].rotate,
            0,
          ]);
          const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [
            0,
            0.8,
            1,
          ]);

          return (
            <React.Fragment key={card.title}>
              <motion.div
                className={imgClasses}
                style={{
                  x,
                  y,
                  rotate,
                  opacity,
                  willChange: "transform, opacity",
                }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className={textClasses}
                style={{
                  x,
                  y,
                  rotate,
                  opacity,
                  willChange: "transform, opacity",
                }}
              >
                <h3 className="text-orange-700 font-bold uppercase mb-1 tracking-wide">
                  {card.title}
                </h3>
                <div className="border-1 border-red-600 mx-auto w-full"></div>
                <p>{card.desc}</p>
                <p className="mt-1 font-bold text-base">{card.number}</p>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
