import { useState } from "react";
import Button from "./Button";
import { Img } from "react-image"

// eslint-disable-next-line react/prop-types
const CardServicesLeft = ({ subtitle, title, text, photo }) => {

    const [clickServices, setClickServices] = useState(0);


    const clickWappServices = (event) => {
        event.preventDefault();
        if (clickServices === 0) {
            window.open('https://wa.link/1xt2iu', '_blank')
        } else if (clickServices === 1) {
            window.open('https://wa.link/s7ox1x', '_blank')
        }
            setClickServices (clickServices + 1);
    }

  return (
    <section className="w-full max-w-[846px] flex flex-col gap-10 justify-between items-center md:items-end md:flex-row">

        <article className="w-full flex flex-col justify-center items-center md:items-start">
            <h4 className="underline text-base">{ subtitle }</h4>
            <h2 className="max-w-[218px] md:max-w-[290px] text-center md:text-start font-AbhayaL text-[30px] md:text-[40px] leading-[80%] mt-4">{ title }</h2>
            <p className="max-w-[278px] text-center md:text-start md:max-w-[370px] text-lg md:text-2xl leading-[130%] mt-1">{ text }</p>
            <div className="mt-6" onClick={clickWappServices}>
                <Button
                    link={""}
                    text={"Cotizar"}
                />
            </div>
        </article>

        <picture className="block w-full max-w-[414px] h-[540px] overflow-hidden">
            <Img
                className="w-full h-full object-cover"
                src={ photo }
                alt="placas de mármol"
            />
        </picture>

    </section>
  )
}

export default CardServicesLeft