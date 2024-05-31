import { useEffect } from "react"

import Navbar from "./components/nav/Nav"
import Hero from "./components/sections/Hero"
import { Quote } from "./components/sections/Quote"
import Services from "./components/sections/Services"
import Results from "./components/sections/Results"
import Benefits from "./components/sections/Benefits"
import GuaranteeWork from "./components/sections/GuaranteeWork"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div className="">

      <div className="mb-[160px] responsiveWeb">
        <Navbar/>
      </div>

      <div className="mb-[125px]">
        <Hero/>
      </div>

      <div className="mb-[125px]">
        <Quote/>
      </div>

      <div className="mb-[125px]">
        <Services/>
      </div>

      <div className="">
        <Results/>
      </div>

      <div className="mb-[125px]">
        <Benefits/>
      </div>

      <div className="mb-[125px]">
        <GuaranteeWork/>
      </div>

      <div className="">
        <Contact/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default App