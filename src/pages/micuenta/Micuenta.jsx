import React, { useState } from 'react'
import { MainLayoutDg } from '../../layouts/MainLayoutDg'
import { ChevronRight, FileBarChart, Home, LineChart, Play, PlusCircle, Receipt } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion";
import { MCOPC } from './MCOPC';

import Inicio from "../../assets/micuentasvg/Inicio.svg";
import NuevaFactura from "../../assets/micuentasvg/NuevaFactura.svg";
import Facturas from "../../assets/micuentasvg/Facturas.svg";
import Declaraciones from "../../assets/micuentasvg/Declaraciones.svg";
import Documentos from "../../assets/micuentasvg/Documentos.svg";

const Micuenta = () => {

    const [NavActive, setNavActive] = useState(false)
    const [FacturasAcordion, setFacturasAcordion] = useState(false)
    const [DeclaracionAcordion, setDeclaracionAcordion] = useState(false)
    const [DocumentosAcordion, setDocumentosAcordion] = useState(false)

    const [OPC, setOPC] = useState(21)

    return (
        <MainLayoutDg>
            <div className='w-full flex h-screen min-h-[100dvh] pt-[12%] bg-gray-200'>
                {/* MI CUENTA NAV */}
                <div className={`${NavActive ? "w-[22%]" : "xl:w-[4%] lg:w-[5%] md:w-[6%]"}  overflow-hidden h-[85%] py-2 px-4 transition-all bg-LogoBlue rounded-r-xl`}>
                    <ChevronRight onClick={() => setNavActive(!NavActive)} className={`text-white ${NavActive ? "rotate-0" : "rotate-90"} cursor-pointer transition-all`} />

                    <ul className='w-full flex flex-col overflow-x-hidden h-full gap-y-3 mt-3'>
                        <li className='w-[250px]'>
                            <button onClick={() => setOPC(0)} className='flex py-2 items-center gap-x-4'>
                                <img src={Inicio} alt="" className='w-6 h-6 bg-contain' />
                                <span className='text-white '>
                                    Inicio
                                </span>
                            </button>
                            <div className='w-[85%] ml-auto border-b border-gray-50/20' />
                        </li>
                        <li className='w-[250px]'>
                            <button onClick={() => setOPC(1)} className='flex py-2 items-center gap-x-4'>
                                <img src={NuevaFactura} alt="" className='w-6 h-6 bg-contain' />
                                <span className='text-white'>
                                    Nueva Factura
                                </span>
                            </button>
                            <div className='w-[85%] ml-auto border-b border-gray-50/20' />
                        </li>
                        <li className='w-[250px]'>
                            <button className='flex w-full py-2 relative items-center gap-x-4'>
                                <img src={Facturas} alt="" className='w-6 h-6 bg-contain' />
                                <div onClick={() => { setFacturasAcordion(!FacturasAcordion) }} className='w-full flex items-center cursor-pointer '>
                                    <span className='text-white flex items-center'>
                                        Facturas
                                    </span>
                                    <Play className={`${FacturasAcordion ? "rotate-90" : "rotate-0"} ml-[42%] transition-all w-3 h-3 mr-3 text-white  fill-white`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {
                                    FacturasAcordion &&
                                    (<>
                                        <div className='w-[85%] ml-auto'>
                                            <button onClick={() => setOPC(21)} className='text-white text-[14px]'>Emitidas</button>
                                        </div>
                                        <div className='w-[85%] ml-auto'>
                                            <button onClick={() => setOPC(22)} className='text-white text-[14px]'>Recibidas</button>
                                        </div>
                                        <div className='w-[85%] ml-auto'>
                                            <button onClick={() => setOPC(23)} className='text-white text-[14px]'>Constancias de Retencion</button>
                                        </div>
                                        <div className='w-[85%] ml-auto'>
                                            <button onClick={() => setOPC(24)} className='text-white text-[14px]'>Gastos Extranjeros</button>
                                        </div>
                                    </>)
                                }
                            </AnimatePresence>

                            <div className='w-[85%] ml-auto border-b border-gray-50/20' />


                        </li>
                        <li className='w-[250px]'>
                            <button className='flex w-full py-2 relative items-center gap-x-4'>
                                <div onClick={() => { setDeclaracionAcordion(!DeclaracionAcordion) }} className='w-full flex  items-center cursor-pointer '>
                                    <img src={Declaraciones} alt="" className='w-6 h-6 bg-contain' />
                                    <span className='text-white ml-[6%] flex items-center'>
                                        Declaraciones
                                    </span>
                                    <Play className={`${DeclaracionAcordion ? "rotate-90" : "rotate-0"} ml-[20%] transition-all w-3 h-3 mr-3 text-white  fill-white`} />
                                </div>
                            </button>

                            <div className='w-[85%] ml-auto border-b border-gray-50/20' />
                        </li>
                        <li className='w-[250px]'>
                            <button onClick={() => setOPC(4)} className='flex w-full py-2 relative items-center gap-x-4'>
                                <img src={Documentos} alt="" className='w-6 h-6 bg-contain' />
                                <div onClick={() => { setDocumentosAcordion(!DocumentosAcordion) }} className='w-full flex items-center cursor-pointer '>
                                    <span className='text-white  flex items-center'>
                                        Documentos
                                    </span>
                                    <Play className={`${DocumentosAcordion ? "rotate-90" : "rotate-0"} ml-[28%] transition-all w-3 h-3 mr-3 text-white  fill-white`} />
                                </div>
                            </button>
                            <div className='w-[85%] ml-auto border-b border-gray-50/20' />
                        </li>
                        <li className='w-[250px]'>
                            <button className='flex py-2 items-center gap-x-4'>
                                <LineChart className='text-white ' />
                                <span className='text-white '>

                                </span>
                            </button>
                        </li>
                    </ul>
                </div>

                <OpcContainer opc={OPC} />
            </div>
        </MainLayoutDg>
    )
}

const OpcContainer = ({ opc }) => {
    return (<div className='w-full h-full px-[6%]'>
        {opc === 0 && (<MCOPC.Inicio />)}
        {opc === 1 && (<MCOPC.NuevaFactura />)}
        {opc === 21 && (<MCOPC.Emitidas />)}
        {opc === 22 && (<MCOPC.Recibidas />)}
        {opc === 23 && (<MCOPC.ConstanciaRetencion />)}
        {opc === 24 && (<MCOPC.GastosExtranjeros />)}
        {opc === 3 && (<><h2>Declaraciones</h2></>)}
        {opc === 4 && (<><h2>Documentos</h2></>)}

    </div>)
}



export default Micuenta