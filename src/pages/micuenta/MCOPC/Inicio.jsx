import React, { useState } from 'react'
import ChartComponent from '../../../components/graficas/ChartComponent'
import { meses, ordenarPorMes } from '../../../assets/adminData'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

const Inicio = () => {

  const [MesFiltro, setMesFiltro] = useState(null)
  const [Mes, setMes] = useState("Febrero")
  const ContaEstFin = [
    {
      gastos: 5000,
      ventas: 15000.50,
      year: "2024",
      month: "Enero",
      fecha: new Date("2024-01-03")
    },
    {
      gastos: 2000,
      ventas: 13000,
      year: "2024",
      month: "Enero",
      fecha: new Date("2024-01-12")
    },
    {
      gastos: 3000.75,
      ventas: 18000,
      year: "2024",
      month: "Enero",
      fecha: new Date("2024-01-15")
    },
    {
      gastos: 10000,
      ventas: 20000,
      year: "2024",
      month: "Febrero",
      fecha: new Date("2024-02-10")
    },
  ]

  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth();
  const anoActual = fechaActual.getFullYear();

  const nombresMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dataNueva = ContaEstFin?.map((data) => {
    return {
      ...data,
      name: data.month,
    };
  });
  const dataOrdenada = ordenarPorMes(dataNueva);

  const resumen = dataOrdenada.reduce((acumulador, transaccion) => {
    acumulador.gastos += transaccion.gastos;
    acumulador.ventas += transaccion.ventas;
    return acumulador;
  }, { gastos: 0, ventas: 0 });

  // Formatea los resultados
  const totalGastosFormateado = resumen.gastos.toLocaleString('es-VE');
  const totalVentasFormateado = resumen.ventas.toLocaleString('es-VE');

  return (
    <div className='w-full flex flex-col  justify-center items-center h-full rounded-md'>
      <div className='w-[100%] overflow-hidden py-2 rounded-md'>
        <div className='w-[70%] h-full flex justify-center gap-x-3 rounded-md'>
          <div className='w-[30%] border-2 border-gray-300 group hover:bg-esatDark transition-all cursor-pointer bg-white shadow-lg px-[2%] py-3 flex flex-col justify-center items-center rounded-md'>
            <h2 className='font-light group-hover:text-white text-center text-[18px]'>Total a pagar del mes</h2>

            <span className='flex group-hover:text-white items-center gap-x-1 mt-2'> <span className='font-light'>IVA</span><p className='text-esatDark group-hover:text-white font-semibold text-xl'>$850,00</p></span>
            <span className='flex group-hover:text-white items-center gap-x-1'> <span className='font-light'>ISR</span><p className='text-esatDark group-hover:text-white font-semibold text-xl'>$250,00</p></span>

          </div>
          <div className='w-[30%] border-2 border-gray-300 group hover:bg-esatDark transition-all cursor-pointer bg-white shadow-lg px-[1%] py-3 flex flex-col justify-center items-center rounded-md'>
            <h2 className='font-semibold w-full group-hover:text-white text-center text-[14px]'>Vista previa declaracion anual</h2>
            <h2 className='font-light group-hover:text-white text-center text-[14px]'>ISR por pagar o a favor</h2>

            <h5 className='font-bold text-esatDark group-hover:text-white text-[35px]'>
              ${totalVentasFormateado}
            </h5>
          </div>
          <div className='w-[30%] border-2 border-gray-300 group hover:bg-esatDark transition-all cursor-pointer bg-white shadow-lg px-[1%] py-3 flex flex-col justify-center items-center rounded-md'>
            <h2 className='font-semibold w-full group-hover:text-white text-center text-[14px]'>Utilidad o perdida acumulada</h2>

            <h5 className='font-bold group-hover:text-white text-esatDark text-[35px]'>
              $ 1.500,00
            </h5>
          </div>
        </div>
      </div>
      <div className='w-[100%] gap-x-3 flex h-[69%]  shadow-lg rounded-md'>
        <div className='w-[70%] bg-white rounded-md shadow-lg'>
          <ChartComponent mes={Mes} data={dataOrdenada} />
        </div>
        <div className='w-[30%] flex-col gap-y-3 h-[25%] flex justify-around items-center'>
          <div className='w-full h-full bg-white shadow-lg px-[5%] py-3 rounded-md'>
            <h2 className='font-semibold text-[18px]'>Ingresos</h2>
            <h5 className='font-bold text-LogoBlue/90 text-[35px]'>
              ${totalVentasFormateado}
            </h5>
            <DropdownMenu key={1}>
              <DropdownMenuTrigger className="flex items-center gap-x-3">{MesFiltro ? MesFiltro : `${nombresMeses[mesActual]} ${anoActual}`} <ChevronDown className="w-4 h-4" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setMesFiltro(`${nombresMeses[mesActual-1]} ${anoActual}`)}>{nombresMeses[mesActual-1]} {anoActual}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setMesFiltro(`${nombresMeses[mesActual]} ${anoActual}`)}>{nombresMeses[mesActual]} {anoActual}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <p className='font-semibold text-black/60'></p>
          </div>

          <div className='w-full h-full bg-white shadow-lg px-[5%] py-3 rounded-md'>
            <h2 className='font-semibold text-[18px]'>Gastos</h2>
            <h5 className='font-bold text-LogoGreen/90 text-[35px]'>
              ${totalGastosFormateado}
            </h5>
            <DropdownMenu key={2}>
              <DropdownMenuTrigger className="flex items-center gap-x-3">{MesFiltro ? MesFiltro : `${nombresMeses[mesActual]} ${anoActual}`} <ChevronDown className="w-4 h-4" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setMesFiltro(`${nombresMeses[mesActual-1]} ${anoActual}`)}>{nombresMeses[mesActual-1]} {anoActual}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setMesFiltro(`${nombresMeses[mesActual]} ${anoActual}`)}>{nombresMeses[mesActual]} {anoActual}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio