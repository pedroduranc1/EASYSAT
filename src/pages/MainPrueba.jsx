import React, { useState } from "react";
import { MainLayoutDg } from "../layouts/MainLayoutDg";
import {
  Facebook,
  FolderKanban,
  Instagram,
  YoutubeIcon,
  CheckIcon,
} from "lucide-react";
import { services } from "../assets/services";
import { servicioData } from "../assets/serviciosData";
import { useAuth } from "../hooks/useAuth";
import { Input } from "../components/ui/Input";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fondo from "../assets/fondo.webp";
import logo from "../assets/logo.webp";
import nosotrosImg from "../assets/nosotrosImg.webp";
import waves from "../assets/waves.webp";
import cell from "../assets/cell.webp";
import wavesblack from "../assets/waves-black.webp";
import blogs from "../assets/blogs.webp";
import cursos from "../assets/cursos.webp";
import contactoWaves from "../assets/contacto-waves.webp";
import contacto from "../assets/contacto.webp";

export const MainPrueba = () => {
  const { User } = useAuth();

  const [selection, setselection] = useState("Mision");

  const OurGoalsSele = () => {
    if (selection === "Mision") {
      return (
        <>
          <div className="bg-lime-600 w-full p-4 md:-translate-x-[85%]">
            <h3 className="text-black font-semibold uppercase text-center md:text-end md:pt-5 text-2xl">
              {selection}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row relative p-4">
            <div className="w-full flex flex-col justify-center">
              <h2 className="text-white text-center text-2xl">
                ¡Bienvenido a DGyA!
              </h2>
              <motion.p
                initial={{ opacity: 0, translateX: "-50%" }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white mt-5 text-base mb-10"
              >
                Conscientes de la complejidad de la legislación fiscal mexicana
                y de la gran cantidad de obligaciones que las autoridades
                requieren a los contribuyentes nuestra misión como Despacho
                Fiscal Contable es ayudar a las empresas que desean cumplir con
                sus obligaciones fiscales de manera correcta y oportuna, tomando
                en cuenta también los beneficios que las mismas leyes ofrecen a
                los contribuyentes, del tal manera que nuestros clientes se
                sientan seguros de que su situación fiscal se encuentra dentro
                del marco legal.
              </motion.p>
            </div>

            <div className="block md:absolute md:translate-x-[95%] md:-translate-y-[10%] w-full h-fit md:h-[60vh] ">
              <img
                className="w-full h-[300px] md:h-full object-fill"
                src={nosotrosImg}
                alt=""
              />
            </div>
          </div>
        </>
      );
    }
    if (selection === "Vision") {
      return (
        <>
          <div className="bg-lime-600 w-full p-4 md:-translate-x-[85%]">
            <h3 className="text-black uppercase text-center md:text-end md:pt-5 font-semibold text-2xl">
              {selection}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row relative p-4">
            <div className="w-full flex flex-col justify-center">
              <h2 className="text-white text-center text-2xl">
                ¡Bienvenido a DGyA!
              </h2>
              <motion.h1
                initial={{ opacity: 0, translateX: "-50%" }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white mt-5 text-base mb-10"
              >
                Consolidarnos como un despacho de reconocido prestigio en base
                al cumplimiento siempre oportuno de todos nuestros compromisos
                desarrollados con profesionalismo, ética y diligencia.
              </motion.h1>
            </div>

            <div className="block md:absolute md:translate-x-[95%] md:-translate-y-[10%] w-full h-fit md:h-[60vh] ">
              <img
                className="w-full h-[300px] md:h-full object-fill"
                src={nosotrosImg}
                alt=""
              />
            </div>
          </div>
        </>
      );
    }
    if (selection === "Valores") {
      return (
        <>
          <div className="bg-lime-600 w-full p-4 md:-translate-x-[85%]">
            <h3 className="text-black uppercase text-center md:text-end md:pt-5 font-semibold text-2xl">
              {selection}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row relative p-4">
            <div className="w-full flex flex-col justify-center">
              <h2 className="text-white text-center text-2xl">
                ¡Bienvenido a DGyA!
              </h2>
              <motion.ul
                initial={{ opacity: 0, translateX: "-50%" }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white space-y-3 mt-5 text-base mb-5"
              >
                <li>- Ética profesional.</li>
                <li>- Compromiso.</li>
                <li>- Lealtad.</li>
                <li>- Honestidad.</li>
              </motion.ul>
            </div>

            <div className="block md:absolute md:translate-x-[95%] md:-translate-y-[10%] w-full h-fit md:h-[60vh] ">
              <img
                className="w-full h-[300px] md:h-full object-fill"
                src={nosotrosImg}
                alt=""
              />
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <MainLayoutDg>
      {/* MAIN */}
      <section
        class="flex items-center justify-center h-[90vh] md:h-screen  bg-fixed bg-center bg-cover "
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="w-full h-full flex flex-col ">
          <div className="flex-1 flex-grow w-full h-full flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              src={logo}
              loading="lazy"
              className="w-[600px]"
              alt=""
            />
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            href="#contacto"
            className="w-[200px] mt-auto mx-auto mb-14 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition-colors text-center uppercase border border-white text-white"
          >
            contactanos
          </motion.a>
        </div>
      </section>

      {/* NOSOTROS */}
      <div id="acerca" className="w-full pb-[5%] relative h-full bg-white">
        <div className="md:pl-[20%]  md:pt-[5%]">
          <div className="flex pt-5 ">
            <button
              onClick={() => setselection("Mision")}
              className={`w-full transition-colors px-0 flex justify-center md:w-0 md:px-16 py-2 font-semibold ${
                selection === "Mision" && "bg-black text-white"
              }`}
            >
              Mision
            </button>
            <button
              onClick={() => setselection("Vision")}
              className={`w-full transition-colors px-0 flex justify-center md:w-0 md:px-16 py-2 font-semibold ${
                selection === "Vision" && "bg-black text-white"
              } `}
            >
              Vision
            </button>
            <button
              onClick={() => setselection("Valores")}
              className={`w-full transition-colors px-0 flex justify-center md:w-0 md:px-16 py-2 font-semibold ${
                selection === "Valores" && "bg-black text-white"
              } `}
            >
              Valores
            </button>
          </div>
          <div className="bg-black w-full md:w-[45%] p-4">{OurGoalsSele()}</div>
        </div>

        {/* APP INFO */}
        <div className="w-full flex overflow-hidden flex-col pt-[10%] md:h-[90vh]">
          <div
            className="w-full md:scale-x-150 flex flex-col md:flex-row justify-center items-center md:h-full  bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${waves})` }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-[150px] h-1/2 md:h-full md:w-[300px] scale-110"
              src={cell}
              alt=""
            />
            <div className="flex items-center justify-center flex-col gap-3">
              <h2 className="md:text-3xl text-base  text-white text-justify font-bold">
                !OBTEN LA APLICACION AHORA Y <br />
                EXPERIMENTA LA DIFERENCIA!
              </h2>
              <p className="md:text-white text-DgyaDark text-center">
                Descubre como esta herramienta pueda impulsar tu exito
              </p>

              <button className="md:bg-white bg-black text-white md:text-black mt-5 md:mt-16 rounded-lg px-4 py-2 font-semibold">
                DESCARGA AQUI
              </button>
            </div>
          </div>
        </div>

        {/* GRADIENT */}
        <div className="w-full flex py-5 md:py-0 gap-y-5 md:gap-y-0 flex-col items-center  md:flex-row px-[15%] h-full md:h-[40vh] mt-7 bg-gradient-to-r from-lime-600 via-DgyaLight to-DgyaBase">
          <div className="md:w-1/2 flex flex-col justify-center ">
            <h2 className="text-3xl font-bold">PROXIMO CURSO</h2>
            <h2 className="text-3xl font-bold">9 DE SEPTIEMBRE DE 2023</h2>
            <p className="font-semibold text-base">Conoce nuestro temario</p>
            <p className="font-semibold text-base">
              Separa tu lugar con un anticipo
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center ">
            <h2 className="uppercase text-2xl font-semibold text-white">
              ingresa tus datos
            </h2>
            <input
              type="text"
              placeholder="NOMBRE"
              className="w-full md:w-[70%] mt-5 bg-transparent border-2 border-white rounded-md placeholder:text-center placeholder:text-white"
            />
            <input
              type="text"
              placeholder="E-MAIL"
              className="w-full md:w-[70%] mt-2 bg-transparent border-2 border-white rounded-md placeholder:text-center placeholder:text-white"
            />
            <input
              type="text"
              placeholder="WHATSAPP"
              className="w-full md:w-[70%] mt-2 bg-transparent border-2 border-white rounded-md placeholder:text-center placeholder:text-white"
            />

            <button className="w-full md:w-[70%] mt-5 py-1 uppercase bg-white text-black font-bold rounded-md">
              enviar
            </button>
            <p className="text-white text-sm">
              Te haremos llegar mas informacion sobre el curso y el temario
            </p>
          </div>
        </div>
      </div>

      {/* SERVICIOS */}
      <div
        id="servicios"
        className={`w-full h-full ${selection === "Mision" && "md:pt-[20vh]"}  ${
          selection === "Vision" && "pt-[0vh]"
        } ${selection === "Valores" && "pt-[0vh]"} md:pt-0 py-[5%] bg-black/90`}
      >
        <div className="md:px-[20%]">
          <div className="space-y-1">
            <h2 className="text-white pt-[7%] text-5xl font-bold uppercase text-center">
              servicios
            </h2>
            <h4 className="text-white text-xl text-center font-semibold">
              Expertos en simplificar tus impuestos y maximizar tus beneficios
            </h4>
            <h4 className="text-white text-xl text-center font-semibold pb-3">
              Descrube nuestros servicios
            </h4>
          </div>
          <div className="w-full grid grid-cols-1 px-4 pt-5 md:pt-0 md:grid-cols-3 gap-3 mt-10">
            {servicioData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className=" shadow-lg rounded-md p-4"
              >
                <FolderKanban className="text-green-500/90 mx-auto" size={70} />
                <h2 className="mt-4 text-center text-white font-bold">
                  {data.title}
                </h2>
                <h3 className="mt-2 text-center text-white font-semibold">
                  {data.description}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="w-full h-full pt-10 bg-white">
        <div className="md:px-[20%] pb-5 md:pt-16">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-6xl text-black font-bold uppercase text-center">
              descubre
            </h2>
            <h4 className="text-3xl md:text-6xl text-black font-bold text-center uppercase">
              nuestros paquetes
            </h4>
            <h4 className="text-black text-base md:text-xl text-center font-bold pb-3">
              Diseñados para adaptarse a tus necesidades especificas y <br />
              garantizar su cumplimiento.
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 h-full w-full">
          {services.map((servicio, index) => (
            <div
              className={`w-full mb-[5%] ${
                index !== 0 ? "mt-[2%]" : "mt-[7%]"
              } flex flex-col  ${
                index == 1 || index == 3
                  ? "bg-DgyaLight md:flex-row-reverse "
                  : "bg-DgyaBase md:flex-row"
              } px-[5%] py-[5%] md:py-0 gap-y-6 md:px-[15%] h-full md:h-[40vh] `}
            >
              <div className="md:w-1/2 flex justify-center items-center">
                <ul key={index} className="text-white font-bold space-y-2">
                  {servicio.contents.map((cont) => (
                    <li className="flex font-semibold items-center">
                      <CheckIcon className="mr-2 text-green-600" /> {cont.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-full md:w-[55%] md:scale-125 h-[200px] md:h-full rounded-md p-1 bg-gradient-to-r from-lime-600 via-DgyaLight to-DgyaBase">
                  <div className="bg-white rounded-md w-full h-full">
                    <h2 className="text-center text-xl md:text-2xl pt-5 text-black font-bold">
                      {servicio.title}
                    </h2>
                    <div className="w-full flex items-center justify-center h-[50%] ">
                      <h4 className="text-center text-6xl text-DgyaBase font-bold">
                        ${servicio.precio}{" "}
                        <span className="text-2xl text-black font-semibold my-auto">
                          /mes
                        </span>
                      </h4>
                    </div>

                    <div className="flex justify-center">
                      {User?.UserPlan == "Gratis" ||
                      User?.UserPlan == undefined ? (
                        <button
                          className="bg-gradient-to-r w-[65%] mx-auto from-lime-600 via-DgyaLight to-DgyaBase text-white font-bold py-1 rounded-md"
                          onClick={async () => {
                            if (User) {
                              let paymentData = {
                                UserId: User.uid,
                                Plan: servicio.Plan,
                              };
                              localStorage.setItem(
                                "payData",
                                JSON.stringify(paymentData)
                              );
                              const url = await POST(servicio.payId);
                              window.location.href = url;
                            } else {
                              navigate("/Login");
                            }
                          }}
                        >
                          Suscribete Aqui
                        </button>
                      ) : (
                        <button
                          disabled={
                            User?.UserPlan == servicio?.Plan ? true : false
                          }
                          className={` bg-gradient-to-r w-[65%] mx-auto cursor-pointer from-lime-600 via-DgyaLight to-DgyaBase text-white font-bold py-1 rounded-md`}
                          onClick={async () => {
                            if (User) {
                              let paymentData = {
                                UserId: User.uid,
                                Plan: servicio.Plan,
                              };
                              localStorage.setItem(
                                "payData",
                                JSON.stringify(paymentData)
                              );
                              const url = await POST(servicio.payId);
                              window.location.href = url;
                            } else {
                              navigate("/Login");
                            }
                          }}
                        >
                          {User?.UserPlan == servicio.Plan
                            ? "Estas Subscrito"
                            : "Cambiar Plan"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* {services.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateX: "-50%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col group p-8 text-center hover:bg-DgyaDark hover:scale-105 transition-colors text-gray-900 bg-white rounded-lg shadow "
              >
                <h3 className="mb-4 text-xl group-hover:text-white font-bold">
                  {servicio.title}
                </h3>
                <div className="flex justify-center items-baseline my-4">
                  <span className="mr-2 text-4xl group-hover:text-white text-DgyaDark font-extrabold">
                    ${servicio.precio}
                  </span>
                  <span className="text-gray-500 group-hover:text-white/80 dark:text-gray-400">
                    /mes
                  </span>
                </div>

                <ul role="list" className="mb-8 space-y-4 text-left">
                  {servicio.contents.map((contenido, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm group-hover:text-white">
                        {contenido.title}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="w-full h-full flex items-end justify-center ">
                  {User?.UserPlan == "Gratis" || User?.UserPlan == undefined ? (
                    <button
                      className="bg-DgyaDark group-hover:bg-white group-hover:text-DgyaDark font-bold text-white w-full py-2 rounded-md cursor-pointer hover:bg-white hover:text-DgyaDark transition-colors"
                      onClick={async () => {
                        if (User) {
                          let paymentData = {
                            UserId: User.uid,
                            Plan: servicio.Plan,
                          };
                          localStorage.setItem(
                            "payData",
                            JSON.stringify(paymentData)
                          );
                          const url = await POST(servicio.payId);
                          window.location.href = url;
                        } else {
                          navigate("/Login");
                        }
                        // const url = await POST(servicio.payId)
                        // window.location.href = url
                      }}
                    >
                      Suscribete Aqui
                    </button>
                  ) : (
                    <button
                      disabled={User?.UserPlan == servicio.Plan ? true : false}
                      className={` bg-DgyaDark text-white w-full py-2 rounded-md cursor-pointer hover:bg-black/70 transition-colors`}
                      onClick={async () => {
                        if (User) {
                          let paymentData = {
                            UserId: User.uid,
                            Plan: servicio.Plan,
                          };
                          localStorage.setItem(
                            "payData",
                            JSON.stringify(paymentData)
                          );
                          const url = await POST(servicio.payId);
                          window.location.href = url;
                        } else {
                          navigate("/Login");
                        }
                      }}
                    >
                      {User?.UserPlan == servicio.Plan
                        ? "Estas Subscrito"
                        : "Cambiar Plan"}
                    </button>
                  )}
                </div>
              </motion.div>
            ))} */}
        </div>
      </div>

      {/* CURSOS Y BLOGS */}
      <div className="w-full relative overflow-hidden h-[155vh] md:h-[140vh] pb-7 bg-black md:bg-white">
        <div
          className="hidden w-full  md:scale-x-[210%] md:flex justify-center items-center h-full  bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${wavesblack})` }}
        ></div>
        <div className="absolute inset-0 md:px-[20%] px-[5%] pb-5 md:pt-16">
          <div className="mt-10">
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
              Cursos y Blogs
            </h2>
            <h4 className="text-white mt-5 text-base md:text-xl text-center font-semibold">
              En DGyA, creemos en el poder del conocimiento. Por eso, te
              ofrecemos cursos y blogs que te mantendrán al tanto de las últimas
              tendencias y cambios en el mundo de la contabilidad y los
              impuestos
            </h4>
          </div>
          <div className="flex flex-col p-4 md:p-0 lg:flex-row mt-7 md:mt-16 justify-between gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full shadow-2xl lg:w-1/2 "
            >
              <img
                className="w-full h-full rounded-md"
                src={cursos}
                alt="A group of People"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: "50%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <h1 className="text-3xl lg:text-4xl text-center font-bold leading-9 text-white pb-4">
                Cursos en Linea
              </h1>
              <p className="font-normal text-base text-center leading-6 text-white ">
                Accede a cursos interactivos y actualizados que te permitirán
                profundizar tus conocimientos en contabilidad, impuestos y
                finanzas.
              </p>
              <Link
                to="/cursos"
                className="w-1/2 flex justify-center bg-white mx-auto hover:bg-black hover:text-white transition-all text-black font-bold mt-7 py-2 rounded-md"
              >
                Ve a Cursos
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col p-4 md:p-0 lg:flex-row-reverse mt-7 md:mt-16 justify-between gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full shadow-2xl lg:w-1/2 "
            >
              <img
                className="w-full h-full rounded-md "
                src={blogs}
                alt="A group of People"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <h1 className="text-3xl lg:text-4xl text-center font-bold leading-9 text-white pb-4">
                Blogs Informativos
              </h1>
              <p className="font-normal text-base text-center leading-6 text-white ">
                Accede a blogs interactivos y actualizados que te permitirán
                profundizar tus conocimientos en contabilidad, impuestos y
                finanzas.
              </p>
              <Link
                to="/blogs"
                className="w-1/2 flex justify-center bg-white mx-auto hover:bg-black hover:text-white transition-all text-black font-bold mt-7 py-2 rounded-md"
              >
                Ve a Blogs
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* REDES */}
      <div className="w-full h-[30vh] md:h-[35vh] relative">
        <div className="absolute inset-0 bg-white">
          <div className="md:px-[20%] py-5 md:pt-5">
            <div className="space-y-3 p-4">
              <h2 className="text-black text-4xl md:text-5xl font-bold text-center">
                Siguenos en Nuestas
              </h2>
              <h4 className="text-black text-4xl md:text-5xl font-bold text-center">
                Redes Sociales
              </h4>

              <div className="flex justify-center space-x-10 pt-7">
                <Instagram className="text-DgyaBase cursor-pointer" size={40} />
                <Facebook className="text-DgyaBase cursor-pointer" size={40} />
                <YoutubeIcon
                  className="text-DgyaBase cursor-pointer"
                  size={40}
                />
                <svg
                  className="w-10 h-10 fill-DgyaBase cursor-pointer"
                  viewBox="0 0 512 512"
                  id="icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div
        id="contacto"
        className="w-full relative bg-white h-[165vh] md:h-[120vh] overflow-hidden"
      >
        <div
          className="hidden w-full  md:scale-x-[350%] md:flex justify-center items-center h-full  bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${contactoWaves})` }}
        ></div>
        <div className="absolute bg-DgyaLight md:top-[20%]">
          <div className="md:px-[20%] flex flex-col-reverse md:flex-row py-5 md:pt-5">
            <div className="md:w-1/2 w-full p-4">
              <h2 className="mb-4 text-4xl tracking-tight font-semibold text-white">
                Contactanos
              </h2>

              <form className="space-y-3 mt-10">
                <div className="flex w-full gap-x-3 ">
                  <Input
                    className={"w-1/2"}
                    title={"Nombre"}
                    type={"text"}
                    name={"Nombre"}
                  />
                  <Input
                    className={"w-1/2"}
                    title={"Apellido"}
                    type={"text"}
                    name={"Apellido"}
                  />
                </div>
                <Input
                  className={"w-full"}
                  title={"Correo"}
                  type={"email"}
                  name={"email"}
                />

                <Input
                  className={"w-full"}
                  title={"Asunto"}
                  type={"text"}
                  name={"Asunto"}
                />

                <Input
                  className={"w-full"}
                  title={"Mensaje"}
                  type={"text"}
                  name={"Mensaje"}
                />

                <button className="w-full py-2 bg-DgyaDark cursor-pointer text-white rounded-md transition-colors hover:bg-white hover:text-DgyaDark">
                  Enviar
                </button>
              </form>
            </div>

            <div className="md:w-1/2 w-full p-4 md:p-0">
              <img
                className="w-full h-full object-fill"
                src={contacto}
                alt="A group of People"
              />
            </div>
          </div>
          <div className="w-full h-fit ">
            <div className="md:px-[20%] flex flex-col md:flex-row py-5 md:pt-5">
              <div className="w-full md:w-1/3">
                <h2 className="text-center text-white font-bold text-2xl">
                  Ubicacion
                </h2>
                <h4 className="text-center text-white font-semibold mt-10">
                  C. Mariano Matamorros 1103b, <br />
                  Centro, 64000 Monterrey, N.L.{" "}
                </h4>
              </div>
              <div className="w-full md:w-1/3">
                <h2 className="text-center text-white font-bold text-2xl">
                  Horario
                </h2>
                <h4 className="text-center text-white font-semibold mt-10">
                  Lunes a Viernes <br />
                  De 9:00 a.m. a 6:00 p.m.{" "}
                </h4>
              </div>
              <div className="w-full md:w-1/3">
                <h2 className="text-center text-white font-bold text-2xl">
                  Contacto
                </h2>
                <h4 className="text-center text-white font-semibold mt-10">
                  agonzalez@despachosgya.com <br />
                  info@despachosgya.com <br />
                  (81)0000 0000
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* 
       
        */}
      </div>

      {/* FOOTER */}
    </MainLayoutDg>
  );
};
