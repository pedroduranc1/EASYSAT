import { FilePlus2, PenLine, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const AdminPanel = () => {
  const { User } = useAuth();

  return (
    <div className="w-full h-full bg-white p-8 rounded-md shadow-md mt-5 mb-10 space-y-5">
      <div className="w-full">
        <h2 className="font-bold text-2xl">Opciones de Sub administrador</h2>
      </div>
      <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-3 ">
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
          <PenLine className="absolute bottom-[10%] right-[5%]" />
        </Link>
        <Link
          to="/admin/eliminar-blog"
          className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold">Eliminar un Blog</h1>
          <Trash2 className="absolute bottom-[10%] right-[5%]" />
        </Link>
        <Link
          to="/admin/crear-curso"
          className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold">Crear un Curso</h1>
          <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
        </Link>
        <Link
          to="/admin/actualizar-curso"
          className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold">Modificar un Curso</h1>
          <PenLine className="absolute bottom-[10%] right-[5%]" />
        </Link>
        <Link
          to="/admin/eliminar-curso"
          className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold">Eliminar un Curso</h1>
          <Trash2 className="absolute bottom-[10%] right-[5%]" />
        </Link>
        <Link
          to="/admin/crear-video-curso"
          className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold">Agregar Videos a Curso</h1>
          <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
        </Link>
        <Link
          to="/admin/actualizar-video-curso"
          className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold">Modificar videos de un Curso</h1>
          <PenLine className="absolute bottom-[10%] right-[5%]" />
        </Link>
        <Link
          to="/admin/eliminar-video-curso"
          className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
        >
          <h1 className="text-2xl font-bold">Eliminar videos de un Curso</h1>
          <Trash2 className="absolute bottom-[10%] right-[5%]" />
        </Link>
      </div>

      {User?.UserRole?.toLowerCase().trim() === "admin" ? (
        <>
          {/* opciones de administrador */}
          <div className="w-full">
            <h2 className="font-bold text-2xl">Opciones de administrador</h2>
          </div>

          <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-3 ">
            <Link
              to="/admin/crear-cliente"
              className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
            >
              <h1 className="text-2xl font-bold">Crear nuevo cliente</h1>
              <FilePlus2 className="absolute bottom-[10%] right-[5%]" />
            </Link>
            <Link
              to="/admin/actualizar-cliente"
              className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
            >
              <h1 className="text-2xl font-bold">Actualizar cliente</h1>
              <PenLine className="absolute bottom-[10%] right-[5%]" />
            </Link>
            <div
              to="/admin/eliminar-cliente"
              className="relative w-full h-[200px] cursor-pointer hover:bg-slate-50 transition-colors flex justify-between p-3 bg-slate-100 rounded-md shadow-md"
            >
              <h1 className="text-2xl font-bold">Eliminar cliente</h1>
              <Trash2 className="absolute bottom-[10%] right-[5%]" />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
