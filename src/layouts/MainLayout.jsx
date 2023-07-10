import React from "react";
import { Building2, LogOut } from "lucide-react";
import { Navbar } from "../components/Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-slate-100 w-screen">
      <Navbar/>
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </div>
  );
};
