import React, { useEffect, useState } from "react";
import { MainLayoutDg } from "../../layouts/MainLayoutDg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Separador } from "../../components/Separador";
import { useQuery } from "react-query";
import { ContabilidadCtrl } from "../../api/contabilidad/fb.contabilidad";
import { SolicitudCard } from "../../components/SolicitudCard";
import { SearchBar } from "../../components/SearchBar";
import { SLoading } from "./Solicitudes.loading";

const Conta = new ContabilidadCtrl();

export const Solicitudes = () => {
  const { User } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: solicitudes,
    isLoading,
    isError,
  } = useQuery("Solicitudes", Conta.getSolicitudes);

  useEffect(() => {
    if (!User) return navigate("/Login", { replace: true });
  }, [User]);

  useEffect(() => {
    if (!User?.UserRole?.includes("Admin"))
      return navigate("/", { replace: true });
  }, [User]);

  if (isLoading) return <SLoading />;
  if (isError) return navigate("/");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  function filterByStatus(array, status) {
    return array?.filter((item) => item.estatus === status) || null;
  }

  const active = filterByStatus(solicitudes, "Activa");
  const process = filterByStatus(solicitudes, "Proceso");
  const ended = filterByStatus(solicitudes, "Finalizada");

  const activeSoliShow = () => {
    let content = [];

    if (searchTerm != "") {
      active.forEach((soli) => {
        if (soli.email.includes(searchTerm.toLowerCase())) {
          content.push(
            <Link
            key={soli.id}
            to={`/Solicitudes/Solicitud/${soli.id}`}
            className="w-[200px] h-[120px] rounded-md shadow-md bg-white "
          >
            <SolicitudCard uid={soli.uid} info={soli} />
          </Link>
          );
        }
      });

      if (content.length === 0) {
        content = <h2 className="text-white text-sm md:text-xl ">
        No existen solicitudes Finalizadas con ese correo en este momento
      </h2>;
      }
    } else {
      // Mostrar todos
      if (active && active[0]) {
        content = active.map((soli) => (
          <Link
            key={soli.id}
            to={`/Solicitudes/Solicitud/${soli.id}`}
            className="w-[200px] h-[120px] rounded-md shadow-md bg-white "
          >
            <SolicitudCard uid={soli.uid} info={soli} />
          </Link>
        ));
      } else {
        content = <h2 className="text-white text-sm md:text-xl ">
        No existen solicitudes Finalizadas en este momento
      </h2>;
      }
    }

    return content;
  };

  const processSoliShow = () => {
    let content = [];

    if (searchTerm != "") {
      process.forEach((soli) => {
        if (soli.email.includes(searchTerm.toLowerCase())) {
          content.push(
            <Link
            key={soli.id}
            to={`/Solicitudes/Solicitud/${soli.id}`}
            className="w-[200px] h-[120px] rounded-md shadow-md bg-white "
          >
            <SolicitudCard uid={soli.uid} info={soli} />
          </Link>
          );
        }
      });

      if (content.length === 0) {
        content = <h2 className="text-white text-sm md:text-xl ">
        No existen solicitudes en proceso con ese correo en este momento
      </h2>;
      }
    } else {
      // Mostrar todos
      if (process && process[0]) {
        content = process.map((soli) => (
          <Link
            key={soli.id}
            to={`/Solicitudes/Solicitud/${soli.id}`}
            className="w-[200px] h-[120px] rounded-md shadow-md bg-white "
          >
            <SolicitudCard uid={soli.uid} info={soli} />
          </Link>
        ));
      } else {
        content = <h2 className="text-white text-sm md:text-xl ">
        No existen solicitudes en proceso en este momento
      </h2>;
      }
    }

    return content;
  };

  const endedSoliShow = () => {
    let content = [];

    if (searchTerm != "") {
      ended.forEach((soli) => {
        if (soli.email.includes(searchTerm.toLowerCase())) {
          content.push(
            <Link
            key={soli.id}
            to={`/Solicitudes/Solicitud/${soli.id}`}
            className="w-[200px] h-[120px] rounded-md shadow-md bg-white "
          >
            <SolicitudCard uid={soli.uid} info={soli} />
          </Link>
          );
        }
      });

      if (content.length === 0) {
        content = <h2 className="text-white text-sm md:text-xl ">
        No existen solicitudes Finalizadas con ese correo en este momento
      </h2>;
      }
    } else {
      // Mostrar todos
      if (ended && ended[0]) {
        content = ended.map((soli) => (
          <Link
            key={soli.id}
            to={`/Solicitudes/Solicitud/${soli.id}`}
            className="w-[200px] h-[120px] rounded-md shadow-md bg-white "
          >
            <SolicitudCard uid={soli.uid} info={soli} />
          </Link>
        ));
      } else {
        content = <h2 className="text-white text-sm md:text-xl ">
        No existen solicitudes Finalizadas en este momento
      </h2>;
      }
    }

    return content;
  };

  return (
    <MainLayoutDg isblack={true}>
      <div className={`bg-DgyaLight h-fit md:h-full`}>
        <div className="max-w-6xl mx-auto">
          <div className={` px-[3%]  md:px-0 pt-[15%] md:pt-[8.4%]`}>
            <div className={` min-h-screen px-[3%] md:px-0 md:mt-5`}>
              <SearchBar
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder={"Buscar por email"}
              />
              <h1 className="text-3xl text-white font-bold mb-4 md:mb-5">
                Solicitudes Activas
              </h1>

              <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
                {activeSoliShow()}
              </div>

              <Separador />

              <h1 className="text-3xl text-white font-bold mb-4 md:mb-5">
                Solicitudes En Proceso
              </h1>

              <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
                {
                  processSoliShow()
                }
              </div>

              <Separador />

              <h1 className="text-3xl text-white font-bold mb-4 md:mb-5">
                Solicitudes Finalizadas
              </h1>

              <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
                {endedSoliShow()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayoutDg>
  );
};
