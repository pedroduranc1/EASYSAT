import React, { useState } from "react";
import { FerrisWheel, Menu, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../hooks/useAuth";

export const Navbar = ({ user }) => {
  const { logout } = useAuth();

  const [toggleMenu, settoggleMenu] = useState(false);

  const handleMenuToggle = () => {
    settoggleMenu(!toggleMenu);
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center shadow-md w-full">
      <div className="max-w-6xl flex justify-between items-center w-full p-6">
        {/* icon logo */}

        <Link
          className="flex flex-row text-2xl font-semibold cursor-pointer items-center"
          to="/"
        >
          <FerrisWheel />
          <h1>DGYA</h1>
        </Link>

        {/* opc */}
        <div className="hidden md:flex">
          <ul className="flex [&>li]:text-slate-600 [&>li]:font-semibold flex-row space-x-5">
            <li>
              <Link
                className="px-2 py-4 hover:border-b-2 hover:border-slate-500 transition-all"
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="px-2 py-4 hover:border-b-2 hover:border-slate-500 transition-all"
                to="/Contabilidad"
              >
                Contabilidad
              </Link>
            </li>
            <li>
              <Link
                className="px-2 py-4 hover:border-b-2 hover:border-slate-500 transition-all"
                to="/Cursos"
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                className="px-2 py-4 hover:border-b-2 hover:border-slate-500 transition-all"
                to="/Blogs"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* settings */}
        <div>
          <ul className="hidden md:flex [&>li]:text-slate-600 [&>li]:font-semibold">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/Perfil"
                  className="first-letter:uppercase font-semibold"
                >
                  {user.username}
                </Link>
                <LogOut onClick={logout} className="w-5 h-5 cursor-pointer" />
              </div>
            ) : (
              <li>
                <Link
                  className="px-2 py-4 hover:border-b-2 hover:border-slate-500 transition-all"
                  to="/Login"
                >
                  Iniciar Sesion
                </Link>
              </li>
            )}
          </ul>
          <Menu
            onClick={handleMenuToggle}
            className="flex ml-auto cursor-pointer md:hidden"
          />
        </div>
      </div>
      {/* toggle menu */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col w-full px-6 py-4 md:hidden"
          >
            <ul>
              <li className="border-b-2 hover:bg-slate-100 hover:rounded-md hover:text-black transition-all p-2">
                <Link className="w-full block" to="/">
                  Inicio
                </Link>
              </li>
              <li className="border-b-2 hover:bg-slate-100 hover:rounded-md hover:text-black transition-all p-2">
                <Link className="w-full block" to="/Contabilidad">
                  Contabilidad
                </Link>
              </li>
              <li className="border-b-2 hover:bg-slate-100 hover:rounded-md hover:text-black transition-all p-2">
                <Link className="w-full block" to="/Cursos">
                  Cursos
                </Link>
              </li>
              <li className="border-b-2 hover:bg-slate-100 hover:rounded-md hover:text-black transition-all p-2">
                <Link className="w-full block" to="/Blogs">
                  Blogs
                </Link>
              </li>
              {user ? (
                <div className="flex px-2 py-2 hover:border-b-2 cursor-pointer hover:border-slate-500 transition-all items-center justify-between md:justify-start md:space-x-3">
                  <Link
                    to="/Perfil"
                    className="w-full first-letter:uppercase font-semibold"
                  >
                    {user.username}
                  </Link>
                  <LogOut onClick={logout} className="w-5 h-5 cursor-pointer" />
                </div>
              ) : (
                <li>
                  <Link
                    className="px-2 py-4 hover:border-b-2 hover:border-slate-500 transition-all"
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
  );
};
