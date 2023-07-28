import React, { useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { BlogsCtrl } from "../api/fb.blogs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { CreatedBy } from "../components/CreatedBy";

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

  if (isLoading)
    return (
      <MainLayout>
        <h2>Cargando Blogs</h2>
      </MainLayout>
    );

  if (isError)
    return (
      <MainLayout>
        <h2>Ocurrio un error buscando la informacion.</h2>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div
        className={`w-full flex flex-1 ${
          filteredBlogs.length > 2 ? "h-full" : "h-screen"
        }`}
      >
        <div className="max-w-6xl w-full px-4 mt-4 md:mt-10 md:ml-7">
          <form className="my-3" onSubmit={(e) => e.preventDefault()}>
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
          </form>

          <h1 className="text-3xl font-bold mb-4 md:mb-10">Nuestros Blogs</h1>

          {/* LISTA DE BLOGS */}
          <div className="grid grid-cols-1">
            <ul className="grid grid-cols-1 [&>li]:my-5 divide-slate-700">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog, index) => (
                  <li key={index}>
                    <Link className="w-full" to={`/blog/${blog.Slug}`}>
                      <div className="flex flex-col p-0 md:p-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 ">
                        <img
                          className="object-contain w-full max-w-xs  md:w-32 md:h-32 rounded-t-lg  md:rounded-none md:rounded-l-lg"
                          src={`${blog.blog_img}`}
                          alt=""
                        />
                        <div className="flex w-full flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            {blog.Titulo}
                          </h5>
                          <p className="mb-3 font-normal text-gray-700 ">
                            {blog.Descripcion}
                          </p>
                          <div className="w-full md:w-1/4">
                          <CreatedBy autor={blog.Autor} />

                          </div>
                        </div>
                      </div>{" "}
                    </Link>
                  </li>
                ))
              ) : (
                <div className=" bg-slate-100 w-full flex  h-[66vh]">
                  <div className="flex w-full justify-center gap-x-3">
                    <AlertCircle className="text-red-500" />
                    <h3 className="flex">
                      No se encontro ningun blog 
                    </h3>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
