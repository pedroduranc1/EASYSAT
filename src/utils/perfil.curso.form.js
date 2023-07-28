import * as Yup from "yup";

export function initialValues(curso) {
  return {
    Titulo:  curso?.Titulo || "",
    Descripcion:  curso?.Descripcion  || "",
    Autor:  curso?.Autor  || "",
  };
}

export function validationSchema() {
  return Yup.object({
    Titulo: Yup.string().required(true),
    Descripcion: Yup.string().required(true),
    Autor: Yup.string().required(true),
  });
}
