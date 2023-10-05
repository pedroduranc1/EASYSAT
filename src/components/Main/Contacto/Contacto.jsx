import React from 'react'
import contactoWaves from "../../../assets/contacto-waves.webp";

export const Contacto = () => {
  return (
    <div id="contacto" className="w-full  bg-white  md:h-full  flex flex-col">
        <div
          className="w-full h-full  flex flex-col px-[5%] md:px-[10%] lg:px-[20%]  bg-[length:100%_100%] bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${contactoWaves})` }}
        >
          <div className="mt-[20%] md:mt-[10%]">
            <div className="w-full h-fit ">
              <div className=" flex flex-col md:flex-row py-5 md:pt-5">
                <div className="w-full md:w-1/3">
                  <h2 className="text-center text-white font-bold text-2xl">
                    Ubicacion
                  </h2>
                  <h4 className="text-center text-white font-semibold mt-10">
                    C. Mariano Matamorros 1103b, <br />
                    Centro, 64000 Monterrey, N.L.{" "}
                  </h4>
                </div>
                <div className="w-full md:w-1/3">
                  <h2 className="text-center text-white font-bold text-2xl">
                    Horario
                  </h2>
                  <h4 className="text-center text-white font-semibold mt-10">
                    Lunes a Viernes <br />
                    De 9:00 a.m. a 6:00 p.m.{" "}
                  </h4>
                </div>
                <div className="w-full md:w-1/3">
                  <h2 className="text-center text-white font-bold text-2xl">
                    Contacto
                  </h2>
                  <h4 className="text-center text-white font-semibold mt-10">
                    agonzalez@despachosgya.com <br />
                    info@despachosgya.com <br />
                    +52 1 81 2567 5048
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
