import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Yellowlabel from "../components/yellowlabel";
import gamepad from "../assets/Gamepad.svg";
import book from "../assets/Book.svg";

const CoreSolutions = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  // Mid layer: title, label
  const midY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  // Foreground: cards
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
    id="core-solutions"
      ref={ref}
      className="relative py-20 px-6 snap-y snap-mandatory min-h-screen bg-fixed bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/Background1.png')" }}
    >
      {/* Mid-layer motion: Label + Heading */}
      <motion.div style={{ y: midY }} className="text-center mb-12">
     
          <Yellowlabel text="what we do" />
  
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Solutions
        </motion.h2>
      </motion.div>

      {/* Foreground motion: Cards */}
      <motion.div
        style={{ y: cardY }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {/* EduGaming Card */}
        <motion.div
          className="bg-[#EAF6FF] h-[320px] border border-[#1B75E8] rounded-[20px] p-5 sm:p-8 lg:p-12 shadow-sm cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col justify-between h-full text-[#0E2A46]">
            <div className="text-3xl flex items-center space-x-6">
              <motion.span
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <img src={gamepad}></img>
              </motion.span>
              <h3 className="text-lg md:text-xl font-semibold mb-2">EduGaming</h3>
            </div>
            <p className="text-gray-700 mb-3">
              We transform learning into play. Through gamified platforms with quiz tournaments and streak-based reward systems, we make education engaging and boost knowledge retention.
            </p>
            <a href="https://doubleyou-app.vercel.app/" target="_blank" className="font-semibold underline">Explore Doubleyou</a>
          </div>
        </motion.div>

        {/* Labari Card */}
        <motion.div
          className="bg-[#EEFBF5] h-[320px] border border-[#00BC65] rounded-[20px] p-5 sm:p-8 lg:p-12 shadow-sm text-[#0E2A46] cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="text-3xl flex items-center space-x-6">
              <motion.span
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <img src={book}></img>
              </motion.span>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Digital Storytelling with Labari</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Labari is our platform dedicated to preserving and amplifying African narratives. By combining tradition with innovation, we use storytelling to create educational experiences that promote cultural understanding, identity, and healing.
            </p>
            <a href="https://thelabari.co" target="_blank" className="text-green-800 font-semibold underline">Explore Labari</a>
          </div>
        </motion.div>
      </motion.div>

      {/* Fancy Button for The Quest Quiz */}
      <motion.div 
        className="mt-16 flex justify-center w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link 
          to="/quest-quiz" 
          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-gradient-to-r from-[#1B75E8] to-[#00BC65] rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-20"></span>
          <span className="relative flex items-center gap-3 text-lg md:text-xl tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            The Quest Quiz
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default CoreSolutions;
