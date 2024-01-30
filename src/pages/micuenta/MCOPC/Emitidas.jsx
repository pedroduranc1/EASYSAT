import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog"
import { CalendarDays } from 'lucide-react'

const Emitidas = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex h-[60%] justify-between items-center'>
        <div className='w-[45%] h-full flex justify-center items-center bg-white rounded-md'>
          <Dialog key={1}>
            <DialogTrigger asChild>
              <button className='py-2 w-[60%] rounded-md cursor-pointer bg-gray-200'>Seleccionar Cliente</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] overflow-y-auto overflow-x-hidden max-h-[400px]">
              <div className='w-full h-full flex gap-y-3 flex-col '>
                <DialogTrigger asChild>
                  <button className='w-full py-2 bg-gray-100 transition-all hover:bg-gray-300 cursor-pointer'>Pedro Duran</button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <button className='w-full py-2 bg-gray-100 transition-all hover:bg-gray-300 cursor-pointer'>Pedro Duran</button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <button className='w-full py-2 bg-gray-100 transition-all hover:bg-gray-300 cursor-pointer'>Pedro Duran</button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <button className='w-full py-2 bg-gray-100 transition-all hover:bg-gray-300 cursor-pointer'>Pedro Duran</button>
                </DialogTrigger>

              </div>


            </DialogContent>
          </Dialog>
        </div>
        <div className='w-[45%] px-[5%] h-full bg-white rounded-md'>
          <div className='mt-5 flex justify-between items-center'>
            <h3 className='w-[75%]'>Fecha de Emision</h3>
            <input className='bg-gray-200 py-1 w-full rounded-md' type="date" />
            <CalendarDays className='w-[20%] ml-5' />
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <h3 className='w-[75%]'>Tipo de Factura</h3>
            <select className='w-full bg-gray-200 py-1 rounded-md'>
              <option value=""></option>
              <option value="isdas">Tipo de Factura</option>
            </select>
            <div className='w-[20%] ml-5'></div>
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <h3 className='w-[75%]'>Forma de Pago</h3>
            <select className='w-full bg-gray-200 py-1 rounded-md'>
              <option value=""></option>
              <option value="isdas">Forma de Pago</option>
            </select>
            <div className='w-[20%] ml-5'></div>
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <h3 className='w-[75%]'>Metodo de Pago</h3>
            <select className='w-full bg-gray-200 py-1 rounded-md'>
              <option value=""></option>
              <option value="isdas">Metodo de Pago</option>
            </select>
            <div className='w-[20%] ml-5'></div>
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <h3 className='w-[75%]'>Moneda</h3>
            <select className='w-full bg-gray-200 py-1 rounded-md'>
              <option value=""></option>
              <option value="isdas">Moneda</option>
            </select>
            <div className='w-[20%] ml-5'></div>
          </div>

          <div className='mt-3 flex w-[85%] gap-x-2 justify-between items-center'>
            <div className='mt-3 flex w-1/2 justify-between items-center'>
              <h3 className='w-[75%]'>Moneda</h3>
              <select className='w-full ml-5 bg-gray-200 py-1 rounded-md'>
                <option value=""></option>
                <option value="isdas">Moneda</option>
              </select>
            </div><div className='mt-3 flex w-1/2  items-center'>
              <h3 className='w-full text-[12px]'>Tipo de cambio</h3>
              <select className='w-full bg-gray-200 py-1 rounded-md'>
                <option value=""></option>
                <option value="isdas">dolar</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      <div className='w-full h-[33%] px-[5%] bg-white rounded-md py-[1%] my-[2%]'>
        <div className='w-1/3'>
        <Dialog key={2}>
            <DialogTrigger asChild>
              <button className='py-2 w-[100%] rounded-md cursor-pointer bg-gray-200'>Seleccionar Cliente</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] overflow-y-auto overflow-x-hidden max-h-[400px]">
              <div className='w-full h-full flex gap-y-3 flex-col '>
                <DialogTrigger asChild>
                  <button className='w-full py-2 bg-gray-100 transition-all hover:bg-gray-300 cursor-pointer'>Pedro Duran</button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <button className='w-full py-2 bg-gray-100 transition-all hover:bg-gray-300 cursor-pointer'>Pedro Duran</button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <button className='w-full py-2 bg-gray-100 transition-all hover:bg-gray-300 cursor-pointer'>Pedro Duran</button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <button className='w-full py-2 bg-gray-100 transition-all hover:bg-gray-300 cursor-pointer'>Pedro Duran</button>
                </DialogTrigger>

              </div>


            </DialogContent>
          </Dialog>
        </div>
        <div className='w-full h-[70%] mt-2 bg-gray-200 rounded-md'>

        </div>
      </div>
    </div>
  )
}

export default Emitidas