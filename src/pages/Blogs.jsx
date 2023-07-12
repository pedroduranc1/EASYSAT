import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { useQuery } from "react-query";
import { Blogs as BlogsCtrl } from "../api/BlogsApi";
import { ENV } from "../utils/constans";

const blogsCtrl = new BlogsCtrl();

export const Blogs = () => {
  
  const { data, isLoading, isError } = useQuery("blogs", blogsCtrl.getBlogs);

  return (
    <MainLayout>
      <div className="w-full flex flex-1 h-screen">
        <div className="max-w-6xl w-full px-4 mt-4 md:mt-10 md:ml-7">
          <form className="my-3">
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
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-black/70 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>

          <h1 className="text-3xl font-bold mb-4 md:mb-10">Nuestros Blogs</h1>

          {/* LISTA DE BLOGS */}
          <div className="grid grid-cols-1">
            <ul className="grid grid-cols-1 [&>li]:my-5 divide-slate-700">
              
              {
                data?.data.map((blog,index)=>(
                  <li key={index}>
                      <Link
                        className="w-full"
                        to={`/blog/${blog?.id}`}
                      >
                        <div className="flex flex-col p-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 ">
                          <img
                            className="object-contain w-[40%]  md:w-32 md:h-32 rounded-t-lg  md:rounded-none md:rounded-l-lg"
                            src={`${ENV.SERVER_HOST}${blog?.attributes?.img_title?.data?.attributes?.formats?.thumbnail?.url}`}
                            alt=""
                          />
                          <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                              {blog?.attributes?.Title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 ">
                              {blog?.attributes?.descripton}
                            </p>
                          </div>
                        </div>{" "}
                      </Link>
                    </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
