import { Search } from 'lucide-react'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
]

const HeadersEmitidas = [
  'PERIODO DE COBRO',
  'FECHA DE EMISIÓN',
  'CLIENTE',
  'RFC',
  'SUBTOTAL',
  'TOTAL',
  'FORMA DE PAGO',
  'SERIE',
  'FOLIO',
  'TIPO DE CDFI',
  'ESTADO'
]

const Emitidas = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [headerStartIndex, setHeaderStartIndex] = useState(0);

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
        <h2 className='font-[12px] text-4xl'>Facturas emitidas</h2>

        <div className='w-[30%] flex px-3 items-center border-2 border-gray-400 rounded-lg'>
          <input className='py-1 w-full ring-0 outline-none border-none text-[14px] placeholder:text-[14px]' type="text" placeholder='Buscar cliente, RFC...' />

          <Search className='w-5 h-5 text-gray-400' />
        </div>
      </div>

      <div className='w-full bg-white border-2 border-gray-300 rounded-lg mt-5'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[10px] w-[25dvw] text-center">{HeadersEmitidas[startIndex]}</TableHead>
              <TableHead className="text-[10px] w-[25dvw] text-center">{HeadersEmitidas[startIndex + 1]}</TableHead>
              <TableHead className="text-[10px] w-[25dvw] text-center">{HeadersEmitidas[startIndex + 2]}</TableHead>
              <TableHead className="text-[10px] w-[25dvw] text-center">{HeadersEmitidas[startIndex + 3]}</TableHead>
              <TableHead className="text-[10px] w-[25dvw] text-center">{HeadersEmitidas[startIndex + 4]}</TableHead>
              <TableHead className="text-[10px] w-[25dvw] text-center">{HeadersEmitidas[startIndex + 5]}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="text-center">{invoice.invoice}</TableCell>
                <TableCell className="text-center">{invoice.paymentStatus}</TableCell>
                <TableCell className="text-center">{invoice.paymentMethod}</TableCell>
                <TableCell className="text-center">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>

      <div className='w-full flex items-center justify-start mt-3'>
        <div className='flex items-center gap-x-1'>
          <button onClick={() => clickIzq()} className='text-[10px] cursor-pointer text-gray-500'>{"<"}</button>
          Recorrer la Tabla
          <button onClick={() => clickDer()} className='text-[10px] cursor-pointer text-gray-500'>{">"}</button>
        </div>
      </div>
    </div>
  )
}

export default Emitidas;
