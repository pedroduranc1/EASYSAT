import React from "react";
import { MainLayoutDg } from "../../../layouts/MainLayoutDg";
import { useParams } from "react-router-dom";
import { Separador } from "../../../components/Separador";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import { Download, Loader2, UserIcon } from "lucide-react";
import { ContabilidadCtrl } from "../../../api/contabilidad/fb.contabilidad";
import { User } from "../../../api/fb.user";
import { useQuery } from "react-query";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "../../../components/ui/use-toast";
import { FormContainer } from "../../../components/ui/FormContainer";
import { Skeleton } from "../../../components/ui/skeleton";

const UserCtrl = new User();
const UserSoliInfo = ({ uid, Plan }) => {
  const { data: userInfo } = useQuery(uid, () => UserCtrl.getMe(uid));
  return (
    <div className="mt-5 flex items-center p-4 w-full md:w-full bg-white rounded-md shadow-md">
      <Avatar>
        <AvatarImage src={userInfo?.Img_url} />
        <AvatarFallback className="bg-black">
          <UserIcon className="text-white" />
        </AvatarFallback>
      </Avatar>
      <div className="ml-3 space-y-1">
        <h3>Correo: {userInfo?.email}</h3>
        <div className="flex">
          <h3>
            Nombre: {userInfo?.Nombre} {userInfo?.Apellido}
          </h3>
        </div>
        <h3>Plan: {Plan}</h3>
      </div>
    </div>
  );
};

const Conta = new ContabilidadCtrl();
export const Solicitud = () => {
  const { id } = useParams();
  const [Estatus, setEstatus] = useState(null);
  const [EstatusError, setEstatusError] = useState(false);

  const {
    data: solicitud,
    isLoading,
    isError,
  } = useQuery("Solicitud", () => Conta.getSolicitud(id));

  const formik = useFormik({
    initialValues: {},
    validateOnChange: true,
    onSubmit: async () => {
      if (Estatus != undefined && Estatus != "") {
        setEstatusError(false);
        const result = await Conta.updateSolicitud(id, { estatus: Estatus });
        if (result) {
          // El blog se creó correctamente
          toast({
            title: "Solicitud Modificada Exitosamente",
          });

          formik.resetForm();
        } else {
          // Hubo un error al crear el blog
          toast({
            variant: "destructive",
            title: "Ocurrio un error al modificar la Solicitud",
            description:
              "algo paso al monento de registrar los datos suministrados.",
          });
        }
      } else {
        setEstatusError(true);
      }
    },
  });

  if (isLoading) {
    return (
      <MainLayoutDg>
        <FormContainer>
          <div className="px-[3%] lg:px-0">
            <Skeleton className="w-[70%] h-7" />
            <Separador />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <div>
                <h2 className="text-2xl text-white font-bold mb-4 md:mb-5">
                  Datos Personales
                </h2>
                <Skeleton className="w-[100%] h-[20vh]" />
              </div>
              <div>
                <h2 className="text-2xl text-white font-bold mb-4 md:mb-5">
                  Firma Digital
                </h2>
                <Skeleton className="w-[100%] h-[20vh]" />
              </div>
              <div>
                <h2 className="text-xl text-white font-bold mb-6 lg:mb-6">
                  Cambiar Status de Solicitud
                </h2>
                <Skeleton className="w-[100%] h-[20vh]" />
              </div>
            </div>
          </div>
        </FormContainer>
      </MainLayoutDg>
    );
  }

  return (
    <MainLayoutDg>
      <FormContainer>
        <div className={` h-full md:h-[82vh] mb-5 px-[3%] lg:px-0 md:mt-5`}>
          <h1 className="text-3xl text-white font-bold my-4 md:mb-5">
            Solicitud: {id}
          </h1>

          <Separador />
          <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-3">
            {/* DATOS PERSONALES */}
            <div>
              <h2 className="text-2xl text-white font-bold mb-4 md:mb-5">
                Datos Personales
              </h2>
              <UserSoliInfo uid={solicitud?.uid} Plan={solicitud?.Plan} />
            </div>
            {/* DOCUMENTOS */}
            <div className="mt-3 md:mt-0">
              <h2 className="text-2xl text-white font-bold mb-4 md:mb-5">
                Firma Digital
              </h2>
              <div className=" w-full gap-3  overflow-x-auto">
                <a
                  className="bg-white cursor-pointer flex flex-col items-center justify-center shadow-md w-full h-[130px] rounded-md "
                  href={solicitud?.FirmaDigitalUrl}
                  download={`Firma`}
                >
                  <Download />
                  <h3 className="text-[10px]">Firma Digital</h3>
                </a>
              </div>
            </div>
            {/* Cambiar Status */}
            <form onSubmit={formik.handleSubmit} className="mt-3 md:mt-0">
              <h2 className="text-2xl text-white font-bold mb-4 md:mb-5">
                Cambiar Status de Solicitud
              </h2>
              <select
                name={"Status"}
                onChange={(value) => setEstatus(value.target.value)}
                className={` ${
                  EstatusError
                    ? "bg-red-500 text-white font-bold"
                    : "bg-gray-50"
                } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              >
                <option value="">Actualmente: {solicitud?.estatus}</option>
                <option value="Activa">Activa </option>
                <option value="Proceso">En Proceso </option>
                <option value="Finalizada">Finalizada </option>
              </select>
              <button
                type="submit"
                className="mt-5 w-full flex justify-center bg-black rounded-md py-2 text-white"
              >
                {formik.isSubmitting ? (
                  <Loader2 className="animate-spin animate-infinite" />
                ) : (
                  "Cambiar Estatus"
                )}
              </button>
            </form>
          </div>
        </div>
      </FormContainer>
    </MainLayoutDg>
  );
};
