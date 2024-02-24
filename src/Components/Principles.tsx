import { motion } from "framer-motion"
import safety from "../assets/safety.png"
import sustainability from "../assets/sustainability.png"
import community from "../assets/community.png"
type PrincipleType = {
  image: string;
  name: string;
}
const Principles = () => {
  const principlesData: PrincipleType[] = [
    {
      name: "Safety",
      image: safety
    },
    {
      name: "Community",
      image: community
    },
    {
      name: "Sustainability",
      image: sustainability
    },


  ]
  return (
    <div className='w-full flex flex-col justify-evenly pt-16 gap-8 items-center h-auto bg-white'>
      <div className="flex flex-col w-full h-1/5 justify-center items-center gap-2">
        <p className="text-lg text-[#00B200] font-light">Why Lime </p>
        <p className="text-black text-3xl">Our Core Principles </p>
      </div>
      <div className=" w-full scrollable-container min-h-[3/5] pb-8 flex justify-start px-[5%] md:px-[10%] items-center overflow-x-scroll gap-4">
        {principlesData.map((principle: PrincipleType, index: number) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}

            key={index} className="min-w-[65vw] md:min-w-[30vw] aspect-square flex flex-col rounded-2xl">
            <img className="w-full aspect-[10/8] object-cover bg-black rounded-2xl" src={principle.image} />
            <p className="font-light text-xl text-black pt-[5%] underline underline-offset-8">{principle.name}</p>
          </motion.div>

        ))}
      </div>
    </div>
  )
}

export default Principles

