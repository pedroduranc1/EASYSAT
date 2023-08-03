import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { useQuery } from "react-query";
import { CursosCtrl } from "../../api/fb.cursos";
import { Trash2 } from "lucide-react";

const cursosCtrl = new CursosCtrl();
export const DeleteVideoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [CursoSelected, setCursoSelected] = useState(null);
  const [videosCurso, setvideosCurso] = useState(null);
  const [videoSelected, setvideoSelected] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const { data: cursos } = useQuery("Cursos", cursosCtrl.getCursos);

  const filteredCursos =
    cursos?.filter((curso) =>
      curso.Titulo.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  useEffect(() => {
    (async () => {
      if (CursoSelected) {
        const videosCursos = await cursosCtrl.getVideosCurso(CursoSelected.id);
        setvideosCurso(videosCursos);
      }
    })();
  }, [CursoSelected]);

  console.log(videoSelected);

  return (
    <MainLayout>
      <div className="w-full h-[88vh] px-[3%]">
        <h2 className="text-2xl font-bold text-center py-5">
          Eliminar Video de un Curso
        </h2>
        <div className="max-w-2xl rounded-md p-8 shadow-lg mx-auto bg-white ">
          {/* buscador de blogs */}
          <div className="relative bg-slate-100 flex items-center rounded-full my-2">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              id="search"
              type="text"
              placeholder="Buscar Curso"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={handleFocus}
              autocomplete="off"
            />
            <ul
              className={`${
                isFocused ? "absolute" : "hidden"
              } -bottom-[220%] md:-bottom-[240%] rounded-md shadow-md left-[5%] p-4 bg-white h-[90px] overflow-y-auto w-[90%] mt-4`}
            >
              {filteredCursos.length > 0 ? (
                filteredCursos.map((curso, index) => (
                  // Rest of your code...
                  <li
                    key={index}
                    onClick={() => {
                      setCursoSelected(curso);
                      setIsFocused(false);
                    }}
                  >
                    {curso.Titulo}
                  </li>
                ))
              ) : (
                <li>no se encontraron resultados</li>
              )}
            </ul>
          </div>
          {CursoSelected ? (
            <div className="space-y-3 mt-5">
              <h2 className="text-2xl font-semibold">
                Titulo: {CursoSelected?.Titulo}
              </h2>

              <div className="flex w-full gap-5 overflow-x-auto">
                {videosCurso?.length > 0 || videosCurso != null ? (
                  videosCurso.map((video, index) => (
                    <div
                      key={index}
                      className="aspect-square cursor-pointer shadow-md"
                      onClick={() => setvideoSelected(video)}
                    >
                      <div className="rounded-md bg-slate-100">
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
                    </div>
                  ))
                ) : (
                  <p>No hay videos disponibles.</p>
                )}
              </div>

              {videoSelected && (
                <form className="pt-5 space-y-3">
                  <h2 className="text-2xl font-semibold">
                    Video a Eliminar: {videoSelected.Titulo}
                  </h2>
                  <button
                    type="submit"
                    className="w-full px-2 py-2 flex items-center justify-center hover:bg-red-400 transition-colors bg-red-500 text-white rounded-md"
                  >
                    {/* {formik.isSubmitting ? (
                  <Loader2 className="animate-spin animate-infinite" />
                ) : (
                  <>
                    Eliminar Blog <Trash2 className="ml-3" />
                  </>
                )} */}
                    Eliminar Video <Trash2 className="ml-3" />
                  </button>
                </form>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
