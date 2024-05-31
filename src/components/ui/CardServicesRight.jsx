import Button from "./Button";
import { Img } from "react-image"

const linkWapp = (event) => {
    event.preventDefault();
    window.open('https://wa.link/lgfbps', '_blank')
}

// eslint-disable-next-line react/prop-types
const CardServicesRight = ({ subtitle, title, text, photo }) => {
  return (
    <section className="w-full max-w-[846px] flex flex-col gap-10 justify-between items-center md:items-end md:flex-row">

        <picture className="block w-full max-w-[414px] h-[540px] overflow-hidden order-2 md:order-1">
            <Img
                className="w-full h-full object-cover"
                src={ photo }
                alt="instalación de mármol"
            />
        </picture>

        <article className="w-full order-1 md:order-2 flex flex-col justify-center items-center md:items-start">
            <h4 className="underline text-base">{ subtitle }</h4>
            <h2 className="max-w-[218px] md:max-w-[196px] text-center md:text-start font-AbhayaL text-[30px] md:text-[40px] leading-[80%] mt-4">{ title }</h2>
            <p className="max-w-[278px] text-center md:text-start md:max-w-[373px] text-lg md:text-2xl leading-[130%] mt-1">{ text }</p>
            <div className="mt-6" onClick={linkWapp}>
                <Button
                    link={""}
                    text={"Cotizar"}
                />
            </div>
        </article>

    </section>
  )
}

export default CardServicesRight