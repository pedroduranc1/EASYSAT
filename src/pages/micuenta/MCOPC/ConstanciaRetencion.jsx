import { Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from '../../../components/ui/dialog'

const HeadersConstancias = [
  'Periodo',
  'Proveedor',
  'RFC',
  'Monto de Operación',
  'Retención de IVA',
  'Retención de ISR',
  'Ejercicio'
]

const ConstanciaRetencion = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [Pagi, setPagi] = useState(1)
  const pageSize = 6;
  const [page, setPage] = useState(1);


  const totalPages = Math.ceil(10 / pageSize);

  const nextPage = () => {
    setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };
  return (
    <div className='w-full flex flex-col pr-[10%] pt-2 justify-center items-center h-full rounded-md'>
      <div className='bg-white border-2 px-5 flex items-center justify-between border-gray-300 w-full py-5 rounded-lg'>
        
        <div className='flex items-center gap-x-3'>
        <h2 className='font-[12px] text-3xl'>Constancias de Retención</h2>

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
            className='py-1 w-full ring-0 outline-none border-none text-[14px] placeholder:text-[14px]' type="text" placeholder='Buscar proveedor, RFC...' />

          <Search className='w-5 h-5 text-gray-400' />
        </div>
      </div>

      <div className='w-full items-center justify-start py-2'>
        <div className='flex items-center gap-x-1'>
          {/* Renderizado condicional para mostrar o no la flecha izquierda */}
          {!(page <= 1) && (<button onClick={prevPage} className='text-[10px] cursor-pointer text-gray-500'>{"<"}</button>)}

          Pag {page}

          {!(page === totalPages) && (<button onClick={nextPage} className='text-[10px] cursor-pointer text-gray-500'>{">"}</button>)}

        </div>
      </div>

      <div className='w-full bg-white border-2 border-gray-300 rounded-lg mt-5'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[12px] w-[250px] font-bold text-center">{HeadersConstancias[startIndex]}</TableHead>
              <TableHead className="text-[12px] w-[250px] font-bold text-center">{HeadersConstancias[startIndex + 1]}</TableHead>
              <TableHead className="text-[12px] w-[250px] font-bold text-center">{HeadersConstancias[startIndex + 2]}</TableHead>
              <TableHead className="text-[12px] w-[250px] font-bold text-center">{HeadersConstancias[startIndex + 3]}</TableHead>
              <TableHead className="text-[12px] w-[250px] font-bold text-center">{HeadersConstancias[startIndex + 4]}</TableHead>
              <TableHead className="text-[12px] w-[250px] font-bold text-center">{HeadersConstancias[startIndex + 5]}</TableHead>
              <TableHead className="text-[12px] w-[250px] font-bold text-center">{HeadersConstancias[startIndex + 6]}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {/* {FacturasFiltradas?.map((invoice, index) => (
              <TableRow key={invoice.invoice}>
                {
                  selectedTablePosition(startIndex, invoice)
                }
              </TableRow>
            ))} */}

            <TableRow>
              <TableHead className="text-[10px] w-[250px] text-center">Enero 2024</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">Universidad</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">GOB21239092</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">19,200.00</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">466.54</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">200.60</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">2023</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-[10px] w-[250px] text-center">Marzo 2024</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">Universidad</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">GOB21239092</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">19,200.00</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">466.54</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">200.60</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">2023</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-[10px] w-[250px] text-center">Septiembre 2024</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">Universidad</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">GOB21239092</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">19,200.00</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">466.54</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">200.60</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">2023</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-[10px] w-[250px] text-center">Octubre 2024</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">Universidad</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">GOB21239092</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">19,200.00</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">466.54</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">200.60</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">2023</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-[10px] w-[250px] text-center">Octubre 2024</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">Universidad</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">GOB21239092</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">19,200.00</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">466.54</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">200.60</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">2023</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-[10px] w-[250px] text-center">Octubre 2024</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">Universidad</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">GOB21239092</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">19,200.00</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">466.54</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">200.60</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">2023</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-[10px] w-[250px] text-center">Octubre 2024</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">Universidad</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">GOB21239092</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">19,200.00</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">466.54</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">200.60</TableHead>
              <TableHead className="text-[10px] w-[250px] text-center">2023</TableHead>
            </TableRow>

          </TableBody>
        </Table>

      </div>


    </div>
  )
}

export default ConstanciaRetencion