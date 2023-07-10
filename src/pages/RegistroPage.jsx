import React, { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import { FerrisWheel } from "lucide-react";
import { motion } from "framer-motion";

export const RegistroPage = () => {
  const [togglePassword, settogglePassword] = useState(false);

  const HandleToggle = () => {
    settogglePassword(!togglePassword);
  };

  return (
    <AuthLayout>
      <section class="w-full h-screen dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            class="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white"
          >
            <FerrisWheel className="h-full w-full" />
            DGYA
          </Link>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registrate
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div className="flex gap-x-3">
                  <div className="w-full">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombres
                    </label>
                    <input
                      type="text"
                      name="nombres"
                      id="nombres"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Pedro P"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Apellidos
                    </label>
                    <input
                      type="text"
                      name="apellidos"
                      id="apellidos"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Rodriguez G"
                      required=""
                    />
                  </div>
                </div>

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
                <div className="hidden">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Datos Fiscales
                  </h1>
                  <div className="flex gap-x-3">
                    <div className="w-full">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Cedula de identificacion fiscal
                      </label>
                      <input
                        type="number"
                        name="CIF"
                        id="CIF"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="2412432"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-black hover:bg-black/70 transition-colors focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Registrate
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Tienes una cuenta?{" "}
                  <Link
                    to="/login"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Inicia Sesion aqui
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};
