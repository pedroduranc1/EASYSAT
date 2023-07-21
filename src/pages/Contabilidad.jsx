import React, { useEffect } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Contabilidad = () => {
  const {User} = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!User) return (navigate('/Login',{replace:true}));
  }, [User])
  
  return (
    <MainLayout>
      <div className="h-screen w-full">
        Contabilidad
      </div>
    </MainLayout>
  );
};
