import React, { useEffect, useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import "../css/blog.css";
import { AutorCard } from "../components/AutorCard";
import { ENV } from "../utils/constans";

export const Blog = () => {
  const { slug } = useParams();

  const [blog, setblog] = useState(null);
  const [markdown, setmarkdown] = useState("");

  useEffect(() => {
    async function getBlog() {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BLOGS}/${slug}?populate=*`;
      const resp = await fetch(url);
      const data = await resp.json();

      setblog(data);
    }

    getBlog();
  }, []);

  useEffect(() => {
    async function getMD() {
      const url = `${ENV.SERVER_HOST}${blog?.data?.attributes?.blog?.data?.attributes?.url}`;
      const resp = await fetch(url);
      const md = await resp.text();
      setmarkdown(md);
    }

    getMD();
  }, [blog]);

  return (
    <MainLayout>
      <div id="blog" className="w-full h-full  md:pt-6 md:pl-7">
        <>
          <AutorCard
            mxauto={true}
            autor={"Armando de DGYA"}
            cargo={"Presidente"}
          />
          <ReactMarkdown children={markdown} />
        </>
      </div>
    </MainLayout>
  );
};
