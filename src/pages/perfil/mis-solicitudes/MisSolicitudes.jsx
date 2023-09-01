import React from "react";
import { Separador } from "../../../components/Separador";
import { useQuery } from "react-query";
import { ContabilidadCtrl } from "../../../api/contabilidad/fb.contabilidad";
import { useAuth } from "../../../hooks/useAuth";
import { Pencil, Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Conta = new ContabilidadCtrl();

const SoliCard = (solicitud) => {
  return (
    <div className="relative w-[200px] h-[140px] p-2 rounded-md shadow-md bg-white ">
      <h2>Solicitud:</h2>
      <p className="text-xs">{solicitud?.solicitud?.id}</p>
      <h2>Fecha: {solicitud?.solicitud?.Fecha}</h2>
      <h2>Estatus: {solicitud?.solicitud?.estatus}</h2>

      <div className="absolute flex w-full justify-between p-2 bottom-0 left-0">
        <Link
        to={`/Perfil/Solicitudes/Modificar/${solicitud?.solicitud?.id}`}
        >
          <Pencil />
        </Link>
        <Link
        to={`/Perfil/Solicitudes/Eliminar/${solicitud?.solicitud?.id}`}
        >
          <Trash />
        </Link>
      </div>
    </div>
  );
};

export const MisSolicitudes = () => {
  const { User } = useAuth();

  const { data: misSolicitudes } = useQuery("MisSolicitudes", () =>
    Conta.getMisSolicitudes(User?.uid)
  );

  function filterByStatus(array, status) {
    return array?.filter((item) => item.estatus === status) || null;
  }

  const getPlanLink = () =>{
    if(User?.UserPlan === "Personal") return `/Contabilidad/Personas/${User?.uid}`
    if(User?.UserPlan === "Empresas") return `/Contabilidad/Empresas/${User?.uid}`
    if(User?.UserPlan === "RFC") return `/Contabilidad/RFC/${User?.uid}`
    if(User?.UserPlan === "Pendientes") return `/Contabilidad/Pendientes/${User?.uid}`
  }

  const active = filterByStatus(misSolicitudes, "Activa");
  const process = filterByStatus(misSolicitudes, "Proceso");
  const ended = filterByStatus(misSolicitudes, "Finalizado");

  return (
    <div>
      <h3 className=" text-base md:text-2xl text-center font-semibold mt-5">
        Mis Solicitudes
      </h3>

      <Separador />
      <h3 className=" text-base md:text-2xl text-start font-semibold mt-5">
        Activas
      </h3>

      <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
        {active && active?.length !== 0 ? (
          active.map((soli) => (
            <SoliCard key={soli.id} solicitud={soli} />
          ))
        ) : (
          <h2 className="text-black">
            No existen solicitudes activas en este momento <br />
             <Link className="underline" to={getPlanLink()}> Crea una aqui</Link> 
          </h2>
        )}
      </div>

      <Separador />
      <h3 className=" text-base md:text-2xl text-start font-semibold mt-5">
        En proceso
      </h3>

      <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
      {process && process?.length !== 0 ? (
          process.map((soli) => (
            <SoliCard key={soli.id} solicitud={soli} />
          ))
        ) : (
          <h2 className="text-black">
            No existen solicitudes en proceso en este momento
          </h2>
        )}
      </div>

      <Separador />
      <h3 className=" text-base md:text-2xl text-start font-semibold mt-5">
        Finalizadas
      </h3>

      <div className="grid grid-flow-col gap-3 py-4 overflow-x-auto">
      {ended && ended?.length !== 0 ? (
          ended.map((soli) => (
            <SoliCard key={soli.id} solicitud={soli} />
          ))
        ) : (
          <h2 className="text-black">
            No existen solicitudes finalizadas en este momento
          </h2>
        )}
      </div>
    </div>
  );
};
