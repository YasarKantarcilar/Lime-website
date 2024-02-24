import newyork from "../assets/newyork.png"
import washington from "../assets/dc.png"
import california from "../assets/california.png"
type CityType = {
  image: string;
  name: string;
}
const Cities = () => {
  const citiesData = [
    {
      name: "New York",
      image: newyork
    },
    {
      name: "Washington DC",
      image: washington
    },
    {
      name: "California",
      image: california
    },
    {
      name: "Washington DC",
      image: washington
    },
    {
      name: "Washington DC",
      image: washington
    },
    {
      name: "California",
      image: california
    },

  ]
  return (
    <div className='w-full flex flex-col justify-evenly pt-16 gap-8 items-center h-auto bg-white'>
      <div className="flex flex-col w-full h-1/5 justify-center items-center gap-2">
        <p className="text-lg text-[#00B200] font-light">Locations </p>
        <p className="text-black text-3xl">Our Cities </p>
      </div>
      <div className=" w-full scrollable-container min-h-[3/5] pb-8 flex justify-start px-[5%] md:px-[10%] items-center overflow-x-scroll gap-4">
        {citiesData.map((city: CityType, index: number) => (
          <div key={index} className="min-w-[65vw] md:min-w-[30vw] aspect-square flex flex-col rounded-2xl">
            <img className="w-full aspect-[10/8] object-cover bg-black rounded-2xl" src={city.image} />
            <p className="font-light text-xl text-black pt-[5%] underline underline-offset-8">{city.name}</p>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Cities
