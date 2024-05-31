import CardServicesLeft from "../ui/CardServicesLeft"
import CardServicesRight from "../ui/CardServicesRight"

import img1 from "../../assets/images/img1service.jpg"
import img2 from "../../assets/images/img2services.jpeg"
import img3 from "../../assets/images/img3services.jpeg"


const Services = () => {
  return (
    <section id="servicios" className="flex flex-col gap-32 items-center responsiveWeb">

      <article data-aos="fade-up" data-aos-duration="800">
        <CardServicesLeft
          subtitle={"Servicio"} 
          title={"Comercialización de Mármol"} 
          text={"Ideal para cualquier proyecto con estilo exquisito y funcional"} 
          photo={img1}
        />
      </article>

      <article data-aos="fade-up" data-aos-duration="800">
        <CardServicesRight
          subtitle={"Servicio"} 
          title={"Instalacion de Mármol"} 
          text={"Precisa y profesional para resaltar la belleza natural de su mármol."} 
          photo={img2}
        />
      </article>

      <article data-aos="fade-up" data-aos-duration="800">
        <CardServicesLeft
          subtitle={"Servicio"} 
          title={"Mantenimiento del mármol"} 
          text={"Restauración y cuidado preventivo del mármol."} 
          photo={img3}
        />
      </article>
    </section>
  )
}

export default Services