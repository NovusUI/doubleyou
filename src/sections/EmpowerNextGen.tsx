import Yellowlabel from "../components/yellowlabel";
import { useTilt } from "../hooks/usetilt"; // adjust path as needed
import {motion} from "framer-motion"


const impactHighlights = [
    {
      title: "20,000+ Learners",
      description: "engaged through our in-person and digital programs",
    },
    {
      title: "Partnerships",
      description:
        "with prestigious institutions like Covenant University, American University of Nigeria, and MTN Nigeria",
    },
    {
      title: "National Tournaments",
      description: "and youth competitions held across multiple states",
    },
 
  ];
  
  const EmpowerNextGen = () => {
    
    return (
      <section id="next-gen" className="bg-[#F0F8F6] py-20 px-6 min-h-full flex justify-center items-center">
        <div className="max-w-5xl mx-auto">
          <Yellowlabel text="our impact"/>
          <motion.h2 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
            Empowering The Next Generation<br />Of Leaders
          </motion.h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {impactHighlights.map((item, index) => {

              const [tiltRef, tiltStyle] = useTilt();
              return <div
                key={index}
                ref={tiltRef}
                style={{
                  ...tiltStyle,
                  willChange: "transform"
                }}
                className="bg-[#F1F6FF] p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-2 mb-3">
                  <div className="text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
  })}
          </div>
        </div>
      </section>
    );
  };
  
  export default EmpowerNextGen;
  