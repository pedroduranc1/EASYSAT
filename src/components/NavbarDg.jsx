import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Menu, UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation,  } from "react-router-dom";
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
  const location = useLocation();
  const [Route, setRoute] = useState(location.pathname)

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

  const routeSelected = () => {

  }

  const showDashboard = () => {
    if (User) {
      if (User.UserRole.includes("Admin")) {
        return (
          <Link
              className={`px-4 py-2 ${
                scrollPassedLimit || (!isblack && "text-black")
              } hover:bg-LogoBlue hover:text-white transition-all`}
              to="/Solicitudes"
            >
              Solicitudes
            </Link>
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
          <li className=" hover:text-DgyaDark hover:rounded-md  transition-all py-2">
            <Link  to="/Solicitudes"
                  className={`w-full block hover:text-DgyaDark ${Route === '/Solicitudes' && 'bg-LogoBlue p-2 rounded-md text-white'} transition-colors`}
            
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
  return (
    <>
      <div className="fixed z-50 flex w-full justify-center">
        <ul
          className={`hidden bg-white ${
            scrollPassedLimit || isblack ? "bg-black/80" : ""
          } transition-all  md:flex justify-center  ${
            scrollPassedLimit || isblack ? "rounded-b-md" : "mt-5  rounded-full"
          }  ${
            scrollPassedLimit || isblack ? "shadow-lg" : "text-black"
          } divide-x-2 [&>a]:md:text-base overflow-hidden [&>a]:lg:text-xl [&>a]:md:px-2 [&>a]:md:py-1 [&>a]:lg:px-4 [&>a]:lg:py-2  text-black font-semibold text-lg`}
        >
          <Link
            to="/"
            className={`hover:bg-LogoBlue hover:text-white transition-colors ${
              scrollPassedLimit || isblack ? "text-black" : ""
            }`}
          >
            Inicio
          </Link>
          {isMainPage ? (
            <a
              href="#acerca"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Acerca de
            </a>
          ) : (
            <Link
              to="/Contabilidad"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Contabilidad
            </Link>
          )}

          {isMainPage ? (
            <a
              href="#servicios"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Servicios
            </a>
          ) : (
            <Link
              to="/Cursos"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Cursos
            </Link>
          )}

          {isMainPage ? (
            <a
              href="#contacto"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Contacto
            </a>
          ) : (
            <Link
              to="/Blogs"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Blogs
            </Link>
          )}

          {isMainPage && (
            <Link
              to="/Contabilidad"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Contabilidad
            </Link>
          )}

          {isMainPage && (
            <Link
              to="/cursos"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Cursos
            </Link>
          )}

          {isMainPage && (
            <Link
              to="/blogs"
              className={`hover:bg-LogoBlue hover:text-white transition-colors ${
                scrollPassedLimit || isblack ? "text-black" : ""
              }`}
            >
              Blogs
            </Link>
          )}

          {showDashboard()}
          {User ? (
            <div className="flex items-center space-x-3">
              <Link
                to="/Perfil"
                className={`flex items-center px-4 ${
                  isblack ? "text-white" : ""
                } justify-center space-x-3`}
              >
                <Avatar className="">
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
                <LogOut
                onClick={logout}
                className={`w-5 h-5 cursor-pointer ${
                  scrollPassedLimit || isblack ? "text-black" : "text-black"
                }`}
              />
              </Link>
              
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
                <Link to="/" className={`hover:text-DgyaDark ${Route === '/' && 'bg-LogoBlue p-2 rounded-md text-white'} transition-colors`}>
                  Inicio
                </Link>
                {isMainPage ? (
                  <a
                    href="#acerca"
                  >
                    Acerca de
                  </a>
                ) : (
                  <Link to="/Contabilidad"
                  className={`hover:text-DgyaDark ${Route === '/Contabilidad' && 'bg-LogoBlue p-2 rounded-md text-white'} transition-colors`}
                  >Contabilidad</Link>
                )}

                {isMainPage ? (
                  <a
                    href="#servicios"
                    className="hover:text-DgyaDark transition-colors"
                  >
                    Servicios
                  </a>
                ) : (
                  <Link to="/Cursos"
                  className={`hover:text-DgyaDark ${Route === '/Cursos' && 'bg-LogoBlue p-2 rounded-md text-white'} transition-colors`}
                  
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
                  <Link to="/Blogs"
                  className={`hover:text-DgyaDark ${Route === '/Blogs' && 'bg-LogoBlue p-2 rounded-md text-white'} transition-colors`}
                  
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
                  <div className="flex py-1 cursor-pointer  transition-all items-center justify-between md:justify-start md:space-x-3">
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
                      className=" py-4  transition-all"
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
