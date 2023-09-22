import React from "react";
import fondo from "../../assets/fondo.webp";

export const FormContainer = ({ children,mxw }) => {
  return (
    <div className={`bg-DgyaLight h-full  min-h-screen bg-cover bg-fixed`}
    style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className={`${mxw == true ? "" : "max-w-6xl"}  mx-auto`}>
        <div className={` px-[3%]  md:px-0 pt-[18%] md:pt-[8.4%]`}>
          {children}
        </div>
      </div>
    </div>
  );
};
