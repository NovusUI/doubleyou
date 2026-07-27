import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  Globe2,
  GraduationCap,
  Megaphone,
  Medal,
  Network,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import Footer from "../sections/Footer";
import Navbar from "../sections/NavBar";

const APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSexspXmDF1F4tevz4gjRqpaMB-zgbJU-cqYG6qmxqa-KMVeWA/viewform";
const EMBEDDED_FORM_URL = `${APPLICATION_FORM_URL}?embedded=true`;

const tracks = [
  {
    title: "Software Development",
    description:
      "Build and support digital products, automations, and technical systems across the Doubleyou ecosystem.",
    icon: Code2,
  },
  {
    title: "Creative Studio: Animation and Design",
    description:
      "Create visual, motion, and design assets for programs, products, campaigns, and student communities.",
    icon: Palette,
  },
  {
    title: "Community Growth",
    description:
      "Support campus engagement, Africa-wide community building, and impact-driven activations.",
    icon: Network,
  },
  {
    title: "Marketing and Communications",
    description:
      "Tell the Doubleyou story through content, campaigns, partnerships, and clear public communication.",
    icon: Megaphone,
  },
];

const benefits = [
  "CEO of the Month leadership experience",
  "Campus and continental leadership opportunities",
  "African Impact Points rewards",
  "Leadership and professional development",
  "Pan-African collaboration",
  "Mentorship and career pathways",
  "Real project experience",
  "Professional portfolio building",
  "Performance-based certificate",
  "Outstanding participant recognition",
];

const quickFacts = [
  { label: "Mode", value: "Fully remote", icon: Globe2 },
  { label: "Duration", value: "16 weeks", icon: Clock3 },
  { label: "Starts", value: "August 2026", icon: CalendarDays },
  { label: "Deadline", value: "7 August 2026", icon: Sparkles },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const stagger = { show: { transition: { staggerChildren: 0.08 } } } as const;

export default function AfricanStudentImpactProgram() {
  const scrollToForm = () => {
    document.getElementById("asip-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0E1B2E]">
      <SEO
        title="AFRICAN STUDENT IMPACT PROGRAM | Doubleyou"
        description="Apply for the AFRICAN STUDENT IMPACT PROGRAM, a 16-week fully remote student program for undergraduates across Africa."
        url="/african-student-impact-program"
        image="/asip-2026-flyer.jpg"
        keywords={[
          "AFRICAN STUDENT IMPACT PROGRAM",
          "Doubleyou ASIP",
          "African student program",
          "remote student program Africa",
          "student leadership Africa",
          "undergraduate program Africa",
        ]}
      />
      <Navbar />

      <main>
        <section className="relative overflow-hidden pt-28 lg:pt-32">
          <div className="absolute inset-0 bg-[#0E1B2E]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,201,40,0.24),transparent_34%),linear-gradient(135deg,rgba(11,159,110,0.24),transparent_48%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            <div className="grid lg:grid-cols-[1.02fr_0.78fr] gap-10 lg:gap-14 items-center">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="text-white"
              >
                <motion.p
                  variants={fadeInUp}
                  className="text-[#F7C928] text-xs sm:text-sm font-black tracking-[0.22em] uppercase"
                >
                  AFRICAN STUDENT IMPACT PROGRAM
                </motion.p>
                <motion.h1
                  variants={fadeInUp}
                  className="mt-4 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight"
                >
                  Applications are now open
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="mt-6 max-w-2xl text-base sm:text-lg text-white/82 leading-relaxed"
                >
                  A 16-week fully remote student program for undergraduates
                  across Africa to gain real project experience, leadership
                  exposure, mentorship, and career-building pathways.
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <a
                    href={APPLICATION_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F7C928] px-7 py-3.5 text-sm font-black text-[#0E1B2E] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    View embedded form
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur">
                  <img
                    src="/asip-2026-flyer.jpg"
                    alt="AFRICAN STUDENT IMPACT PROGRAM flyer"
                    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <article
                  key={fact.label}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                >
                  <Icon className="h-5 w-5 text-[#0B9F6E]" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-lg font-black text-[#0E1B2E]">
                    {fact.value}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.82fr_1fr] gap-10 items-start">
            <div>
              <p className="text-[#0B9F6E] text-xs font-black tracking-[0.22em] uppercase">
                Built by Doubleyou
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#0E1B2E]">
                A practical student impact program for Africa's next generation
                of builders.
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                Doubleyou builds scalable platforms and opportunities that
                develop human capacity and deliver measurable social impact.
                ASIP turns that mission into a structured student experience:
                real projects, real collaboration, and real leadership practice.
              </p>
            </div>
            <div id="asip-tracks" className="grid sm:grid-cols-2 gap-4">
              {tracks.map((track) => {
                const Icon = track.icon;
                return (
                  <motion.article
                    key={track.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#F7C928]/20 text-[#0B9F6E]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-black text-[#0E1B2E]">
                      {track.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {track.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#F7C928] text-xs font-black tracking-[0.22em] uppercase">
                Who can apply
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                Open to undergraduate students across Africa.
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                This program is for students ready to gain hands-on experience
                beyond the classroom and commit to a remote, project-based
                student program starting in August 2026.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {["No application fee", "Fully remote", "Africa-wide access"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#0E1B2E] px-4 py-2 text-sm font-bold text-white"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Undergraduate status",
                  copy: "Currently studying at a university or tertiary institution in Africa.",
                  icon: GraduationCap,
                },
                {
                  title: "Remote readiness",
                  copy: "Able to participate online, communicate clearly, and meet weekly expectations.",
                  icon: Globe2,
                },
                {
                  title: "Growth mindset",
                  copy: "Ready to learn, collaborate, document work, and contribute to real projects.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-gray-100 bg-[#FAFAF8] p-5"
                  >
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-[#0B9F6E]" />
                    <div>
                      <h3 className="font-black text-[#0E1B2E]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {item.copy}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-[#0B9F6E] text-xs font-black tracking-[0.22em] uppercase">
                What participants gain
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                Leadership, mentorship, rewards, and practical project
                experience.
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#0B9F6E]" />
                  <p className="mt-4 text-sm font-bold leading-relaxed text-[#0E1B2E]">
                    {benefit}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0E1B2E] px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-[#F7C928] text-xs font-black tracking-[0.22em] uppercase">
                Application timeline
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                From application to onboarding.
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-4">
              {[
                ["Now", "Applications open", "Choose your track and complete the Google Form."],
                ["7 August 2026", "Application deadline", "Submit your application by the deadline."],
                ["Early August 2026", "Review and selection", "Shortlisted applicants will be contacted after review."],
                ["August 2026", "Program begins", "Selected participants join onboarding and begin the 16-week program."],
              ].map(([date, title, copy]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-sm font-black text-[#F7C928]">
                    {date}
                  </span>
                  <h3 className="mt-4 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="asip-form" className="bg-white px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.38fr_0.62fr] gap-8 items-start">
            <div>
              <p className="text-[#0B9F6E] text-xs font-black tracking-[0.22em] uppercase">
                Apply before 7 August 2026
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
                Submit your application.
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                Use an email address and WhatsApp number you check regularly.
                If the embedded form does not load, open the official Google
                Form directly.
              </p>
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F7C928] px-6 py-3 text-sm font-black text-[#0E1B2E] transition hover:bg-yellow-300"
              >
                Open Google Form <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <iframe
                title="AFRICAN STUDENT IMPACT PROGRAM application form"
                src={EMBEDDED_FORM_URL}
                className="h-[700px] w-full"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto rounded-[2rem] bg-[#F7C928] p-8 sm:p-10 lg:p-12 text-[#0E1B2E]">
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <Medal className="h-8 w-8" />
                <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                  Ready to join Africa's next generation of student leaders?
                </h2>
                <p className="mt-3 max-w-2xl text-[#0E1B2E]/75">
                  Apply early and use contact details you check regularly.
                </p>
              </div>
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E1B2E] px-7 py-3.5 text-sm font-black text-white transition hover:bg-[#162438]"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
