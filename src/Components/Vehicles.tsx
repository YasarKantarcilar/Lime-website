import vehicle1 from "../assets/vehicle1.png"
import vehicle2 from "../assets/vehicle2.png"
import { motion } from "framer-motion"
type VehicleType = {
  name: string;
  image: string
}
const Vehicles = () => {
  const vehiclesData: VehicleType[] = [
    { name: "E-Scooter", image: vehicle1 },
    { name: "E-Bike", image: vehicle2 }
  ]
  return (
    <div className='w-full pb-8 flex flex-col justify-evenly pt-16 gap-8 items-center min-h-screen bg-white'>
      <div className="flex flex-col w-full h-1/5 justify-center items-center gap-2">
        <p className="text-lg text-[#00B200] font-light">Our Vehicles</p>
        <p className="text-black text-3xl">Discover the Gen4</p>
      </div>
      <div className="grid w-full min-h-[3/5] grid-cols-1 sm:grid-cols-2 px-[5%] sm:px-[15%] md:px-[25%] gap-4">
        {vehiclesData.map((vehicle: VehicleType, index: number) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}

            className="aspect-square bg-[#EEE] flex flex-col justify-center items-center rounded-2xl" key={index}>
            <img src={vehicle.image} className="w-full h-4/5 object-contain" alt="each vehicle" />
            <p className="text-lg font-normal">{vehicle.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Vehicles
