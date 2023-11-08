import React from "react";
import { motion } from "framer-motion";
import { servicioData } from "../../../assets/serviciosData";
import { FolderKanban } from "lucide-react";
import svg1 from "../../../assets/ServicioImpuestos.svg";
import svg2 from "../../../assets/ServicioNomina.svg";
import svg3 from "../../../assets/ServicioAsesoriaFiscal.svg";
import svg4 from "../../../assets/ServicioFacturación.svg";

export const Servicios = ({selection}) => {
  return (
    <div
      id="servicios"
      className={`w-full h-full ${selection === "Mision" && "md:pt-[1vh]"}  ${
        selection === "Vision" && "pt-[0vh]"
      } ${selection === "Valores" && "pt-[0vh]"} md:pt-0 py-[5%] bg-black/90`}
    >
      <div className="md:px-[5%] lg:px-[15%]">
        <div className="space-y-1">
          <h2 className="text-white pt-[7%] text-5xl font-bold uppercase text-center">
            servicios
          </h2>
          <h4 className="text-white text-xl text-center font-semibold">
            Expertos en simplificar tus impuestos y maximizar tus beneficios.
          </h4>
          <h4 className="text-white text-xl text-center font-semibold pb-3">
            Descubre nuestros servicios
          </h4>
        </div>
        <div className="w-full grid grid-cols-1 px-4 pt-5 md:pt-0 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {servicioData.map((data, index) => (
            <motion.div
              key={`servicio-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className=" group transition-all cursor-pointer shadow-lg rounded-md p-4"
            >
              {
                servicioData[0].title == data.title && (<img className="w-40 h-40 mx-auto" src={svg1} alt="" />)
              }
              {
                servicioData[1].title == data.title && (<img className="w-40 h-40 mx-auto" src={svg2} alt="" />)
              }
              {
                servicioData[2].title == data.title && (<img className="w-40 h-40 mx-auto" src={svg3} alt="" />)
              }
              {
                servicioData[3].title == data.title && (<img className="w-40 h-40 mx-auto" src={svg4} alt="" />)
              }
              <h2 className="mt-4 text-center text-white font-bold">
                {data.title}
              </h2>

              <h3 className="mt-2 hidden transition-all group-hover:flex text-center text-white font-semibold">
                {data.description}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
