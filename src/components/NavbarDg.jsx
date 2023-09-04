import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Menu, UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function checkPage() {
  const location = useLocation();

  if (location.pathname === "/") {
    // Estamos en la página principal
    // Hacer algo
    return true;
  } else {
    // Estamos en otra página
    return false;
  }
}

export const NavbarDg = ({ isblack }) => {
  const { User, logout } = useAuth();

  const [toggleMenu, settoggleMenu] = useState(false);

  const isMainPage = checkPage();

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
              className={`px-2 py-4 ${
                scrollPassedLimit || (!isblack && "text-white")
              } hover:text-DgyaDark transition-all`}
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
            scrollPassedLimit || isblack ? "bg-black/80" : ""
          } transition-all  md:flex justify-center p-4 ${
            scrollPassedLimit || isblack ? "" : "mt-5"
          } rounded-b-md ${
            scrollPassedLimit || isblack ? "shadow-lg" : ""
          } gap-x-5 text-white font-semibold text-lg`}
        >
          <Link
            to="/"
            className={`hover:text-DgyaDark transition-colors ${
              scrollPassedLimit || isblack ? "text-white" : ""
            }`}
          >
            Inicio
          </Link>
          {isMainPage ? (
            <a
              href="#acerca"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Acerca de
            </a>
          ) : (
            <Link
              to="/Contabilidad"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Contabilidad
            </Link>
          )}

          {isMainPage ? (
            <a
              href="#servicios"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Servicios
            </a>
          ) : (
            <Link
              to="/Cursos"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Cursos
            </Link>
          )}

          {isMainPage ? (
            <a
              href="#contacto"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Contacto
            </a>
          ) : (
            <Link
              to="/Blogs"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Blogs
            </Link>
          )}

          {isMainPage && (
            <Link
              to="/Contabilidad"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Contabilidad
            </Link>
          )}

          {isMainPage && (
            <Link
              to="/cursos"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Cursos
            </Link>
          )}

          {isMainPage && (
            <Link
              to="/blogs"
              className={`hover:text-DgyaDark transition-colors ${
                scrollPassedLimit || isblack ? "text-white" : ""
              }`}
            >
              Blogs
            </Link>
          )}

          {showDashboard()}
          <ul className="hidden md:flex [&>li]:text-slate-600 [&>li]:font-semibold">
            {User ? (
              <div className="flex space-x-3">
                <Link
                  to="/Perfil"
                  className={`flex items-start ${
                    isblack ? "text-white" : ""
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
                      scrollPassedLimit || isblack ? "text-white" : ""
                    }`}
                  >
                    {User?.Username && <p>{User.Username}</p>}
                  </h2>
                </Link>
                <LogOut
                  onClick={logout}
                  className={`w-5 h-5 mt-1 cursor-pointer ${
                    scrollPassedLimit || isblack ? "text-white" : "text-white"
                  }`}
                />
              </div>
            ) : (
              <Link
                to="/Login"
                className={`hover:text-DgyaDark transition-colors ${
                  scrollPassedLimit ? "text-white" : ""
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
            ${
              scrollPassedLimit || isblack
                ? "bg-white text-black"
                : "text-white"
            } 
            `}
          />
        </div>
        {/* MENU MOBILE */}
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
                <Link to="/" className="hover:text-DgyaDark transition-colors">
                  Inicio
                </Link>
                {isMainPage ? (
                  <a
                    href="#acerca"
                    className="hover:text-DgyaDark transition-colors"
                  >
                    Acerca de
                  </a>
                ) : (
                  <Link>Contabilidad</Link>
                )}

                {isMainPage ? (
                  <a
                    href="#servicios"
                    className="hover:text-DgyaDark transition-colors"
                  >
                    Servicios
                  </a>
                ) : (
                  <Link
                  to='/Cursos'
                  >Cursos</Link>
                )}
                {isMainPage ? (
                  <a
                    href="#contacto"
                    className="hover:text-DgyaDark transition-colors"
                  >
                    Contacto
                  </a>
                ) : (
                  <Link
                  to="/Blogs"
                  >Blogs</Link>
                )}

                {isMainPage && (
                  <Link
                    to="/Contabilidad"
                    className="hover:text-DgyaDark transition-colors"
                  >
                    Contabilidad
                  </Link>
                )}

                {isMainPage && (
                  <Link
                    to="/cursos"
                    className="hover:text-DgyaDark transition-colors"
                  >
                    Cursos
                  </Link>
                )}

                {isMainPage && (
                  <Link
                    to="/blogs"
                    className="hover:text-DgyaDark transition-colors"
                  >
                    Blogs
                  </Link>
                )}

                {showDashboardMobile()}
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
                    <LogOut
                      onClick={logout}
                      className="w-5 h-5 cursor-pointer"
                    />
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
