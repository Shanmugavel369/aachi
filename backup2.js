  const [hasSettled, setHasSettled] = useState(false);

  // Mouse position normalized inside hero section [0,1]
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width;
    const y = (e.clientY - bounds.top) / bounds.height;
    setMouse({ x, y });
  };


  useEffect(() => {
    const timer = setTimeout(() => setHasSettled(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const finalPositions = [
    { top: "-2rem", left: "40%", x: "-100%" },
    { top: "14rem", left: "25%", x: "-50%" },
    { top: "14rem", left: "47%", x: "0%" },
  ];
  

  import AachiLogo from "../assets/Logos/Aachi-logo.png";
import video1 from "../assets/v1.mp4";
import video2 from "../assets/v3.mp4";

const explosionOffsets = [
  { x: 90, y: 90 },
  { x: 90, y: 90 },
  { x: 90, y: 90 },
];


<section
        className="relative min-h-screen flex items-center justify-center px-4 md:px-20 bg-white font-sans"
        onMouseMove={handleMouseMove}
      >
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

          {/* Existing floating cards with parallax */}
          <motion.div
            className="card float absolute top-29 right-10 bg-red-600 rounded-xl px-5 py-3 shadow-lg text-white font-bold z-40 w-[110px] md:w-[160px] fade-left"
            style={{
              translateX: (mouse.x - 0.5) * 35,
              translateY: (mouse.y - 0.5) * 20,
            }}
          >
            <span ref={yearsRef} className="block text-xl">
              0
            </span>
            <span className="text-xs opacity-80 font-normal">Years of Excellence</span>
          </motion.div>

          <motion.div
            className="card float absolute top-28 right-100 bg-[#ffbe25] rounded-xl px-5 py-3 shadow-lg text-white font-bold z-40 w-[110px] md:w-[160px] fade-left"
            style={{
              translateX: (mouse.x - 0.5) * 40,
              translateY: (mouse.y - 0.5) * 25,
            }}
          >
            <span ref={clientsRef} className="block text-xl">
              0
            </span>
            <span className="text-xs opacity-80 font-normal">Happy Clients</span>
          </motion.div>

          <motion.div
            className="card float absolute bottom-20 right-0 bg-[#ffbe25] rounded-xl px-5 py-3 shadow-lg text-black font-bold z-40 w-[110px] md:w-[160px] fade-left"
            style={{
              translateX: (mouse.x - 0.5) * 30,
              translateY: (mouse.y - 0.5) * 15,
            }}
          >
            <span ref={futureRef} className="block text-xl">
              0
            </span>
            <span className="text-xs opacity-80 font-normal">Leading the future</span>
          </motion.div>

          <motion.div
            className="card float absolute bottom-8 left-2 bg-[#ffbe25] rounded-xl px-5 py-3 shadow-lg text-black font-bold z-40 w-[110px] md:w-[160px]"
            style={{
              translateX: (mouse.x - 0.5) * 25,
              translateY: (mouse.y - 0.5) * 10,
            }}
          >
            <span ref={loremRef} className="block text-xl">
              0
            </span>
            <span className="text-xs opacity-80 font-normal">Lorem ipsum dolor</span>
          </motion.div>

          {/* New labels with parallax */}
          <motion.div
            className="card float absolute -top-28 left-10 bg-red-600 rounded-xl px-5 py-3 shadow-lg text-white font-bold z-40 w-[140px] md:w-[180px]"
            style={{
              translateX: (mouse.x - 0.5) * 50,
              translateY: (mouse.y - 0.5) * 30,
            }}
          >
            <span ref={label1Ref} className="block text-xl">
              New Label 1
            </span>
            <span className="text-xs opacity-80 font-normal">Interactive Parallax</span>
          </motion.div>

          <motion.div
            className="card float absolute bottom-44 right-0 bg-red-600 rounded-xl px-5 py-3 shadow-lg text-white font-bold z-40 w-[100px] md:w-[140px]"
            style={{
              translateX: (mouse.x - 0.5) * 45,
              translateY: (mouse.y - 0.5) * 20,
            }}
          >
            <span ref={label2Ref} className="block text-xl">
              New Label 2
            </span>
            <span className="text-xs opacity-80 font-normal"> Movement</span>
          </motion.div>

          {/* Hero Videos with parallax mouse movement */}
          {[{ src: video, index: 0 }, { src: video1, index: 1 }, { src: video2, index: 2 }].map(
            ({ src, index }) => {
              const videoSizes = [
                { width: "480px", height: "260px" },
                { width: "300px", height: "160px" },
                { width: "320px", height: "180px" },
              ];
              const size = videoSizes[index];

              const translateX = (mouse.x - 1) * (20 + index * 30);
              const translateY = (mouse.y - 1) * (12 + index * 24);

              return (
                <motion.div
                  key={index}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    translateX,
                    translateY,
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
                      borderRadius: "0.5rem",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      zIndex: 10,
                    }}
                  />
                </motion.div>
              );
            }
          )}

          {/* Additional Decorative Shapes at different positions */}
          <div className="absolute -top-20 left-1/4 w-14 h-14 bg-red-600 rounded-full opacity-70 animate-pulse z-20" />
          {/* <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-yellow-400 rounded-lg rotate-12 z-15" /> */}
          <div className="absolute top-1/4 right-1/5 w-8 h-8 bg-yellow-500 rounded-full opacity-60 animate-bounce z-10" />
          {/* <div className="absolute bottom-40 left-1/5 w-6 h-6 bg-red-400 rounded-full opacity-80 z-10" /> */}
          {/* <div className="absolute top-10 right-1/6 w-12 h-12 bg-red-400 rounded-lg opacity-60 z-15" /> */}

          {/* Existing decorative shapes left unchanged */}
          <div className="absolute top-30 right-1/4 w-12 h-12 bg-[#ffbe25] rotate-45 z-20 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-12 right-1/4 w-6 h-6 bg-[#ffd6d6] rounded-full z-10 animate-pulse" />
          <div className="absolute top-2 w-8 h-8 bg-[#ffe396] rounded-full z-10 animate-bounce" />
          <div className="absolute bottom-40 right-2 w-10 h-10 bg-red-100 rounded-full z-10" />
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-red-600 rounded-full opacity-70 z-10" />
        </div>
      </section>