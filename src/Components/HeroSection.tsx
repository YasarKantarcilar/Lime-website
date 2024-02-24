import { motion } from 'framer-motion'
import heroImage from '../assets/hero.png'
const HeroSection = () => {
  return (
    <div className="w-full gap-8 h-screen font-poppins flex justify-center items-center flex-col">
      <img src={heroImage} alt="woman riding bcycle" className="w-full h-full absolute left-0 top-0 -z-50 object-cover" />
      <p className='text-5xl md:text-8xl text-white font-poppins'>
        {"Ride Green".split("").map((letter: string, index: number) => (
          <>
            {letter === " " ?
              <span key={index}>&nbsp;</span>
              :
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}

                key={index} className='inline-block'>
                {letter}
              </motion.span>}
          </>
        ))}
      </p>
      <div className='flex justify-center items-center gap-4'>
        <button className='text-xl border-white border rounded-[24px] p-4 text-white'>Our Cities</button>
        <button className='bg-[#00DD00] text-xl px-4 py-4 rounded-[24px]'>Download the app</button>
      </div>
    </div>
  )
}

export default HeroSection
