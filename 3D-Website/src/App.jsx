import ButtonGradient from "./assets/svg/ButtonGradient"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Pricing from "./components/Pricing"
import Roadmap from "./components/Roadmap"
import Services from "./components/Services"
import Collaboration from "./components/Collaboration"

function App() {
  

  return (
    <>
   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />

    </>
  )
}

export default App
