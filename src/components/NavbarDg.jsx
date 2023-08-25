import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Menu, UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const NavbarDg = ({ isblack }) => {
  const { User, logout } = useAuth();

  const [toggleMenu, settoggleMenu] = useState(false);

  

  const handleMenuToggle = () => {
    settoggleMenu(!toggleMenu);
  };

  const [scrollPassedLimit, setScrollPassedLimit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLimit = 200; // Define el límite de scroll después del cual deseas cambiar el estilo

      if (window.scrollY > scrollLimit) {
        setScrollPassedLimit(true);
      } else {
        setScrollPassedLimit(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showDashboard = () => {
    if (User) {
      if (User.UserRole.includes("Admin")) {
        return (
          <li>
            <Link
              className={`px-2 py-4 ${scrollPassedLimit || isblack ? 'text-black' : "text-white"} hover:text-DgyaDark transition-all`}
              to="/Solicitudes"
            >
              Solicitudes
            </Link>
          </li>
        );
      } else {
        return null;
      }
    }
  };

  const showDashboardMobile = () => {
    if (User) {
      if (User.UserRole.includes("Admin")) {
        return (
          <li className=" hover:bg-slate-100 hover:rounded-md hover:text-black transition-all py-2">
            <Link className="w-full block" to="/Solicitudes">
              Solicitudes
            </Link>
          </li>
        );
      } else {
        return null;
      }
    }
  };
  return (
    <>
      <div className="fixed z-50 flex w-full justify-center">
        <ul
          className={`hidden ${
            scrollPassedLimit || isblack ? "bg-white" : ""
          } transition-all  md:flex justify-center p-4 ${
            scrollPassedLimit || isblack ? "" : "mt-5"
          } rounded-b-md ${
            scrollPassedLimit || isblack ? "shadow-lg" : ""
          } gap-x-5 text-white font-semibold text-lg`}
        >
          <Link
            to="/"
            className={`hover:text-DgyaDark transition-colors ${
              scrollPassedLimit || isblack ? "text-black" : ""
            }`}
          >
            Inicio
          </Link>
          <a
            href="#acerca"
            className={`hover:text-DgyaDark transition-colors ${
              scrollPassedLimit || isblack ? "text-black" : ""
            }`}
          >
            Acerca de
          </a>
          <a
            href="#servicios"
            className={`hover:text-DgyaDark transition-colors ${
              scrollPassedLimit || isblack ? "text-black" : ""
            }`}
          >
            Servicios
          </a>
          <Link
            to="/cursos"
            className={`hover:text-DgyaDark transition-colors ${
              scrollPassedLimit || isblack ? "text-black" : ""
            }`}
          >
            Cursos
          </Link>
          <Link
            to="/blogs"
            className={`hover:text-DgyaDark transition-colors ${
              scrollPassedLimit || isblack ? "text-black" : ""
            }`}
          >
            Blogs
          </Link>
          <a
            href="#contacto"
            className={`hover:text-DgyaDark transition-colors ${
              scrollPassedLimit || isblack ? "text-black" : ""
            }`}
          >
            Contacto
          </a>
          {showDashboard()}
          <ul className="hidden md:flex [&>li]:text-slate-600 [&>li]:font-semibold">
            {User ? (
              <div className="flex space-x-3">
                <Link
                  to="/Perfil"
                  className={`flex items-start ${
                    isblack ? "text-black" : ""
                  } justify-center space-x-3`}
                >
                  <Avatar className="-translate-y-1">
                    <AvatarImage src={User.Img_url} />
                    <AvatarFallback className="bg-black">
                      <UserIcon className="text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <h2
                    className={`${
                      scrollPassedLimit || isblack ? "text-black" : ""
                    }`}
                  >
                    {User?.Username && <p>{User.Username}</p>}
                  </h2>
                </Link>
                <LogOut
                  onClick={logout}
                  className={`w-5 h-5 mt-1 cursor-pointer ${
                    scrollPassedLimit || isblack ? "text-black" : "text-white"
                  }`}
                />
              </div>
            ) : (
              <Link
                to="/Login"
                className={`hover:text-DgyaDark transition-colors ${
                  scrollPassedLimit ? "text-black" : ""
                }`}
              >
                Iniciar Sesion
              </Link>
            )}
          </ul>
        </ul>
        <div className={`w-full md:hidden p-2`}>
          <Menu
            size={50}
            onClick={handleMenuToggle}
            className={`flex mr-auto  cursor-pointer md:hidden p-2 rounded-md transition-all
            ${scrollPassedLimit ? "bg-white text-black" : "text-white"}
            `}
          />
        </div>
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col w-full h-screen absolute left-0 top-0 bg-white px-6 py-4 md:hidden"
            >
              <Menu
                size={40}
                onClick={handleMenuToggle}
                className={`flex mr-auto ${
                  toggleMenu ? "text-black" : "text-white"
                } cursor-pointer md:hidden -translate-x-2 mb-5
                
                `}
              />
              <ul className="flex flex-col justify-center space-y-3 gap-x-5 text-black font-semibold text-lg">
                <Link 
                to="/"
                className="hover:text-DgyaDark transition-colors">
                  Inicio
                </Link>
                <a 
                href="#acerca"
                className="hover:text-DgyaDark transition-colors">
                  Acerca de
                </a>
                <a 
                href="#servicios"
                className="hover:text-DgyaDark transition-colors">
                  Servicios
                </a>
                <Link 
                to="/cursos"
                className="hover:text-DgyaDark transition-colors">
                  Cursos
                </Link>
                <Link 
                to="/blogs"
                className="hover:text-DgyaDark transition-colors">Blogs</Link>
                <a
                href="#contacto"
                className="hover:text-DgyaDark transition-colors">
                  Contacto
                </a>
                {
                  showDashboardMobile()
                }
                {User ? (
                <div className="flex py-2 hover:border-b-2 cursor-pointer hover:border-slate-500 transition-all items-center justify-between md:justify-start md:space-x-3">
                  <Link
                    to="/Perfil"
                    className="w-full flex space-x-3 items-center"
                  >
                    <Avatar>
                      <AvatarImage src={User.Img_url} />
                      <AvatarFallback className="bg-black">
                        <UserIcon className="text-white" />
                      </AvatarFallback>
                    </Avatar>
                    {User.Username && <p>{User.Username}</p>}
                  </Link>
                  <LogOut onClick={logout} className="w-5 h-5 cursor-pointer" />
                </div>
              ) : (
                <li>
                  <Link
                    className=" py-4 hover:border-b-2 hover:border-slate-500 transition-all"
                    to="/Login"
                  >
                    Iniciar Sesion
                  </Link>
                </li>
              )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
