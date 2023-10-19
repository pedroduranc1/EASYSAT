import { Bookmark } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BlogAutor } from "./blogs/BlogAutor";
import { formatDateToCustomString } from "../utils/funcs";

export const BlogCard = ({ blog }) => {
  const Fecha = formatDateToCustomString(blog?.fecha);

  return (
    <div
      className="w-1/3 min-w-[350px] mr-4 cursor-pointer flex flex-col items-center h-fit bg-white rounded-xl shadow-md"
    >
      {/* Imagen Blog */}
      <Link to={`/blog/${blog.Slug}`} className="w-full h-fit relative">
        <img
          src={blog?.blog_img}
          className="h-[200px] w-full shadow-lg rounded-xl"
          alt=""
        />
        <div className="absolute right-[5%] shadow-md -bottom-[10%] bg-white rounded-full flex justify-center p-2 items-center">
          <Bookmark className="text-LogoBlue" />
        </div>
      </Link>

      <Link to={`/blog/${blog.Slug}`} className="w-full h-fit px-[5%]">
        <p className="mt-3 text-[14px] font-semibold text-gray-400">{Fecha}</p>

        <h3 className="mt-2 font-bold">{blog?.Titulo}</h3>

        <h4 className="mt-2 line-clamp-2">{blog?.Descripcion}</h4>

        <div className="w-1/2 mx-auto mt-5">
          <button className="w-full py-1 bg-gradient-to-r shadow-lg shadow-LogoBlue text-white rounded-md from-LogoBlue  to-LogoBlueDark">
            Leer más
          </button>
        </div>
      </Link>

      <div className="px-[5%] w-full h-fit py-2">
        <BlogAutor id={blog?.Autor} blog={blog} />
      </div>
    </div>
  );
};
