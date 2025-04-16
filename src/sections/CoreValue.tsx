import Yellowlabel from "../components/yellowlabel";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Godliness",
    description:
      "We conduct all our activities with moral integrity, compassion, and a deep respect for humanity, rooted in godly values.",
    borderColor: "border-blue-400",
    bgColor: "bg-[#f1f6fd]/70", // Keep original tone with transparency
  },
  {
    title: "Leadership",
    description:
      "We lead with vision, inspire initiative, and cultivate innovation across our team and the communities we serve.",
    borderColor: "border-green-400",
    bgColor: "bg-[#edfdf4]/70",
  },
  {
    title: "Integrity",
    description:
      "We uphold honesty, transparency, and trust as the foundation of every relationship and decision we make.",
    borderColor: "border-blue-400",
    bgColor: "bg-[#f1f6fd]/70", // Keep original tone with transparency
  },
  {
    title: "Dilligence",
    description:
      "We approach every task with dedication, excellence, and a relentless commitment to quality and detail.",
    borderColor: "border-green-400",
    bgColor: "bg-[#edfdf4]/70",
  },
  {
    title: "Excellence",
    description:
      "We continuously innovate and refine our offerings to exceed expectations and set new standards in education and employment.",
    borderColor: "border-blue-400",
    bgColor: "bg-[#f1f6fd]/70", // Keep original tone with transparency
  },
  {
    title: "Service",
    description:
      "We exist to bridge opportunity gaps and serve society by expanding inclusive access to education and empowerment.",
    borderColor: "border-green-400",
    bgColor: "bg-[#edfdf4]/70",
  },
  // Add more as needed...
];

const CoreValues = () => {
  return (
    <section
    id="core-value"
      className="py-40 md:px-20 relative bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/Background1.png')",
      }}
    >
      <div className="text-center mb-6">
        <Yellowlabel text="core value" />
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900 mt-2">
          Our Core Values
        </motion.h2>
      </div>

      {/* 👇 Scroll Hint for Mobile */}
      <div className="text-center mb-4 md:hidden animate-pulse text-sm text-gray-500">
        ← Swipe to explore →
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 min-w-max px-5 md:px-10">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className={`w-[250px] md:w-[300px] max-w-md p-6 rounded-2xl border ${value.borderColor} ${value.bgColor} shadow-md flex-shrink-0 backdrop-blur-md transition`}
            >
              <h3 className="text-lg font-bold mb-2 text-[#0E2A46]">
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
