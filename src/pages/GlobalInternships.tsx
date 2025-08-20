import { useEffect } from "react";
import Navbar from "../sections/NavBar";
import Footer from "../sections/Footer";

const GlobalInternships = () => {
  const handleScrollToApply = () => {
    const section = document.getElementById("apply");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="//embed.typeform.com/next/embed.js"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center text-center min-h-[70vh] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/Background2.png')" }}
          aria-label="Doubleyou Global Internships hero section"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
          <div className="relative z-10 px-4 w-full max-w-5xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
              Your Journey to the World Starts Here!
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              We connect students, companies, and governments to make
              internships exciting, meaningful, and life-changing.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={handleScrollToApply}
                className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white/80"
                aria-label="I am a student. Start your journey."
              >
                I’m a Student
              </button>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="px-6 py-3 rounded-lg border border-white/70 text-white/70 font-medium cursor-not-allowed"
                aria-label="I am a company button disabled"
              >
                I’m a Company (coming soon)
              </button>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section
          id="who-we-are"
          className="px-4 py-16 max-w-5xl mx-auto"
          aria-label="Who we are"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-700">
            Doubleyou Global Internships is a community that opens doors.
            Whether you’re a student looking for your first big opportunity, a
            company searching for fresh talent, or a government building the
            future of work — we’re here to make it happen.
          </p>
        </section>

        {/* How It Works */}
        <section className="px-4 py-16 bg-gray-50" aria-label="How it works">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Students</h3>
                <p className="mt-2 text-gray-700">
                  Sign up → Get matched → Land an internship → Shine & get
                  certified!
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Companies</h3>
                <p className="mt-2 text-gray-700">
                  Subscribe → Post roles → Pick top students → Grow with fresh
                  ideas!
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Governments</h3>
                <p className="mt-2 text-gray-700">
                  Partner with us → Fund opportunities → Empower youth →
                  Strengthen the economy!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-4 py-16" aria-label="Why choose us">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
              Why Choose Us?
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="text-3xl font-bold text-green-700">10,000+</div>
                <div className="text-gray-700 mt-1">
                  Students in our network
                </div>
              </div>
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="text-3xl font-bold text-green-700">50+</div>
                <div className="text-gray-700 mt-1">Company partners</div>
              </div>
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="text-3xl font-bold text-green-700">
                  SDG Aligned
                </div>
                <div className="text-gray-700 mt-1">
                  Skills, Jobs & Innovation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-16 bg-gray-50" aria-label="Testimonials">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <figure className="bg-white p-6 rounded-lg shadow-sm">
              <blockquote className="text-gray-800">
                “I never imagined I’d get an internship abroad. Doubleyou made
                it easy!”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                — Aisha, Student
              </figcaption>
            </figure>
            <figure className="bg-white p-6 rounded-lg shadow-sm">
              <blockquote className="text-gray-800">
                “We met amazing young talents who boosted our projects.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                — Tech Company, Ghana
              </figcaption>
            </figure>
            <figure className="bg-white p-6 rounded-lg shadow-sm">
              <blockquote className="text-gray-800">
                “This partnership helped us place hundreds of graduates into
                real jobs.”
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">
                — Ministry of Youth
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 text-center" aria-label="Call to action">
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
        </section>

        {/* Embedded Typeform */}
        <section
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
            <div className="mt-8">
              <div data-tf-live="01K31JXKHJ5M15W27661TDCXTN" />
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalInternships;
