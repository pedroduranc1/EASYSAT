import { FilePlus2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const AdminPanel = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 bg-white p-8 rounded-md shadow-md mt-5 mb-10">
      <Link
        to="/admin/crear-blog"
        className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
      >
        <h1 className="text-2xl font-bold">Crear un Blog</h1>
        <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
      </Link>
      <Link
        to="/admin/actualizar-blog"
        className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
      >
        <h1 className="text-2xl font-bold">Modificar un Blog</h1>
        <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
      </Link>
      <Link 
        to="/admin/crear-curso"
      className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Crear un Curso</h1>
        <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
      </Link>
      <Link
        to="/admin/actualizar-curso"
        className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
      >
        <h1 className="text-2xl font-bold">Modificar un Curso</h1>
        <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
      </Link>
      <div className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Crear nuevo cliente</h1>
        <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
      </div>
      <div className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Actualizar cliente</h1>
        <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
      </div>
    </div>
  );
};
