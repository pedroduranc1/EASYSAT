import React, { useState } from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { useQuery } from "react-query";
import { CursosCtrl } from "../../api/fb.cursos";
import { UpdateVideoForm } from "../../components/UpdateVideoForm";

const cursosCtrl = new CursosCtrl()
export const UpdateVideoCursoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [cursoSelected, setcursoSelected] = useState(null)

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const { data: cursos } = useQuery("Cursos", cursosCtrl.getCursos);

  const filteredCursos =
    cursos?.filter((curso) =>
      curso.Titulo.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];
  return (
    <MainLayout>
      <div className="w-full h-[88vh] px-[3%]">
        <h2 className="text-2xl font-bold text-center py-5">Modificar Video</h2>
        <div className="max-w-2xl rounded-md p-8 shadow-lg mx-auto bg-white ">
          {/* buscador de Cursos */}
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
              {/* cursos encontrados */}
              {filteredCursos.length > 0 ? (
                filteredCursos.map((curso, index) => (
                  // Rest of your code...
                  <li
                    className="cursor-pointer"
                    onClick={() => {
                      setcursoSelected(curso);
                      setIsFocused(false);
                    }}
                    key={index}
                  >
                    {curso.Titulo}
                  </li>
                ))
              ) : (
                <li>no se encontraron resultados</li>
              )}
            </ul>
          </div>
          {cursoSelected && (
                <UpdateVideoForm  cursoSelected={cursoSelected} setcursoSelected={setcursoSelected}/>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
