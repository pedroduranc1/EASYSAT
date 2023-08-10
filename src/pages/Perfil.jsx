import React, { useEffect, useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import { FilePlus2, Pencil, Settings, ShieldAlert, User2 } from "lucide-react";
import { MisDatos } from "./perfil/MisDatos";
import { UpdateDatos } from "./perfil/UpdateDatos";
import { AdminPanel } from "./perfil/AdminPanel";

export const Perfil = () => {
  const { User } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setisAdmin] = useState(false);


  useEffect(() => {
    if (!User) return navigate("/Login", { replace: true });
  }, [User]);

  useEffect(() => {
    if (User.UserRole?.toLowerCase().trim().includes("admin")) setisAdmin(true);
  }, [User]);

  return (
    <MainLayout>
      <div className="w-full flex flex-col  flex-1 h-full px-2 md:px-[2%]">
        <h1 className="my-5 text-2xl font-bold">Perfil</h1>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full flex-col md:flex-row space-y-2">
            <TabsTrigger className="w-full" value="account">
              Mis Datos <User2 className="ml-3" />
            </TabsTrigger>
            <TabsTrigger className="w-full" value="updateAccount">
              Actualizar Datos <Pencil className="ml-3" />
            </TabsTrigger>
            <TabsTrigger className="w-full flex items-center" value="password">
              Ajustes <Settings className="ml-3" />
            </TabsTrigger>

            {isAdmin && (
              <TabsTrigger className="w-full flex items-center" value="admin">
                Panel Administrativo <ShieldAlert className="ml-3" />
              </TabsTrigger>
            )}
          </TabsList>
          {/* mis datos section */}
          <TabsContent
            className="w-full h-[70vh] justify-center items-center px-2  mt-[20%] md:mt-0"
            value="account"
          >
            <MisDatos/>
          </TabsContent>

          {/* actualizar datos section */}
          <TabsContent
            className="w-full h-[70vh] justify-center items-center px-2 mt-[20%] md:mt-0"
            value="updateAccount"
          >
            <UpdateDatos/>
          </TabsContent>

          <TabsContent className="mt-[20%] h-[70vh] md:mt-0" value="password">
            Change your password here.
          </TabsContent>
          
          <TabsContent
            value="admin"
            className="w-full justify-center items-center px-2  mt-[20%] md:mt-0"
          >
            <AdminPanel/>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};
