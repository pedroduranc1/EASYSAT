import React from "react";
import { Navbar } from "../components/Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-slate-100 w-full">
      <Navbar/>
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </div>
  );
};
