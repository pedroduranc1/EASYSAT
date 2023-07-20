import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Contabilidad = () => {
  const {User} = useAuth()
  const navigate = useNavigate()
  if (!User) return (navigate('/Login',{replace:true}));
  return (
    <MainLayout>
      <div className="h-full w-full">
        Contabilidad
      </div>
    </MainLayout>
  );
};
