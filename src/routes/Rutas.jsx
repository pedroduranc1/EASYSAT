import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegistroPage } from "../pages/RegistroPage";
import { Main } from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path:"/registro",
    element:<RegistroPage/>
  },
  {
    path:'/inicio',
    element:<Main/>
  }
]);

export const Rutas = () => {
  return <RouterProvider router={router} />;
};
