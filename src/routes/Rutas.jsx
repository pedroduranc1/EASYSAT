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

//Admin Routes
import { AdminBlog } from "../pages/admin/Create.Blog";
import { UpdateBlogPage } from "../pages/admin/Update.Blog";
import { ActualizarCursoPage } from "../pages/admin/Update.Curso";
import { PageCurso } from "../pages/admin/Create.Curso";
import { PageCliente } from "../pages/admin/Create.Cliente";
import { PageClienteUpdate } from "../pages/admin/Update.Cliente";
import { CreateVideoCursoPage } from "../pages/admin/Create.Video.Curso";
import { UpdateVideoCursoPage } from "../pages/admin/Update.Video.Curso";

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
    path:"/admin/crear-blog",
    element: <AdminBlog/>
  },
  {
    path:"/admin/actualizar-blog",
    element: <UpdateBlogPage/>
  },
  {
    path:"/admin/crear-curso",
    element: <PageCurso/>
  },
  {
    path:"/admin/actualizar-curso",
    element: <ActualizarCursoPage/>
  },
  {
    path:"/admin/crear-video-curso",
    element: <CreateVideoCursoPage/>
  },
  {
    path:"/admin/actualizar-video-curso",
    element: <UpdateVideoCursoPage/>
  },
  {
    path:"/admin/crear-cliente",
    element: <PageCliente/>
  },
  {
    path:"/admin/actualizar-cliente",
    element: <PageClienteUpdate/>
  },
  {
    path:"*",
    element: <ErrorPage/>
  },
  // {
  //   path: "/Registro",
  //   element: <RegistroPage/>,
  // },
]);

export const Rutas = () => {
  return <RouterProvider router={router} />;
};
