import Button from "../ui/Button"
import img1 from "../../assets/images/imgjobs2.jpeg"
import { Img } from "react-image"
const linkWapp = (event) => {
  event.preventDefault();
  window.open('https://wa.link/o195ma', '_blank')
}

const GuaranteeWork = () => {
  return (
    <section className="flex flex-col gap-10 md:flex-row justify-between w-full max-w-[1280px] responsiveWeb mx-auto items-center">

      <picture data-aos="zoom-in" data-aos-duration="800" className="block w-full max-w-[414px] h-[540px]">
        <Img
          className="w-full h-full object-cover"
          src={img1}
          alt="mantenimiento piso de marmol"
        />
      </picture>

      <article className="flex flex-col justify-center items-center md:items-start md:justify-start">
        <h2 data-aos="fade-up" data-aos-duration="800" className="text-[40px] xsm:text-[56px] md:text-[80px] max-w-[358px] xsm:max-w-[501px] md:max-w-[372px] font-AbhayaL leading-[80%] text-center md:text-start">Utilizamos productos y equipos de calidad</h2>
        <p data-aos="fade-up" data-aos-duration="1000" className="max-w-[220px] md:max-w-[280px] text-2xl md:text-3xl mt-1 text-center md:text-start">para garantizar los mejores resultados.</p>
        <div data-aos="zoom-in" data-aos-duration="1200" className="mt-5" onClick={linkWapp}>
          <Button
            link={""}
            text={"Contratar"}
          />
        </div>
      </article>

    </section>
  )
}

export default GuaranteeWork