"use client"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import t1 from "../src/asset/timeline/t1.png"
import t2 from "../src/asset/timeline/t2.jpg"
import t3 from "../src/asset/timeline/t3.jpg"
import t4 from "../src/asset/timeline/t4.jpg"
import t5 from "../src/asset/timeline/t5.jpg"
import t6 from "../src/asset/timeline/t6.png"
import t7 from "../src/asset/timeline/t7.JPG"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TimelineSection() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const arrowRef = useRef(null)
  const [timelineStarted, setTimelineStarted] = useState(false)

  const timelineEvents = [
    {
      date: "1995",
      title: "FHumble Beginning",
      description:
        "Established by Mr. A.D. Padmasingh Isaac, Aachi began its journey to redefine authentic food experiences through spices.",
      image: t1,
    },
    {
      date: "2001",
      title: "Product Expansion",
      description:
        "Expanded product range with blended masalas, catering to evolving culinary needs while maintaining purity and quality.",
      image: t2,
    },
    {
      date: "2006",
      title: "Regional Growth",
      description:
        "Grew distribution beyond Tamil Nadu, building a strong regional presence across Southern India.",
      image: t3,
    },
    {
      date: "2011",
      title: " Diversified Portfolio",
      description:
        " Entered new FMCG categories, diversifying into ready-to-cook and convenience products for modern households.",
      image: t4,
    },
    {
      date: "2016",
      title: "Global Reach",
      description:
        " Strengthened export channels, reaching global markets with consistent quality and authentic flavor.",
      image: t5,
    },
    {
      date: "2021",
      title: "Tech Advancement",
      description:
        "Adopted state-of-the-art manufacturing and packaging technologies to meet international food safety standards.",
      image: t6,
    },
    {
      date: "2025",
      title: "Global Legacy",
      description:
        "Aachi Group today is a trusted global brand, delivering tradition with innovation across food, education, and lifestyle ventures.",
      image: t7,
    },
  ]

  useEffect(() => {
    if (!timelineStarted) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = Math.min(Math.max(self.progress * 1.1, 0), 1)

          if (lineRef.current) {
            lineRef.current.style.transform = `scaleY(${progress})`
          }
          if (arrowRef.current) {
            const timelineContainer = sectionRef.current?.querySelector(".timeline-container")
            const timelineHeight = timelineContainer?.clientHeight || 0
            const arrowPosition = progress * (timelineHeight - 60) + 30
            arrowRef.current.style.setProperty("--arrowY", `${arrowPosition}px`)
            arrowRef.current.style.transform = `translateX(-50%) translateY(${arrowPosition}px)`
            arrowRef.current.style.opacity = progress > 0.02 ? "1" : "0"
          }

          timelineEvents.forEach((_, index) => {
            const cardElement = document.querySelector(`.timeline-item-${index}`)
            if (cardElement) {
              const cardThreshold = index / (timelineEvents.length - 1)
              if (progress >= cardThreshold) {
                gsap.to(cardElement, {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "power3.out",
                })
              } else {
                gsap.set(cardElement, {
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                  y: 30,
                })
              }
            }
          })
        },
      })

      timelineEvents.forEach((_, index) => {
        gsap.set(`.timeline-item-${index}`, {
          opacity: 0,
          x: index % 2 === 0 ? -60 : 60,
          y: 30,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [timelineStarted])

  const handleStartTimeline = () => {
    setTimelineStarted(true)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-background via-muted/5 to-background overflow-hidden"
    >
      {/* Floating gradient blobs for depth */}
      <div className="absolute top-40 left-20 w-56 h-56 bg-red-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="border-2 border-muted mb-4 border-red-600"></div>
          <h2 className="text-4xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to industry leadership—discover the milestones that shaped our legacy.
          </p>
        </motion.div>

        {!timelineStarted && (
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              onClick={handleStartTimeline}
              className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-red-500/20 rounded-full animate-pulse" />
              <svg
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Start Journey
              </div>
            </motion.button>
          </motion.div>
        )}

        {timelineStarted && (
          <div className={`relative timeline-container transition-opacity duration-500 opacity-100`}>
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
              <div
                ref={lineRef}
                className="timeline-line w-full origin-top shadow-lg"
                style={{ height: "100%", transform: "scaleY(0)", minHeight: "100%" }}
              />
            </div>

            {/* Animated arrow */}
            <div
              ref={arrowRef}
              className="arrow-nudge absolute left-1/2 top-0 z-20 opacity-0 transition-opacity duration-200"
              style={{ transform: "translateX(-50%)" }}
            >
              <div className="relative">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-red-500 drop-shadow-lg filter" />
                <div className="absolute top-[-10px] left-1/2 w-1.5 h-6 bg-red-500 -translate-x-1/2 rounded-full shadow-lg" />
                <div className="absolute top-[-10px] left-1/2 w-0.5 h-6 bg-red-300 -translate-x-1/2 rounded-full" />
              </div>
            </div>

            {/* Timeline items with flip card */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item-${index} relative flex items-center min-h-[200px]`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Central marker */}
                  <div className="timeline-marker absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white flex items-center justify-center z-10">
                    <span className="w-3 h-3 bg-red-500 rounded-lg"></span>
                  </div>

                  {/* FLIP CARD: LEFT or RIGHT ONLY */}
                  {index % 2 === 0 ? (
                    // LEFT SIDE (even)
                    <div className="w-1/2 flex justify-end pr-8">
                      <div className="relative w-70 h-70 group cursor-pointer perspective">
                        <div className="tilt-card relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 -ml-10">
                          {/* FRONT: IMAGE */}
                          <div className="absolute backface-hidden w-full h-full shadow-lg rounded-xl overflow-hidden">
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                          </div>
                          {/* BACK: CONTENT */}
                          <div className="absolute backface-hidden w-full h-full bg-white p-6 rounded-xl shadow-lg rotate-y-180 flex flex-col justify-center text-left">
                            <div className="text-sm font-medium text-red-500 mb-2">{event.date}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // RIGHT SIDE (odd)
                    <div className="w-1/2 flex justify-start pl-8 ml-auto">
                      <div className="relative w-70 h-70 group cursor-pointer perspective">
                        <div className="tilt-card relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 -mr-20">
                          {/* FRONT: IMAGE */}
                          <div className="absolute backface-hidden w-full h-full shadow-lg rounded-xl overflow-hidden">
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                          </div>
                          {/* BACK: CONTENT */}
                          <div className="absolute backface-hidden w-full h-full bg-white p-6 rounded-xl shadow-lg rotate-y-180 flex flex-col justify-center text-left">
                            <div className="text-sm font-medium text-red-500 mb-2">{event.date}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Extra CSS Enhancements */}
      <style>{`
        /* Flip card base */
        .perspective { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }

        /* Pulse Glow for timeline dots */
        .timeline-marker::after {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, rgba(239,68,68,0.4), transparent 70%);
          border-radius: 50%;
          animation: pulseGlow 2.5s infinite ease-in-out;
          opacity: 0.7;
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.9; }
        }

        /* Shimmer line animation */
        .timeline-line {
          background: linear-gradient(180deg, #ef4444, #f87171, #ef4444);
          background-size: 100% 300%;
          animation: flowLine 3s linear infinite;
        }
        @keyframes flowLine {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }

        /* Floating background shapes */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 10s ease-in-out infinite; }

        /* Arrow nudge */
        @keyframes arrowNudge {
          0%, 100% { transform: translateX(-50%) translateY(var(--arrowY)); }
          50% { transform: translateX(-40%) translateY(var(--arrowY)); }
        }
        .arrow-nudge { animation: arrowNudge 2s infinite ease-in-out; }
      `}</style>
    </section>
  )
}
