import { motion } from "framer-motion";

const OurHub = () => {
  return (
    <section id="our-hub" className="bg-[#FAFAF8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <span className="tag-chip">Our Hub</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#0E1B2E] leading-tight mb-6"
            >
              Rooted at{" "}
              <span className="text-[#16A34A]">Covenant University</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed mb-5"
            >
              Our primary base of operations is the{" "}
              <strong className="text-[#0E1B2E]">
                Centre for Research, Innovation and Discovery (CUCRID)
              </strong>{" "}
              at Covenant University — one of Nigeria's leading centers for
              academic research and innovation.
            </motion.p>



            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-[#F4F4F1] rounded-xl px-4 py-3"
            >
              <span className="text-xl">📍</span>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                  Location
                </p>
                <p className="text-sm font-semibold text-[#0E1B2E]">
                  Ota, Ogun State, Nigeria
                </p>
              </div>
            </motion.div>
          </div>

          {/* Logo & visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-full bg-gradient-to-br from-[#0E1B2E] to-[#162438] rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-xl">
              <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
                <img
                  src="/cu-logo.png"
                  alt="Covenant University Logo"
                  className="w-32 h-32 object-contain mx-auto"
                />
              </div>
              <p className="text-[#F7C928] text-sm font-semibold tracking-widest uppercase mb-2">
                CUCRID
              </p>
              <h3 className="text-white font-bold text-xl mb-2 leading-snug">
                Centre for Research, Innovation and Discovery
              </h3>
              <p className="text-white/50 text-sm">
                Covenant University · Ota, Nigeria
              </p>

              <div className="mt-8 pt-8 border-t border-white/10 w-full text-center">
                <div>
                  <p className="text-[#F7C928] text-2xl font-black">Active</p>
                  <p className="text-white/50 text-xs mt-1">Current Status</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurHub;
