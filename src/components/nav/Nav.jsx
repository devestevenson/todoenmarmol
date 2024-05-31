import { useState } from 'react';
import { List, X } from "@phosphor-icons/react";
import logo from "../../assets/icons/logotodoenmarmol.svg"
import './Nav.css'

const Nav = () => {

    //Para abrir el menú
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    };

    //Activar cada link
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

  return (
    <header>        
       <nav className="nav border-b-2 ">
            <a href='/' className="navLogo w-[140px] h-auto"><img src={logo} alt="" className='w-full h-full object-cover' /></a>
            <ul className="navBox">
                <li><a href="/" className={selectedOption === 'inicio' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('inicio')}>Inicio</a></li>
                <li><a href="#servicios" className={selectedOption === 'servicios' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('servicios')}>Servicios</a></li>
                <li><a href="#resultados" className={selectedOption === 'resultados' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('resultados')}>Resultados</a></li>
                <li><a href="#beneficios" className={selectedOption === 'beneficios' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('beneficios')}>Beneficios</a></li>
                <li><a href="#contacto" className={selectedOption === 'contacto' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('contacto')}>Contacto</a></li>
            </ul>
            <button className="navButtonHamburger" onClick={toggleDropdown}>
                {isDropdownOpen ? (
                    <X className='closeIcon' color='#000'/>
                ) : (
                    <List className='openIcon' color='#000' />
                )}
            </button>
        </nav>
        <ul className={`navDropdown ${isDropdownOpen ? 'openNav' : ''}`}onClick={() => setIsDropdownOpen(false)}>
            <li><a href="#inicio" className={selectedOption === 'inicio' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('inicio')}>Inicio</a></li>
            <li><a href="#servicios" className={selectedOption === 'servicios' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('servicios')}>Servicios</a></li>
            <li><a href="#resultados" className={selectedOption === 'resultados' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('resultados')}>Resultados</a></li>
            <li><a href="#beneficios" className={selectedOption === 'beneficios' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('beneficios')}>Beneficios</a></li>
            <li><a href="#contacto" className={selectedOption === 'contacto' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('contacto')}>Contacto</a></li>
        </ul>
    </header>
  )
}

export default Nav


