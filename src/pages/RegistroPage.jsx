import React, { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { Building2 , Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export const RegistroPage = () => {

    const [togglePassword, settogglePassword] = useState(false);

  const HandleToggle = () => {
    settogglePassword(!togglePassword);
  };

  return (
    <AuthLayout>
      <div className="w-full h-full flex grid-cols-[0.5fr_1fr]">
        <div className="relative bg-slate-700 w-full h-full p-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Building2 className="w-12 h-12 text-white" />
            <h1 className="text-white text-5xl font-bold mb-4">DgYa</h1>
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full  p-4 ">
            <h1 className="text-white text-2xl font-semibold">
              "Gestiona tus impuetos con nosotros"
            </h1>
          </div>
        </div>
        <div className="bg-slate-300 flex items-center justify-center p-2 w-full h-full">
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-col md:px-[10%] justify-center lg:px-[30%]"
          >
            <h2 className="my-5 text-center text-2xl font-semibold">
              Crea un cuenta
            </h2>
            <div className="flex space-x-3 mb-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Nombres
                </label>
                <input
                  type="text"
                  id="nombres"
                  placeholder="John S"
                  className="w-full px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-black"
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  id="apellidos"
                  placeholder="Smith Doe"
                  className="w-full px-4 py-2 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-black"
              >
                Ingresa tu Correo
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@dgya.com"
                className="w-full px-4 py-2 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-black"
              >
                Repite tu correo
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@dgya.com"
                className="w-full px-4 py-2 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-black"
              >
                Numero de telefono
              </label>
              <input
                type="number"
                id="telefono"
                placeholder="+5278857885"
                className="w-full px-4 py-2 rounded-md"
                required
              />
            </div>
            <div className="mb-3 relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-black"
              >
                Contrasena
              </label>
              <input
                className="w-full px-4 py-2 rounded-md"
                type={togglePassword ? "text"  : "password" }
                id="password"
                required
              />
              {togglePassword ? (
                <EyeOff
                  onClick={HandleToggle}
                  className="absolute top-1/2 right-[2%] text-gray-500 cursor-pointer translate-y-[3%]"
                />
              ) : (
                <Eye
                  onClick={HandleToggle}
                  className="absolute top-1/2 right-[2%] text-gray-500 cursor-pointer translate-y-[3%]"
                />
              )}
            </div>
            <a className="mb-3 font-light text-xs" href="/">
              Ya tienes cuenta?{" "}
              <span className="underline">Inicia sesion aqui</span>
            </a>
            <button
              className="w-full rounded-md bg-black hover:bg-black/50 transition-colors text-white py-2"
              type="submit"
            >
              Crea tu Cuenta
            </button>
          </motion.form>
        </div>
      </div>
    </AuthLayout>
  );
};
