import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Navbar } from "../components/Navbar";
import bgImage from "../assets/nosotrosImg.webp";
import imgMotivadora from "../assets/nosotros1.webp";

import declaracion from "../assets/ServicioImpuestos.svg";
import aseFiscal from "../assets/ServicioAsesoriaFiscal.svg";
import svgprueba from "../assets/icons/Elemento.svg";

import waves from "../assets/waves.webp";
import { motion } from "framer-motion";
import cell from "../assets/cell.webp";
import { Main as MainC } from "../components/Main/index";
import logo from "../assets/logoNuevo.png";
import CursosCarousel from "../components/cursos/CursosCarousel";
import { useQuery } from "react-query";
import { CursosCtrl } from "../api/fb.cursos";

const CursosCtrlr = new CursosCtrl();
export const Main = () => {
  const { User } = useAuth();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [ChatBot, setChatBot] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: Cursos,
    isLoading,
    isError,
  } = useQuery("Cursos", () => CursosCtrlr.getCursos());

  const filteredCourses =
    Cursos?.filter((course) =>
      course.Titulo.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];


    const [colorBoton, setColorBoton] = useState('colorOriginal'); // Reemplaza 'colorOriginal' con el color original del botón

  const cambiarColorBoton = () => {
    setColorBoton('red'); // Reemplaza 'nuevoColor' con el color que desees
  };

  const restaurarColorBoton = () => {
    setColorBoton('blue'); // Reemplaza 'colorOriginal' con el color original del botón
  };

  useEffect(() => {
    const handleScroll = () => {
      const divElement = document.getElementById('servicios'); // Reemplaza 'tuDiv' con el ID de tu div
      const rect = divElement.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        cambiarColorBoton();
      } else {
        restaurarColorBoton();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* HERO */}
      <div
        className="bg-blue-500 w-full h-full min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full flex flex-col items-center justify-center h-full bg-gradient-to-t min-h-screen from-esatLight from-[15%] via-transparent  to-white">
          <h1 className="uppercase text-4xl lg:text-7xl font-bold text-esatDark">Contabilidad para</h1>
          <div className="flex items-center">
            <h2 className="uppercase text-4xl lg:text-7xl flex font-bold text-esatDark mt-[1%]">
              Personas
            </h2>
            <div className="w-full ml-3 h-fit p-5 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${svgprueba})` }}
            >
              <span className="text-white text-4xl lg:text-7xl font-semibold">Físicas</span>
            </div>
          </div>

          <p className="text-esatDark  w-[80%] md:w-[45%] text-center bg-white/70 px-3 md:px-8 py-3  rounded-md font-semibold text-base md:text-2xl mt-[3%]">Llevamos tu contabilidad online de una manera confiable <br /> y ordenada con apoyo de nuestros contadores expertos.</p>
        </div>
      </div>

      {/* SERVICIOS */}
      <div id="servicios" className="w-full h-fit bg-esatLight flex flex-col justify-center items-center">
        <h2 className="text-5xl font-semibold uppercase text-esatDark">servicios</h2>
        <p className="text-esatDark text-2xl mt-2 text-center">Expertos en simplificar tus impuestos y maximizar tus beneficios. <br />Descubre nuestros servicios</p>

        <div className="md:px-[20%] px-[5%] grid grid-cols-1 md:grid-cols-3 gap-10 py-10 md:py-0 place-content-center h-fit md:h-[40vh] bg-esatLight w-full">
          <div className="w-full flex flex-col space-y-3 justify-center items-center h-full py-[8%] bg-white rounded-md shadow-md">
            <img src={aseFiscal} className="h-[50px] mx-auto" alt="" />
            <h3 className="text-esatDark font-semibold md:text-xl text-base text-center">Asesoria Físcal</h3>
          </div>
          <div className="w-full flex flex-col space-y-3 justify-center items-center h-full py-[8%] bg-white rounded-md shadow-md">
            <img src={aseFiscal} className="h-[50px] mx-auto" alt="" />
            <h3 className="text-esatDark font-semibold md:text-xl text-base text-center">Facturación Electrónica</h3>
          </div>
          <div className="w-full flex flex-col space-y-3 justify-center items-center h-full py-[8%] bg-white rounded-md shadow-md">
            <img src={declaracion} className="h-[50px] mx-auto" alt="" />
            <h3 className="text-esatDark font-semibold md:text-xl text-base text-center">Declaración de Impuestos</h3>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="w-full h-[70vh] pb-[10%] relative bg-white">
        <div className="bg-esatLight w-full py-[3%] flex flex-col  items-center ">
          <h3 className="text-center uppercase text-3xl md:text-5xl font-semibold text-esatDark">
            Descubre <br />Nuestros Paquetes
          </h3>
          <p className="mt-3 text-center text-base md:text-2xl font-medium  text-esatDark">Diseñados para adaptarse a tus necesidades específicas y <br />
            garantizar su cumplimiento.
          </p>
        </div>
        <div className="bg-esatLight hidden md:block w-full h-full"
          style={{
            clipPath: `polygon(100% 0, 0 0, 100% 66%)`
          }}
        />

        <div className="lg:px-[10%] md:px-[5%] px-[3%] gap-3 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 md:absolute md:top-[45%] md:left-0 ">
          <div className="flex flex-col p-6 transition-all cursor-pointer group hover:bg-esatDark hover:scale-110 shadow-2xl mx-auto w-fit px-15 text-center text-gray-900 bg-white rounded-lg  xl:p-8 ">
            <h3 className="mb-4 ml-5 text-4xl group-hover:text-white uppercase font-bold mr-auto">resico</h3>
            <div className="flex ml-5 mb-5 justify-center items-baseline mr-auto my-2">
              <span className="mr-2 text-6xl group-hover:text-white text-LogoBlue font-bold">$579</span>
              <span className="text-black group-hover:text-white text-2xl">/mes</span>
              <span className="text-xs ml-2 group-hover:text-white">*iva incluido*</span>
            </div>

            <p className="text-xs text-gray-600 group-hover:text-white mb-3">El Régimen Simplificado de confianza  es ideal para personas que estan empezando en formalizarse ante el SAT.</p>


            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Emisión de Facturas ilimitadas</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Asesoría contable personalizada y especifíca de tu régimen</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Soporte vía WhatsApp</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Soporte vía correo electroníco</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Decleracion de impuestos</span>
              </li>
            </ul>
            <a href="#" className="uppercase w-[80%] hover:bg-white hover:text-esatDark mx-auto rounded-md bg-LogoBlue py-2 px-4 text-white">Comprar ahora</a>
          </div>
          <div className="flex flex-col p-6 transition-all cursor-pointer group hover:bg-esatDark hover:scale-110 shadow-2xl mx-auto w-fit px-15 text-center text-gray-900 bg-white rounded-lg  xl:p-8 ">
            <h3 className="mb-4 ml-5 text-4xl group-hover:text-white uppercase font-bold mr-auto">basico</h3>
            <div className="flex ml-5 mb-5 justify-center items-baseline mr-auto my-2">
              <span className="mr-2 text-6xl group-hover:text-white text-LogoBlue font-bold">$749</span>
              <span className="text-black group-hover:text-white text-2xl">/mes</span>
              <span className="text-xs ml-2 group-hover:text-white">*iva incluido*</span>
            </div>

            <p className="text-xs text-gray-600 group-hover:text-white mb-3">Este plan esta hecho para profesionales o emprendedores con un 1 régimen fiscal (Plataformas tecnologicas, Actividad Empresarial o Arrendamiento)</p>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Emisión de Facturas ilimitadas</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Asesoría contable personalizada y especifíca de tu régimen</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Soporte vía WhatsApp</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Soporte vía correo electroníco</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Decleracion de impuestos</span>
              </li>
            </ul>
            <a href="#" className="uppercase w-[80%] hover:bg-white hover:text-esatDark mx-auto rounded-md bg-LogoBlue py-2 px-4 text-white">Comprar ahora</a>
          </div>
          <div className="flex flex-col p-6 transition-all cursor-pointer group hover:bg-esatDark hover:scale-110 shadow-2xl mx-auto w-fit px-15 text-center text-gray-900 bg-white rounded-lg  xl:p-8 ">
            <h3 className="mb-4 ml-5 text-4xl group-hover:text-white uppercase font-bold mr-auto">premium</h3>
            <div className="flex ml-5 mb-5 justify-center items-baseline mr-auto my-2">
              <span className="mr-2 text-6xl group-hover:text-white text-LogoBlue font-bold">$1049</span>
              <span className="text-black group-hover:text-white text-2xl">/mes</span>
              <span className="text-xs ml-2 group-hover:text-white">*iva incluido*</span>
            </div>

            <p className="text-xs text-gray-600 group-hover:text-white mb-3">Si cuentas con 2 o mas regímenes, este es tu plan ideal</p>


            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Emisión de Facturas ilimitadas</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Asesoría contable personalizada y especifíca de tu régimen</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Soporte vía WhatsApp</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Soporte vía correo electroníco</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-10 h-10 text-green-800 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="uppercase text-xl font-semibold group-hover:text-white">Decleracion de impuestos</span>
              </li>
            </ul>
            <a href="#" className="uppercase w-[80%] hover:bg-white hover:text-esatDark mx-auto rounded-md bg-LogoBlue py-2 px-4 text-white">Comprar ahora</a>
          </div>
          
        </div>
      </div>


      <div className="w-full block h-[260vh] md:h-[120vh] lg:h-[50vh] bg-white" />
      {/* APP INFO */}
      <div className="w-full pt-[10%]  h-fit  flex flex-col">
        <div
          className="w-full h-full flex md:px-[20%] flex-col md:flex-row bg-[length:100%_100%] bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${waves})` }}
        >
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-full mx-auto md:mx-0 w-[70%] md:w-[50%] mb-5 md:mb-0 lg:w-[35%] scale-[120%]"
            src={cell}
            alt=""
          />
          <div className="md:w-[70%] mb-20 md:my-20 lg:mb-0 flex flex-col justify-center items-center">
            <h2 className="md:text-2xl lg:text-4xl text-lg  text-white text-center font-bold">
              !OBTEN LA APLICACION AHORA Y <br />
              EXPERIMENTA LA DIFERENCIA!
            </h2>
            <p className="text-white w-[70%] md:w-full text-base md:text-xl  text-center">
              Descubre como esta herramienta pueda impulsar tu éxito
            </p>

            <button className="md:bg-black bg-black text-white md:text-white mt-5 lg:mt-5 rounded-lg px-4 py-2 font-semibold">
              PROXIMAMENTE
            </button>

            <Link to="/Registro" className='bg-white text-black uppercase font-bold rounded-md px-4 py-2 mt-2'>Registrate Ya</Link>
          </div>
        </div>
      </div>

      {/* CURSOS */}
      <div className="w-full flex h-fit flex-col items-center">
        <h2 className="text-3xl md:text-5xl text-esatDark font-bold">Cursos</h2>
        <h4 className="text-center text-base md:text-2xl text-esatDark font-medium my-4">
          En EasySAT, cree en el poder del conocimiento.
          <br /> Por eso te ofrecemos cursos interactivos y actualizados que te permitiran
          <br /> profundizar tus conocimientos en contabilidad, impuestos y finanzas
        </h4>

        <div className="w-full px-[3%] my-5">
          <CursosCarousel array={filteredCourses} />
        </div>

      </div>

      {/* CTA */}
      <MainC.Opiniones />

      {/* PALABRA MOTIVADORA */}
      <div
        className="w-full flex justify-center overflow-hidden items-center bg-center bg-cover bg-fixed h-[30vh] mt-28"
        style={{ backgroundImage: `url(${imgMotivadora})` }}
      >
        <motion.h2
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Deja de batallar con el SAT y <br />
          utiliza EasySAT
        </motion.h2>
      </div>

      <MainC.Preguntas />

      <div className="w-full h-10 my-5 bg-esatDark"
        style={{ clipPath: "polygon(100% 1%, 0 0, 50% 18%)" }}
      />

      {/* REDES */}
      <MainC.Redes />

      {/* CONTACTO */}
      <MainC.Contacto />

      {pathname == "/Prueba" && (
        <div className="fixed  left-[3%] bottom-[3%] bg-slate-700 rounded-full w-20 h-20 md:w-32 md:h-32">
          <div></div>
        </div>
      )}

      <div className="fixed z-50 flex-col md:flex-row right-[2%] bottom-[3%] rounded-full flex justify-center items-end md:items-center">
        {ChatBot ? (
          <div className="flex w-[98%] md:w-[400px] shadow-2xl mb-7 md:mb-0 rounded-md bg-LogoBlue h-14 p-4 justify-center items-center">
            <XCircle
              onClick={handleToggle}
              className="absolute -left-[3%] -top-[2%] cursor-pointer text-LogoBlue hover:text-LogoGreen transition-colors"
            />
            <h3 className="text-white text-sm">
              Hola soy Kavii tu asistente virtual, es un placer saludarte, ¿en
              que te podemos ayudar?
            </h3>
          </div>
        ) : (
          <></>
        )}

        <div className="w-16 rounded-full  ml-2">
          <img
            className="w-full animate-float h-full bg-center bg-contain"
            src={logo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
