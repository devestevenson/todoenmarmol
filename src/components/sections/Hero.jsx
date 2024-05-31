import { Img } from "react-image"

import img1 from "../../assets/images/img1hero.jpeg"
import img2 from "../../assets/images/img2hero.jpeg"
import img3 from "../../assets/images/img3hero.jpeg"

const Hero = () => {
  return (
    <section id="inicio" className="responsiveWeb"> 
      <article className="mb-[160px]">
        <p data-aos="fade-up" data-aos-duration="800" className="text-xl md:text-2xl text-center mb-4">NOS ESPECIALIZAMOS EN LA</p>
        <h2 data-aos="fade-up" data-aos-duration="1000" className="font-AbhayaL leading-[80%] text-[40px] xsm:text-[56px] md:text-[80px] max-w-[291px] xsm:max-w-[408px] md:max-w-[969px] text-center mx-auto">comercialización, instalación y mantenimiento del mármol</h2>
      </article>

      <article className="flex items-center gap-5 justify-center">

        <picture data-aos="zoom-in" className="block w-full max-w-[414px] h-[540px] overflow-hidden hidden md:flex">
          <Img
            className="w-full h-full object-cover"
            src={img1}
            alt="mezón de marmol en cocina"
          />
        </picture>

        <picture data-aos="zoom-in" className="block w-full max-w-[414px] h-[540px] overflow-hidden hidden sm:flex">
          <Img
            className="w-full h-full object-cover"
            src={img2}
            alt="comercialización de mármol"
          />
        </picture>

        <picture data-aos="zoom-in" className="block w-full max-w-[414px] h-[540px] overflow-hidden">
          <Img
            className="w-full h-full object-cover"
            src={img3}
            alt="escaleras de mármol"
          />
        </picture>
        
      </article>

    </section>
  )
}

export default Hero