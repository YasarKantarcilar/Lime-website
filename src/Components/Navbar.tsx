import navbar from "../assets/navbar.png"
const Navbar = () => {
  const navLinks: string[] = [
    "About Us", "Why Lime", "Vehicles", "Locations"
  ]
  return (
    <div className='fixed flex justify-center gap-8 md:justify-between bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 items-center z-50 top-0 left-0 h-16 bg-[#1E1E1E] w-screen px-[8%]'>
      <img src={navbar} className="w-auto h-1/2 md:h-3/4 object-contain" />
      <div className="w-auto h-full flex justify-center items-center gap-4">
        {navLinks.map((link, index) => (
          <a className="text-white sr-only md:not-sr-only text-base font-thin" key={index}>{link}</a>
        ))}
        <button className='bg-[#00DD00] text-base w-auto px-4 h-3/4 rounded-[24px]'>Download the app</button>
      </div>
    </div>
  )
}

export default Navbar
