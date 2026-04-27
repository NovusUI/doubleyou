import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0E1B2E 0%, #162438 60%, #1a3a2a 100%)" }}
    >
      {/* Subtle textured overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F7C928]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#16A34A]/8 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-[#F7C928]/15 border border-[#F7C928]/30 text-[#F7C928] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F7C928] animate-pulse" />
            Est. 2019 · Advancing Human Potential
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          Advancing{" "}
          <span
            className="block"
            style={{
              background: "linear-gradient(90deg, #F7C928, #16A34A, #F7C928)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "pulseGradient 4s ease-in-out infinite",
            }}
          >
            Human Potential
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white/70 block mt-2">
            Across Africa
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Doubleyou is building systems that expand access to knowledge, empower
          young people, and create pathways to opportunity through education,
          innovation, and community impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("core-solutions")}
            className="px-8 py-4 bg-[#F7C928] text-[#0E1B2E] rounded-full font-bold text-base hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/20"
          >
            Explore Our Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("final-cta")}
            className="px-8 py-4 border border-white/25 text-white rounded-full font-semibold text-base hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Join the Movement
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-float" />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </section>
  );
};

export default Hero;
