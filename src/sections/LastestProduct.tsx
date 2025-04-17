
import {motion} from "framer-motion"
import { useTilt } from "../hooks/usetilt";


const LatestProduct = () => {
  const [tiltRef, tiltStyle] = useTilt();

  return (
    <section
   
      className="py-12 px-6 h-full bg-fixed bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center text-[#0E2A46]"
      style={{ backgroundImage: "url('/Background2.png')" }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#00BC65] via-[#00B0E0] to-[#001C98] bg-clip-text text-transparent animate-pulseGradient">
  Our Latest Product
</h2>

        {/* Card with Glassmorphism and 3D tilt */}
        <motion.div
          ref={tiltRef}
          style={{
            ...tiltStyle,
            willChange: "transform"
          }}
          className="rounded-2xl border border-white/20 p-8 bg-white/10 backdrop-blur-md shadow-xl text-center"
        >
          <img
            src="/labari.png"
            alt="Doubleyou Logo"
            className="h-10 mx-auto mb-5"
          />
          <p className="font-semibold text-lg mb-4">
            African Stories. Digitally Told.
          </p>
          <p className="text-sm mb-6">
            Labari is the platform dedicated to preserving, celebrating, and
            reimagining African storytelling. It offers a digital space for
            readers, learners, and communities to explore African culture,
            history, and values—bridging tradition with modern technology.
          </p>
          <p className="text-xs  mb-6">
            Supported by: Independent Initiative | Committed to Sustainable
            Development Goals.
          </p>

          {/* Floating Button on Hover */}
          <motion.button
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#00BC65] hover:bg-green-600 text-white font-medium px-6 py-2 rounded-full transition"
            onClick={() => window.open('https://thelabari.co','_blank')}
          >
            Explore Labari
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProduct;
