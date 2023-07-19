import React from "react";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";

export const MainLayout = ({ children }) => {
  const { User } = useAuth();

  return (
    <div className="flex flex-col bg-gray-100 w-full h-full">
      <Navbar user={User}/>
      <div className="max-w-6xl mx-auto h-screen flex-1 w-full">{children}</div>
    </div>
  );
};
