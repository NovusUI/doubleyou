
import { motion } from "framer-motion";

type Props = {
    text:string
}
const Yellowlabel = ({text}:Props) => {
  return (
    <motion.div 
    className="inline-block px-6 py-2 bg-[#FFF7E2] rounded-[10px] mb-4"
    animate={{
      y: [0, -5, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    >
    <p className="text-[#FFBD2E] font-semibold uppercase">{text}</p>
  </motion.div>
  )
}

export default Yellowlabel
