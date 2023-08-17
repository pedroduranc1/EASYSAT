import React from "react";
import { MainLayout } from "../../../layouts/MainLayout";
import { Input } from "../../../components/ui/Input";
import { File } from "lucide-react";

export const Empresas = () => {
  return (
    <MainLayout>
      <div className="w-full h-full px-[3%]">
        <h2 className="text-2xl font-bold text-center py-5">Crear Solicitud</h2>
        <form
          //   onSubmit={formik.handleSubmit}
          className="max-w-2xl rounded-md p-8 space-y-3 shadow-lg mx-auto bg-white "
        >
          <Input
            title={"Identificación de la Empresa"}
            className={"w-full"}
            name={"EMP_ID"}
            type={"text"}
            placeholder={"DGYA S.A"}
          />
          <div className="w-[98%] grid grid-cols-2 space-x-3">
            <Input
              title={"Razon Social"}
              className={"w-full"}
              name={"razon_social"}
              type={"text"}
              placeholder={"12343243"}
            />
            <Input
              title={"RFC de la empresa"}
              className={"w-full"}
              name={"RFC"}
              type={"text"}
              placeholder={"12343243"}
            />
          </div>
          <Input
            title={"Domicilio fiscal"}
            className={"w-full"}
            name={"Nombre"}
            type={"text"}
            placeholder={"Tu domicilio fiscal"}
          />
          <div className="grid grid-cols-1 space-y-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Agrega tu documento de contabildad finaciera
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col bg-slate-100 cursor-pointer rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <div className="mx-auto -mt-10 mb-5">
                    <File className="fill-gray-100 mx-auto" size={56}/>
                    
                  </div>
                  <p className="pointer-none text-gray-500 ">
                    Agrega el documento haciendo click aqui
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <button className="w-full py-2 rounded-md bg-black text-white ">
            Continuar
          </button>
        </form>
      </div>
    </MainLayout>
  );
};
