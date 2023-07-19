import React, { useEffect, useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AutorCard } from "../components/AutorCard";
import { useQuery } from "react-query";
import { CursosCtrl } from "../api/fb.cursos";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const CursosApi = new CursosCtrl();
export const Curso = () => {
  const { cursoId } = useParams();
  const [Videos, setVideos] = useState([]);

  const {
    data: curso,
    isError,
    isLoading,
  } = useQuery(`${cursoId}`, () => CursosApi.getCurso(cursoId));

  useEffect(() => {
    (async () => {
      const resp = await CursosApi.getVideosCurso(cursoId);
      setVideos(resp);
    })();
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
      <div className="h-full md:h-screen md:px-[2%] md:mt-5">
        <div className="flex flex-col md:flex-row gap-x-5 mb-5">
          <img
            className="aspect-square w-[300px] mx-auto my-5 md:m-0 md:my-0"
            src={curso.curso_img}
            alt="curso_img"
          />
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4 md:mb-5">
              Curso: {curso.Titulo}
            </h1>
            <p className="text-2xl font-semibold mb-4 md:mb-10">
              {curso.Descripcion}
            </p>
            <AutorCard autor={curso.Autor} cargo={curso.Cargo} />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 md:mb-5">Lista de Videos</h1>
        <div className="flex flex-wrap gap-4 mb-5">
          {Videos.length>0 ? Videos.map((video) => (
            <Link
              className="aspect-square  cursor-pointer shadow-md "
              to={`/curso/${cursoId}/video/${video.id}`}
            >
              <div className="rounded-md bg-slate-100 ">
                {/* imagen video */}

                <img
                  className="w-full h-[20vh] rounded-t-md bg-black"
                  src={video.modulo_img}
                  alt="video_img"
                />
                <h3 className="text-black font-semibold p-0 md:p-2">{video.Titulo}</h3>
              </div>
            </Link>
          )): (
            <div className="flex items-end"><AlertCircle className="text-red-500 h-full mr-2"/> <p className="font-semibold text-2xl">Este curso no tiene videos agregados aun.</p></div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
