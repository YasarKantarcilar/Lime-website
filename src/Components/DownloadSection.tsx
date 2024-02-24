import { motion } from "framer-motion"
import mobile from "../assets/mobile.png"
import buttons from "../assets/downloadbuttons.png"
const DownloadSection = () => {
  return (
    <div className="w-full flex md:flex-row flex-col py-8 justify-center items-center h-screen px-[10%] bg-[#1E1E1E]">
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}

        src={mobile} alt="mobile" className="w-full md:w-1/2 h-3/4 object-contain" />
      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-center gap-8">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}

          src={buttons} className="w-[60%] h-auto object-contain" />
      </div>
    </div>
  )
}

export default DownloadSection
