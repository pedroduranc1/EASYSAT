import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { initialValues, validationSchema } from "../utils/perfil.form";
import { Input } from "../components/ui/Input";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const Perfil = () => {
  const { User } = useAuth();
  const navigate = useNavigate();
  if (!User) return navigate("/Login", { replace: true });

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <MainLayout>
      <div className="w-full flex flex-col  flex-1 h-screen px-2 md:px-[2%]">
        <h1 className="my-5 text-2xl font-bold">Perfil</h1>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full flex-col md:flex-row space-y-2">
            <TabsTrigger className="w-full" value="account">
              Mis Datos
            </TabsTrigger>
            <TabsTrigger className="w-full" value="updateAccount">
              Actualizar Datos
            </TabsTrigger>
            <TabsTrigger className="w-full" value="password">
              Configuracion
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="w-full justify-center items-center px-2 mt-14 md:mt-0"
            value="updateAccount"
          >
            <h3 className=" text-base md:text-2xl text-center font-semibold mt-7">
              Completa tus datos de perfil aqui
            </h3>
            <form
              className="space-y-4 md:space-y-6 max-w-lg mx-auto mt-9"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex space-x-3">
                <Input
                  className="w-full"
                  title={"Nombre"}
                  name={"Nombre"}
                  placeholder={"John"}
                  type={"text"}
                  value={formik.values.Nombre}
                  onChange={formik.handleChange}
                  error={formik.errors.Nombre}
                />
                <Input
                  className="w-full"
                  title={"Apellido"}
                  name={"Apellido"}
                  placeholder={"Doe"}
                  type={"text"}
                  value={formik.values.Apellido}
                  onChange={formik.handleChange}
                  error={formik.errors.Apellido}
                />
              </div>

              <div>
                <Input
                  className="w-full"
                  title={"Nombre de Usuario"}
                  name={"Username"}
                  placeholder={"johndoe27"}
                  type={"text"}
                  value={formik.values.Username}
                  onChange={formik.handleChange}
                  error={formik.errors.Username}
                />
              </div>

              <div>
                <Input
                  className="w-full"
                  title={"Imagen de Perfil"}
                  name={"User_img"}
                  type={"file"}
                  value={formik.values.User_img}
                  onChange={formik.handleChange}
                  error={formik.errors.User_img}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-black/70 transition-colors focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Actualizar Datos
              </button>
            </form>
          </TabsContent>
          <TabsContent className="mt-14 md:mt-0" value="password">
            Change your password here.
          </TabsContent>
          <TabsContent
            className="w-full justify-center items-center px-2  mt-14 md:mt-0"
            value="account"
          >
            <h3 className=" text-base md:text-2xl text-center font-semibold mt-7">
              Mi Perfil
            </h3>
            
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};
