import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { slug } = useParams();

  return (
    <MainLayout>
      <div className="w-full h-screen md:mt-6 md:ml-7">
        <h1 className="text-3xl font-bold mb-4 md:mb-10">{slug}</h1>
        <img
          className="object-contain w-[50%] mx-auto aspect-square rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus, sunt qui quasi, consectetur illo quo odit corporis blanditiis, nostrum exercitationem. Odio minima pariatur error corporis ratione at cumque quis.</p>
      </div>
    </MainLayout>
  );
};
