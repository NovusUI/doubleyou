import { motion } from "framer-motion";
import { Globe, BarChart2, School } from "lucide-react";

const partners = [
  {
    icon: <Globe className="text-blue-500 w-5 h-5" />,
    text: "Governments and ministries of education",
  },
  {
    icon: <BarChart2 className="text-blue-500 w-5 h-5" />,
    text: "Impact investors & donors",
  },
  {
    icon: <School className="text-blue-500 w-5 h-5" />,
    text: "Academic institutions & research bodies",
  },
];

const PartnerSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className="bg-[#eae9f4] py-16 px-6 min-h-full flex justify-center items-center "
    >
      <div className="bg-white  md:w-[80%] mx-auto p-5 sm:p-10 rounded-[2rem] border border-blue-600 shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
          Partner With Us
        </h2>
        <p className="text-center text-lg font-semibold text-gray-800 mb-6">
          Let’s Shape the Future Together
        </p>
        <p className="text-center text-gray-600 mb-6">
          We are seeking partnerships with:
        </p>
        <ul className="text-gray-700 space-y-4 max-w-xl mx-auto mb-8">
          <li className="flex items-start gap-3">
            <span className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 2a10 10 0 00-10 10 10 10 0 0020 0A10 10 0 0012 2zm1 14.93V19a1 1 0 11-2 0v-2.07a8.001 8.001 0 01-5.93-5.93H5a1 1 0 110-2h2.07a8.001 8.001 0 015.93-5.93V5a1 1 0 112 0v2.07a8.001 8.001 0 015.93 5.93H19a1 1 0 110 2h-2.07a8.001 8.001 0 01-5.93 5.93z" />
              </svg>
            </span>
            <span>
              Development organizations committed to SDG 4 (Quality Education)
            </span>
          </li>
          {partners.map((partner, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              viewport={{ once: false }}
              className="flex items-start gap-3"
            >
              {partner.icon}
              <span>{partner.text}</span>
            </motion.li>
          ))}
        </ul>
        <p className="text-center text-gray-600 text-sm mb-8">
          Supported by: Independent Initiative | Committed to Sustainable Development Goals.
        </p>
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Explore Labari
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default PartnerSection;
