import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";
import { NavbarDg } from "../components/NavbarDg";
import logo from "../assets/logoNuevo.png";
import { useLocation } from "react-router-dom";

export const MainLayoutDg = ({ children, isblack }) => {
  const { User } = useAuth();
  const [toggleChatbot, settoggleChatbot] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.querySelector(".cc-nsge");

    if (element) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "data-visible"
          ) {
            // Reemplaza 'data-is-failure' con el nombre real del atributo que estás observando, si es diferente
            const newValue = element.getAttribute("data-visible");
            if (newValue === "false") {
              settoggleChatbot(true);
            } else if (newValue === "true") {
              settoggleChatbot(false);
            }
          }
        });
      });

      observer.observe(element, { attributes: true });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {}, [User]);
  return (
    <div className="flex flex-col bg-slate-100 w-full min-h-screen">
      <NavbarDg isblack={isblack} />
      <div className="w-full">{children}</div>

      {pathname == "/" && (
        <div className="fixed  left-[3%] bottom-[3%] bg-slate-700 rounded-full w-20 h-20 md:w-32 md:h-32">
          <div></div>
        </div>
      )}

      <div className="fixed z-50 flex-col md:flex-row right-[2%] bottom-[3%] rounded-full flex justify-center items-end md:items-center">
        <div
          className={`${
            toggleChatbot ? "flex" : "hidden"
          } w-[400px] shadow-2xl mb-7 md:mb-0 rounded-md bg-LogoBlue h-14 p-4  justify-center items-center`}
        >
          <h3 className="text-white text-sm">
            Hola soy Kavii tu asistente virtual, es un placer saludarte, ¿en que
            te podemos ayudar?
          </h3>
        </div>
        <div className="w-16 rounded-full  ml-2">
          <img
            className="w-full animate-float h-full bg-center bg-contain"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};
