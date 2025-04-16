import { motion } from "framer-motion";
import Yellowlabel from "../components/yellowlabel";

const FellowshipProgram = () => {
  return (
    <section id="fellowship" className="py-16 px-6 bg-white min-h-full flex justify-center items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 
            bg-gradient-to-r from-[#2C6B2F] via-[#0047FF] to-[#F7C928] 
            bg-clip-text text-transparent animate-pulseGradient"
          >
            Fellowship Program
          </h2>
          <Yellowlabel text="coming soon"/>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Build. Learn. Lead.
          </h3>
          <p className="text-gray-700 mb-4">
            Our 6-month fellowship program offers university students and young professionals hands-on experiences in edtech. Fellows work on real-world projects—ranging from app development and storytelling to gamification and project management.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
            Universities Can Apply
          </h4>
          <p className="text-gray-700 mb-6">
            We encourage universities to apply and nominate students to participate in this impactful program. Fellows work in teams to tackle real-world challenges in the education technology sector.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Fellowship Tracks
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Technology Development</li>
            <li>Educational Content & Curriculum Design</li>
            <li>Gamification & Creative Design</li>
            <li>Project Management & Growth</li>
          </ul>
        </div>

        {/* Image with hover tilt */}
        <motion.div
          whileInView={{ rotateX: 5, rotateY: -10, scale: 1.2 }}
          whileHover={{ rotateX: -5, rotateY: 10, scale: 1.3}}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="flex justify-center perspective-1000"
        >
          <img
            src="/Picture.jpg"
            alt="Fellowship illustration"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FellowshipProgram;
