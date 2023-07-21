import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";
import { Toaster } from "@/components/ui/toaster"

export const MainLayout = ({ children }) => {
  const { User } = useAuth();

  useEffect(() => {
  }, [User])
  
  return (
    <div className="flex flex-col bg-gray-100 w-full h-full">
      <Navbar user={User}/>
      <div className="max-w-6xl mx-auto h-screen flex-1 w-full">{children}</div>
      <Toaster />
    </div>
  );
};
