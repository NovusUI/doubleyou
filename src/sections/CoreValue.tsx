import Yellowlabel from "../components/yellowlabel";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Godliness",
    description:
      "At Doubleyou, we hold godliness as a core value that permeates every aspect of our endeavors. We believe in conducting our business with a strong sense of ethics, moral responsibility, and a commitment to values that transcend thebottomline. In our pursuit of revolutionizing education and employment, we strive to embody principles of fairness, compassion, and empathy. Our dedication to godliness extends beyond business transactions, shaping a corporate culture that values the inherent dignity of every individual and seeks to contribute positively to the communities we serve.",
    borderColor: "border-blue-400",
    bgColor: "bg-[#f1f6fd]/70", // Keep original tone with transparency
  },
  {
    title: "Leadership",
    description:
      "Leadership is a guiding principle at Doubleyou, influencing how we navigate the dynamic landscape of education and employment transformation. We aspire not only to lead in the markets we serve but also to inspire leadership at every level of our organization. Through visionary thinking and a commitment to continuous improvement, we empower our team to take initiative, make informed decisions, and drive positive change. As we connect quiz creators and learners, our leadership ethos extends to fostering a collaborative environment where diverse perspectives are valued, and innovative ideas flourish, propelling both our startup and the communities we engage with forward.",
    borderColor: "border-green-400",
    bgColor: "bg-[#edfdf4]/70",
  },
  {
    title: "Integrity",
    description:
      "integrity is the bedrock of our operations at Doubleyou. We are unwavering in our commitment to honesty, transparency, and ethical conduct in all our interactions. As we revolutionize education and employment, we prioritize trust and accountability, recognizing that they are fundamental to building enduring relationships with quiz creators, learners, and stakeholders. Upholding integrity is not just a moral obligation but a strategic imperative, ensuring that our platform is a reliable and trustworthy space for all users. In an industry that demands credibility, our commitment to integrity distinguishes Doubleyou as a startup that can be relied upon to act with honesty and sincerity.",
    borderColor: "border-blue-400",
    bgColor: "bg-[#f1f6fd]/70", // Keep original tone with transparency
  },
  {
    title: "Dilligence",
    description:
      "Diligence is a cornerstone of our approach at Doubleyou. In our mission to make learning fun, engaging, and rewarding, we recognize the importance of dedication, hard work, and attention to detail. We approach challenges with a determined spirit, constantly striving for excellence in the quality of content, user experience, and technological innovation on our platform. Through diligence, we aim to surpass expectations, ensuring that our users have access to a seamless and enriching educational experience. This commitment to diligence not only sets the standard for our startup but also contributes to the broader goal of transforming education and employment landscapes.",
    borderColor: "border-green-400",
    bgColor: "bg-[#edfdf4]/70",
  },
  {
    title: "Excellence",
    description:
      "Excellence is not just a goal but a standard that defines Doubleyou. In revolutionizing education and employment, we pursue excellence across every facet of our platform. From the curated quizzes that inspire learning to the user interface that enhances accessibility, we are dedicated to delivering a derior experience. We foster a culture of continuous improvement, encouraging our team to innovate and refine our offerings to exceed the expectations of our users. Through this commitment to excellence, we aim to be a catalyst for positive change, setting new benchmarks in the industry and contributing to the advancement of educational and employment opportunities.",
    borderColor: "border-blue-400",
    bgColor: "bg-[#f1f6fd]/70", // Keep original tone with transparency
  },
  {
    title: "Service",
    description:
      "Service is at the heart of our mission at Doubleyou. We recognize that our purpose extends beyond the platform, encompassing a responsibility to serve the broader community. By leveraging game mechanics and online accessibility, we seek to bridge gaps in education and employment opportunities, particularly focusing on increasing digital and financial inclusion across Nigeria. Our commitment to service extends to the partnerships we form with states, actively promoting investment opportunities and contributing to the socio-economic development of the regions we operate in. Through our dedication to service, we aim to make a lasting impact on individuals, communities, and the educational landscape as a whole.",
    borderColor: "border-green-400",
    bgColor: "bg-[#edfdf4]/70",
  },
  // Add more as needed...
];

const CoreValues = () => {
  return (
    <section
      className="py-40 md:px-20 relative bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/Background1.png')",
      }}
    >
      <div className="text-center mb-6">
        <Yellowlabel text="core value" />
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900 mt-2">
          Our Core Values
        </motion.h2>
      </div>

      {/* 👇 Scroll Hint for Mobile */}
      <div className="text-center mb-4 md:hidden animate-pulse text-sm text-gray-500">
        ← Swipe to explore →
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 min-w-max px-5 md:px-10">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className={`w-[250px] md:w-[500px] max-w-md p-6 rounded-2xl border ${value.borderColor} ${value.bgColor} shadow-md flex-shrink-0 backdrop-blur-md transition`}
            >
              <h3 className="text-lg font-bold mb-2 text-[#0E2A46]">
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
