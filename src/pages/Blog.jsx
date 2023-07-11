import React, { useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useQuery, useQueryClient } from "react-query";
import "../css/blog.css";
import { AutorCard } from "../components/AutorCard";

export const Blog = () => {
  const { slug } = useParams();

  const [markdown, setmarkdown] = useState(``);

  const queryClient = useQueryClient();
  const { isLoading, isError } = useQuery("markdown", () => {
    fetch("/src/data/blogPrueba.mdx")
      .then((response) => response.text())
      .then((data) => setmarkdown(`${data}`));
  });

  return (
    <MainLayout>
      <div id="blog" className="w-full h-full  md:pt-6 md:pl-7">
        {isLoading ? (
          <>Cargando Blog {slug}</>
        ) : (
          <>
            <AutorCard mxauto={true} autor={"Armando de DGYA"} cargo={"Presidente"} />
            <ReactMarkdown children={markdown} />
          </>
        )}
      </div>
    </MainLayout>
  );
};
