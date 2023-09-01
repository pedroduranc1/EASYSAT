import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useQuery } from "react-query";
import { CursosCtrl } from "../../api/fb.cursos";
import { AlertCircle } from "lucide-react";
import { CreatedBy } from "../../components/CreatedBy";
import { Skeleton } from "../../components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { MainLayoutDg } from "../../layouts/MainLayoutDg";
import { SearchBar } from "../../components/SearchBar";

const CursosCtrlr = new CursosCtrl();
export const Cursos = () => {
  const { User } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!User) return navigate("/Login", { replace: true });
  }, [User]);

  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: Cursos,
    isLoading,
    isError,
  } = useQuery("Cursos", () => CursosCtrlr.getCursos());

  const filteredCourses =
    Cursos?.filter((course) =>
      course.Titulo.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };



  if(isLoading)
  return(
    <MainLayoutDg isblack={true}>
    <div className="bg-DgyaLight h-full">
      <div className="max-w-6xl mx-auto">
        <div className={` px-[3%] md:px-0 md:pt-[8.4%]`}>
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
                placeholder="Busca un blog aqui"
                required
                onChange={handleSearch}
              />
            </div>
          </div>
          <h1 className="text-3xl text-white font-bold mb-4 md:mb-10">
            Nuestros Cursos
          </h1>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 pb-[13%] `}>
            <div className="w-full flex gap-3 ">
              <div className="max-w-md bg-white p-4 shadow-md rounded-md">
                <Skeleton className="w-full bg-slate-200 h-[200px] rounded-md" />
                <Skeleton className="w-[70%]  mt-5 bg-slate-200 h-[20px] rounded-md" />
                <Skeleton className="w-full  mt-5 bg-slate-200 h-[60px] rounded-md" />

                <div className="flex mt-5 items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </div>
              </div>
              <div className="max-w-md bg-white p-4 shadow-md rounded-md">
                <Skeleton className="w-full bg-slate-200 h-[200px] rounded-md" />
                <Skeleton className="w-[70%]  mt-5 bg-slate-200 h-[20px] rounded-md" />
                <Skeleton className="w-full  mt-5 bg-slate-200 h-[60px] rounded-md" />

                <div className="flex mt-5 items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayoutDg>
  )

  if (isError)
    return (
      <MainLayout>
        <h2>Ocurrio un error buscando la informacion.</h2>
      </MainLayout>
    );

  return (
    <MainLayoutDg isblack={true}>
      <div className={`bg-DgyaLight ${filteredCourses.length > 1 ? 'h-full' : "h-screen"}`}>        
        <div className="max-w-6xl mx-auto">
          <div className={` px-[3%]  md:px-0 pt-[8.4%]`}>
            <SearchBar
            placeholder={"Buscar Curso"}
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            />
            <h1 className="text-3xl text-white font-bold mb-4 md:mb-10">
              Nuestros Cursos
            </h1>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 pt-[7%] md:pt-0 pb-[4.3%] gap-5 ${
                filteredCourses.length == 0 && "md:grid-cols-1"
              }`}
            >
              <AnimatePresence>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((curso, index) => (
                    // Rest of your code...
                    <Link
                      key={index}
                      to={`/curso/${curso.id}`}
                      className="z-[1] mx-auto shadow-lg"
                    >
                      <motion.div
                        initial={{ opacity: 0, translateX: "-50%" }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ delay: 0.2 }}
                        exit={{ opacity: 0, translateX: "50%" }}
                        className="max-w-sm bg-white group hover:bg-DgyaDark  transition-colors border-gray-200 rounded-lg shadow "
                      >
                        <img
                          className="rounded-t-lg h-[200px] mx-auto px-[5%] pt-5"
                          src={curso.curso_img}
                          alt=""
                        />
                        <div className="p-5">
                          <h5 className="mb-2 group-hover:text-white text-2xl font-bold tracking-tight text-gray-900 ">
                            {curso.Titulo}
                          </h5>
                          <p className="mb-3 font-normal group-hover:text-white text-gray-700 ">
                            {curso.Descripcion}
                          </p>
                          <CreatedBy autor={curso.Autor} />
                        </div>
                      </motion.div>
                    </Link>
                  ))
                ) : (
                  <div className="  col-span-1 md:col-span-3 w-full flex items-center h-[72.6vh]  md:h-[60vh]">
                    {searchTerm === "" ? (
                      <div className="flex w-full justify-center gap-x-3">
                        <AlertCircle className="text-red-500" />
                        <h3 className="flex text-white">
                          No se encontro cursos en nuestros registros
                          <p className="text-black font-bold ml-2">
                            {searchTerm}
                          </p>{" "}
                        </h3>
                      </div>
                    ) : (
                      <div className="flex w-full justify-center gap-x-3">
                        <AlertCircle className="text-red-500" />
                        <h3 className="flex text-white">
                          No se encontro ningun curso con el nombre:{" "}
                          <p className="text-white font-bold ml-2">
                            {searchTerm}
                          </p>{" "}
                        </h3>
                      </div>
                    )}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </MainLayoutDg>
  );
};
