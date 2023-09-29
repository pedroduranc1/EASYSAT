import React, { useEffect, useRef, useState } from "react";
import { MainLayoutDg } from "../layouts/MainLayoutDg";
import { FolderKanban, CheckIcon, User2 } from "lucide-react";
import { services } from "../assets/services";
import { servicioData } from "../assets/serviciosData";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import fondo from "../assets/fondo.webp";
import waves from "../assets/waves.webp";
import cell from "../assets/cell.webp";
import wavesblack from "../assets/waves-black.webp";
import blogs from "../assets/blogs.webp";
import cursos from "../assets/cursos.webp";
import contactoWaves from "../assets/contacto-waves.webp";
import logo from "../assets/logocolor.webp";
import logogreen from "../assets/icons/business.webp";
import logoblue from "../assets/icons/building.webp";
import logoorange from "../assets/icons/handshake.webp";
import logoBuho from "../assets/logo-buho-white.webp";
import facebookLogo from "../assets/icons/Icono-Facebbok.svg";
import instagramLogo from "../assets/icons/Icono-Instagram.svg";
import tiktokLogo from "../assets/icons/Icono-TikTok.svg";
import youtubeLogo from "../assets/icons/Icono-YouTube.svg";
import valores from "../assets/imag-valores.webp";
import { SubsCtrl } from "../api/check/fb.subs";
import { User } from "../api/fb.user";
import SubscriptionButton from "../components/SubscriptionButton";
import { estaEntreLasFechas } from "../utils/funcs";
import { useQuery } from "react-query";
import { toast } from "../components/ui/use-toast";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../utils/main.form";
import emailjs from "@emailjs/browser";
import imgMotivadora from "../assets/nosotros1.webp";
import imgGreen from "../assets/nosotros2.webp";
import porqueelegirnos from "../assets/porqueelegirnos.webp";
import handshakeimg from "../assets/handshakeimg.webp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  OpinionesClientes,
  PreguntasFrecuentesData,
} from "../assets/adminData";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import RotatingDivs from "../components/RotatingDivs";

const Subs = new SubsCtrl();
const UserCtrl = new User();
export const MainPrueba = () => {
  const { User } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef();

  const [selection, setselection] = useState("Mision");
  const { data: subInfo } = useQuery("subs", () => Subs.getSubs());

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const res = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          formRef.current,
          import.meta.env.VITE_EMAILJS_KEY
        );

        if (res.status === 200) {
          toast({
            title: "Correo enviado exitosamente",
          });
          formik.resetForm();
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  useEffect(() => {
    (async () => {
      subInfo?.map((sub) => {
        if (sub?.uid === User?.uid && User?.UserPlan == "Gratis") {
          toast({
            variant: "destructive",
            title: "Tu Subscripcion a caducado",
            description:
              "Renueva para seguir disfrutando de nuestros servicios",
          });
        }
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      subInfo?.map(async (sub) => {
        const { fechaDeCreacion, fechaDeFinalizacion } = sub;
        if (!estaEntreLasFechas(fechaDeCreacion, fechaDeFinalizacion)) {
          await UserCtrl.UpdatePlanById(sub?.uid, "Gratis");
        }
      });
    })();
  }, []);

  return (
    <MainLayoutDg>
      {/* TERMINAR EL FORM CON FORMIK */}
      {/* MAIN */}
      <section
        div
        className="flex items-center justify-center h-fit md:h-screen overflow-hidden bg-fixed bg-center bg-contain md:bg-cover"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="w-full p-[5%] mt-[12%] md:mt-0 h-full flex flex-col md:flex-row ">
          <div className="md:w-1/2 h-full flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          {/* NUEVO CONTEXT INFO */}
          <div className="md:w-1/2 h-full flex flex-col  items-center">
            <h2 className="md:mt-[40%] lg:mt-[15%] text-center mt-10 text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              contabilidad para personas fisicas y morales.
            </h2>
            <h4 className="text-center font-bold text-base mt-5 uppercase">
              llevar una contabilidad financiera adecuada es fundamental para el
              exito y sostenibilidad de una empresa
            </h4>

            <RotatingDivs />
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <div id="acerca" className="w-full pb-[5%] relative h-full bg-white">
        {/* NOSOTROS SECTION */}
        <div className="w-full md:h-screen lg:h-[70vh] px-[5%] lg:px-[20%]">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 pt-20">
            <div className=" w-full md:w-[60%] md:ml-auto md:mt-auto h-[30vh] md:h-[21vh]">
              <img
                className="w-full h-full bg-center bg-contain bg-no-repeat"
                src={cursos}
                alt=""
              />
            </div>
            <div
              className=" hover:bg-none relative group bg-cover transition-all cursor-pointer bg-no-repeat w-full flex flex-col items-center justify-center h-[35vh]"
              style={{ backgroundImage: `url(${imgGreen})` }}
            >
              <div className="w-full h-full absolute inset-0 group-hover:hidden bg-LogoGreen"></div>
              <img
                className="w-1/2 group-hover:hidden z-10"
                src={logogreen}
                alt=""
              />
              <h2 className="text-white font-bold z-10 text-xl -translate-y-7">
                Quienes somos
              </h2>
              <p className="text-white hidden z-10 font-bold group-hover:block text-[12px] px-[5%]">
                EasySat es una aplicacion web para simplificar el cumplimiento
                de tus obligaciones fiscales, creado por contadores para
                emprendedores que no les guste batallar con temas fiscales y de
                esa autoridad gubernamental que se llama SAT, olvidate de
                batallar con el sat y utiliza EasySat
              </p>
            </div>
            <div className="w-full md:w-[60%] md:mr-auto md:mt-auto h-[30vh] md:h-[21vh]">
              <img
                className="w-full h-full bg-center bg-contain bg-no-repeat"
                src={blogs}
                alt=""
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3">
            <div className="relative cursor-pointer group  bg-center bg-cover bg-no-repeat w-full md:translate-x-[20%] flex flex-col items-center justify-center h-[35vh]"
            style={{ backgroundImage: `url(${handshakeimg})` }}
            >
              <div className="w-full h-full absolute inset-0 group-hover:hidden bg-LogoBlue"></div>
              <img
                className="w-1/2 group-hover:hidden z-10"
                src={logoorange}
                alt=""
              />
              <h2 className="text-white font-bold z-10 text-xl -translate-y-7">
                Como te ayudaremos
              </h2>
              <p className="text-white hidden z-10 font-bold group-hover:block text-[12px] px-[5%]">
                Somos un despacho de contadores y auditores establecido desde
                hace ya de 10 años, con sus oficinas centrales en el centro de
                Monterrey Nuevo Leon, nuestros contadores constantemente
                actualizados, garantizan tu seguridad en temas fiscales.
              </p>
            </div>
            <div className="bg-slate-500 w-full md:w-[60%] mx-auto mb-auto h-[30vh] md:h-[21vh]">
              <img
                className="w-full h-full bg-center bg-contain bg-no-repeat"
                src={valores}
                alt=""
              />
            </div>

            <div className=" cursor-pointer relative group hover:bg-imageOrange bg-center bg-cover bg-no-repeat w-full md:-translate-x-[20%] flex flex-col items-center justify-center h-[35vh]"
            style={{ backgroundImage: `url(${porqueelegirnos})` }}
            >
              <div className="w-full h-full absolute inset-0 group-hover:hidden bg-LogoYellow"></div>
              <img className="w-1/2 group-hover:hidden z-10" src={logoblue} alt="" />
              <h2 className="text-white font-bold z-10 text-xl -translate-y-7">
                Porque Elegirnos
              </h2>
              <p className="text-white hidden z-10 font-bold group-hover:block text-[12px] px-[5%]">
                Somos un despacho de contadores y auditores establecido desde
                hace ya de 10 años, con sus oficinas centrales en el centro de
                Monterrey Nuevo Leon, nuestros contadores constantemente
                actualizados, garantizan tu seguridad en temas fiscales.
              </p>
            </div>
          </div>
        </div>

        {/* PALABRA MOTIVADORA */}
        <div
          className="w-full flex justify-center overflow-hidden items-center bg-center bg-cover bg-fixed h-[50vh] mt-28"
          style={{ backgroundImage: `url(${imgMotivadora})` }}
        >
          <motion.h2
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center text-3xl md:text-5xl font-bold text-white"
          >
            Deja de batallar con el sat y <br />
            utiliza EasySat
          </motion.h2>
        </div>

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
                Descubre como esta herramienta pueda impulsar tu exito
              </p>

              <button className="md:bg-black bg-black text-white md:text-white mt-5 lg:mt-16 rounded-lg px-4 py-2 font-semibold">
                PROXIMAMENTE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICIOS */}
      <div
        id="servicios"
        className={`w-full h-full ${selection === "Mision" && "md:pt-[1vh]"}  ${
          selection === "Vision" && "pt-[0vh]"
        } ${selection === "Valores" && "pt-[0vh]"} md:pt-0 py-[5%] bg-black/90`}
      >
        <div className="md:px-[10%] lg:px-[20%]">
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
                <FolderKanban className="text-LogoGreen mx-auto" size={70} />
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
      <div className="w-full h-full pt-5 lg:pt-10 bg-white">
        <div className="md:px-[10%] lg:px-[20%] lg:pb-5 md:pt-16">
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
              key={index}
              className={`w-full mb-[5%] ${
                index !== 0 ? "mt-[2%]" : "mt-[7%]"
              } flex flex-col  ${
                index == 1 || index == 3
                  ? "bg-LogoBlueDark md:flex-row-reverse "
                  : "bg-LogoBlue md:flex-row"
              } px-[5%] py-[5%] md:py-0 gap-y-6 lg:px-[15%] h-full md:h-[40vh] `}
            >
              <div className="md:w-1/2 flex justify-center items-center">
                <ul key={index} className="text-white font-bold space-y-2">
                  {servicio.contents.map((cont) => (
                    <li className="flex font-semibold items-center">
                      <CheckIcon className="mr-2 w-[20%] text-LogoGreen" />{" "}
                      <span className="w-[80%] lg:text-xl">{cont.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div
                  className={`w-full md:w-[55%] md:scale-125 h-fit md:h-full rounded-md p-[2pt] bg-gradient-to-r from-LogoGreen ${
                    index == 1 || index == 3 ? "" : ""
                  } ${
                    index == 1 || index == 3
                      ? "via-LogoBlue to-LogoBlueDark"
                      : "via-LogoBlueDark to-LogoBlue"
                  }`}
                >
                  <div className="bg-white rounded-md p-4 gap-4 md:p-2 md:gap-2 flex flex-col items-center justify-center w-full h-full">
                    <h2 className="text-center text-base  pt-5 md:pt-2 text-black font-bold">
                      {servicio.title}
                      {index == 3 && (
                        <h3 className="text-center text-base pt-2 text-black/50 font-semibold">
                          {servicio.description}
                        </h3>
                      )}
                    </h2>

                    <div className="w-full flex items-center justify-center h-[50%] ">
                      <h4 className="text-center text-4xl  text-DgyaBase font-bold">
                        {servicio.precio == 0 ? (
                          <>
                            <span>Gratis</span>
                          </>
                        ) : (
                          <>
                            <span className="w-[80%]">${servicio.precio}</span>
                            <span className="w-[20%] text-2xl text-black font-semibold my-auto">
                              /mes
                            </span>
                          </>
                        )}
                      </h4>
                    </div>

                    <div className="flex justify-center">
                      {!User ? (
                        <button
                          disabled={
                            User?.UserPlan == servicio?.Plan ? true : false
                          }
                          className={`bg-gradient-to-r px-6 mx-auto cursor-pointer from-LogoGreen via-LogoBlueDark to-LogoBlue text-white font-bold py-1 rounded-md`}
                          onClick={async () => {
                            navigate("/Login");
                          }}
                        >
                          Obtener Plan
                        </button>
                      ) : (
                        <>
                          {User?.UserPlan != "Gratis" ? (
                            <>
                              {User?.UserPlan == servicio.Plan &&
                              User?.UserPlan != "Gratis" ? (
                                <span className="w-full bg-gradient-to-r font-semibold text-white px-6 py-[2%] rounded-md from-LogoGreen via-LogoBlueDark to-LogoBlue">
                                  Plan Actual
                                </span>
                              ) : (
                                <>
                                  <span className="w-full bg-gradient-to-r font-semibold text-white px-6 py-[2%] rounded-md from-LogoGreen via-LogoBlueDark to-LogoBlue">
                                    Ya posees plan
                                  </span>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              {servicio.precio != 0 && (
                                <SubscriptionButton
                                  price={servicio.precio}
                                  plan={servicio.Plan}
                                />
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CURSOS Y BLOGS */}
      <div className="w-full overflow-hidden bg-white  md:h-full  flex flex-col">
        <div
          className="w-full h-full  flex flex-col px-[5%] md:px-[10%] lg:px-[20%] bg-[length:100%_100%] bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${wavesblack})` }}
        >
          <div className="pt-[30%] md:pt-44 lg:pt-20">
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col p-4 md:p-0 lg:flex-row mt-7 md:mt-16 justify-between gap-8"
          >
            <div
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
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
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
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col mb-[30%] md:mb-44 lg:mb-20 p-4 md:p-0 lg:flex-row-reverse mt-7 md:mt-16 justify-between gap-8"
          >
            <div className="w-full shadow-2xl lg:w-1/2 ">
              <img
                className="w-full h-full rounded-md "
                src={blogs}
                alt="A group of People"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* PREGUNTAS FRECUENTES */}
      <div className="w-full bg-white h-fit">
        <div className="px-[3%] md:px-[5%] lg:px-[10%] flex w-full h-fit  flex-col md:flex-row py-5 md:pt-5">
          <div className="md:w-1/2 relative h-full bg-transparent  flex justify-center items-center">
            <div
              className="w-full h-[45dvh] invert grayscale opacity-20 bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${logoBuho})` }}
            ></div>
            <h2 className="absolute  text-LogoBlue text-3xl font-bold">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="md:w-1/2 my-auto flex items-center justify-center h-full">
            <Accordion type="single" collapsible className="w-full">
              {PreguntasFrecuentesData.map((preg, index) => (
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{preg.pregunta}</AccordionTrigger>
                  <AccordionContent>
                    {typeof preg.respuesta == "object" ? (
                      <ul>
                        {preg.respuesta.map((resp) => (
                          <li>{resp}</li>
                        ))}
                      </ul>
                    ) : (
                      <>{preg.respuesta}</>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-white h-fit">
        <div className="px-[3%] md:px-[5%] lg:px-[10%] flex w-full h-fit  flex-col  py-5 md:pt-5">
          <div className="w-full space-y-3 md:p-4">
            <h2 className="text-black text-3xl md:text-4xl font-bold text-center">
              Lo que opinan
            </h2>
            <h4 className="text-black text-3xl md:text-4xl font-bold text-center">
              otros Cliente de Nosotros
            </h4>
          </div>
          <div className="mt-10 grid p-3 gap-10 grid-cols-1 md:grid-cols-3">
            {OpinionesClientes.map((opi, index) => (
              <div key={index} className="bg-white p-3 shadow-xl">
                <div className="flex mb-2 ">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center -translate-x-[50%] -translate-y-[25%]">
                    <Avatar className="w-full h-full">
                      <AvatarImage src={opi?.imgUrl} />
                      <AvatarFallback className="bg-black">
                        <User2 className="text-white bg-black p-2 w-14 h-14" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h2 className="font-bold -translate-x-[10%] text-xl">
                      {opi.nombre}
                    </h2>
                    <h4 className="font-semibold -translate-x-[10%] text-lg">
                      {opi.cargo}
                    </h4>
                  </div>
                </div>

                <p className="mb-5">{opi.msg}</p>
              </div>
            ))}
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
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="w-14 h-14 bg-center bg-cover"
                  style={{ backgroundImage: `url(${instagramLogo})` }}
                ></a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="w-14 h-14 bg-center bg-cover"
                  style={{ backgroundImage: `url(${facebookLogo})` }}
                ></a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="w-14 h-14 bg-center bg-cover"
                  style={{ backgroundImage: `url(${youtubeLogo})` }}
                ></a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="w-14 h-14 bg-center bg-cover"
                  style={{ backgroundImage: `url(${tiktokLogo})` }}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div id="contacto" className="w-full  bg-white  md:h-full  flex flex-col">
        <div
          className="w-full h-full  flex flex-col px-[5%] md:px-[10%] lg:px-[20%]  bg-[length:100%_100%] bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${contactoWaves})` }}
        >
          <div className="mt-[20%] md:mt-[10%]">
            <div className="w-full h-fit ">
              <div className=" flex flex-col md:flex-row py-5 md:pt-5">
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
        </div>
      </div>
    </MainLayoutDg>
  );
};
