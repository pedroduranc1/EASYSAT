import React from "react";
import { Separador } from "../../../components/Separador";
import { Link } from "react-router-dom";

export const MisSolicitudes = () => {
  return (
    <div>
      <div className="w-full justify-between  mt-5 flex gap-x-3">
        <Link to='/Perfil/Solicitudes/Crear' className="bg-black py-2 px-1 md:px-4 text-[15px] md:text-base text-center rounded-md shadow-md text-white">Crear Solicitud</Link>
        <Link to='/Perfil/Solicitudes/Modificar' className="bg-black py-2 px-1 md:px-4 text-[15px] md:text-base text-center rounded-md shadow-md text-white">Modificar Solicitud</Link>
        <Link to='/Perfil/Solicitudes/Eliminar' className="bg-black py-2 px-1 md:px-4 text-[15px] md:text-base text-center rounded-md shadow-md text-white">Eliminiar Solicitud</Link>
      </div>
      <h3 className=" text-base md:text-2xl text-center font-semibold mt-5">
        Mis Solicitudes
      </h3>

      <Separador />
      <h3 className=" text-base md:text-2xl text-start font-semibold mt-5">
        Activas
      </h3>

      <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
        <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white "></div>
      </div>

      <Separador />
      <h3 className=" text-base md:text-2xl text-start font-semibold mt-5">
        En proceso
      </h3>

      <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
        <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white "></div>
      </div>

      <Separador />
      <h3 className=" text-base md:text-2xl text-start font-semibold mt-5">
        Finalizadas
      </h3>

      <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
        <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white "></div>
      </div>
    </div>
  );
};
