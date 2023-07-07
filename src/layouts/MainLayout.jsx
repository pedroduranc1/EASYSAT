import React from "react";
import { Building2, LogOut } from "lucide-react";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-[10%] p-4 flex flex-col items-center bg-black/80 h-full">
        <div className="flex items-center space-x-2">
          <Building2 className="text-white" />
          <h1 className="text-2xl text-white">DGYA</h1>
        </div>
        <ul className="w-full mt-10 [&>li]:w-full [&>li]:cursor-pointer [&>li]:px-2 [&>li]:py-2 space-y-3 h-full">
          <li className="text-white rounded-md transition-colors hover:bg-white hover:text-black">Inicio</li>
          <li className="text-white rounded-md transition-colors hover:bg-white hover:text-black">Blog</li>
          <li className="text-white rounded-md transition-colors hover:bg-white hover:text-black">Mis Documentos</li>
        </ul>
        <button className="px-4 group hover:bg-white hover:text-black transition-colors py-2 flex items-center rounded-md text-white">
          <LogOut className="text-white mr-2 group-hover:text-black" /> Cerrar Sesion
        </button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};
