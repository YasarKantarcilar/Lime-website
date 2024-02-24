import AppInfo from "./Components/AppInfo"
import Cities from "./Components/Cities"
import DownloadSection from "./Components/DownloadSection"
import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import Principles from "./Components/Principles"
import Vehicles from "./Components/Vehicles"

function App() {

  return (
    <div className="text-3xl">
      <Navbar />
      <HeroSection />
      <Vehicles />
      <AppInfo />
      <Cities />
      <Principles />
      <DownloadSection />
    </div>
  )
}

export default App
