import React, { useEffect, useState } from "react";
import { MainLayout } from "../../../layouts/MainLayout";
import { MainLayoutDg } from "../../../layouts/MainLayoutDg";
import { useParams } from "react-router-dom";
import { AutorCard } from "../../../components/AutorCard";
import { useQuery } from "react-query";
import { CursosCtrl } from "../../../api/fb.cursos";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";
import { Skeleton } from "../../../components/ui/skeleton";
import { FormContainer } from "../../../components/ui/FormContainer";

const CursosApi = new CursosCtrl();
export const Curso = () => {
  const { User } = useAuth();
  if (!User) return (window.location.href = "/Login");
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
      <MainLayoutDg isblack={true}>
        <FormContainer>
          <div className="h-full md:h-fit md:px-[2%] md:mt-5">
            <div className="flex flex-col md:flex-row gap-x-5 pb-5">
              <Skeleton className="w-full md:w-[500px] h-[350px] bg-slate-200 mx-auto my-5 md:m-0 md:my-0" />
              <div className="w-full space-y-3 pt-5">
                <Skeleton className="w-full h-8 bg-slate-200 md:mx-auto my-5 md:m-0 md:my-0" />
                <Skeleton className="w-[70%] h-8 bg-slate-200 md:mx-auto my-5 md:m-0 md:my-0" />
                <div className="flex h-[70%] items-end flex-grow  md:p-5">
                  <Skeleton className="w-[50%] h-24 bg-slate-200 md:mx-auto my-5 md:m-0 md:my-0" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl text-white font-bold pb-4 md:pb-5">
              Lista de Videos
            </h1>
            <div className="w-full flex flex-row gap-3 ">
              <div className="bg-white w-full p-2 shadow-md rounded-md">
                <Skeleton className="w-full md:w-[200px] bg-slate-200 h-[150px] rounded-md " />

                <Skeleton className="w-full mt-2 bg-slate-200 h-[20px] rounded-md " />
              </div>

              <div className="bg-white w-full p-2 shadow-md rounded-md">
                <Skeleton className="w-full md:w-[200px] bg-slate-200 h-[150px] rounded-md " />

                <Skeleton className="w-full mt-2 bg-slate-200 h-[20px] rounded-md " />
              </div>
            </div>
          </div>
        </FormContainer>
      </MainLayoutDg>
    );

  if (isError)
    return (
      <MainLayoutDg>
        <h2>Ocurrio un error buscando la informacion.</h2>
      </MainLayoutDg>
    );
  return (
    <MainLayoutDg isblack={true}>
      <FormContainer>
        <div className="h-full md:h-[84.4vh] md:px-[2%] md:mt-5">
          <div className="flex flex-col md:flex-row gap-x-5 mb-5">
            <img
              className="aspect-square w-[300px] mx-auto my-5 md:m-0 md:my-0"
              src={curso?.curso_img}
              alt="curso_img"
            />
            <div className="w-full">
              <h1 className="text-3xl text-white font-bold mb-4 md:mb-5">
                Curso: {curso?.Titulo}
              </h1>
              <p className="text-2xl text-white font-semibold mb-4 md:mb-10">
                {curso?.Descripcion}
              </p>
              <AutorCard autor={curso?.Autor} cargo={curso?.Cargo} />
            </div>
          </div>
          <h1 className="text-3xl text-white font-bold mb-4 md:mb-5">
            Lista de Videos
          </h1>
          <div className="flex flex-wrap gap-4 md:mb-5">
            {Videos.length > 0 ? (
              Videos.map((video) => (
                <Link
                  key={video.id}
                  className="aspect-square cursor-pointer shadow-md "
                  to={`/curso/${cursoId}/video/${video.id}`}
                >
                  <div className="rounded-md bg-slate-100 ">
                    {/* imagen video */}

                    <img
                      className="w-full h-[20vh] rounded-t-md bg-black"
                      src={video.modulo_img}
                      alt="video_img"
                    />
                    <h3 className="text-black font-semibold p-0 md:p-2">
                      {video.Titulo}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex items-end">
                <AlertCircle className="text-red-500 h-full mr-2" />{" "}
                <p className="font-semibold text-2xl">
                  Este curso no tiene videos agregados aun.
                </p>
              </div>
            )}
          </div>
        </div>
      </FormContainer>
    </MainLayoutDg>
  );
};
