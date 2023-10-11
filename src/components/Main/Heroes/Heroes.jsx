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
        {/* <div className="lg:w-1/2 md:w-[40%] h-full flex flex-col  items-center">
          <h2
            className="md:mt-[40%] lg:mt-[15%] text-center mt-10 text-2xl md:text-3xl lg:text-4xl font-bold uppercase"
            style={{ WebkitTextStroke: "1px white" }}
          >
            contabilidad para personas fisicas y morales.
          </h2>
          <h4 className="text-center   font-bold text-base mt-5 uppercase">
            llevar una contabilidad financiera adecuada es fundamental para el{" "}
            <br />
            exito y sostenibilidad de una empresa
          </h4>

          <RotatingDivs />
        </div> */}
        <div className="lg:w-1/2 md:w-[40%]  grid grid-cols-1 grid-rows-3 place-content-center">
          <h2
            className="md:mt-[40%] lg:mt-[15%] text-center mt-10 text-4xl md:text-2xl lg:text-5xl font-bold uppercase"
            style={{ WebkitTextStroke: "1px white" }}
          >
            contabilidad para personas fisicas y morales.
          </h2>
          <h4 className="text-center md:text-xl my-7 lg:mt-[10%] lg:text-2xl text-xl  font-bold uppercase">
            llevar una contabilidad financiera adecuada es fundamental para el{" "}
            <br />
            exito y sostenibilidad de una empresa
          </h4>
          <RotatingDivs />
        </div>
      </div>
    </section>
  );
};
