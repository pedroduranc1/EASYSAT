import React, { useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { MainLayoutDg } from "../../layouts/MainLayoutDg";
import { BlogsCtrl } from "../../api/fb.blogs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { CreatedBy } from "../../components/CreatedBy";
import { SearchBar } from "../../components/SearchBar";
import { Skeleton } from "../../components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { FormContainer } from "../../components/ui/FormContainer";

const BlogsCtrlr = new BlogsCtrl();
export const Blogs = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery("Blogs", BlogsCtrlr.getBlogs);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs =
    blogs?.filter((blog) =>
      blog.Titulo.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  // Ordena el array de forma aleatoria
  const shuffledArray = blogs?.sort(() => Math.random() - 0.5);

  // Toma los primeros 3 elementos del array ordenado aleatoriamente
  const randomElements = shuffledArray?.slice(0, 3);

  if (isLoading)
    return (
      <MainLayoutDg isblack={true}>
        <FormContainer>
          <div className="max-w-6xl w-full h-full min-h-screen overflow-hidden px-[3%] lg:px-0 mt-4 md:mt-10 ">
            <h1 className="text-3xl text-white font-bold mb-4 md:mb-10">
              Nuestros Blogs
            </h1>
          
            <div className="w-full h-fit py-5 ">
              <h2 className="text-white mb-5 font-bold text-2xl">
                Videos Populares
              </h2>
              <div className="w-full flex gap-5">
                <div className="flex flex-col items-center w-[250px] bg-white rounded-md shadow-md">
                  <Skeleton className="w-[90%] mt-2 mx-auto h-[150px]" />

                  <div className="flex w-full flex-col justify-between p-4 leading-normal">
                    <Skeleton className=" bg-slate-200 w-full h-5 rounded-full" />

                    <Skeleton className=" bg-slate-200 w-full h-10 mt-5 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center w-[250px] bg-white rounded-md shadow-md">
                  <Skeleton className="w-[90%] mt-2 mx-auto h-[150px]" />

                  <div className="flex w-full flex-col justify-between p-4 leading-normal">
                    <Skeleton className=" bg-slate-200 w-full h-5 rounded-full" />

                    <Skeleton className=" bg-slate-200 w-full h-10 mt-5 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center w-[250px] bg-white rounded-md shadow-md">
                  <Skeleton className="w-[90%] mt-2 mx-auto h-[150px]" />

                  <div className="flex w-full flex-col justify-between p-4 leading-normal">
                    <Skeleton className=" bg-slate-200 w-full h-5 rounded-full" />

                    <Skeleton className=" bg-slate-200 w-full h-10 mt-5 rounded-full" />
                  </div>
                </div>
              </div>
              <h2 className="text-white my-5 font-bold text-2xl">
                Videos Recientes
              </h2>
              <div className="w-full flex gap-5">
                <div className="flex flex-col items-center w-[250px] bg-white rounded-md shadow-md">
                  <Skeleton className="w-[90%] mt-2 mx-auto h-[150px]" />

                  <div className="flex w-full flex-col justify-between p-4 leading-normal">
                    <Skeleton className=" bg-slate-200 w-full h-5 rounded-full" />

                    <Skeleton className=" bg-slate-200 w-full h-10 mt-5 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center w-[250px] bg-white rounded-md shadow-md">
                  <Skeleton className="w-[90%] mt-2 mx-auto h-[150px]" />

                  <div className="flex w-full flex-col justify-between p-4 leading-normal">
                    <Skeleton className=" bg-slate-200 w-full h-5 rounded-full" />

                    <Skeleton className=" bg-slate-200 w-full h-10 mt-5 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center w-[250px] bg-white rounded-md shadow-md">
                  <Skeleton className="w-[90%] mt-2 mx-auto h-[150px]" />

                  <div className="flex w-full flex-col justify-between p-4 leading-normal">
                    <Skeleton className=" bg-slate-200 w-full h-5 rounded-full" />

                    <Skeleton className=" bg-slate-200 w-full h-10 mt-5 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center w-[250px] bg-white rounded-md shadow-md">
                  <Skeleton className="w-[90%] mt-2 mx-auto h-[150px]" />

                  <div className="flex w-full flex-col justify-between p-4 leading-normal">
                    <Skeleton className=" bg-slate-200 w-full h-5 rounded-full" />

                    <Skeleton className=" bg-slate-200 w-full h-10 mt-5 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
      </MainLayoutDg>
    );

  if (isError)
    return (
      <MainLayout>
        <h2>Ocurrio un error buscando la informacion.</h2>
      </MainLayout>
    );

  return (
    <MainLayoutDg isblack={true}>
      <FormContainer>
        <div className={`w-full min-h-screen h-full flex flex-1`}>
          <div className="max-w-6xl px-[3%] lg:px-0 w-full mt-4 md:mt-10 ">
            <SearchBar
              placeholder="Busca un blog aqui"
              handleSearch={handleSearch}
              searchTerm={searchTerm}
            />

            <h2 className="text-3xl text-white font-bold mb-4 md:mb-10">
              Nuestros Blogs
            </h2>

            {/* LISTA DE BLOGS */}
            <h2 className="text-white text-2xl font-bold">Blogs Populares</h2>
            <div className="w-full h-fit overflow-x-auto overflow-y-hidden py-2">
              <div className={`w-fit flex gap-4 h-full `}>
                {/* CARD BLOG */}
                <AnimatePresence>
                  {randomElements.map((blog, index) => (
                    <Link
                      key={index}
                      to={`/blog/${blog.Slug}`}
                      className="w-[250px] cursor-pointer flex flex-col py-4 items-center min-h-[290px] h-full bg-white rounded-md shadow-md"
                    >
                      <img
                        className="w-32 h-32"
                        src={blog?.blog_img}
                        alt="blog logo"
                      />
                      <h3 className="w-full font-bold text-[16px] text-center my-5">
                        {blog?.Titulo}
                      </h3>
                      <button className="w-[90%] mt-auto mx-auto py-2 rounded-md bg-LogoBlue text-white">
                        Ver Blog
                      </button>
                    </Link>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            {/* LISTA DE BLOGS */}
            <h2 className="text-white text-2xl font-bold mt-5">
              Blogs Recientes
            </h2>
            <div className="w-full h-fit overflow-x-auto overflow-y-hidden py-2">
              <div className={`w-fit flex gap-4 h-full `}>
                {/* CARD BLOG */}
                <AnimatePresence>
                  {filteredBlogs.map((blog, index) => (
                    <Link
                      key={index}
                      to={`/blog/${blog.Slug}`}
                      className="w-[250px] cursor-pointer flex flex-col py-4 items-center min-h-[290px] h-full bg-white rounded-md shadow-md"
                    >
                      <img
                        className="w-32 h-32"
                        src={blog?.blog_img}
                        alt="blog logo"
                      />
                      <h3 className="w-full font-bold text-[16px] text-center my-5">
                        {blog?.Titulo}
                      </h3>
                      <button className="w-[90%] mt-auto mx-auto py-2 rounded-md bg-LogoBlue text-white">
                        Ver Blog
                      </button>
                    </Link>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </FormContainer>
    </MainLayoutDg>
  );
};
