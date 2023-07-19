import React from "react";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";

export const MainLayout = ({ children }) => {
  const { User } = useAuth();

  return (
    <div className="grid grid-cols-1 bg-slate-100 w-full">
      <Navbar user={User}/>
      <div className="max-w-6xl mx-auto h-full flex-1 w-full">{children}</div>
    </div>
  );
};
