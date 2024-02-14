import { Pencil, Plus, Search, Trash } from 'lucide-react'
import React, { useState } from 'react'

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from '../../../components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';

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

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
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
  const [MesFiltro, setMesFiltro] = useState('Enero')

  return (
    <div className='w-full flex flex-col pr-[10%] pt-2 justify-center items-center h-full rounded-md'>
      <div className='bg-white border-2 px-5 flex items-center justify-between border-gray-300 w-full py-5 rounded-lg'>
        <div className='flex items-center gap-x-3'>
          <h2 className='font-[12px] text-4xl'>Pedimentos</h2>

          <Dialog key={`agregarDialog`} className="flex items-center mt-1">
            <DialogTrigger asChild>
              <button className='w-fit border-2 border-gray-300 rounded-md px-3 py-1 flex items-center gap-x-2'>
                <div className='w-4 h-4 p-[1px] flex items-center justify-center rounded-full bg-black'>
                  <Plus className='text-white' />
                </div>
                <span>Agregar</span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 pt-5 gap-2">
                  <div className='border-[2px] flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                    <div className='w-1/3 text-center'>Período</div>
                    <div className='w-1/3 text-center'>Valor aduana</div>
                    <div className='w-1/3 text-center'>IGI</div>
                  </div>

                  <div className='w-full py-2 flex justify-around items-center'>
                    <div className='w-1/3 flex justify-center'>
                      <Select
                        key={1}
                        className="border-none ring-0 focus:ring-0 text-black placeholder:text-black"
                        onValueChange={(e) => { setMesFiltro(e) }}
                        value={MesFiltro}
                      >
                        <SelectTrigger className="w-fit border-2 border-gray-300 ring-0 focus:ring-0 px-3">
                          <SelectValue placeholder="Selecciona un Mes" />
                        </SelectTrigger>
                        <SelectContent className="h-[20dvh] px-0">
                          {meses.map((mes) => (
                            <SelectItem
                              key={mes}
                              value={`${mes}`}
                            >
                              {mes}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>


                    <div className='w-1/3 flex justify-center'>
                      |
                    </div>

                    <div className='w-1/3 flex justify-center'>
                      AAA
                    </div>
                  </div>

                  <div>
                    <hr className='w-full' />
                  </div>

                  <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                    <div className='w-1/3 text-center'>DTA</div>
                    <div className='w-1/3 text-center'>Otros</div>
                    <div className='w-1/3 text-center'>Total compra</div>
                  </div>

                  <div className='w-full py-2 flex justify-around items-center'>
                    <div className='w-1/3 flex justify-center'>
                      {MesFiltro}
                    </div>


                    <div className='w-1/3 flex justify-center'>
                      02540114584
                    </div>

                    <div className='w-1/3 flex justify-center'>
                      000
                    </div>
                  </div>

                  <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                    <div className='w-1/3 text-center'>Total al 16%</div>
                    <div className='w-1/3 text-center'>IVA PRV</div>
                    <div className='w-1/3 text-center'>IVA total</div>
                  </div>

                  <div className='w-full py-2 flex justify-around items-center'>
                    <div className='w-1/3 flex justify-center'>
                      {MesFiltro}
                    </div>


                    <div className='w-1/3 flex justify-center'>
                      02540114584
                    </div>

                    <div className='w-1/3 flex justify-center'>
                      000
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter className="sm:justify-end mt-5">
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
                <TableCell className="text-center flex items-center justify-center gap-x-3 text-[12px]">
                  <Dialog key={`Edit ${index}`} className="flex items-center mt-1">
                    <DialogTrigger asChild>
                      <Pencil className='w-5 h-5 text-gray-500 font-bold cursor-pointer' />
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="flex items-center space-x-2">
                        <div className="grid flex-1 pt-5 gap-2">
                          <div className='border-[2px] flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                            <div className='w-1/3 text-center'>Período</div>
                            <div className='w-1/3 text-center'>Valor aduana</div>
                            <div className='w-1/3 text-center'>IGI</div>
                          </div>

                          <div className='w-full py-2 flex justify-around items-center'>
                            <div className='w-1/3 flex justify-center'>
                              <Select
                                key={1}
                                className="border-none ring-0 focus:ring-0 text-black placeholder:text-black"
                                onValueChange={(e) => { setMesFiltro(e) }}
                                value={MesFiltro}
                              >
                                <SelectTrigger className="w-fit border-2 border-gray-300 ring-0 focus:ring-0 px-3">
                                  <SelectValue placeholder="Selecciona un Mes" />
                                </SelectTrigger>
                                <SelectContent className="h-[20dvh] px-0">
                                  {meses.map((mes) => (
                                    <SelectItem
                                      key={mes}
                                      value={`${mes}`}
                                    >
                                      {mes}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>


                            <div className='w-1/3 flex justify-center'>
                              |
                            </div>

                            <div className='w-1/3 flex justify-center'>
                              AAA
                            </div>
                          </div>

                          <div>
                            <hr className='w-full' />
                          </div>

                          <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                            <div className='w-1/3 text-center'>DTA</div>
                            <div className='w-1/3 text-center'>Otros</div>
                            <div className='w-1/3 text-center'>Total compra</div>
                          </div>

                          <div className='w-full py-2 flex justify-around items-center'>
                            <div className='w-1/3 flex justify-center'>
                              {MesFiltro}
                            </div>


                            <div className='w-1/3 flex justify-center'>
                              02540114584
                            </div>

                            <div className='w-1/3 flex justify-center'>
                              000
                            </div>
                          </div>

                          <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                            <div className='w-1/3 text-center'>Total al 16%</div>
                            <div className='w-1/3 text-center'>IVA PRV</div>
                            <div className='w-1/3 text-center'>IVA total</div>
                          </div>

                          <div className='w-full py-2 flex justify-around items-center'>
                            <div className='w-1/3 flex justify-center'>
                              {MesFiltro}
                            </div>


                            <div className='w-1/3 flex justify-center'>
                              02540114584
                            </div>

                            <div className='w-1/3 flex justify-center'>
                              000
                            </div>
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="sm:justify-end mt-5">
                        <DialogClose asChild>
                          <button className='px-4 py-1 rounded-md bg-transparent border-2 border-gray-400 hover:border-LogoBlue hover:bg-LogoBlue hover:text-white'>Editar</button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog key={`Delete ${index}`} className="flex items-center mt-1">
                    <DialogTrigger asChild>
                      <Trash className='w-5 h-5 text-gray-500 font-bold cursor-pointer' />
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="flex items-center space-x-2">
                        <div className="grid flex-1 pt-5 gap-2">
                          <div className='border-[2px] flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                            <div className='w-1/3 text-center'>Período</div>
                            <div className='w-1/3 text-center'>Valor aduana</div>
                            <div className='w-1/3 text-center'>IGI</div>
                          </div>

                          <div className='w-full py-2 flex justify-around items-center'>
                            <div className='w-1/3 flex justify-center'>
                              <Select
                                key={1}
                                className="border-none ring-0 focus:ring-0 text-black placeholder:text-black"
                                onValueChange={(e) => { setMesFiltro(e) }}
                                value={MesFiltro}
                              >
                                <SelectTrigger className="w-fit border-2 border-gray-300 ring-0 focus:ring-0 px-3">
                                  <SelectValue placeholder="Selecciona un Mes" />
                                </SelectTrigger>
                                <SelectContent className="h-[20dvh] px-0">
                                  {meses.map((mes) => (
                                    <SelectItem
                                      key={mes}
                                      value={`${mes}`}
                                    >
                                      {mes}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>


                            <div className='w-1/3 flex justify-center'>
                              |
                            </div>

                            <div className='w-1/3 flex justify-center'>
                              AAA
                            </div>
                          </div>

                          <div>
                            <hr className='w-full' />
                          </div>

                          <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                            <div className='w-1/3 text-center'>DTA</div>
                            <div className='w-1/3 text-center'>Otros</div>
                            <div className='w-1/3 text-center'>Total compra</div>
                          </div>

                          <div className='w-full py-2 flex justify-around items-center'>
                            <div className='w-1/3 flex justify-center'>
                              {MesFiltro}
                            </div>


                            <div className='w-1/3 flex justify-center'>
                              02540114584
                            </div>

                            <div className='w-1/3 flex justify-center'>
                              000
                            </div>
                          </div>

                          <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                            <div className='w-1/3 text-center'>Total al 16%</div>
                            <div className='w-1/3 text-center'>IVA PRV</div>
                            <div className='w-1/3 text-center'>IVA total</div>
                          </div>

                          <div className='w-full py-2 flex justify-around items-center'>
                            <div className='w-1/3 flex justify-center'>
                              {MesFiltro}
                            </div>


                            <div className='w-1/3 flex justify-center'>
                              02540114584
                            </div>

                            <div className='w-1/3 flex justify-center'>
                              000
                            </div>
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="sm:justify-end mt-5">
                        <DialogClose asChild>
                          <button className='px-4 py-1 rounded-md bg-transparent border-2 border-gray-400 hover:border-LogoBlue hover:bg-LogoBlue hover:text-white'>Eliminar</button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>


                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Pedimentos