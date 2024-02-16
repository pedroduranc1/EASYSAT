import { Pencil, Plus, Search, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '../../../components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'

import EditarSVG from "../../../assets/Editar.svg";
import EliminarSVG from "../../../assets/Eliminar.svg";

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

const headerInvoices = [
    'Período de Pago',
    'Cuenta de Gastos',
    'Fecha',
    'Proveedor',
    'Folio',
    'Total MN',
]

const dataFake = [
    {},
    {},
    {},
    {},
    {},
    {},
]

const Invoices = () => {
    const [startIndex, setstartIndex] = useState(0)
    const [MesFiltro, setMesFiltro] = useState('Enero')
    return (
        <div className='w-full flex flex-col pr-[10%] pt-2 justify-center items-center h-full rounded-md'>
            <div className='bg-white border-2 px-5 flex items-center justify-between border-gray-300 w-full py-5 rounded-lg'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='font-[12px] text-4xl'>Invoices</h2>

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
                                        <div className='w-1/3 text-center'>Período de Pago</div>
                                        <div className='w-1/3 text-center'>Cuenta de Gastos</div>
                                        <div className='w-1/3 text-center'>Fecha</div>
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
                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='|' />
                                        </div>

                                        <div className='w-1/3 flex justify-center'>
                                            <input type="date" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='15/06/2024' />
                                        </div>
                                    </div>

                                    <div>
                                        <hr className='w-full' />
                                    </div>

                                    <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                                        <div className='w-1/3 text-center'>Proveedor</div>
                                        <div className='w-1/3 text-center'>Folio</div>
                                        <div className='w-1/3 text-center'>Total MN</div>
                                    </div>

                                    <div className='w-full py-2 flex justify-around items-center'>
                                        <div className='w-1/3 flex justify-center'>
                                            {MesFiltro}
                                        </div>


                                        <div className='w-1/3 flex justify-center'>
                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='02540114584' />
                                        </div>

                                        <div className='w-1/3 flex justify-center'>
                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='000' />
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
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-[10px] w-[20dvw] text-center">{headerInvoices[startIndex]}</TableHead>
                            <TableHead className="text-[10px] w-[20dvw] text-center">{headerInvoices[startIndex + 1]}</TableHead>
                            <TableHead className="text-[10px] w-[20dvw] text-center">{headerInvoices[startIndex + 2]}</TableHead>
                            <TableHead className="text-[10px] w-[20dvw] text-center">{headerInvoices[startIndex + 3]}</TableHead>
                            <TableHead className="text-[10px] w-[20dvw] text-center">{headerInvoices[startIndex + 4]}</TableHead>
                            <TableHead className="text-[10px] w-[20dvw] text-center">{headerInvoices[startIndex + 5]}</TableHead>
                            <TableHead className="text-[10px] w-[20dvw] text-center">{" "}</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dataFake?.map((invoice, index) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="text-center text-[12px]"></TableCell>
                                <TableCell className="text-center text-[12px]"></TableCell>
                                <TableCell className="text-center text-[12px]"></TableCell>
                                <TableCell className="text-center text-[12px]"></TableCell>
                                <TableCell className="text-center text-[12px]"></TableCell>
                                <TableCell className="text-center text-[12px]"></TableCell>
                                <TableCell className="text-center flex items-center justify-center gap-x-3 text-[12px]">
                                    <Dialog key={`Edit ${index}`} className="flex items-center mt-1">
                                        <DialogTrigger asChild>
                                            <img className='w-6 h-6 cursor-pointer' src={EditarSVG} />
                                        </DialogTrigger>
                                        <DialogContent className="max-w-2xl">
                                            <div className="flex items-center space-x-2">
                                                <div className="grid flex-1 pt-5 gap-2">
                                                    <div className='border-[2px] flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                                                        <div className='w-1/3 text-center'>Período de Pago</div>
                                                        <div className='w-1/3 text-center'>Cuenta de Gastos</div>
                                                        <div className='w-1/3 text-center'>Fecha</div>
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
                                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='|' />
                                                        </div>

                                                        <div className='w-1/3 flex justify-center'>
                                                            <input type="date" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='15/06/2024' />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <hr className='w-full' />
                                                    </div>

                                                    <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                                                        <div className='w-1/3 text-center'>Proveedor</div>
                                                        <div className='w-1/3 text-center'>Folio</div>
                                                        <div className='w-1/3 text-center'>Total MN</div>
                                                    </div>

                                                    <div className='w-full py-2 flex justify-around items-center'>
                                                        <div className='w-1/3 flex justify-center'>
                                                            {MesFiltro}
                                                        </div>


                                                        <div className='w-1/3 flex justify-center'>
                                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='02540114584' />
                                                        </div>

                                                        <div className='w-1/3 flex justify-center'>
                                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='000' />
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
                                            <img className='w-6 h-6 cursor-pointer' src={EliminarSVG} />
                                        </DialogTrigger>
                                        <DialogContent className="max-w-2xl">
                                            <div className="flex items-center space-x-2">
                                                <div className="grid flex-1 pt-5 gap-2">
                                                    <div className='border-[2px] flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                                                        <div className='w-1/3 text-center'>Período de Pago</div>
                                                        <div className='w-1/3 text-center'>Cuenta de Gastos</div>
                                                        <div className='w-1/3 text-center'>Fecha</div>
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
                                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='|' />
                                                        </div>

                                                        <div className='w-1/3 flex justify-center'>
                                                            <input type="date" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='15/06/2024' />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <hr className='w-full' />
                                                    </div>

                                                    <div className='border-[2px] mt-10 flex justify-around w-full py-1 px-4 border-gray-200 rounded-md'>
                                                        <div className='w-1/3 text-center'>Proveedor</div>
                                                        <div className='w-1/3 text-center'>Folio</div>
                                                        <div className='w-1/3 text-center'>Total MN</div>
                                                    </div>

                                                    <div className='w-full py-2 flex justify-around items-center'>
                                                        <div className='w-1/3 flex justify-center'>
                                                            {MesFiltro}
                                                        </div>


                                                        <div className='w-1/3 flex justify-center'>
                                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='02540114584' />
                                                        </div>

                                                        <div className='w-1/3 flex justify-center'>
                                                            <input type="text" className='w-full border-none outline-none text-center placeholder:text-black' placeholder='000' />
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

export default Invoices