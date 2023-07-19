import React, { useEffect, useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import "../css/blog.css";
import { AutorCard } from "../components/AutorCard";
import { BlogsCtrl } from "../api/fb.blogs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const BlogCtrl = new BlogsCtrl();

export const Blog = () => {
  const { slug } = useParams();
  const [MDX, setMDX] = useState(`# Cargando..`)

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery(`${slug}`,() => BlogCtrl.getBlog(slug));

  useEffect(() => {
    (async()=>{
      const resp = await BlogCtrl.getBlogMDX(blog?.blogFileName)
      setMDX(resp);
    })()
  }, [!isLoading]);


  if (isLoading)
    return (
      <MainLayout>
        <h2>Cargando Blog</h2>
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
      <div id="blog" className="w-full h-screen p-4 md:pt-6 md:pl-7">
        <AutorCard mxauto={true} autor={blog.Autor} />
        <ReactMarkdown children={MDX} />
      </div>
    </MainLayout>
  );
};
