import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";
import { NavbarDg } from "../components/NavbarDg";
import logo from "../assets/logoNav.webp";

export const MainLayoutDg = ({ children,isblack }) => {
  const { User } = useAuth();

  useEffect(() => {}, [User]);
  return (
    <div className="flex flex-col bg-slate-100 w-full min-h-screen">
      <NavbarDg isblack={isblack}/>
      <div className="w-full">{children}</div>
      <div className="fixed  left-[3%] bottom-[3%] bg-slate-700 rounded-full w-20 h-20 md:w-32 md:h-32">
        <div></div>
      </div>
      <div className="fixed right-[3%] bottom-[3%] rounded-full flex justify-center items-center bg-slate-200 shadow-xl p-3 w-14 h-14 ">
        <img  src={logo} alt="" />
      </div>
      <Toaster/>
    </div>
  );
};
