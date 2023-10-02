import React, { useEffect, useState } from "react";
import { MainLayoutDg } from "../../layouts/MainLayoutDg";
import { FormContainer } from "../../components/ui/FormContainer";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import fondo from ".././../assets/fondo.webp";
import ChartComponent from "../../components/graficas/ChartComponent";
import { useQuery } from "react-query";
import { ContabilidadCtrl } from "../../api/contabilidad/fb.contabilidad";
import { EstFinCtrl } from "../../api/estados-financieros/fb.estfin";
import { AlertCircle, FileCheck2 } from "lucide-react";
import { Separador } from "../../components/Separador";
import { Skeleton } from "../../components/ui/skeleton";
import { ordenarPorMes } from "../../assets/adminData";

const EstFinCt = new EstFinCtrl();
const Conta = new ContabilidadCtrl();
export const Contabilidad = () => {
  const { User } = useAuth();
  const navigate = useNavigate();

  const { data: ContaEstFin, isLoading } = useQuery("ContaEstFin", () =>
    EstFinCt.getEstadosFinancierosByUser(User?.uid)
  );

  const { data: FirmaDigital } = useQuery("FirmaDigital", () =>
    Conta.getFirma(User?.uid)
  );

  const {data:Contribuyente } = useQuery(`SAT-${User?.uid}`,()=>Conta.getInfoSat("ABC123456ABC"))
  console.log(Contribuyente)

  const [Selected, setSelected] = useState("Contabilidad");
  const [Mes, setMes] = useState("enero");

  const dataNueva = ContaEstFin?.map((data) => {
    return {
      ...data,
      name: data.month,
    };
  });
  const dataOrdenada = ordenarPorMes(dataNueva);


  useEffect(() => {
    if (!User) return navigate("/Login", { replace: true });
  }, [User]);

  if (isLoading) {
    return (
      <MainLayoutDg isblack={true}>
        <FormContainer mxw={true}>
          <div className="lg:flex pt-[17%] gap-5  md:pt-[5%] lg:pt-[2%] h-full">
            <div className="bg-LogoBlue rounded-tr-3xl rounded-br-3xl w-full lg:w-[20%] lg:h-full">
              <ul className="w-full h-full flex gap-4 flex-col py-10 items-center">
                <li className="w-full flex flex-col items-end">
                  <Skeleton
                    className={`py-2 h-10 rounded-l-3xl font-bold w-full md:w-[80%] md:ml-auto`}
                  />
                </li>
                <li className="w-full flex flex-col items-end">
                  <Skeleton
                    className={`py-2 h-10 rounded-l-3xl font-bold w-full md:w-[80%] md:ml-auto`}
                  />
                </li>
              </ul>
            </div>
            <div className="flex w-full h-fit gap-5 px-[5%]">
              <Skeleton className="w-1/2 h-[70vh]" />
              <Skeleton className="w-1/2 h-[70vh]" />
            </div>
          </div>
        </FormContainer>
      </MainLayoutDg>
    );
  }

  return (
    <MainLayoutDg isblack={true}>
      <section
        class="flex items-center justify-center w-full h-full lg:h-screen  bg-fixed bg-contain md:bg-cover "
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="pb-[3.9%] h-full min-h-screen w-full ">
          <div
            className={`${
              dataOrdenada.length > 1 ? "lg:flex" : "hidden"
            }  pt-[17%] items-center md:pt-[7%] lg:pt-[5%] h-full`}
          >
            <div className="bg-LogoBlue rounded-tr-3xl rounded-br-3xl w-full lg:w-[20%] lg:h-full">
              <ul className="w-full  h-full flex gap-4 flex-col py-10 items-center">
                <li className="w-full flex flex-col items-end">
                  <button
                    onClick={() => setSelected("Contabilidad")}
                    className={`${
                      Selected === "Contabilidad" && "bg-white"
                    } py-2 rounded-l-3xl font-bold w-full md:w-[80%] md:ml-auto`}
                  >
                    Contabilidad
                  </button>
                </li>
                <li className="w-full flex flex-col items-end">
                  <button
                    onClick={() => setSelected("Finanzas")}
                    className={`${
                      Selected === "Finanzas" && "bg-white"
                    } py-2 rounded-l-3xl font-bold w-full md:w-[80%] md:ml-auto`}
                  >
                    Estados Financieros
                  </button>
                </li>
              </ul>
            </div>
            {Selected == "Contabilidad" && (
              <>
                {FirmaDigital?.FirmaDigitalUrl ? (
                  <>
                    <div className="w-full overflow-hidden lg:w-1/2 pt-10 md:pt-0 p-2 md:p-8 h-full ">
                      <select
                        onChange={(data) => setMes(data.target.value)}
                        className={` invisible bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      ></select>
                      <ChartComponent estFinData={ContaEstFin} />
                    </div>
                    <div className="w-full overflow-hidden lg:w-1/2 pt-10 md:pt-0 p-2 md:p-8 h-full ">
                      <select
                        onChange={(data) => setMes(data.target.value)}
                        className={` bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      >
                        {dataOrdenada.map((estFin, index) => (
                          <option key={index} value={estFin.month}>
                            <span className="first-letter:uppercase">
                              {estFin.name}
                            </span>{" "}
                            <span>{estFin.year}</span>
                          </option>
                        ))}
                      </select>
                      <ChartComponent
                        qtyChart={1}
                        mes={Mes}
                        estFinData={ContaEstFin}
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-full md:mx-[5%] mt-[5%] md:mt-0 h-full">
                    <div className="w-full flex items-center px-[5%] h-[20%] bg-red-400  rounded-md">
                      <AlertCircle size={40} className="text-white" />
                      <span className="font-semibold text-xl text-white ml-6">
                        Para poder ver tu contabilidad debes ingresar tu firma
                        digital{" "}
                        <Link
                          to={`/Perfil/Solicitudes/Crear`}
                          className="pl-4 underline "
                        >
                          haz click aqui para ingresarla
                        </Link>
                      </span>
                    </div>
                  </div>
                )}
              </>
            )}
            {Selected == "Finanzas" && (
              <>
                <div className="w-full h-full rounded-md md:mx-[5%]">
                  <div className="w-full h-full pt-[2%]">
                    <h2 className="text-white text-4xl font-bold">
                      Estados financieros
                    </h2>
                    <Separador />
                    <div className="grid w-full gap-4  grid-cols-3 grid-flow-row md:grid-cols-6 md:grid-rows-2 lg:grid-rows-4 lg:grid-cols-8 h-[85%] ">
                      {dataOrdenada.map((estFin, index) => (
                        <a
                          key={index}
                          href={estFin.EstadoFinacieroUrl}
                          download
                          className="hover:bg-white  group transition-all cursor-pointer hover:shadow-lg rounded-md flex gap-2 flex-col p-4 justify-center items-center"
                        >
                          <FileCheck2
                            size={40}
                            className="text-white group-hover:text-black"
                          />
                          <div>
                            <h2 className="text-xs text-white text-center group-hover:text-black">
                              {estFin.username}
                            </h2>
                            <h4 className="text-xs text-white text-center group-hover:text-black">
                              {estFin.name} {estFin.year}
                            </h4>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            className={`${
              dataOrdenada.length == 0 ? "lg:flex" : "hidden"
            }  pt-[17%] items-center md:pt-[7%] lg:pt-[5%] h-full`}
          >
            <div className="bg-LogoBlue rounded-tr-3xl rounded-br-3xl w-full lg:w-[20%] lg:h-full">
              <ul className="w-full  h-full flex gap-4 flex-col py-10 items-center">
                <li className="w-full flex flex-col items-end">
                  <button
                    onClick={() => setSelected("Contabilidad")}
                    className={`${
                      Selected === "Contabilidad" && "bg-white"
                    } py-2 rounded-l-3xl font-bold w-full md:w-[80%] md:ml-auto`}
                  >
                    Contabilidad
                  </button>
                </li>
                <li className="w-full flex flex-col items-end">
                  <button
                    onClick={() => setSelected("Finanzas")}
                    className={`${
                      Selected === "Finanzas" && "bg-white"
                    } py-2 rounded-l-3xl font-bold w-full md:w-[80%] md:ml-auto`}
                  >
                    Estados Financieros
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex w-full h-full p-8">
                <div className=" rounded-md">
                    <h2 className="text-2xl md:text-3xl text-white font-bold">Su gestor aun no a agregado estados financieros</h2>
                    <h3 className="text-2xl md:text-3xl text-white font-bold">En la brevedad posible podra tenerlas a su alcance</h3>
                </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayoutDg>
  );
};
