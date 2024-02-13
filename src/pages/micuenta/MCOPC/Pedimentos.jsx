import { Pencil, Plus, Search, Trash } from 'lucide-react'
import React, { useState } from 'react'

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from '../../../components/ui/table';

const headerPedimentos = [
  'Período',
  'Valor Aduanal',
  'IGI',
  'DTA',
  'Otros',
  'Total Compra',
  'Total al 16%',
  'IVA PRV',
  'IVA TOTAL'
]

const dataFake = [
  {},
  {},
  {},
  {},
  {},
  {},
]

const Pedimentos = () => {
  const [startIndex, setstartIndex] = useState(0)

  return (
    <div className='w-full flex flex-col pr-[10%] pt-2 justify-center items-center h-full rounded-md'>
      <div className='bg-white border-2 px-5 flex items-center justify-between border-gray-300 w-full py-5 rounded-lg'>
        <div className='flex items-center gap-x-3'>
          <h2 className='font-[12px] text-4xl'>Pedimentos</h2>

          <Dialog className="flex items-center mt-1">
            <DialogTrigger asChild>
              <button className='w-fit border-2 border-gray-300 rounded-md px-3 py-1 flex items-center gap-x-2'>
                <div className='w-4 h-4 p-[1px] flex items-center justify-center rounded-full bg-black'>
                  <Plus className='text-white' />
                </div>
                <span>Agregar</span>
              </button>
            </DialogTrigger>
            <DialogContent className="w-[70dvw]">
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  Pedimentos
                </div>
              </div>
              <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                  <button className='px-4 py-1 rounded-md bg-transparent border-2 border-gray-400 hover:border-LogoBlue hover:bg-LogoBlue hover:text-white'>Guardar</button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>


        <div className='w-[30%] flex px-3 items-center border-2 border-gray-400 rounded-lg'>
          <input
            //onChange={handleChange} 
            className='py-1 w-full ring-0 outline-none border-none text-[14px] placeholder:text-[14px]' type="text" placeholder='Buscar cliente, RFC...' />

          <Search className='w-5 h-5 text-gray-400' />
        </div>


      </div>

      <div className='w-full overflow-x-auto bg-white border-2 border-gray-300 rounded-lg mt-5'>
        <Table className="w-[70dvw] overflow-x-auto">
          <TableHeader>
            <TableRow>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex + 1]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex + 2]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex + 3]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex + 4]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex + 5]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex + 6]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex + 7]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{headerPedimentos[startIndex + 8]}</TableHead>
              <TableHead className="text-[10px] w-[150px] text-center">{" "}</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            {dataFake?.map((invoice, index) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center text-[12px]">Prueba</TableCell>
                <TableCell className="text-center flex items-center justify-center gap-x-3 text-[12px]"><Pencil className='w-5 h-5 text-gray-500 font-bold cursor-pointer' /> <Trash className='w-5 h-5 text-gray-500 font-bold cursor-pointer' /></TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Pedimentos