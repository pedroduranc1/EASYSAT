import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AutorCard } from "../components/AutorCard";

export const Curso = () => {
  const { cursoId } = useParams();
  return (
    <MainLayout>
      <div className="h-screen w-full flex-col flex  px-[2%]">
        
        <h1 className="text-2xl font-bold my-4">Curso {cursoId}</h1>
        <div className="h-[70vh] rounded-md bg-red-50">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://youtu.be/Y5Bxy-Np9nk"
          />
        </div>
        <div className="my-5">
        <AutorCard autor={"Armando de DGYA"} cargo={"Presidente"} />
        </div>
      </div>
    </MainLayout>
  );
};
