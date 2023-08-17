import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const SuccessPage = () => {
  const navigate = useNavigate();
  const { User,logout } = useAuth();

  if (!User) {
    navigate("/Login");
  }

  return (
    <MainLayout>
      <div className="h-[88vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, translateX: "-50%" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col bg-white rounded-md shadow-md justify-center items-center p-8"
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
            <h2 className="text-2xl text-center">Felicidades {User?.Username}</h2>
            <h4 className="text-lg text-center">Gracias por formar parte de nosotros</h4>
            <p className="text-xs text-center">Vuelve a ingresar para ver los cambios en tu cuenta</p>
          </motion.div>
          <button
           onClick={()=>{
            logout()
           }}
           className="underline">
            Volver a iniciar sesion
          </button>
        </motion.div>
      </div>
    </MainLayout>
  );
};
