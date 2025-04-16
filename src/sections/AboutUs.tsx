import { motion } from "framer-motion";
import controllerImage from '../assets/controller.svg';
import Yellowlabel from '../components/yellowlabel';

function AboutUs() {
  return (
    <section className="min-h-screen snap-start flex items-center bg-white px-5 py-20 md:p-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE ANIMATION */}
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <img src={controllerImage} alt="Game Controller" className="w-full max-w-sm mx-auto" />
        </motion.div>

        {/* TEXT CONTENT ANIMATION */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >

            <Yellowlabel text='about us' />


          <motion.h2
            className="text-4xl font-bold text-gray-900"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            className="text-gray-600"
         
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          
          >
            DOUBLEYOU GROUP is a mission-driven edtech company that advances access to quality education across Africa and the global south...
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              hidden: { opacity: 0, },
              visible: { opacity: 1, },
            }}

            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <motion.h3
                className="text-lg font-semibold text-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                HOW WE GOT HERE
              </motion.h3>
              <motion.p
                className="text-gray-600"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Founded in 2019, we are dedicated to creating interactive, engaging, and identity-affirming learning experiences...
              </motion.p>
            </div>
            <div>
              <motion.h3
                className="text-lg font-semibold text-gray-800"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                OUR WHY
              </motion.h3>
              <motion.p
                className="text-gray-600"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}

                transition={{ duration: 0.4, delay: 0.1 }}
              >
                We believe in the power of seeing oneself in what is learned—and in rewarding that connection...
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
