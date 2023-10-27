import React, { useEffect } from "react";
import { MainLayoutDg } from "../layouts/MainLayoutDg";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { FormContainer } from "../components/ui/FormContainer";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../utils/datosFiscales/datosFiscales.form.js";
import { User } from "../api/fb.user";
import { toast } from "../components/ui/use-toast";

const UserCtrl = new User();
export const SuccessPage = () => {
  const navigate = useNavigate();
  const { User, logout } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      
      const UserData = await UserCtrl.getMe(User?.uid)

      let newData = {
        ...UserData,
        rfc: formData.rfc,
        passSat: formData.passSat
      }

      await UserCtrl.updateMe(User.uid,newData)

      formik.resetForm()
      toast({
        title:`Felicidades Adquiriste el plan existosamente`,
      });
      navigate("/")      
    },
  });

  useEffect(() => {
    if (!User) {
      navigate("/Login");
    }
  }, [User]);

  //hacer useefect para el router Out

  return (
    <MainLayoutDg>
      <FormContainer>
        <div className="h-[80vh] flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Felicidades {User?.Username}
          </h2>
          <motion.div
            initial={{ opacity: 0, translateX: "-50%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col w-[600px ] bg-white rounded-md shadow-md justify-center items-center p-8"
          >
            <motion.div
              initial={{ opacity: 0, translateY: "-50%" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.3 }}
              className="w-[100px] h-[100px] bg-green-400 rounded-full flex items-center justify-center"
            >
              <Check className="text-white" size={80} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: "-50%" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 0.5 }}
              className="my-5"
            >
              <h4 className="text-lg text-center">
                Solo unos datos mas y podemos comenzar
              </h4>
              <form
                onSubmit={formik.handleSubmit}
                className="w-full h-fit py-4 flex flex-col"
              >
                <p>RFC</p>
                <input
                  className={`w-full py-2 outline-2 ${
                    formik.errors.rfc
                      ? "bg-red-500 outline-red-800"
                      : "bg-black/10 outline-black"
                  }  px-3  rounded-md mb-2`}
                  type="text"
                  placeholder="Ingresa tu RFC"
                  name="rfc"
                  value={formik.values.rfc}
                  onChange={formik.handleChange}
                />
                <p>Contraseña del SAT</p>
                <input
                  className={`w-full py-2 outline-2 ${
                    formik.errors.passSat
                      ? "bg-red-500 outline-red-800"
                      : "bg-black/10 outline-black"
                  }  px-3  rounded-md mb-2`}
                  type="password"
                  placeholder="Contraseña del SAT"
                  name="passSat"
                  value={formik.values.passSat}
                  onChange={formik.handleChange}
                />

                <button
                  type="submit"
                  className="w-full py-2 my-2 bg-black text-white rounded-md hover:bg-white hover:border-black hover:border-2 hover:text-black transition-all"
                >
                  Continuar
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </FormContainer>
    </MainLayoutDg>
  );
};
