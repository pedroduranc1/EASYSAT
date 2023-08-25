import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";
import { NavbarDg } from "../components/NavbarDg";

export const MainLayoutDg = ({ children,isblack }) => {
  const { User } = useAuth();

  useEffect(() => {}, [User]);
  return (
    <div className="flex flex-col bg-slate-100 w-full min-h-screen">
      <NavbarDg isblack={isblack}/>
      <div className="w-full">{children}</div>
      <Toaster/>
    </div>
  );
};
