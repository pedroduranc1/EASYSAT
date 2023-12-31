import React, { useState } from "react";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Check, Eye, EyeOff, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { initialValues, validationSchema } from "../../utils/login.form";
import { useAuth } from "../../hooks/useAuth";
import { useFormik } from "formik";
import { Auth } from "../../api/fb.auth";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../components/ui/use-toast";
import logo from '../../assets/logo.png'
import loginimg from '../../assets/loginFoto.jpeg'

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
      <div className="flex items-center justify-center h-screen max-h-screen overflow-hidden bg-gradient-to-t from-esatDark via-LogoBlue to-cyan-400"
      >

        <div className="w-[90%] md:w-[55%] flex mx-auto overflow-hidden rounded-md h-[80%] bg-white">
          <div className="w-1/2 hidden md:flex relative bg-black h-full">
            <img src={loginimg} className="w-full h-full" alt="" />
          </div>
          <div className="w-full md:w-1/2 flex px-7 flex-col items-center pt-[5%] h-full">
            <img className="w-1/2 " src={logo} alt="" />

            <h2 className="text-black text-2xl font-bold mt-5">Iniciar Sesión</h2>
            <h3 className="text-black/70">¡Bienvenido de nuevo! Ingresa tus datos</h3>

            <form
              className="w-full flex flex-col items-center"
              onSubmit={formik.handleSubmit}>
              <label className="mr-auto mt-7 text-esatDark" htmlFor="email">Correo electrónico</label>
              <input
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={`w-full py-2 px-2 transition-all outline-none border-[1px] rounded-md border-gray-200 focus:border-gray-600
                ${formik.errors.email &&
                  "border-red-500 border-2 text-white placeholder:text-red-600"
                  }
                `} />

              <label className="mr-auto mt-3 text-esatDark" htmlFor="">Contraseña</label>
              <div
                className={`w-full py-2 px-2 transition-all outline-none border-[1px] flex justify-between rounded-md border-gray-200 focus:border-gray-600
                      ${formik.errors.password && "border-red-600"}
                      `}
              >
                <input
                  className={`w-full bg-transparent outline-none border-0 focus:border-0 focus:ring-0 active:ring-0 active:border-0
                      ${formik.errors.password &&
                    "placeholder:text-red-600 text-red-500"
                    }
                      `}
                  type={togglePassword ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {togglePassword ? (
                  <EyeOff
                    className={`cursor-pointer ${formik.errors.password && "text-red-500"
                      }`}
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <Eye
                    className={`cursor-pointer ${formik.errors.password && "text-red-500"
                      }`}
                    onClick={handleTogglePassword}
                  />
                )}
              </div>

              <div className="mt-3 ml-auto text-base text-esatDark">Recordar Contraseña <input type="checkbox" /></div>

              <button className="mt-10 md:mt-4 w-[70%] text-white mx-auto py-2 rounded-md bg-gradient-to-r from-esatDark via-LogoBlue to-cyan-600">{formik.isSubmitting ? (<div className="flex justify-center transition-transform animate-spin"><Loader2/></div>) : "Iniciar Sesión"} </button>
              <Link to="#" className="underline font-light text-cyan-800 mt-10" >Olvidé mi Contraseña</Link>
              <span className="font-light mb-5 md:mb-0">¿No tienes cuenta?  <Link to="/registro" className="text-cyan-800">Regístrate</Link></span>
            </form>



          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
