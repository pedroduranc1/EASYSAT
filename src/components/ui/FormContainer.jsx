import React from "react";
import fondo from "../../assets/fondo.webp";

export const FormContainer = ({ children }) => {
  return (
    <div className={`bg-DgyaLight h-full overflow-hidden md:h-screen bg-cover bg-fixed`}
    style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className={` px-[3%]  md:px-0 pt-[18%] md:pt-[8.4%]`}>
          {children}
        </div>
      </div>
    </div>
  );
};
