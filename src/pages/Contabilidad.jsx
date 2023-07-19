import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";

export const Contabilidad = () => {
  const {User} = useAuth()
  if(!User) return window.location.href = "/Login"
  return (
    <MainLayout>
      <div className="h-full w-full">
        Contabilidad
      </div>
    </MainLayout>
  );
};
