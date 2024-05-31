import Button from "../ui/Button"

export const Quote = () => {
  return (
    <section className="flex flex-col justify-center items-center py-32 bg-tmwhite responsiveWeb">

      <p data-aos="fade-up" data-aos-duration="800" className="text-xl max-w-[254px] md:max-w-full leading-[130%] text-center md:text-2xl mb-2">NUESTRA PASIÓN ES REALZAR LA BELLEZA Y</p>
      
      <h2 data-aos="fade-up" data-aos-duration="1000" className="text-center font-AbhayaL leading-[80%] text-[40px] xsm:text-[56px] md:text-[80px] max-w-[359px] xsm:max-w-[502px] md:max-w-[717px]">elegancia del Mármol en cualquier espacio</h2>

      <div data-aos="zoom-in" className="mt-5">
        <Button
          link={"#resultados"}
          text={"Descubrir"}
        />
      </div>

    </section>
  )
}
