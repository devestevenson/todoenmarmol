import Button from "../ui/Button"

const linkWapp = (event) => {
  event.preventDefault();
  window.open('https://wa.link/o195ma', '_blank')
}

const Benefits = () => {
  return (
    <section id="beneficios" className="flex flex-col md:flex-row gap-8 justify-between py-32 bg-tmwhite w-full max-w-[1280px] responsiveWeb mx-auto items-center md:items-start">

      <article className="flex flex-col justify-center items-center md:items-start md:justify-start">
        <h2 data-aos="fade-up" data-aos-duration="800" className="text-[40px] xsm:text-[56px] md:text-[80px] max-w-[322px] xsm:max-w-[450px] md:max-w-[389px] font-AbhayaL leading-[80%] text-center md:text-start">Beneficios de confiar en nosotros</h2>
        <p data-aos="fade-up" data-aos-duration="1200" className="text-lg md:text-2xl mt-1 text-center md:text-start">PARA MANTENER TUS PISOS</p>
      </article>

      <article className="flex flex-col justify-center items-center md:items-start md:justify-start">
        <p data-aos="fade-up" data-aos-duration="800" className="w-full max-w-[522px] text-lg md:text-2xl leading-[130%] text-center md:text-start">Con nuestros servicios periódicos evitas que la porosidad del mármol aumente con el tiempo, asegurando una mayor durabilidad y una apariencia impecable que transformará por completo tu espacio.</p>
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

export default Benefits