import React, { useEffect, useState } from "react";
import { MainLayout } from "../../../layouts/MainLayout";
import { MainLayoutDg } from "../../../layouts/MainLayoutDg";
import { useAuth } from "../../../hooks/useAuth";
import { Input } from "../../../components/ui/Input";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../../utils/contabilidad.personas.form";
import { FileInput } from "../../../components/FileInput";
import { getCurrentDate } from "../../../utils/funcs";
import { ContabilidadCtrl } from "../../../api/contabilidad/fb.contabilidad";
import { toast } from "../../../components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const Conta = new ContabilidadCtrl();
export const CreateSoliPage = () => {
  const { User } = useAuth();
  const { userPlan } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!User) {
      return navigate("/Login");
    }

    if (!User.UserPlan.includes(userPlan)) {
      return navigate(`/Contabilidad/${User.UserPlan}/${User.uid}`);
    }
  }, [User]);

  const [FirmaDigital, setFirmaDigital] = useState(null);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      let solicitudData = {
        ...formData,
        uid: User?.uid,
        estatus: "Activa",
        email: User?.email,
        Plan: User?.UserPlan,
        Fecha: getCurrentDate(),
        FirmaDigitalUrl: FirmaDigital
          ? await Conta.uploadFirma(FirmaDigital, User?.uid)
          : "",
      };

      const result = await Conta.createSolicitud(User?.uid, solicitudData);
      if (result) {
        // El blog se creó correctamente
        toast({
          title: "Solicitud Creada Exitosamente",
        });

        formik.resetForm();
      } else {
        // Hubo un error al crear el blog
        toast({
          variant: "destructive",
          title: "Ocurrio un error al crear la solicitud",
          description:
            "algo paso al monento de registrar los datos suministrados.",
        });
      }
    },
  });
  return (
    <MainLayoutDg isblack={true}>
      <div className={`bg-DgyaLight  h-screen`}>
        <div className="max-w-6xl mx-auto">
          <div className={` px-[3%]  md:px-0 pt-[8.4%]`}>
            <div className="mb-[3.9%] w-full px-[2%] ">
            <div className="w-full h-full mb-5 px-[3%]">
        <h2 className="text-2xl font-bold text-white text-center py-5">Crear Solicitud</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-2xl rounded-md p-8 space-y-3 shadow-lg mx-auto bg-white "
        >
          <div className="grid grid-cols-1 space-y-2">
            <div className="flex">
              <div className="w-1/2 flex items-center gap-x-3 h-fit ">
                <h2>
                  Nombre Completo: {User.Nombre} {User.Apellido}
                </h2>
              </div>
              <div className="w-1/2 flex items-center gap-x-3 h-fit ">
                <h2>Nombre de Usuario: {User.Username}</h2>
              </div>
            </div>

            <div className="flex">
              <div className="w-full  flex items-center gap-x-3 h-fit ">
                <h2>Correo: {User.email}</h2>
              </div>
              <div className="w-full  flex items-center gap-x-3 h-fit ">
                <h2>Plan: {User.UserPlan}</h2>
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-x-3 h-fit ">
              <Input
                name={"Telefono"}
                title={"Telefono de contacto"}
                type={"text"}
                placeholder={"+52 555 34354464"}
                value={formik.values.Telefono}
                onChange={formik.handleChange}
                className={` w-full text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  
                        ${
                          formik.errors.Telefono &&
                          "bg-red-500 text-white placeholder:text-white"
                        }
                        `}
              />
            </div>

            <label className="block mb-2 text-sm font-medium text-gray-900">
              Agrega tu firma electronica
            </label>
            <FileInput Doc={FirmaDigital} setDoc={setFirmaDigital} />
          </div>
          <button
            type="submit"
            className="w-full flex hover:opacity-80 transition-all justify-center py-2 rounded-md bg-black text-white "
          >
            {formik.isSubmitting ? (
              <Loader2 className="animate-spin animate-infinite" />
            ) : (
              "Crear Solicitud"
            )}
          </button>
        </form>
      </div>
            </div>
          </div>
        </div>
      </div>
      
    </MainLayoutDg>
  );
};
