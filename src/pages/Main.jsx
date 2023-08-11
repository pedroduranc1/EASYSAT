import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { services } from "../assets/services";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { motion } from "framer-motion";

export const Main = () => {
  return (
    <MainLayout>
      <div className="my-5"></div>

      <motion.div
        initial={{ opacity: 0, translateY: "-50%" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5 }}
        className="md:mx-auto bg-white rounded-md shadow-md md:container px-4"
      >
        <div className="pt-10 md:pt-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 space-y-3 text-color">
                  <h1 className="text-2xl lg:text-5xl md:leading-snug tracking-tighter f-f-l font-black">
                    Servicios de Contabilidad para el Pago de Impuestos SAT DGYA
                  </h1>
                  <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    ¡Bienvenido a DGyA! Somos tu aliado confiable en el mundo de
                    la contabilidad y los impuestos SAT. Nuestro equipo de
                    expertos contadores está dedicado a brindar soluciones
                    financieras y asesoramiento estratégico a individuos y
                    empresas. Además, ofrecemos cursos y blogs actualizados para
                    mantenerte informado sobre las últimas novedades en el campo
                    de la contabilidad. Confía en nosotros para mantener tus
                    finanzas en orden y alcanzar el éxito empresarial.
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">
                      Mas info aqui
                    </h3>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#D53F8C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:w-1/3 md:w-1/2 w-full relative h-96 md:flex items-end justify-center">
                <img
                  className="absolute w-full h-full -top-[20%] inset-0 object-cover object-center rounded-md"
                  src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                  alt="photo"
                />
                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div className="flex items-center justify-between w-full sm:w-full mb-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-yellow-200 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-discount"
                          width={32}
                          height={32}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={9} y1={15} x2={15} y2={9} />
                          <circle cx="9.5" cy="9.5" r=".5" />
                          <circle cx="14.5" cy="14.5" r=".5" />
                          <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                          2,330
                        </h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                          Avg Sales
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pl-3 text-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trending-up"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                        <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                          7.2%
                        </p>
                      </div>
                      <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                        Increase
                      </p>
                    </div>
                  </div>
                  <div className="relative mb-3">
                    <hr className="h-1 rounded-sm bg-gray-200" />
                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                  </div>
                  <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                    Yearly Goal
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full h-2 my-5 bg-white shadow-md rounded-full"></div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white shadow-md rounded-md dark:bg-gray-900 overflow-x-hidden"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Servicios
              <div className="bg-black/70 max-w-[25%] mt-2 mx-auto rounded-full h-2"></div>
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              aqui en DGYA tenemos todo tipo de planes que podran ayudarte a
              cumplir todos tus requerimientos fiscales
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.3 }}
              className="shadow-md p-4 rounded-md"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <h3 className="mb-2 text-4xl font-bold dark:text-white">01</h3>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Declaración de Impuestos Personales y Empresariales
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nos encargamos de preparar y presentar tu declaración de
                impuestos, asegurándonos de maximizar tus deducciones y
                minimizar tu carga tributaria.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.5 }}
              className="shadow-md p-4 rounded-md"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <h3 className="mb-2 text-4xl font-bold dark:text-white">02</h3>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Contabilidad y Nómina
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Mantenemos tus registros contables actualizados y gestionamos la
                nómina de tus empleados, asegurando la puntualidad en los pagos
                y el cumplimiento de las obligaciones fiscales.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.7 }}
              className="shadow-md p-4 rounded-md"
            >
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <h3 className="mb-2 text-4xl font-bold dark:text-white">03</h3>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Asesoría Fiscal
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nuestros expertos te guiarán en la toma de decisiones
                financieras y fiscales, optimizando tus estrategias para lograr
                un crecimiento sostenible.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="w-full h-2 bg-white rounded-full my-5 shadow-md"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white shadow-md rounded-md dark:bg-gray-900"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Tenemos planes diseñados para todo tipo de situacion
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              aqui en DGYA tenemos todo tipo de planes que podran ayudarte a
              cumplir todos tus requerimientos fiscales
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-3 lg:space-y-0">
            {services.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: "-50%" }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col p-8 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
                <h3 className="mb-4 text-2xl font-semibold">
                  {servicio.title}
                </h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  {servicio.description}
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">
                    ${servicio.precio}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
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
                      <span>{contenido.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full h-full flex items-end justify-center ">
                  <Link
                    className="bg-black text-white w-full py-2 rounded-md cursor-pointer hover:bg-black/70 transition-colors"
                    to={servicio.PayLink ? servicio.PayLink : "#" }
                  >
                    Suscribete Aqui
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="w-full h-2 bg-white rounded-full my-5 shadow-md"></div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white shadow-md rounded-md dark:bg-gray-900 overflow-x-hidden"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Cursos y Blogs de Contabilidad
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              En DGyA, creemos en el poder del conocimiento. Por eso, te
              ofrecemos cursos y blogs que te mantendrán al tanto de las últimas
              tendencias y cambios en el mundo de la contabilidad y los
              impuestos. Nuestros recursos educativos incluyen:
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-3 lg:space-y-0">
            <motion.div
              initial={{ opacity: 0, translateX: "-50%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col p-8 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">Cursos en línea</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Accede a cursos interactivos y actualizados que te permitirán
                profundizar tus conocimientos en contabilidad, impuestos y
                finanzas.
              </p>

              <div className="w-full h-full flex items-end mt-5 justify-center ">
                <Link
                  to="/Cursos"
                  className="bg-black text-white w-full py-2 rounded-md cursor-pointer hover:bg-black/70 transition-colors"
                >
                  Ve a Cursos
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: "50%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col p-8 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                Blogs Informativos
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Nuestro equipo de expertos publica regularmente blogs sobre
                temas relevantes de contabilidad, ofreciendo consejos prácticos
                y análisis de las últimas regulaciones fiscales.
              </p>

              <div className="w-full h-full flex items-end mt-5 justify-center ">
                <Link
                  to="/Blogs"
                  className="bg-black text-white w-full py-2 rounded-md cursor-pointer hover:bg-black/70 transition-colors"
                >
                  Ve a Blogs
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="w-full h-2 bg-white shadow-md rounded-full my-5"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="2xl:container bg-white rounded-md shadow-md 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Vision
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              En DGyA, nuestra misión es brindar servicios contables confiables
              y soluciones fiscales efectivas que permitan a nuestros clientes
              alcanzar el cumplimiento tributario y el éxito financiero.
              Valoramos la ética, la transparencia y la excelencia en cada
              aspecto de nuestro trabajo.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="my-5 w-full h-2 rounded-full"></div>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full flex items-center lg:w-1/2 ">
            <img
              className="w-full h-96  "
              src="./hero.png"
              alt="A group of People"
            />
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Por que elegirnos?
            </h1>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
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
                <span>
                  <strong>Experiencia y Profesionalismo:</strong> <br /> Nuestro
                  equipo está formado por contadores con amplia experiencia y
                  conocimientos actualizados en materia fiscal.
                </span>
              </li>
              <li className="flex items-center space-x-3">
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
                <span>
                  <strong>Experiencia y Profesionalismo:</strong> <br /> Nuestro
                  equipo está formado por contadores con amplia experiencia y
                  conocimientos actualizados en materia fiscal.
                </span>
              </li>
              <li className="flex items-center space-x-3">
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
                <span>
                  <strong>Experiencia y Profesionalismo:</strong> <br /> Nuestro
                  equipo está formado por contadores con amplia experiencia y
                  conocimientos actualizados en materia fiscal.
                </span>
              </li>
              <li className="flex items-center space-x-3">
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
                <span>
                  <strong>Experiencia y Profesionalismo:</strong> <br /> Nuestro
                  equipo está formado por contadores con amplia experiencia y
                  conocimientos actualizados en materia fiscal.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="w-full h-2 bg-white shadow-md rounded-full my-5"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white shadow-md rounded-md w-full flex items-center justify-center"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Contactanos
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              ¿Listo para llevar tus finanzas al siguiente nivel? ¡Contáctanos
              hoy mismo para una consulta gratuita! Estamos aquí para ayudarte a
              alcanzar el éxito financiero que mereces.
            </p>
          </div>
          <form className="space-y-3">
            <Input
              className={"w-full"}
              name={"Nombre"}
              type={"text"}
              title={"Nombre de la persona o Empresa"}
            />
            <div className="flex w-full gap-x-3 ">
              <Input
                className={"w-1/2"}
                title={"Direccion"}
                type={"text"}
                name={"Direccion"}
              />
              <Input
                className={"w-1/2"}
                title={"Telefono"}
                type={"text"}
                name={"Telefono"}
              />
            </div>
            <Input
              className={"w-full"}
              title={"Correo"}
              type={"email"}
              name={"email"}
            />

            <button className="w-full py-2 bg-black cursor-pointer text-white rounded-md transition-colors hover:bg-black/70">
              Contacto
            </button>
          </form>
        </div>
      </motion.div>
    </MainLayout>
  );
};
