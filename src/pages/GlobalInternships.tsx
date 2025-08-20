import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../sections/NavBar";
import Footer from "../sections/Footer";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const GlobalInternships = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const handleScrollToApply = () => {
    const section = document.getElementById("apply");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;
  const stagger = { show: { transition: { staggerChildren: 0.08 } } } as const;

  // No external script needed; forms are embedded via iframes for reliability

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowStickyCta(!entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = useMemo(() => {
    return ({
      to,
      suffix = "+",
      durationMs = 1500,
    }: {
      to: number;
      suffix?: string;
      durationMs?: number;
    }) => {
      const [value, setValue] = useState(0);
      const ref = useRef<HTMLDivElement | null>(null);
      const [started, setStarted] = useState(false);

      useEffect(() => {
        const io = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        });
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
      }, []);

      useEffect(() => {
        if (!started) return;
        const start = performance.now();
        const animate = (ts: number) => {
          const progress = Math.min((ts - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.floor(eased * to));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }, [started, durationMs, to]);

      return (
        <div ref={ref} className="text-3xl font-bold text-green-700">
          {value.toLocaleString()} {suffix}
        </div>
      );
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Doubleyou Global Internships – Students & Organizations"
        description="Find and host meaningful internships across borders. Students get matched to opportunities; organizations access vetted talent via Doubleyou."
        url="/global-internships"
        image="/hero.png"
        keywords={[
          "Doubleyou Global Internships",
          "Student internships",
          "Organizations",
          "Talent",
          "Placements",
        ]}
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="gi-hero"
          className="relative min-h-[75vh] flex items-center bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }}
          aria-label="Doubleyou Global Internships hero section"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#062d22]/85 via-[#043a76]/55 to-black/40" />
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="max-w-3xl text-white"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur"
              >
                🌍 Doubleyou Global Internships
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Your Journey to the World Starts Here!
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-4 text-white/90 max-w-2xl"
              >
                We connect students and organizations to make internships
                exciting, meaningful, and life-changing.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex items-center gap-3 flex-wrap"
              >
                <button
                  type="button"
                  onClick={handleScrollToApply}
                  className="px-6 py-3 rounded-lg bg-[#0B9F6E] text-white font-medium hover:bg-[#09895f] focus:outline-none focus:ring-2 focus:ring-white/80 shadow-lg shadow-emerald-900/20"
                  aria-label="I am a student. Start your journey."
                >
                  🎓 I’m a Student
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("apply-org");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 rounded-lg border border-white/80 text-white font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/80"
                  aria-label="Organizations apply"
                >
                  🏢 I’m an Organization
                </button>
              </motion.div>
            </motion.div>
          </div>
          <svg
            className="absolute bottom-0 left-0 right-0 w-full"
            height="80"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="white"
              d="M0,64 C240,32 480,0 720,0 C960,0 1200,32 1440,64 L1440,80 L0,80 Z"
            />
          </svg>
        </section>

        {/* Who We Are */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          id="who-we-are"
          className="px-4 py-16 max-w-5xl mx-auto"
          aria-label="Who we are"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-700">
            Doubleyou Global Internships is a community that opens doors.
            Whether you’re a student looking for your first big opportunity or
            an organization searching for fresh talent — we’re here to make it
            happen.
          </p>
        </motion.section>

        {/* How It Works */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-4 py-16 bg-gradient-to-b from-white to-gray-50"
          aria-label="How it works"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
              How It Works
            </h2>

            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              {/* Students Lane */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 grid place-items-center">
                    🎓
                  </div>
                  <h3 className="text-xl font-semibold">For Students</h3>
                </div>
                <ol className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center text-xs">
                      1
                    </span>
                    <p className="text-gray-700">
                      Sign up and tell us your skills, goals, and availability.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center text-xs">
                      2
                    </span>
                    <p className="text-gray-700">
                      Get matched with opportunities that fit you best.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center text-xs">
                      3
                    </span>
                    <p className="text-gray-700">
                      Interview, intern remotely or onsite, and shine.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center text-xs">
                      4
                    </span>
                    <p className="text-gray-700">
                      Earn references and certification on completion.
                    </p>
                  </li>
                </ol>
                <div className="mt-6">
                  <button
                    onClick={handleScrollToApply}
                    className="px-5 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Start as a Student
                  </button>
                </div>
              </motion.div>

              {/* Organizations Lane */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 grid place-items-center">
                    🏢
                  </div>
                  <h3 className="text-xl font-semibold">For Organizations</h3>
                </div>
                <ol className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-800 grid place-items-center text-xs">
                      1
                    </span>
                    <p className="text-gray-700">
                      Submit your needs and ideal candidate profile.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-800 grid place-items-center text-xs">
                      2
                    </span>
                    <p className="text-gray-700">
                      We shortlist vetted students with the right skills and
                      fit.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-800 grid place-items-center text-xs">
                      3
                    </span>
                    <p className="text-gray-700">
                      Interview, select, and onboard quickly with our support.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-800 grid place-items-center text-xs">
                      4
                    </span>
                    <p className="text-gray-700">
                      Drive impact; share outcomes and feedback.
                    </p>
                  </li>
                </ol>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      const el = document.getElementById("apply-org");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-5 py-2 rounded-md border border-blue-300 text-blue-700 hover:bg-blue-50"
                  >
                    Start as an Organization
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-4 py-16"
          aria-label="Why choose us"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
              Why Choose Us?
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white ring-1 ring-gray-100 shadow-sm"
              >
                <AnimatedCounter to={10000} />
                <div className="text-gray-700 mt-1">
                  Students in our network
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white ring-1 ring-gray-100 shadow-sm"
              >
                <AnimatedCounter to={50} />
                <div className="text-gray-700 mt-1">Organization partners</div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white ring-1 ring-gray-100 shadow-sm"
              >
                <div className="text-3xl font-bold text-green-700">
                  SDG Aligned
                </div>
                <div className="text-gray-700 mt-1">
                  Skills, Jobs & Innovation
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-4 py-16 bg-gray-50"
          aria-label="Testimonials"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.figure
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100 text-left"
            >
              <blockquote className="text-gray-800">
                “I never imagined I’d get an internship abroad. Doubleyou made
                it easy!”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                — Aisha, Student
              </figcaption>
            </motion.figure>
            <motion.figure
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100 text-left"
            >
              <blockquote className="text-gray-800">
                “We met amazing young talents who boosted our projects.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                — Tech Company, Ghana
              </figcaption>
            </motion.figure>
            <motion.figure
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-gray-100 text-left"
            >
              <blockquote className="text-gray-800">
                “This partnership helped us place hundreds of graduates into
                real jobs.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                — Ministry of Youth
              </figcaption>
            </motion.figure>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-4 py-16 text-center"
          aria-label="Call to action"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Let’s build futures together!
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={handleScrollToApply}
              className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              aria-label="Students start your journey"
            >
              Students: Start Your Journey
            </button>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-500 cursor-not-allowed"
              aria-label="Companies find great talent disabled"
            >
              Companies: Find Great Talent
            </button>
            <a
              href="#who-we-are"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("who-we-are");
                if (!el) return;
                el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-lg border border-green-600 text-green-700 hover:bg-green-50"
              aria-label="Governments partner for impact"
              tabIndex={0}
            >
              Governments: Partner for Impact
            </a>
          </div>
        </motion.section>

        {/* Embedded Typeform */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          id="apply"
          className="px-4 py-16 bg-gray-50"
          aria-label="Application form"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
              Students: Start Your Journey
            </h2>
            <p className="text-center text-gray-700 mt-2">
              Fill the form below to join the Doubleyou Global Internships
              program.
            </p>
            <div className="mt-8 rounded-xl overflow-hidden ring-1 ring-gray-200 bg-white p-2">
              <iframe
                title="Doubleyou Students"
                src="https://form.typeform.com/to/PvHzVl9G"
                className="w-full h-[720px]"
                style={{ border: 0 }}
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>
            <p className="text-xs text-center text-gray-500 mt-4">
              Powered by Typeform —{" "}
              <a
                className="underline"
                href="https://form.typeform.com/to/PvHzVl9G"
                target="_blank"
                rel="noreferrer"
              >
                open in a new tab
              </a>
            </p>
          </div>
        </motion.section>

        {/* Organizations Typeform */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          id="apply-org"
          className="px-4 py-16 bg-white"
          aria-label="Organizations form"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
              Organizations: Start Here
            </h2>
            <p className="text-center text-gray-700 mt-2">
              Share your needs — roles, skills, and timelines — and we’ll match
              you with vetted students.
            </p>
            <div className="mt-8 rounded-xl overflow-hidden ring-1 ring-gray-200 bg-white p-2">
              <iframe
                title="Doubleyou Organizations"
                src="https://form.typeform.com/to/PvHzVl9G"
                className="w-full h-[720px]"
                style={{ border: 0 }}
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>
            <p className="text-xs text-center text-gray-500 mt-4">
              Powered by Typeform —{" "}
              <a
                className="underline"
                href="https://form.typeform.com/to/PvHzVl9G"
                target="_blank"
                rel="noreferrer"
              >
                open in a new tab
              </a>
            </p>
          </div>
        </motion.section>

        {showStickyCta && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-3 rounded-full bg-white/90 backdrop-blur px-4 py-2 shadow-lg ring-1 ring-gray-200">
              <button
                type="button"
                onClick={handleScrollToApply}
                className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                aria-label="Open student application form"
              >
                🎓 Students
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("apply-org");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 rounded-full border border-blue-300 text-blue-700 text-sm font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Open organizations form"
              >
                🏢 Organizations
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GlobalInternships;
