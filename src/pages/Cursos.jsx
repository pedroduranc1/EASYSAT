import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Link } from "react-router-dom";

export const Cursos = () => {
  return (
    <MainLayout>
      <div className="h-[86vh] md:px-[2%] md:mt-5">
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
        <h1 className="text-3xl font-bold mb-4 md:mb-10">Nuestros Cursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link to={`/curso/1`} className="z-[1] mx-auto">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/products/apple-watch.png"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Como sobrevivir al SAT
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  Se que es imposible pero con este curso lo podras lograr
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/curso/2`} className="z-[1] mx-auto">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/products/apple-watch.png"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Como sobrevivir al SAT
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  Se que es imposible pero con este curso lo podras lograr
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/curso/3`} className="z-[1] mx-auto">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/products/apple-watch.png"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Como sobrevivir al SAT
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
                  Se que es imposible pero con este curso lo podras lograr
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};
