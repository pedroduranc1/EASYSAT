import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../../../components/ui/table'

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

  const clickDer = () => {
    if (startIndex >= 5) {
    } else {
      setStartIndex(startIndex + 1);
    }
  }

  const clickIzq = () => {
    if (startIndex <= 0) {
    } else {
      setStartIndex(startIndex - 1);
    }
  }
  return (
    <div className='w-full flex flex-col pr-[10%] pt-2 justify-center items-center h-full rounded-md'>
      <div className='bg-white border-2 px-5 flex items-center justify-between border-gray-300 w-full py-5 rounded-lg'>
        <h2 className='font-[12px] text-4xl'>Constancias de Retención</h2>

        <div className='w-[30%] flex px-3 items-center border-2 border-gray-400 rounded-lg'>
          <input
            //onChange={handleChange} 
            className='py-1 w-full ring-0 outline-none border-none text-[14px] placeholder:text-[14px]' type="text" placeholder='Buscar proveedor, RFC...' />

          <Search className='w-5 h-5 text-gray-400' />
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

      <div className='absolute bottom-5 gap-x-52 w-[60dvw]  flex justify-start'>
        

        {
          Pagi == 0 ? (
            <></>
          ) :
            (
              <div className='flex items-center gap-x-1'>
                <button onClick={() => prevPage()} className='text-[10px] cursor-pointer text-gray-500'>{"<"}</button>
                {/* Pag {page} / {totalPages} */}
                Pag 1 / ...
                <button onClick={() => nextPage()} className='text-[10px] cursor-pointer text-gray-500'>{">"}</button>
              </div>
            )
        }

      </div>
    </div>
  )
}

export default ConstanciaRetencion