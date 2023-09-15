import React, { useEffect, useState } from "react";
import { MainLayoutDg } from "../../layouts/MainLayoutDg";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import fondo from ".././../assets/fondo.webp";
import ChartComponent from "../../components/graficas/ChartComponent";
import { data } from "../../components/graficas/ChartComponent";

export const Contabilidad = () => {
  const { User } = useAuth();
  const navigate = useNavigate();

  const [Mes, setMes] = useState('enero')

  useEffect(() => {
    if (!User) return navigate("/Login", { replace: true });
  }, [User]);

  return (
    <MainLayoutDg isblack={true}>
      <section
        class="flex items-center justify-center w-full h-full lg:h-screen  bg-fixed bg-contain bg-cover "
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="pb-[3.9%] h-full min-h-screen w-full ">
          <div className="lg:flex pt-[17%] items-center md:pt-[7%] lg:pt-[5%] h-full">
            <div className="bg-LogoBlue rounded-tr-3xl rounded-br-3xl w-full lg:w-[20%] lg:h-full">
              <ul className="w-full h-full flex py-10 justify-center">
                <li className="w-full flex flex-col items-end">
                  <button className="bg-white py-2 rounded-l-3xl font-bold w-full md:w-[80%] md:ml-auto">
                    Contabilidad
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-full overflow-hidden lg:w-[80%] pt-10 md:pt-0 p-2 md:p-8 h-full ">
            <select
                onChange={(data)=> setMes(data.target.value)}
                className={` invisible bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              >
              </select>
              <ChartComponent />
            </div>
            <div className="w-full overflow-hidden lg:w-[80%] pt-10 md:pt-0 p-2 md:p-8 h-full ">
              <select
                onChange={(data)=> setMes(data.target.value)}
                className={` bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              >
                {data.map((mes, index) => (
                  <option key={index} value={mes.name}>
                    {mes.name}
                  </option>
                ))}
              </select>
              <ChartComponent mes={Mes} />
            </div>
          </div>
        </div>
      </section>
    </MainLayoutDg>
  );
};
