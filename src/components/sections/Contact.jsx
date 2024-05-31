import Button from "../ui/Button"

const linkWapp = (event) => {
  event.preventDefault();
  window.open('https://wa.link/o195ma', '_blank')
}

const Contact = () => {
  return (
    <section id="contacto" className="flex flex-col justify-center items-center py-32 max-w-[1280px] responsiveWeb mx-auto">
      <p data-aos="fade-up" data-aos-duration="800" className="max-w-[500px] text-xl md:text-2xl text-center leading-[130%] mx-auto mb-2">SI DESEA OBTENER MÁS INFORMACIÓN SOBRE NUESTROS PRODUCTOS Y SERVICIOS</p>
      <h2 data-aos="fade-up" data-aos-duration="1200" className="font-AbhayaL text-[48px] text-center md:text-[80px] leading-[80%] mx-auto">no dude en contactarnos</h2>
      <div data-aos="zoom-in" data-aos-duration="1400" className="mt-6" onClick={linkWapp}>
        <Button
          link={""}
          text={"Hablemos"}
        />
      </div>
    </section>
  )
}

export default Contact