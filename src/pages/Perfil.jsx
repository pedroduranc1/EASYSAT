import React, { useEffect, useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { initialValues, validationSchema } from "../utils/perfil.form";
import { Input } from "../components/ui/Input";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Pencil, Settings, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User as UserCtrl } from "../api/fb.user";

const userCtrl = new UserCtrl();
export const Perfil = () => {
  const { User, updateUser } = useAuth();
  const navigate = useNavigate();
  const [Imagen, setImagen] = useState(null);
  const [handleImagen, sethandleImagen] = useState(null);

  useEffect(() => {
    if (!User) return navigate("/Login", { replace: true });
  }, [User]);

  useEffect(() => {}, [User]);

  const formik = useFormik({
    initialValues: initialValues(User),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      let userInfo;
      if(Imagen){
        const imgUrl = await userCtrl.uploadImage(Imagen, User?.uid);
        sethandleImagen(imgUrl);
        userInfo = {
          ...formValue,
          uid:User.uid,
          Img_url: imgUrl,
          Cargo: User.Cargo,
          Empresa: User.Empresa,
        };
        await userCtrl.updateMe(User?.uid, userInfo);
        updateUser(userInfo);
      }else{
        userInfo = {
          ...formValue,
          uid:User.uid,
          Img_url: User.Img_url,
          Cargo: User.Cargo,
          Empresa: User.Empresa,
        };
        await userCtrl.updateMe(User?.uid, userInfo);
        updateUser(userInfo);
      }
    },
  });

  return (
    <MainLayout>
      <div className="w-full flex flex-col  flex-1 h-screen px-2 md:px-[2%]">
        <h1 className="my-5 text-2xl font-bold">Perfil</h1>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full flex-col md:flex-row space-y-2">
            <TabsTrigger className="w-full" value="account">
              Mis Datos <User2 className="ml-3" />
            </TabsTrigger>
            <TabsTrigger className="w-full" value="updateAccount">
              Actualizar Datos <Pencil className="ml-3" />
            </TabsTrigger>
            <TabsTrigger className="w-full flex items-center" value="password">
              Ajustes <Settings className="ml-3" />
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

              <div className="flex items-end space-x-3">
                <Input
                  className="w-full"
                  title={"Imagen de Perfil"}
                  name={"User_img"}
                  type={"file"}
                  onChange={(event) => {
                    setImagen(event.currentTarget.files[0]);
                  }}
                />
                <Avatar className="-translate-y-1">
                  <AvatarImage
                    src={User ? User.Img_url : handleImagen}
                    alt="@shadcn"
                  />
                  <AvatarFallback className="bg-black">
                    <User2 className="text-white" />
                  </AvatarFallback>
                </Avatar>
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
              Datos Personales
            </h3>
            <div className="bg-white max-w-xl rounded-md shadow-lg mx-auto mt-5 p-7 flex flex-col gap-5 items-end">
              <div className="flex w-full justify-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage className="object-cover" src={User ? User.Img_url : handleImagen} />
                  <AvatarFallback className="bg-black"><User2 className="text-white" /></AvatarFallback>
                </Avatar>
              </div>
              <div className="w-full flex">
                <div className="w-full flex items-start">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Nombre:
                  </label>
                  <p className="text-sm font-semibold text-gray-500 ml-2">
                    {User ? User.Nombre : "Debes completar los datos"}
                  </p>
                </div>
                <div className="w-full flex items-start">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Apellido:
                  </label>
                  <p className="text-sm font-semibold text-gray-500 ml-2">
                    {User ? User.Apellido : "Debes completar los datos"}
                  </p>
                </div>
              </div>

              <div className="w-full flex">
                <div className="w-full flex items-start">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Empresa:
                  </label>
                  <p className="text-sm font-semibold text-gray-500 ml-2">
                    {User ? User.Empresa : "Debes completar los datos"}
                  </p>
                </div>
                <div className="w-full flex items-start">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Username:
                  </label>
                  <p className="text-sm font-semibold text-gray-500 ml-2">
                    {User ? User.Username : "Debes completar los datos"}
                  </p>
                </div>
                <div className="w-full flex items-start">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Cargo:
                  </label>
                  <p className="text-sm font-semibold text-gray-500 ml-2">
                    {User ? User.Cargo : "Debes completar los datos"}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};
