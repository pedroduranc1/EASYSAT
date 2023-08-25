import React, { useEffect } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Separador } from "../../components/Separador";

export const Solicitudes = () => {
  const { User } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!User) return navigate("/Login", { replace: true });
  }, [User]);

  useEffect(() => {
    if (!User.UserRole.includes("Admin"))
      return navigate("/", { replace: true });
  }, [User]);

  //   ${
  //     filteredCourses.length > 1 ? "h-full" : "h-[78vh] md:h-[85.2vh]"
  //   }
  return (
    <MainLayout>
      <div className={` min-h-screen mb-5 px-[3%] md:px-0 md:mt-5`}>
        <div className="my-3">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Correo del Usuario"
              required
              //   onChange={handleSearch}
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 md:mb-5">Solicitudes Activas</h1>

        <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
            <Link 
            to='/Solicitudes/Solicitud/2314idsi'
            className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </Link>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
        </div>

        <Separador />

        <h1 className="text-3xl font-bold mb-4 md:mb-5">
          Solicitudes En Proceso
        </h1>

        <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
        </div>

        <Separador />

        <h1 className="text-3xl font-bold mb-4 md:mb-5">
          Solicitudes Finalizadas
        </h1>

        <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
            <div className="w-[200px] h-[120px] rounded-md shadow-md bg-white ">

            </div>
        </div>
      </div>
    </MainLayout>
  );
};
