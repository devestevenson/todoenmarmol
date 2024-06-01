import logoFoot from "../../assets/icons/logotodoenmarmol.svg";
import iconWapp from "../../assets/icons/whatsapp.svg";
import iconEmail from "../../assets/icons/envelope.svg";
import iconIg from "../../assets/icons/instagram.svg";
import iconFb from "../../assets/icons/facebook.svg";
import { Img } from "react-image";

const Footer = () => {

  return (
    <section className="flex flex-col justify-center items-center py-16 bg-tmwhite max-w-[1280px] responsiveWeb mx-auto">
      <picture className="block max-w-52 h-24 overflow-hidden">
        <Img
          className="w-full h-full object-cover"
          src={logoFoot}
          alt=""
        />
      </picture>

      <div className="w-full h-[1px] bg-tmgray my-[56px]"></div>

      <ul className="w-full flex flex-col gap-4 justify-between items-center  lg:flex-row">
        <li className="flex items-center gap-1">
          <Img src={iconWapp} alt="whatsapp" />
          <a href="https://wa.link/o195ma" target="_blank" className="text-lg">(+57)324 583 8015</a>
        </li>

        <li className="flex items-center gap-1">
          <Img src={iconEmail} alt="correo electrónico" />
          <a href="mailto:todoenmarmol08@gmail.com" target="_blank" className="text-lg">todoenmarmol08@gmail.com</a>
        </li>

        <li className="flex items-center gap-1">
          <Img src={iconIg} alt="instagram" />
          <a href="https://www.instagram.com/todoenmarmol.col" target="_blank" className="text-lg">@todoenmarmol.col</a>
        </li>

        <li className="flex items-center gap-1">
          <Img src={iconFb} alt="facebook" />
          <a href="https://www.facebook.com/todoenmarmoleria" target="_blank" className="text-lg">Todo en Mármol</a>
        </li>
      </ul>
    </section>
  )
}

export default Footer