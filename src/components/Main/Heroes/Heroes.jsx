import React from "react";
import RotatingDivs from "../../../components/RotatingDivs";
import logo from "../../../assets/logocolor.webp";
import fondo from "../../../assets/fondo.webp";

export const Heroes = () => {
  return (
    <section
      div
      className="flex items-center justify-center h-fit md:h-screen overflow-hidden bg-fixed bg-center bg-contain md:bg-cover"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="w-full p-[5%] mt-[12%] md:mt-0 h-full flex flex-col md:flex-row ">
        <div className="lg:w-1/2 md:w-[60%] h-full flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
        {/* NUEVO CONTEXT INFO */}
        <div className="lg:w-1/2 md:w-[40%] h-full flex flex-col  items-center">
          <h2 className="md:mt-[40%] lg:mt-[15%] text-center mt-10 text-2xl md:text-3xl lg:text-4xl font-bold uppercase" 
            style={{WebkitTextStroke: '1px white'}}
          >
            contabilidad para personas fisicas y morales.
          </h2>
          <h4 className="text-center   font-bold text-base mt-5 uppercase">
            <span className="bg-white px-1  rounded-full">llevar una contabilidad financiera adecuada es fundamental para el</span> <br />
            <span className="bg-white px-1 rounded-full">exito y sostenibilidad de una empresa</span>
            
          </h4>

          <RotatingDivs />
        </div>
      </div>
    </section>
  );
};
