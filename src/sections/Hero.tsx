import { AnimatePresence, motion } from "framer-motion";
import Yellowlabel from "../components/yellowlabel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const text = [
  { text1: "Welcome to", text2: "DOUBLEYOU", text3: "Group", gredient: true },
  { text1: "Empowering Lifelong Learning", text2: "Through Games & Stories" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="h-screen snap-start flex flex-col items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover pb-20"
      style={{ backgroundImage: `url('/Background.png')` }}
    >
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Yellowlabel text="welcome to doubleyou" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            key={activeIndex}
            exit={{ opacity: 0, y: -20 }}
          >
            {text[activeIndex].text1} <br />{" "}
            <span
              className={`${
                text[activeIndex].gredient
                  ? "bg-gradient-to-r bg-clip-text text-transparent from-[#2C6B2F] via-[#0047FF] to-[#F7C928] "
                  : ""
              }`}
            >
              {text[activeIndex].text2}
            </span>{" "}
            {text[activeIndex].text3}
          </motion.h1>
        </AnimatePresence>
        {/* <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Empowering Lifelong Learning <br /> Through Games & Stories
        </motion.h1> */}

        <motion.p
          className="text-gray-600 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          we are shaping the future of education—one learner, one story, one
          streak at a time.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection("core-solutions")}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            Explore Our Platforms
          </motion.button>
          <motion.button
            onClick={() => navigate("/global-internships")}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition"
          >
            Join Our Global Internship
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
