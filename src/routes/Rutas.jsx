import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "../pages/Main";
import { Contabilidad } from "../pages/Contabilidad";
import { Cursos } from "../pages/Cursos";
import { Blogs } from "../pages/Blogs";
import { LoginPage } from "../pages/LoginPage";
import { Blog } from "../pages/Blog";
import { Curso } from "../pages/Curso";
import { ErrorPage } from "../pages/404";
import { Perfil } from "../pages/Perfil";
import { Video } from "../pages/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/Contabilidad",
    element: <Contabilidad/>,
  },
  {
    path: "/Cursos",
    element: <Cursos/>,
  },
  {
    path: "/curso/:cursoId",
    element: <Curso/>,
  },
  {
    path: "/curso/:cursoId/video/:id",
    element: <Video/>,
  },
  {
    path: "/Blogs",
    element: <Blogs/>,
  },
  {
    path: "/Blog/:slug",
    element: <Blog/>,
  },
  {
    path: "/Login",
    element: <LoginPage/>,
  },
  {
    path: "/Perfil",
    element: <Perfil/>,
  },
  {
    path:"*",
    element: <ErrorPage/>
  }
  // {
  //   path: "/Registro",
  //   element: <RegistroPage/>,
  // },
]);

export const Rutas = () => {
  return <RouterProvider router={router} />;
};
