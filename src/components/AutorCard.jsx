import React from "react";

export const AutorCard = ({autor,cargo,img,mxauto}) => {
  return (
    <div className={`${mxauto ?'mx-auto' : ''} w-full md:max-w-md items-center shadow-md flex p-5`}>
      <img
        className="w-16 h-16 rounded-full mx-auto"
        src={img ? img : "https://randomuser.me/api/portraits/men/34.jpg"}
        alt=""
        width="384"
        height="512"
      />
      <div className="w-[70%]">
        <h4 className="text-xl font-semibold">Author:</h4>
        <h3>{autor}</h3>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};
