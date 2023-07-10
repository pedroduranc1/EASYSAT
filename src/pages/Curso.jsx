import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export const Curso = () => {
    const {cursoId} = useParams()
  return (
    <MainLayout>
      <div className="h-screen w-full flex-col flex justify-center px-[2%]">
        <h1 className="text-2xl font-bold my-4">Curso {cursoId}</h1>
        <div className="aspect-square rounded-md bg-red-50">
          <ReactPlayer width="100%" height="100%" url="https://youtu.be/Y5Bxy-Np9nk" />
        </div>
      </div>
    </MainLayout>
  );
};
