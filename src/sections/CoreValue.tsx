import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Godliness",
    description:
      "We conduct all our activities with moral integrity, compassion, and a deep respect for humanity, rooted in godly values.",
    color: "#0E1B2E",
    borderColor: "#93C5FD",
    bgColor: "#EEF2F8",
  },
  {
    title: "Leadership",
    description:
      "We lead with vision, inspire initiative, and cultivate innovation across our team and the communities we serve.",
    color: "#16A34A",
    borderColor: "#86EFAC",
    bgColor: "#F0FDF4",
  },
  {
    title: "Integrity",
    description:
      "We uphold honesty, transparency, and trust as the foundation of every relationship and decision we make.",
    color: "#0E1B2E",
    borderColor: "#93C5FD",
    bgColor: "#EEF2F8",
  },
  {
    title: "Diligence",
    description:
      "We approach every task with dedication, excellence, and a relentless commitment to quality and detail.",
    color: "#D97706",
    borderColor: "#FCD34D",
    bgColor: "#FFFBEB",
  },
  {
    title: "Excellence",
    description:
      "We continuously innovate and refine our offerings to exceed expectations and set new standards in education.",
    color: "#DC2626",
    borderColor: "#FECACA",
    bgColor: "#FEF2F2",
  },
  {
    title: "Service",
    description:
      "We exist to bridge opportunity gaps and serve society by expanding inclusive access to education and empowerment.",
    color: "#0E1B2E",
    borderColor: "#86EFAC",
    bgColor: "#F0FDF4",
  },
];

const CoreValues = () => {
  return (
    <section
      id="core-value"
      className="py-24 px-6 bg-[#FAFAF8]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="tag-chip">Core Values</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#0E1B2E] mb-4"
          >
            What We Stand For
          </motion.h2>
        </div>

        {/* Scroll hint for mobile */}
        <div className="text-center mb-4 md:hidden animate-pulse text-xs text-gray-400 tracking-widest uppercase">
          ← Swipe to explore →
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-5 min-w-max px-2 py-2 md:grid md:grid-cols-3 md:min-w-0 md:space-x-0 md:gap-5">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="w-[260px] md:w-auto p-7 rounded-2xl border shadow-sm hover:shadow-md flex-shrink-0 md:flex-shrink transition-all bg-white"
                style={{ borderColor: value.borderColor }}
              >
                {/* Accent dot */}
                <div
                  className="w-8 h-8 rounded-full mb-4 flex items-center justify-center"
                  style={{ backgroundColor: value.bgColor }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: value.color }}
                  />
                </div>
                <h3
                  className="text-lg font-black mb-2"
                  style={{ color: value.color }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
