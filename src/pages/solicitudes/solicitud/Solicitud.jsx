import React from "react";
import { MainLayout } from "../../../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { Separador } from "../../../components/Separador";
import { useAuth } from "../../../hooks/useAuth";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import { Download, File, UserIcon } from "lucide-react";

export const Solicitud = () => {
  const { User } = useAuth();
  const { id } = useParams();
  return (
    <MainLayout>
      <div className={` h-full md:h-[82vh] mb-5 px-[3%] md:px-0 md:mt-5`}>
        <h1 className="text-3xl font-bold my-4 md:mb-5">Solicitud: {id}</h1>

        <Separador />
        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-3">
          {/* DATOS PERSONALES */}
          <div>
            <h2 className="text-2xl font-bold mb-4 md:mb-5">
              Datos Personales
            </h2>
            <div className="mt-5 flex items-center p-4 w-full md:w-[350px] bg-white rounded-md shadow-md">
              <Avatar>
                <AvatarImage src={User.Img_url} />
                <AvatarFallback className="bg-black">
                  <UserIcon className="text-white" />
                </AvatarFallback>
              </Avatar>
              <div className="ml-3 space-y-1">
                <h3>Correo: {User.email}</h3>
                <div className="flex">
                  <h3>
                    Nombre: {User.Nombre} {User.Apellido}
                  </h3>
                </div>
                <h3>Plan: {User.UserPlan}</h3>
              </div>
            </div>
          </div>
          {/* DOCUMENTOS */}
          <div className="mt-3 md:mt-0">
            <h2 className="text-2xl font-bold mb-4 md:mb-5">
              Documentos Proporcionados
            </h2>
            <div className="grid w-full grid-flow-col gap-3 md:p-2 overflow-x-auto">
              <div className="bg-white cursor-pointer flex flex-col items-center justify-center shadow-md w-[130px] h-[100px] rounded-md ">
                <Download />
                <h3 className="text-[10px]">Nombre documento</h3>
              </div>
              <div className="bg-white cursor-pointer flex flex-col items-center justify-center shadow-md w-[130px] h-[100px] rounded-md ">
                <Download />
                <h3 className="text-[10px]">Nombre documento</h3>
              </div>
              <div className="bg-white cursor-pointer flex flex-col items-center justify-center shadow-md w-[130px] h-[100px] rounded-md ">
                <Download />
                <h3 className="text-[10px]">Nombre documento</h3>
              </div>
            </div>
          </div>
          {/* Cambiar Status */}
          <div className="mt-3 md:mt-0">
            <h2 className="text-2xl font-bold mb-4 md:mb-5">
              Cambiar Status de Solicitud
            </h2>
            <select
              name={"Status"}
              className={` bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
            >
              <option value="" label="Status">
                Status
              </option>
              <option value="Activa">Activa </option>
              <option value="Proceso">En Proceso </option>
              <option value="Finalizada">Finalizada </option>
            </select>
            <button className="mt-5 w-full bg-black rounded-md py-2 text-white">Cambiar Status</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
