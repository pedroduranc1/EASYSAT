import React, { useState } from "react";
import { AuthLayout } from "../../layouts/AuthLayout";
import { FerrisWheel, Check, Eye, EyeOff, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { initialValues, validationSchema } from "../../utils/login.form";
import { useAuth } from "../../hooks/useAuth";
import { useFormik } from "formik";
import { Auth } from "../../api/fb.auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../components/ui/use-toast";

const AuthCtrl = new Auth();

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [togglePassword, settogglePassword] = useState(false);
  const handleTogglePassword = () => {
    settogglePassword(!togglePassword);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await AuthCtrl.login(
          formValue.email,
          formValue.password
        );
        const { accessToken, uid } = response;
        login(accessToken, uid);
        navigate("/", { replace: true });
      } catch (error) {
        switch (error.message) {
          case "Firebase: Error (auth/wrong-password).":
            toast({
              variant: "destructive",
              title: "Error al logearte",
              description: "Contraseña invalida.",
            });
            break;

          case "Firebase: Error (auth/user-not-found).":
            toast({
              variant: "destructive",
              title: "Error al logearte",
              description: "No estas registrado.",
            });
            break;
          default:
            toast({
              variant: "destructive",
              title: "Error al logearte",
              description: "Contactate con soporte.",
            });
            break;
        }
      }
    },
  });

  return (
    <AuthLayout>
      <div className="flex items-center justify-center h-full md:h-screen overflow-hidden bg-fixed bg-center bg-cover  bg-hero-img">
        <div className="w-full h-screen bg-black/70 pt-[10%] md:pt-0">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[70vh] lg:py-0">
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
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={formik.handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Correo
                    </label>
                    <input
                      name="email"
                      type="text"
                      placeholder="name@company.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                        ${
                          formik.errors.email &&
                          "bg-red-500 text-white placeholder:text-white"
                        }
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
                    <div
                      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 flex justify-between
                      ${formik.errors.password && "bg-red-500"}
                      `}
                    >
                      <input
                        className={`w-full bg-transparent outline-none border-0 focus:border-0 focus:ring-0 active:ring-0 active:border-0
                      ${
                        formik.errors.password &&
                        "placeholder:text-white text-white"
                      }
                      `}
                        type={togglePassword ? "text" : "password"}
                        name="password"
                        placeholder="*********"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      {togglePassword ? (
                        <EyeOff
                          className={`cursor-pointer ${
                            formik.errors.password && "text-white"
                          }`}
                          onClick={handleTogglePassword}
                        />
                      ) : (
                        <Eye
                          className={`cursor-pointer ${
                            formik.errors.password && "text-white"
                          }`}
                          onClick={handleTogglePassword}
                        />
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center text-white bg-black hover:bg-black/70 transition-colors focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    {formik.isSubmitting ? (
                      <Loader2 className="animate-spin animate-infinite" />
                    ) : (
                      "Iniciar Sesion"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center">
            <motion.h1
              initial={{ opacity: 0, translateY: "-50%" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl flex justify-center w-full text-white text-justify mb-5 md:text-2xl font-bold"
            >
              Iniciando Sesion tendras acceso <br /> a los siguientes productos
            </motion.h1>
            <ul className="w-full grid grid-cols-1 md:grid-cols-3 h-fit ">
              <motion.li 
              initial={{opacity:0,translateX:"-50%"}}
              animate={{opacity:1,translateX:0}}
              transition={{delay:0.3}}
              className="w-full h-fit flex md:justify-center items-center px-6 py-2">
                <Check className="mr-2 text-white" />
                <div className="text-white">
                  <h2>Acesso a tu cuenta de contabilidad</h2>
                  <h4>Maneja y archiva todos tus registros contables.</h4>
                </div>
              </motion.li>
              <motion.li 
              initial={{opacity:0,translateX:"-50%"}}
              animate={{opacity:1,translateX:0}}
              transition={{delay:0.4}}
              className="w-full h-fit flex md:justify-center items-center px-6 py-2">
                <Check className="mr-2 text-white" />
                <div className="text-white">
                  <h2>Cursos Personalizados</h2>
                  <h4>Obten Cursos de los mejores en el area.</h4>
                </div>
              </motion.li>
              <motion.li 
              initial={{opacity:0,translateX:"-50%"}}
              animate={{opacity:1,translateX:0}}
              transition={{delay:0.5}}
              className="w-full h-fit flex md:justify-center items-center px-6 py-2">
                <Check className="mr-2 text-white" />
                <div className="text-white">
                  <h2>Y muchas cosas mas.</h2>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
