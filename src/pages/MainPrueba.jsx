import React, { useState } from "react";
import { MainLayoutDg } from "../layouts/MainLayoutDg";
import { Facebook, FolderKanban, Instagram, YoutubeIcon } from "lucide-react";
import { services } from "../assets/services";
import { useAuth } from "../hooks/useAuth";
import { Input } from "../components/ui/Input";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MainPrueba = () => {
  const { User } = useAuth();

  const [selection, setselection] = useState("Mision");

  const OurGoalsSele = () => {
    if (selection === "Mision") {
      return (
        <>
          <div className="bg-white w-full p-4 md:-translate-x-[85%]">
            <h3 className="text-DgyaDark uppercase text-center md:text-end md:pt-5 font-bold text-2xl">
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
                src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
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
          <div className="bg-white w-full p-4 md:-translate-x-[85%]">
            <h3 className="text-DgyaDark uppercase text-center md:text-end md:pt-5 font-bold text-2xl">
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
                src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
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
          <div className="bg-white w-full p-4 md:-translate-x-[85%]">
            <h3 className="text-DgyaDark uppercase text-center md:text-end md:pt-5 font-bold text-2xl">
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
              className="text-white space-y-3 mt-5 text-base mb-5">
                <li>- Ética profesional.</li>
                <li>- Compromiso.</li>
                <li>- Lealtad.</li>
                <li>- Honestidad.</li>
              </motion.ul>
            </div>

            <div className="block md:absolute md:translate-x-[95%] md:-translate-y-[10%] w-full h-fit md:h-[60vh] ">
              <img
                className="w-full h-[300px] md:h-full object-fill"
                src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
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
      <section class="flex items-center justify-center h-[90vh] md:h-screen  bg-fixed bg-center bg-cover  bg-hero-img">
        <div className="w-full h-full flex flex-col bg-black/80">
          <div className="flex-1 flex-grow w-full h-full flex justify-center items-center">
            <motion.img
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:0.2}}
              src="./logo-white.png"
              loading="lazy"
              className="w-[600px]"
              alt=""
            />
          </div>
          <motion.a
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.3}}
            href="#contacto"
            className="w-[200px] mt-auto mx-auto mb-14 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition-colors text-center uppercase border border-white text-white"
          >
            contactanos
          </motion.a>
        </div>
      </section>

      {/* NOSOTROS */}
      <div id="acerca" className="w-full relative h-screen bg-DgyaLight">
        <div className="md:pl-[20%]  md:pt-[5%]">
          <div className="flex pt-5 ">
            <button
              onClick={() => setselection("Mision")}
              className={`w-full transition-colors px-0 flex justify-center md:w-0 md:px-16 py-2 font-semibold ${
                selection === "Mision" && "bg-black"
              } text-white`}
            >
              Mision
            </button>
            <button
              onClick={() => setselection("Vision")}
              className={`w-full transition-colors px-0 flex justify-center md:w-0 md:px-16 py-2 font-semibold ${
                selection === "Vision" && "bg-black"
              } text-white`}
            >
              Vision
            </button>
            <button
              onClick={() => setselection("Valores")}
              className={`w-full transition-colors px-0 flex justify-center md:w-0 md:px-16 py-2 font-semibold ${
                selection === "Valores" && "bg-black"
              } text-white`}
            >
              Valores
            </button>
          </div>
          <div className="bg-black w-full md:w-[45%] p-4">{OurGoalsSele()}</div>
        </div>
      </div>

      {/* SERVICIOS */}
      <div
        id="servicios"
        className={`w-full h-full ${selection==="Mision" && 'pt-[20vh]'}  ${selection==="Vision" && 'pt-[0vh]'} ${selection==="Valores" && 'pt-[0vh]'} md:pt-0 pb-5 bg-DgyaLight`}
      >
        <div className="md:px-[20%]">
          <div className="space-y-1">
            <h2 className="text-white text-5xl font-bold uppercase text-center">
              servicios
            </h2>
            <h4 className="text-white text-xl text-center font-semibold">
              Expertos en simplificar tus impuestos y maximizar tus beneficios
            </h4>
            <h4 className="text-white text-xl text-center font-semibold pb-3">
              Descrube nuestros servicios
            </h4>

            <div className="bg-white w-[20%] h-[4px] rounded-md mx-auto"></div>
          </div>
          <div className="w-full grid grid-cols-1 px-4 pt-5 md:pt-0 md:grid-cols-3 gap-3 mt-10">
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.2}}
            className="bg-white shadow-lg rounded-md p-4">
              <FolderKanban className="text-DgyaDark mx-auto" size={70} />
              <h2 className="mt-4 text-center text-black font-bold">
                Declaración de Impuestos Personales y Empresariales
              </h2>
              <h3 className="mt-2 text-center text-black font-semibold">
                Nos encargamos de preparar y presentar tu declaración de
                impuestos, asegurándonos de maximizar tus deducciones y
                minimizar tu carga tributaria.
              </h3>
            </motion.div>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.3}}
            className="bg-white shadow-lg rounded-md p-4">
              <FolderKanban className="text-DgyaDark mx-auto" size={70} />
              <h2 className="mt-4 text-center text-black font-bold">
                Contabilidad y Nómina
              </h2>
              <h3 className="mt-2 text-center text-black font-semibold">
                Mantenemos tus registros contables actualizados y gestionamos la
                nómina de tus empleados, asegurando la puntualidad en los pagos
                y el cumplimiento de las obligaciones fiscales.
              </h3>
            </motion.div>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.4}}
            className="bg-white shadow-lg rounded-md p-4">
              <FolderKanban className="text-DgyaDark mx-auto" size={70} />
              <h2 className="mt-4 text-center text-black font-bold">
                Asesoría Fiscal
              </h2>
              <h3 className="mt-2 text-center text-black font-semibold">
                Nuestros expertos te guiarán en la toma de decisiones
                financieras y fiscales, optimizando tus estrategias para lograr
                un crecimiento sostenible.
              </h3>
            </motion.div>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.4}}
            className="bg-white shadow-lg rounded-md p-4">
              <FolderKanban className="text-DgyaDark mx-auto" size={70} />
              <h2 className="mt-4 text-center text-black font-bold">
                Facturacion electronica
              </h2>
              <h3 className="mt-2 text-center text-black font-semibold">
                Agiliza tus procesos contables con la facturacion electronica de
                manera digital y segura
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="w-full h-full pt-10 bg-DgyaLight">
        <div className="md:px-[20%] pb-5 md:pt-16">
          <div className="space-y-1">
            <h2 className="text-white text-5xl font-bold uppercase text-center">
              descubre
            </h2>
            <h4 className="text-white text-xl text-center font-semibold">
              nuestros paquetes
            </h4>
            <h4 className="text-white text-xl text-center font-semibold pb-3">
              Diseñados para adaptarse a tus necesidades especificas y
              garantizar su cumplimiento.
            </h4>
          </div>
          <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 h-full w-full">
            {services.map((servicio, index) => (
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
            ))}
          </div>
        </div>
      </div>

      {/* CURSOS Y BLOGS */}
      <div className="w-full overflow-x-hidden h-full pb-7 bg-DgyaLight">
        <div className="md:px-[20%] pb-5 md:pt-16">
          <div className="space-y-3 p-4">
            <h2 className="text-white text-4xl md:text-5xl font-bold text-center">
              Cursos y Blogs
            </h2>
            <h4 className="text-white  text-base md:text-xl text-center font-semibold">
              En DGyA, creemos en el poder del conocimiento. Por eso, te
              ofrecemos cursos y blogs que te mantendrán al tanto de las últimas
              tendencias y cambios en el mundo de la contabilidad y los
              impuestos
            </h4>
          </div>

          <div className="flex flex-col p-4 md:p-0 lg:flex-row mt-7 md:mt-16 justify-between gap-8">
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.2}}
            className="w-full shadow-2xl lg:w-1/2 ">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
            </motion.div>
            <motion.div 
            initial={{opacity:0,translateX:'50%'}}
            whileInView={{opacity:1,translateX:0}}
            transition={{delay:0.3}}
            className="w-full lg:w-1/2 flex flex-col justify-center">
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
                className="w-1/2 flex justify-center bg-DgyaDark mx-auto hover:bg-white hover:text-DgyaDark transition-all text-white mt-7 py-2 rounded-md"
              >
                Ve a Cursos
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col p-4 md:p-0 lg:flex-row-reverse mt-7 md:mt-16 justify-between gap-8">
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.4}}
            className="w-full shadow-2xl lg:w-1/2 ">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
            </motion.div>
            <motion.div 
            initial={{opacity:0,translateX:'-50%'}}
            whileInView={{opacity:1,translateX:0}}
            transition={{delay:0.4}}
            className="w-full lg:w-1/2 flex flex-col justify-center">
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
                className="w-1/2 flex justify-center bg-DgyaDark hover:bg-white hover:text-DgyaDark transition-all mx-auto text-white mt-7 py-2 rounded-md"
              >
                Ve a Blogs
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* REDES */}
      <div className="w-full h-fit md:h-[35vh] relative">
        <img src="./fondo.jpg" className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/70">
          <div className="md:px-[20%] py-5 md:pt-5">
            <div className="space-y-3 p-4">
              <h2 className="text-white text-4xl md:text-5xl font-bold text-center">
                Siguenos en Nuestas
              </h2>
              <h4 className="text-white text-4xl md:text-5xl font-bold text-center">
                Redes Sociales
              </h4>

              <div className="flex justify-center space-x-10 pt-7">
                <Instagram className="text-white" size={40} />
                <Facebook className="text-white" size={40} />
                <YoutubeIcon className="text-white" size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div id="contacto" className="w-full h-fit py-7 bg-DgyaLight">
        <div className="md:px-[20%] flex flex-col-reverse md:flex-row py-5 md:pt-5">
          {/* CONTACTO */}
          <div className="md:w-1/2 w-full p-4">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
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
          {/* IMG */}
          <div className="md:w-1/2 w-full p-4 md:p-0">
            <img
              className="w-full h-full object-fill"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full h-fit bg-DgyaLight">
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
    </MainLayoutDg>
  );
};
