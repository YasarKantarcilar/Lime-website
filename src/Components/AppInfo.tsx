import scan from "../assets/scan.png"
import ride from "../assets/ride.png"
import locate from "../assets/locate.png"

type InfosType = {
  title: string;
  image: string;
  text: string;
}
const AppInfo = () => {
  const infos: InfosType[] = [
    {
      title: "Locate",
      image: locate,
      text: "Download the Lime app to find a vehicle."
    },
    {
      title: "Scan",
      image: scan,
      text: "Scan the QR code on the vehicle to unlock. Learn how to ride safely in the app."
    },
    {
      title: "Ride",
      image: ride,
      text: "Follow all traffic rules, stick to the streets and bike lanes where legally permitted."
    },

  ]
  return (
    <div className='w-full flex flex-col justify-evenly pt-16 gap-8 pb-8 items-center min-h-screen bg-[#EEE]'>
      <div className="flex flex-col w-full h-1/5 justify-center items-center gap-2">
        <p className="text-lg text-[#00B200] font-light">The App</p>
        <p className="text-black text-3xl">How to Lime</p>
      </div>
      <div className="grid w-full min-h-[3/5] grid-cols-1 md:grid-cols-3 px-[5%] md:px-[10%] gap-4">
        {infos.map((info: InfosType, index: number) => (
          <div key={index} className="aspect-square bg-[#EEE] flex flex-col justify-center items-center rounded-2xl">
            <img src={info.image} className="w-full rounded-t-2xl object-cover h-3/5" />
            <div className="flex h-2/5 bg-white rounded-b-2xl justify-evenly px-[5%] gap-8 items-start pt-[5%]">
              <p className="text-[#00B200] text-lg font-light">{info.title}</p>
              <p className="font-light text-base text-black">
                {info.text}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default AppInfo
