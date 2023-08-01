import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { Input } from "../../components/ui/Input";
import { User } from "../../api/fb.user";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../../utils/perfil.user.form";
import { Loader2 } from "lucide-react";
import { toast } from "../../components/ui/use-toast";

const userCtrl = new User();
export const PageCliente = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      const resp = await userCtrl.createUser(formValues)
      if(resp == true){
        toast({
          title: "Cliente creado exitosamente",
        });
        formik.resetForm()
      }else{
        if(resp == "Firebase: Error (auth/email-already-in-use).") {
          toast({
            variant: "destructive",
            title: "El correo esta en uso",
          });
        }
      }
    },
  });
  return (
    <MainLayout>
      <div className="w-full h-[88vh] px-[3%]">
        <h2 className="text-2xl font-bold text-center py-5">Crear Cliente</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-2xl rounded-md p-8 shadow-lg mx-auto bg-white "
        >
          <div className="w-full space-y-3">
            <div className="flex flex-col md:flex-row md:space-x-3">
              <Input
                title={"Nombre"}
                className={"w-full"}
                name={"Nombre"}
                type={"text"}
                placeholder={"John"}
                value={formik.values.Nombre}
                onChange={formik.handleChange}
                error={formik.errors.Nombre}
              />
              <Input
                title={"Apellido"}
                className={"w-full"}
                name={"Apellido"}
                type={"text"}
                placeholder={"Doe"}
                value={formik.values.Apellido}
                onChange={formik.handleChange}
                error={formik.errors.Apellido}
              />
            </div>
            <Input
              title={"Nombre de usuario"}
              className={"w-full"}
              name={"Username"}
              type={"text"}
              placeholder={"John"}
              value={formik.values.Username}
              onChange={formik.handleChange}
              error={formik.errors.Username}
            />
            <div className="flex flex-col md:flex-row md:space-x-3">
              <Input
                title={"Correo"}
                className={"w-full"}
                name={"email"}
                type={"text"}
                placeholder={"Johndoe@gmail.com"}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
              />
              <Input
                title={"Contraseña"}
                className={"w-full"}
                name={"password"}
                type={"text"}
                placeholder={"*******"}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-3">
              <Input
                title={"Cargo"}
                className={"w-full"}
                name={"Cargo"}
                type={"text"}
                placeholder={"gerente,empleado,etc..."}
                value={formik.values.Cargo}
                onChange={formik.handleChange}
                error={formik.errors.Cargo}
              />
              <Input
                title={"Empresa"}
                className={"w-full"}
                name={"Empresa"}
                type={"text"}
                placeholder={"inc S.A"}
                value={formik.values.Empresa}
                onChange={formik.handleChange}
                error={formik.errors.Empresa}
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 pb-5">
              <select
                name={"UserPlan"}
                value={formik.values.UserPlan}
                onChange={formik.handleChange}
                className={`${
                  formik.errors.UserPlan
                    ? "bg-red-500 placeholder:text-white text-white"
                    : ""
                } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              >
                <option value="" label="Selecciona un plan">
                  planes de usuario{" "}
                </option>
                <option value="Gratis">Gratis </option>
                <option value="RPC">Plan RPC y STATUS </option>
                <option value="Pendientes">Plan Años Pendientes </option>
                <option value="Personal">Plan Personal </option>
                <option value="Empresarial">Plan Empresarial </option>
              </select>

              <select
                name={"UserRole"}
                value={formik.values.UserRole}
                onChange={formik.handleChange}
                className={`${
                  formik.errors.UserRole
                    ? "bg-red-500 placeholder:text-white text-white"
                    : ""
                } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              >
                <option value="" label="Permisos de Usuario">
                  Permisos de Usuario{" "}
                </option>
                <option value="Admin">Admin</option>
                <option value="SubAdmin">SubAdmin</option>
                <option value="Cliente">Cliente</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-2 py-2 flex items-center justify-center hover:bg-black/70 transition-colors bg-black text-white rounded-md"
            >
              {formik.isSubmitting ? (
                <Loader2 className="animate-spin animate-infinite" />
              ) : (
                "Crear Cliente"
              )}
              
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};
