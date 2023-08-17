import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Admin Routes
import { AdminBlog } from "../pages/admin/Create.Blog";
import { UpdateBlogPage } from "../pages/admin/Update.Blog";
import { ActualizarCursoPage } from "../pages/admin/Update.Curso";
import { PageCurso } from "../pages/admin/Create.Curso";
import { PageCliente } from "../pages/admin/Create.Cliente";
import { PageClienteUpdate } from "../pages/admin/Update.Cliente";
import { CreateVideoCursoPage } from "../pages/admin/Create.Video.Curso";
import { UpdateVideoCursoPage } from "../pages/admin/Update.Video.Curso";
import { DeleteBlogPage } from "../pages/admin/Delete.Blog";
import { DeleteCursoPage } from "../pages/admin/Detele.Curso";
import { DeleteVideoPage } from "../pages/admin/Delete.Video";
import { DeleteUserPage } from "../pages/admin/Delete.User";
import { SuccessPage } from "../pages/success";

//Normal Routes
import { Main } from "../pages/Main";
import { Contabilidad } from "../pages/contabilidad/Contabilidad";
import { Cursos } from "../pages/cursos/Cursos";
import { Curso } from "../pages/cursos/curso/Curso";
import { Video } from "../pages/cursos/curso/video-curso/Video";
import { Blogs } from "../pages/blogs/Blogs";
import { Blog } from "../pages/blogs/blog/Blog";
import { LoginPage } from "../pages/auth/LoginPage";
import { Perfil } from "../pages/perfil/Perfil";
import { ErrorPage } from "../pages/404";
import { Personas } from "../pages/contabilidad/personas/Personas";
import { Empresas } from "../pages/contabilidad/empresas/Empresas";

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
    path:"/Contabilidad/Personas/:id",
    element:<Personas/>
  },
  {
    path:"/Contabilidad/Empresas/:id",
    element:<Empresas/>
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
    path:"/admin/eliminar-blog",
    element: <DeleteBlogPage/>
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
    path:"/admin/eliminar-curso",
    element: <DeleteCursoPage/>
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
    path:"/admin/eliminar-video-curso",
    element: <DeleteVideoPage/>
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
    path:"/admin/eliminar-cliente",
    element: <DeleteUserPage/>
  },
  {
    path:"*",
    element: <ErrorPage/>
  },
  {
    path:"/success",
    element: <SuccessPage/>
  }
  // {
  //   path: "/Registro",
  //   element: <RegistroPage/>,
  // },
]);

export const Rutas = () => {
  return <RouterProvider router={router} />;
};
