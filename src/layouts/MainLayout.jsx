import React from "react";
import { Navbar } from "../components/Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 bg-slate-100 w-full">
      <Navbar/>
      <div className="max-w-6xl mx-auto h-full flex-1 w-full">{children}</div>
    </div>
  );
};
