import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence} from "framer-motion";



const partnerships = [
  {
    logo: "/cu-logo.png",
    title: "Covenant University’s CCODEL",
    description:
      "Through our groundbreaking partnership with Covenant University's Elearning platform, CCODEL, we enhance educational accessibility and integrate real-world applications for students.",
  },
  {
    logo: "/mtn-logo.png",
    title: "MTN Nigeria",
    description:
      "Our digital partnership with MTN Nigeria enables us to reach learners in remote areas, providing them with the resources they need to thrive, regardless of location or internet challenges.",
  },
];




const PartnershipsWithImpact = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === partnerships.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? partnerships.length - 1 : prev - 1
    );

  const goNext = () =>
    setActiveIndex((prev) =>
      prev === partnerships.length - 1 ? 0 : prev + 1
    );

  return (
    <section className="py-20 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Partnerships With Impact
        </h2>
        <p className="text-gray-700 text-sm md:text-lg">
          Over time, we have built meaningful partnerships that have played an
          essential role in driving positive change and creating lasting impact
          across the communities we are connected to...
        </p>
      </motion.div>

      <div className="flex items-center justify-center md:gap-6 max-w-4xl mx-auto">
        <button onClick={goPrev} className="text-gray-600 hover:text-black p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <AnimatePresence mode="wait">
        <motion.div
  key={activeIndex}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
 
  className="bg-white rounded-xl border border-gray-200 shadow-md p-6 text-center w-full max-w-md h-[340px] md:h-[300px] cursor-pointer"
>
            <img
              src={partnerships[activeIndex].logo}
              alt={partnerships[activeIndex].title}
              className="w-14 h-14 mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-indigo-900 mb-2">
              {partnerships[activeIndex].title}
            </h3>
            <p className="text-gray-600 text-sm">
              {partnerships[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <button onClick={goNext} className="text-gray-600 hover:text-black p-2">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-40 mb-20 lg:ml-20"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Program & Community Engagement
        </h2>
        <p className="text-gray-700 text-lg md:w-[50%]">
          We empower youth across schools, correctional centers, and informal
          communities through fellowships, boot camps, and leadership tours...
        </p>
      </motion.div>
    </section>
  );
};

export default PartnershipsWithImpact;
