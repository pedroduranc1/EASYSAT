import React, { useEffect, useState } from "react";
import { MainLayout } from "../../../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import "../../../css/blog.css";
import { AutorCard } from "../../../components/AutorCard";
import { BlogsCtrl } from "../../../api/fb.blogs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Skeleton } from "../../../components/ui/skeleton";

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
        <div id="blog" className="w-full h-screen space-y-5 p-4 md:pt-6 md:pl-7">
        <Skeleton className="w-full max-w-xs bg-slate-200 md:w-8/12 mx-auto md:h-24 rounded-md" />

        <Skeleton className="w-full bg-slate-200 md:w-[90%]  md:h-12 rounded-md" />
        <Skeleton className="w-full bg-slate-200 md:w-[50%] md:h-8 rounded-md" />
        <Skeleton className="w-full bg-slate-200 md:w-full md:h-[50vh] rounded-md" />

        </div>
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
