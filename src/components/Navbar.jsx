import React, { useEffect, useState } from 'react'
import logo from "../assets/logocolor.webp";
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LogOut, Menu, User2, UserIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {

  const [bgWhite, setBgWhite] = useState(false);
  const [currentHash, setCurrentHash] = useState(null);
  const [toggleMenu, settoggleMenu] = useState(false);

  const handleMenuToggle = () => {
    settoggleMenu(!toggleMenu);
  };

  const { User, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgWhite(true);
      } else {
        setBgWhite(false);
      }
    };

    const handleHash = () => {
      const hashes = ['#servicios', '#preguntas', '#contacto'];
      const newHash = hashes.find(hash => {
        const element = document.querySelector(hash);
        if (element && element.getBoundingClientRect().top >= 0) {
          return hash;
        }
      })
      setCurrentHash(newHash);
    }

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('scroll', handleHash);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();

  const isCurrentPath = (path) => {

    if (path.startsWith('#')) {
      return window.location.hash === path;
    }

    return location.pathname === path;

  }

  const scrollToTop = () => {
    // Scroll hacia el tope de la página
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // O 'auto' para un desplazamiento instantáneo
    });
  };


  return (
    <div className='fixed bg-white shadow-md z-50 w-full flex px-[3%] md:px-[5%] lg:px-[10%] py-5 items-center justify-between'>
      <Link onClick={() => { if (location.pathname === "/") { scrollToTop() } }} to={"/"}>
        <img src={logo} className='w-[25%] h-full' alt="" />
      </Link>


      <div className={` hidden md:block transition-all py-4 px-3`}>
        <ul className='flex items-center gap-x-3'>
          <a className={` text-center ${isCurrentPath('#servicios') ? 'text-LogoBlue' : 'text-esatDark'}`} href="#servicios">Servicios</a>
          <a className={` inline-block whitespace-nowrap text-center ${isCurrentPath('#preguntas') ? 'text-LogoBlue' : 'text-esatDark'}`} href="#preguntas">Preguntas frecuentes</a>

          <Link className={` text-center ${isCurrentPath('/cursos') ? 'text-LogoBlue' : 'text-esatDark'}`} to={'/cursos'}>Cursos</Link>

          <a className={` text-center ${isCurrentPath('#contacto') ? 'text-LogoBlue' : 'text-esatDark'}`} href="#contacto">Contacto</a>

          {
            User ? (<li><div className="flex py-1 cursor-pointer  transition-all items-center justify-between md:justify-start md:gap-x-3">
              <Link
                to="/Perfil"
                className="w-[130px] flex border-2 cursor-pointer border-LogoBlue rounded-md px-3 py-1 gap-x-1 items-center"
              >
                <User2 className='text-LogoBlue' />
                <p className='w-full text-LogoBlue uppercase text-[14px]'>mi cuenta</p>

              </Link>
              <LogOut
                onClick={logout}
                className="w-5 h-5 text-LogoBlue cursor-pointer"
              />
            </div></li>) : (<>
              <li className='hover:-translate-y-1 transition-all'>
                <Link className=' hover:-translate-y-1 transition-all whitespace-nowrap text-esatDark' to={'/Login'}>Iniciar Sesión</Link>
              </li>
              <li className='hover:-translate-y-1 transition-all'>
                <Link className='  bg-LogoBlue py-2 px-4 text-white rounded-md ' to={'/Registro'}>Regístrate</Link>
              </li>
            </>)
          }

        </ul>
      </div>

      <Menu className='block w-[50%] md:hidden' size={30} onClick={handleMenuToggle} />
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col w-full h-screen absolute left-0 top-0 bg-white px-6 py-4 md:hidden"
          >
            <Menu
              size={40}
              onClick={handleMenuToggle}
              className={`flex ml-auto ${toggleMenu ? "text-esatDark" : "text-white"
                } cursor-pointer md:hidden -translate-x-2 mb-5
                
                `}
            />
            <ul className="flex flex-col justify-center gap-y-5 text-black font-semibold text-lg">
              <li className='w-full transition-colors py-2 rounded-md  group hover:bg-esatLight'>
                <a className='w-full h-full inline-block ' href="">Servicios</a>
              </li>
              <li className='w-full transition-colors py-2 rounded-md  group hover:bg-esatLight'>
                <a className='w-full h-full inline-block ' href="">Preguntas Frecuentas</a>
              </li>
              <li className='w-full transition-colors py-2 rounded-md  group hover:bg-esatLight'>
                <Link className='w-full h-full inline-block ' to={"/cursos"}>Cursos</Link>
              </li>
              <li className='w-full transition-colors py-2 rounded-md  group hover:bg-esatLight'>
                <a className='w-full h-full inline-block ' href="">Contacto</a>
              </li>
              <li className='w-full transition-colors py-2 rounded-md  group hover:bg-esatLight'>
                <Link className='w-full h-full inline-block ' to={"/login"}>Iniciar Sesion</Link>
              </li>
              <li className='w-full transition-colors py-2 rounded-md  group hover:bg-esatLight'>
                <Link className='w-full h-full inline-block ' to={"/registro"}>Registrate</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
