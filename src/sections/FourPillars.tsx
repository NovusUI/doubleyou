import { motion } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    number: "01",
    title: "Education",
    description:
      "Making quality learning accessible and rewarding for every African — through gamification, storytelling, and digital platforms that meet learners where they are.",
    color: "#16A34A",
    bgColor: "#F0FDF4",
    borderColor: "#86EFAC",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    number: "02",
    title: "Innovation",
    description:
      "Scaling bold ideas through structured systems—supporting founders, researchers, and changemakers with tools, mentorship, and collaborative infrastructure.",
    color: "#D97706",
    bgColor: "#FFFBEB",
    borderColor: "#FCD34D",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    number: "03",
    title: "Human Capital Development",
    description:
      "Equipping individuals with the skills, confidence, and opportunities they need to grow—through fellowships, internships, and tailored capacity-building programs.",
    color: "#0E1B2E",
    bgColor: "#EEF2F8",
    borderColor: "#93C5FD",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: "04",
    title: "Community Impact",
    description:
      "Driving societal change by embedding ourselves in communities—partnering with schools, civic organizations, and governments to create lasting, measurable impact.",
    color: "#DC2626",
    bgColor: "#FEF2F2",
    borderColor: "#FCA5A5",
  },
];

const FourPillars = () => {
  return (
    <section id="four-pillars" className="bg-[#F4F4F1] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="tag-chip">Our Focus</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#0E1B2E] mb-4"
          >
            The Four Pillars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Everything we build, every program we run, every partnership we form
            — rooted in four strategic areas of focus.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-3xl p-8 border shadow-sm hover:shadow-md transition-all overflow-hidden"
              style={{ borderColor: pillar.borderColor }}
            >
              {/* Background number watermark */}
              <span
                className="absolute -top-4 -right-2 text-[120px] font-black leading-none opacity-[0.04] select-none pointer-events-none"
                style={{ color: pillar.color }}
              >
                {pillar.number}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: pillar.bgColor, color: pillar.color }}
              >
                {pillar.icon}
              </div>

              {/* Number badge */}
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3 block"
                style={{ color: pillar.color }}
              >
                Pillar {pillar.number}
              </span>

              <h3 className="text-xl font-bold text-[#0E1B2E] mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
