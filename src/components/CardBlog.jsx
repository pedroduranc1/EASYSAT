import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({blog}) => {
  return (
    <Link
      to={`/blog/${blog.Slug}`}
      className="w-[250px] mr-4 cursor-pointer flex flex-col items-center h-[290px] bg-white rounded-xl shadow-md overflow-hidden"
    >
      {/* IMAGE CONTAINER */}
      <div
        style={{
          backgroundImage: `url(${blog?.blog_img})`,
        }}
        className="w-full h-[290px] flex justify-center  items-end bg-center bg-cover bg-no-repeat"
      >
        <div className="w-full h-full rounded-b-md bg-gradient-to-t from-black  to-transparent flex flex-col justify-end gap-y-4 py-4 ">
          <h3 className="w-full text-white font-bold text-[16px] text-center ">
            {blog?.Titulo}
          </h3>
          <button className="w-[90%] mx-auto py-1 rounded-md bg-LogoBlue text-white">
            Ver Blog
          </button>
        </div>
      </div>
    </Link>
  );
};
