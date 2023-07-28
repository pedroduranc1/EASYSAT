import React, { useState } from "react";
import { Input } from "./ui/Input";
import { Loader2 } from "lucide-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../utils/perfil.blog.form";
import { toast } from "../components/ui/use-toast";


import { BlogsCtrl } from "../api/fb.blogs";

const blogCtrl = new BlogsCtrl()
export const UpdateBlogForm = ({ BlogSelected, AutorUsername,setBlogSelected }) => {

    const [BlogMD, setBlogMD] = useState(null)
    const [BlogImg, setBlogImg] = useState(null)

  const formik = useFormik({
    initialValues: initialValues(BlogSelected),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      const Slug = formValue.Titulo.replace(/\s+/g, "-");
      let UpdatedBlogData = {
        ...formValue,
        Slug:Slug,
        blogFileName: BlogMD ? await blogCtrl.uploadBlogMD(BlogMD,BlogSelected.id,Slug) : BlogSelected?.blogFileName,
        blog_img:BlogImg ? await blogCtrl.uploadBlogImage(BlogImg,BlogSelected.id,Slug) : BlogSelected?.blog_img
      }

      const resp = await blogCtrl.updateBlog(BlogSelected.id,UpdatedBlogData)
      if(resp){
        setBlogSelected(null)
        toast({
            title: "Blog actualizado exitosamente",
          });
      }else{
        toast({
            variant: "destructive",
            title: "Ocurrio un error al actualizar el blog",
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
          placeholder={"blog descripcion"}
          value={formik.values.Descripcion}
          onChange={formik.handleChange}
          error={formik.errors.Descripcion}
        />

        <h4 className="block mb-2 text-sm font-medium text-gray-900 ">
          Autor: {AutorUsername}
        </h4>

        <Input
          title={"Sube tu archivo MarkDown"}
          className={"w-full"}
          name={"markdown"}
          type={"file"}
          onChange={(event) => {
            setBlogMD(event.currentTarget.files[0]);
          }}
        />

        <Input
          title={"Sube una imagen para tu blog"}
          className={"w-full"}
          name={"markdown"}
          type={"file"}
          onChange={(event) => {
            setBlogImg(event.currentTarget.files[0]);
          }}
        />

        <button
          type="submit"
          className="w-full px-2 py-2 flex items-center justify-center hover:bg-black/70 transition-colors bg-black text-white rounded-md"
        >
          {formik.isSubmitting ? (
            <Loader2 className="animate-spin animate-infinite" />
          ) : (
            "Modificar Blog"
          )}
        </button>
      </div>
    </form>
  );
};
