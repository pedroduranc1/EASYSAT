import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { User } from "../api/fb.user";

const AutorCtrl = new User() 
export const AutorCard = ({autor,mxauto}) => {

  const {data:Autor,isLoading,isError} = useQuery(`${autor}`,() => AutorCtrl.getMe(autor))

  return (
    <div className={`${mxauto ?'mx-auto' : ''} bg-white rounded-md w-full md:max-w-md items-center shadow-lg flex p-5`}>
      <img
        className="w-16 h-16 rounded-full mx-auto"
        src={Autor && Autor?.Img_url }
        alt=""
        width="384"
        height="512"
      />
      <div className="w-[70%]">
        <h4 className="text-xl font-semibold">Author:</h4>
        <div className="flex gap-x-4">
        <h3>{Autor?.Username}</h3>
        -
        <h5>{Autor?.Cargo}</h5>
        </div>
        
      </div>
    </div>
  );
};
