import { useFormik } from "formik";
import React, { useState } from "react";
import { initialValues, validationSchema } from "../utils/perfil.curso.form";
import { Input } from "./ui/Input";
import { Loader2 } from "lucide-react";
import { CursosCtrl } from "../api/fb.cursos";
import { toast } from "../components/ui/use-toast";

const cursoCtrl = new CursosCtrl()
export const UpdateCursoForm = ({
  cursoSelected,
  setcursoSelected,
  AutorUsername,
}) => {
  const [CursoImg, setCursoImg] = useState(null);

  const formik = useFormik({
    initialValues: initialValues(cursoSelected),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
        const Slug = formValue.Titulo.replace(/\s+/g, "-");
        let UpdatedCursoData = {
            ...formValue,
            Slug:Slug,
            curso_img: CursoImg ? await cursoCtrl.uploadCursoImage(CursoImg,cursoSelected.id,Slug) : cursoSelected?.curso_img,
          }
          const resp = await cursoCtrl.updateCurso(cursoSelected.id,UpdatedCursoData)
          if(resp){
            setcursoSelected(null)
            toast({
                title: "Curso actualizado exitosamente",
              });
          }else{
            toast({
                variant: "destructive",
                title: "Ocurrio un error al actualizar el Curso",
                description:
                  "algo paso al monento de registrar los datos suministrados.",
              });
          }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full space-y-3">
        <Input
          title={"Titulo"}
          className={"w-full"}
          name={"Titulo"}
          type={"text"}
          placeholder={"blog titulo"}
          value={formik.values.Titulo}
          onChange={formik.handleChange}
          error={formik.errors.Titulo}
        />
        <Input
          title={"Descripcion"}
          className={"w-full"}
          name={"Descripcion"}
          type={"text"}
          placeholder={"curso Descripcion"}
          value={formik.values.Descripcion}
          onChange={formik.handleChange}
          error={formik.errors.Descripcion}
        />
        <h4 className="block mb-2 text-sm font-medium text-gray-900 ">
          Autor: {AutorUsername}
        </h4>
        <Input
          title={"Sube una imagen para tu blog"}
          className={"w-full"}
          name={"markdown"}
          type={"file"}
          onChange={(event) => {
            setCursoImg(event.currentTarget.files[0]);
          }}
        />

        <button
          type="submit"
          className="w-full px-2 py-2 flex items-center justify-center hover:bg-black/70 transition-colors bg-black text-white rounded-md"
        >
          {formik.isSubmitting ? (
            <Loader2 className="animate-spin animate-infinite" />
          ) : (
            "Modificar Curso"
          )}
        </button>
      </div>
    </form>
  );
};
