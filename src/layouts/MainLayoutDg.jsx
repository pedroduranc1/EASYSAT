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
      <div className="fixed  left-[3%] bottom-[3%] bg-slate-700 rounded-full w-20 h-20 md:w-40 md:h-40">
        <div></div>
      </div>
      <Toaster/>
    </div>
  );
};
