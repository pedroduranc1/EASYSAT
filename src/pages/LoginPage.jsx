import React, { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { FerrisWheel, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const LoginPage = () => {
  const [togglePassword, settogglePassword] = useState(false);
  const [userInfo, setuserInfo] = useState({
    email: "prueba@gmail.com",
    pass: "prueba",
  });

  const HandleToggle = () => {
    settogglePassword(!togglePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datosFormulario = new FormData(e.target);
    const datos = {};
    for (let [nombre, valor] of datosFormulario.entries()) {
      datos[nombre] = valor;
    }
    if (userInfo.email == datos.email && userInfo.pass == datos.pass) {
      window.location.href = "/inicio";
    } else {
      console.log("error de credenciales");
    }
  };

  return (
    <AuthLayout>
      <div className="w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <section class=" dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="#"
                class="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white"
              >
                <FerrisWheel className="h-full w-full" />
                DGYA
              </a>
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Inicia Sesion
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Correo
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Contrasena
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-black hover:bg-black/70 transition-colors focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Iniciar Sesion
                    </button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Todavia no tienes una cuenta?{" "}
                      <Link
                        to="/Registro"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Registrate Aqui
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <div className="flex flex-col justify-center gap-y-5">
            <h1 className="text-xl text-center md:text-start md:ml-[10%] mb-5 md:text-2xl font-bold">
              Iniciando Sesion tendras acceso <br /> a los siguientes productos
            </h1>
            <ul className="space-y-5 px-6 mb-5">
              <li className="flex">
                <div className="w-5 h-5 md:w-7 md:h-7 p-1 mr-2 flex justify-center items-center bg-black rounded-full text-white">
                  <Check />
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">Acesso a tu cuenta de contabilidad</h2>
                  <p>
                    maneja y archiva todos tus registros contables y mucho mas
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="w-5 h-5 md:w-7 md:h-7 p-1 mr-2 flex justify-center items-center bg-black rounded-full text-white">
                  <Check />
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">Cursos Personalizados</h2>
                  <p>
                    Obten Cursos de los mejores en el area.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="w-5 h-5 md:w-7 md:h-7 p-1 mr-2 flex justify-center items-center bg-black rounded-full text-white">
                  <Check />
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">Y muchas cosas mas..</h2>
                 
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
