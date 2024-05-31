import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Img } from "react-image"
import img1 from "../../assets/images/img1resultados.jpg"
import img2 from "../../assets/images/img2resultados.jpeg"
import img3 from "../../assets/images/img3resultados.jpg"
import img4 from "../../assets/images/img4resultados.jpg"
import img5 from "../../assets/images/img5resultados.jpg"
import img6 from "../../assets/images/img6resultados.jpg"

const Results = () => {
  return (
    <section id='resultados' className='py-32'>
      <article className='text-center mb-16 md:mb-32'>
        <h2 data-aos="fade-up" data-aos-duration="800" className='font-AbhayaL text-center mx-auto leading-[80%] text-[40px] xsm:text-[56px] md:text-[80px] max-w-[336px] xsm:max-w-[471px] md:max-w-[672px] mb-3'>Nuestros resultados</h2>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-xl md:text-2xl'>ANTES / DESPUÉS</p>
      </article>

      <article className="w-full">
        <Swiper
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><Img src={img1} alt="Pisos de mármol" /></SwiperSlide>
          <SwiperSlide><Img src={img2} alt="Pisos de mármol" /></SwiperSlide>
          <SwiperSlide><Img src={img3} alt="Pisos de mármol" /></SwiperSlide>
          <SwiperSlide><Img src={img4} alt="Pisos de mármol" /></SwiperSlide>
          <SwiperSlide><Img src={img5} alt="Pisos de mármol" /></SwiperSlide>
          <SwiperSlide><Img src={img6} alt="Pisos de mármol" /></SwiperSlide>
        </Swiper>
      </article>
    </section>
  )
}

export default Results