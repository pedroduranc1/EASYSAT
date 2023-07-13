import React, { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { FerrisWheel, Check,Eye,EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { initialValues, validationSchema } from "../utils/login.form";
import { useAuth } from "../hooks/useAuth";
import { useFormik } from "formik";
import { Auth } from "../api/auth";

const authCtrl = new Auth();

export const LoginPage = () => {
  const { login } = useAuth();

  const [togglePassword, settogglePassword] = useState(false);
  const handleTogglePassword = () => {
    settogglePassword(!togglePassword)
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {

        const response = await authCtrl.login(formValue);
        login(response.jwt);
        window.location.href = "/"
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <AuthLayout>
      <div className="w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <section className=" bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="#"
                className="flex items-center mb-6 text-4xl font-semibold text-white"
              >
                <FerrisWheel className="h-full w-full" />
                DGYA
              </a>
              <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Inicia Sesion
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit} >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Correo
                      </label>
                      <input
                        name="identifier"
                        type="text"
                        placeholder="name@company.com"
                        value={formik.values.identifier}
                        onChange={formik.handleChange}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                        ${formik.errors.identifier && 'bg-red-500 text-white placeholder:text-white'}
                        `}
                        
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Contrasena
                      </label>
                      <div className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 flex justify-between
                      ${formik.errors.password && 'bg-red-500'}
                      `}>
                      <input
                      className={`w-full bg-transparent outline-none border-0 focus:border-0 focus:ring-0 active:ring-0 active:border-0
                      ${formik.errors.password && 'placeholder:text-white text-white'}
                      `}
                        type={togglePassword ? 'text' : 'password'}
                        name="password"
                        placeholder="*********"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      {
                        togglePassword ? <EyeOff className={`cursor-pointer ${formik.errors.password && 'text-white'}`} onClick={handleTogglePassword} />
                                       : <Eye className={`cursor-pointer ${formik.errors.password && 'text-white'}`} onClick={handleTogglePassword} />
                      }
                      
                      </div>
                      
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-black hover:bg-black/70 transition-colors focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Iniciar Sesion
                    </button>
                    
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
