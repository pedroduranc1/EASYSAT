import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Link, useParams } from "react-router-dom";
import { QueryClient, useQuery } from "react-query";
import { CursosCtrl } from "../api/fb.cursos";
import { CornerDownLeft } from "lucide-react";
import ReactPlayer from "react-player";
import { AutorCard } from "../components/AutorCard";

const VideoCtrl = new CursosCtrl();
export const Video = () => {
  const { id, cursoId } = useParams();
  const queryClient = new QueryClient();

  const {
    data: video,
    isError,
    isLoading,
  } = useQuery(`${id}`, () => VideoCtrl.getVideo(id));

  const data = queryClient.getQueryData(cursoId);
  console.log(data);

  if (isLoading)
    return (
      <MainLayout>
        <h2>Cargando Video</h2>
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
      <div className="h-full md:h-full md:px-[2%] md:pt-5">
        <Link
          className="flex items-end font-bold text-xl"
          to={`/curso/${cursoId}`}
        >
          <CornerDownLeft />
          Volver
        </Link>

        <h1 className="text-3xl my-2 font-bold mb-4 md:mb-5">{video.Titulo}</h1>

        {/* video player */}
        <div className="aspect-video w-full overflow-hidden  rounded-md">
          <ReactPlayer height={"100%"} width={"100%"} url={video.modulo_url} />
        </div>

        <div className="mt-3">
          <AutorCard autor={"pedroduranc1"} />
        </div>

        <div className="my-6">
          <h2 className="text-3xl font-bold">Descripcion</h2>
          <h2 className="text-xl font-semibold mb-4 md:mb-5">
            {video.Descripcion}
          </h2>
        </div>
      </div>
    </MainLayout>
  );
};
