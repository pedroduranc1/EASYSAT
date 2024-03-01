import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { MetodoDePago as MDP, Moneda as Coin, FormaDePago as FDP, TipoDePago as TDF, Moneda } from "../../../assets/adminData";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { InfoFiscal } from "../../../api/infoFiscal";
import { useAuth } from "../../../hooks/useAuth";
import { useQuery } from 'react-query';
import { ChevronsUpDown, Plus, Search } from 'lucide-react';

import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, } from "../../../components/ui/command";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table';

import EditarSVG from "../../../assets/Editar.svg";
import EliminarSVG from "../../../assets/Eliminar.svg";

// Calcula la fecha de hace 3 días
const fechaActual = new Date();
const tresDiasAtras = new Date(fechaActual.setDate(fechaActual.getDate() - 3));

const InfoFisCtrl = new InfoFiscal()
const NuevaFactura = () => {
  const [DatosJSON, setDatosJSON] = useState(null)
  const { User } = useAuth()
  const [open, setOpen] = useState(false)
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [Value, setValue] = useState(null)

  const [OpenCliente, setOpenCliente] = useState(false)
  const [OpenProductos, setOpenProductos] = useState(false)

  const [ShowClienteDialog, setShowClienteDialog] = useState(false)
  const [ShowProductoDialog, setShowProductoDialog] = useState(false)

  const [startIndex, setstartIndex] = useState(0)
  //const [isValidIni, setisValidIni] = useState(false)



  const HeadersEmitidas = [
    'Cant',
    'Claves',
    'Descripción',
    'Valor Unitario',
    'Subtotal',
    'Descuentos',
    'Impuestos',
    'Total',
  ]

  const clientesPrueba = [
    {
      nombre: "PUBLICO EN GENERAL",
      rfc: "XEX1555681MSD"
    },
    {
      nombre: "MEXICO",
      rfc: "ME3943984NW2"
    },
  ]

  const productosPrueba = [
    {
      nombre: "Producto 1"
    },
    {
      nombre: "Producto 2"
    },
    {
      nombre: "Producto 3"
    },
  ]

  const { data: InfoFiscalData } = useQuery(`${User.uid}-InfoFiscal`, () => InfoFisCtrl.getInfoFiscal(User.uid))

  const handleChange = (event) => {
    // Extraer el valor actual del input
    let value = event.target.value;

    // Permitir números y punto decimal
    value = value.replace(/[^0-9.]/g, '');

    // Evitar múltiples puntos decimales
    const match = value.match(/\./g);
    if (match && match.length > 1) {
      value = value.replace(/\.+$/, "");
    }
    // Ajustar la posición del cursor después del formateo
    setTimeout(() => {
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionStart;
    });

    // Formatear a moneda manteniendo la posición del cursor
    const selectionStart = event.target.selectionStart;
    const formattedValue = formatToCurrency(value);

    return formattedValue
  };

  const formatToCurrency = (amount) => {
    // Convertir el string a número para formatear correctamente
    const numberAmount = Number(amount) || 0;

    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2, // Asegúrate de incluir dos dígitos decimales
    }).format(numberAmount).replace('MX$', '').trim(); // Remover el símbolo de peso si es necesario
  };

  const handleTipoDeFacturaChange = (value) => {
    formik.setFieldValue("TipoDeFactura", value);
    formik.setFieldTouched("TipoDeFactura", true, false); // Marca el campo como tocado
  };

  const handleFormaDePagoChange = (value) => {
    formik.setFieldValue("FormaDePago", value);
    formik.setFieldTouched("FormaDePago", true, false); // Marca el campo como tocado
  };

  const handleMetodoDePagoChange = (value) => {
    formik.setFieldValue("MetodoDePago", value);
    formik.setFieldTouched("MetodoDePago", true, false); // Marca el campo como tocado
  };

  const handleMonedaChange = (value) => {
    formik.setFieldValue("Moneda", value);
    formik.setFieldTouched("Moneda", true, false); // Marca el campo como tocado
  };

  const handleTipoDeCambioChange = (value) => {
    formik.setFieldValue("TipoDeCambio", handleChange(value));
    formik.setFieldTouched("TipoDeCambio", true, false); // Marca el campo como tocado
  };

  const formik = useFormik({
    initialValues: {
      // cliente: null,
      // producto: null,
      fechaDeEmision: "",
      TipoDeFactura: null,
      FormaDePago: null,
      MetodoDePago: null,
      Moneda: null,
      TipoDeCambio: null
    },
    validationSchema: Yup.object({
      // cliente: Yup.object().required(),
      // producto: Yup.object().required(),
      fechaDeEmision: Yup.date()
        .min(tresDiasAtras, 'La fecha de emisión debe ser dentro de los últimos 3 días')
        .required('Este campo es obligatorio'),
      TipoDeFactura: Yup.string().required(),
      FormaDePago: Yup.string().required(),
      MetodoDePago: Yup.string().required(),
      Moneda: Yup.string().required()
    }),
    validateOnChange: true,
    onSubmit: async (formvalue) => {
      let findedMetodoPago = MDP.find(mdp => mdp.nombre === formvalue.MetodoDePago)
      let findedTipoPago = TDF.find(tdf => tdf.nombre === formvalue.TipoDeFactura)
      let findedMoneda = Coin.find(coin => coin.nombre === formvalue.Moneda)

      let DataApiFormatted = {
        "Comprobante": {
          "Version": "4.0",
          "Serie": "falta",
          "Folio": InfoFiscalData?.folio,
          "Fecha": formvalue.fechaDeEmision,
          "NoCertificado": "falta",
          "SubTotal": "falta",
          "Descuento": "falta",
          "Moneda": findedMoneda.clave,
          "Total": "falta",
          "TipoDeComprobante": findedTipoPago.clave,
          "MetodoPago": findedMetodoPago.clave,
          "Exportacion": "falta",
          "LugarExpedicion": InfoFiscalData?.direccion.codigoPostal,
        },
        "Emisor":
        {
          "Rfc": InfoFiscalData?.rfc,
          "Nombre": InfoFiscalData?.razonSocial,
          "RegimenFiscal": InfoFiscalData?.regimenFiscal
        },
      }

      const myJSON = JSON.stringify(DataApiFormatted, null, 2)

      setDatosJSON(myJSON)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className='w-full h-full pr-[4%] pt-[1%]'>
      <div className='md:flex hidden md:h-[41dvh] gap-x-6 justify-between items-center'>
        {/* CLIENTES */}
        <div className='w-1/2 h-full flex flex-col bg-white '>
          <h3 className='w-[80%] mx-auto mt-[3%] text-LogoBlueDark font-semibold'>Cliente</h3>
          <Popover key={'popdelcliente'} open={OpenCliente} onOpenChange={setOpenCliente}>
            <PopoverTrigger asChild>
              <button
                aria-expanded={OpenCliente}
                className="w-[80%] mx-auto border-[1px] border-gray-200 text-black py-2 px-3  flex items-center justify-between"
              >
                {Value || "Buscar o agregar Cliente"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] h-[30dvh] p-0">
              <Command>
                <CommandInput
                  placeholder="Buscar o agregar Cliente"
                  value={Value}
                  onValueChange={(e) => {
                    setValue(e);
                  }}
                />
                <CommandEmpty>No se encontraron clientes.</CommandEmpty>
                <CommandGroup className="overflow-y-auto">
                  <Dialog key={'agregarcliente'} open={ShowClienteDialog} onClose={() => setShowClienteDialog(false)}>

                    <DialogContent className="sm:max-w-[425px] overflow-y-auto overflow-x-hidden max-h-[400px]">
                      <div className='w-full h-full flex gap-y-3 flex-col '>
                        Datos del cliente
                      </div>
                      <div className='flex gap-x-3 items-center justify-end'>
                        <button onClick={() => { setShowClienteDialog(false) }}>Cancelar</button>
                        <button onClick={() => { setShowClienteDialog(false) }}>Guardar</button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <CommandItem onSelect={(currentValue) => {
                    setShowClienteDialog(true)
                  }} className="flex items-center gap-x-2">
                    <Plus /> Agregar
                  </CommandItem>
                  {clientesPrueba?.map(cliente => (
                    <CommandItem
                      key={cliente?.rfc}
                      value={cliente?.nombre}
                      onSelect={(currentValue) => {
                        console.log(currentValue)
                      }}
                    >
                      {cliente.nombre} {cliente.rfc}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        {/* INFO FACTURA */}
        <div className='w-1/2 px-[5%] h-full bg-white rounded-md'>
          <div className='mt-5 flex justify-between items-center'>
            <h3 className='w-[75%]'>Fecha de Emision</h3>
            <input
              type="datetime-local"
              className={`bg-gray-200 py-1 w-full px-3 rounded-md ${formik.touched.fechaDeEmision && formik.errors.fechaDeEmision &&
                "border-red-500 border-2  placeholder:text-red-600"
                }`}
              name="fechaDeEmision"
              value={formik.values.fechaDeEmision}
              onChange={formik.handleChange}
            />
            <div className='w-[20%] ml-5'></div>
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <h3 className='w-[75%]'>Tipo de Factura</h3>
            <Select
              key="TipoDeFactura"
              className={`border-none outline-none ring-0 focus:ring-0 text-black placeholder:text-black
          ${formik.touched.TipoDeFactura && formik.errors.TipoDeFactura ? "border-red-500 border-2  placeholder:text-red-600" : ""}
          `}
              onValueChange={handleTipoDeFacturaChange}
              value={formik.values.TipoDeFactura}
            >
              <SelectTrigger className={`w-full  bg-gray-200 h-8
          ${formik.touched.TipoDeFactura && formik.errors.TipoDeFactura ? "border-red-500 border-2  placeholder:text-red-600" : "border-none outline-none"}
          `}>
                <SelectValue placeholder="Metodo de Pago" />
              </SelectTrigger>
              <SelectContent className="h-fit px-0">
                {TDF.map((tdf) => (
                  <SelectItem key={tdf.nombre} value={tdf.nombre}>
                    {tdf.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className='w-[20%] ml-5'></div>
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <h3 className='w-[75%]'>Forma de Pago</h3>
            <Select
              key={`FormaDePago`}
              className={`border-none outline-none ring-0 focus:ring-0 text-black placeholder:text-black
          ${formik.touched.FormaDePago && formik.errors.FormaDePago ? "border-red-500 border-2  placeholder:text-red-600" : ""}
          `}
              onValueChange={handleFormaDePagoChange}
              value={formik.values.FormaDePago}
            >
              <SelectTrigger className={`w-full  bg-gray-200 h-8
          ${formik.touched.FormaDePago && formik.errors.FormaDePago ? "border-red-500 border-2  placeholder:text-red-600" : "border-none outline-none"}
          `}>
                <SelectValue placeholder="Metodo de Pago" />
              </SelectTrigger>
              <SelectContent className="h-fit px-0">
                {
                  FDP.map((fdp) => (
                    <SelectItem
                      value={fdp.nombre}
                    >
                      {fdp.nombre}
                    </SelectItem>
                  ))
                }

              </SelectContent>
            </Select>
            <div className='w-[20%] ml-5'></div>
          </div>

          <div className='mt-3 flex justify-between items-center'>
            <h3 className='w-[75%]'>Metodo de Pago</h3>
            <Select
              key={`MetodoDePago`}
              className={`border-none outline-none ring-0 focus:ring-0 text-black placeholder:text-black
              ${formik.errors.MetodoDePago &&
                "border-red-500 border-2  placeholder:text-red-600"
                }
              `}
              onValueChange={handleMetodoDePagoChange}
              value={formik.values.MetodoDePago}
            >
              <SelectTrigger className={`w-full  bg-gray-200 h-8
          ${formik.touched.MetodoDePago && formik.errors.MetodoDePago ? "border-red-500 border-2  placeholder:text-red-600" : "border-none outline-none"}
          `}>
                <SelectValue placeholder="Metodo de Pago" />
              </SelectTrigger>
              <SelectContent className="h-fit px-0">
                {
                  MDP.map((mp) => (
                    <SelectItem
                      value={mp.nombre}
                    >
                      {mp.nombre}
                    </SelectItem>
                  ))
                }

              </SelectContent>
            </Select>
            <div className='w-[20%] ml-5'></div>
          </div>

          <div className='mt-3 flex w-[85%] gap-x-2 justify-between items-center'>
            <div className='mt-3 flex w-1/2 justify-between items-center'>
              <h3 className='w-[60%]'>Serie</h3>
              <input type="number" className={` w-full py-1 pl-3  bg-gray-200 rounded-md
                ${formik.errors.TipoDeCambio && formik.errors.TipoDeCambio ?
                  "border-red-500 border-2  placeholder:text-red-600"
                  : "border-none "
                }
                `} />
            </div>
            <div className='mt-3 flex w-1/2 justify-between items-center'>
              <h3 className='w-[60%]'>Folio</h3>
              <input type="number" className={` w-full py-1 pl-3  bg-gray-200 rounded-md
                ${formik.errors.TipoDeCambio && formik.errors.TipoDeCambio ?
                  "border-red-500 border-2  placeholder:text-red-600"
                  : "border-none "
                }
                `} />
            </div>
          </div>


          <div className='mt-3 flex w-[85%] gap-x-2 justify-between items-center'>
            <div className='mt-3 flex w-1/2 justify-between items-center'>
              <h3 className='w-[60%] mr-3'>Moneda</h3>
              <Select
                key={`Moneda`}
                className={`border-none outline-none ring-0 focus:ring-0 text-black placeholder:text-black
              ${formik.errors.MetodoDePago &&
                  "border-red-500 border-2  placeholder:text-red-600"
                  }
              `}
                onValueChange={handleMonedaChange}
                value={formik.values.Moneda}
              >
                <SelectTrigger className={`w-full  bg-gray-200 h-8
          ${formik.touched.Moneda && formik.errors.Moneda ? "border-red-500 border-2  placeholder:text-red-600" : "border-none outline-none"}
          `}>
                  <SelectValue placeholder="Metodo de Pago" />
                </SelectTrigger>
                <SelectContent className="h-fit px-0">
                  {
                    Coin.map((cn) => (
                      <SelectItem
                        value={cn.nombre}
                      >
                        {cn.nombre}
                      </SelectItem>
                    ))
                  }

                </SelectContent>
              </Select>
            </div>
            {
              formik.values.Moneda != "Peso Mexicano" && (<div className='mt-3 flex w-1/2  items-center'>
                <h3 className='w-[60%] text-[12px]'>Tipo de cambio</h3>
                <input
                  type="text"
                  className={` w-full py-1 pl-3  bg-gray-200 rounded-md
                ${formik.errors.TipoDeCambio && formik.errors.TipoDeCambio ?
                      "border-red-500 border-2  placeholder:text-red-600"
                      : "border-none "
                    }
                `}
                  name='TipoDeCambio'
                  value={formik.values.TipoDeCambio}
                  onChange={handleTipoDeCambioChange}
                />
              </div>)
            }

          </div>
        </div>
      </div>

      {/* PRODUCTOS */}
      <div className='w-full md:flex flex-col hidden md:h-[33dvh] px-[5%] bg-white rounded-md py-[1%] my-[2%]'>
        <div className='w-1/3'>
          <Popover key={'popdelproducto'} open={OpenProductos} onOpenChange={setOpenProductos}>
            <PopoverTrigger asChild>
              <button
                aria-expanded={OpenProductos}
                className="w-full border-[1px] border-gray-200 text-black py-2 px-3  flex items-center justify-between"
              >
                {Value || "Buscar o agregar Producto"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] h-[25dvh] p-0">
              <Command>
                <CommandInput
                  placeholder="Buscar o agregar Producto"
                  value={Value}
                  onValueChange={(e) => {
                    setValue(e);
                  }}
                />
                <CommandEmpty>No se encontraron clientes.</CommandEmpty>
                <CommandGroup className="overflow-y-auto">
                  <Dialog key={'agregarcliente'} open={ShowProductoDialog} onClose={() => setShowProductoDialog(false)}>

                    <DialogContent className="sm:max-w-[425px] overflow-y-auto overflow-x-hidden max-h-[400px]">
                      <div className='w-full h-full flex gap-y-3 flex-col '>
                        Datos del Producto
                      </div>
                      <div className='flex gap-x-3 items-center justify-end'>
                        <button onClick={() => { setShowProductoDialog(false) }}>Cancelar</button>
                        <button onClick={() => { setShowProductoDialog(false) }}>Guardar</button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <CommandItem onSelect={(currentValue) => {
                    setShowProductoDialog(true)
                  }} className="flex items-center gap-x-2">
                    <Plus /> Agregar
                  </CommandItem>
                  {productosPrueba?.map(cliente => (
                    <CommandItem
                      key={cliente?.rfc}
                      value={cliente?.nombre}
                      onSelect={(currentValue) => {
                        console.log(currentValue)
                      }}
                    >
                      {cliente.nombre} {cliente.rfc}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className='w-full h-[70%] mt-2 border-2 border-gray-200 rounded-md'>
          <Table className="w-full overflow-x-hidden">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex + 1]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex + 2]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex + 3]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex + 4]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex + 5]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex + 6]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex + 7]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center">{HeadersEmitidas[startIndex + 8]}</TableHead>
                <TableHead className="text-[13px] w-fit text-center"></TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow >
                <TableCell className="text-center text-[12px]">prueba</TableCell>
                <TableCell className="text-center text-[12px]">prueba</TableCell>
                <TableCell className="text-center text-[12px]">prueba</TableCell>
                <TableCell className="text-center text-[12px]">prueba</TableCell>
                <TableCell className="text-center text-[12px]">prueba</TableCell>
                <TableCell className="text-center text-[12px]">prueba</TableCell>
                <TableCell className="text-center text-[12px]">prueba</TableCell>
                <TableCell className="text-center text-[12px]">prueba</TableCell>
                <TableCell className="text-center text-[12px] flex items-center gap-x-3">
                  <img className='w-6 h-6 cursor-pointer' src={EditarSVG} />
                  <img className='w-6 h-6 cursor-pointer' src={EliminarSVG} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className='flex justify-end items-center'>

        </div>

      </div>
      {/* CONTENIDO DE INFOFISCAL Y VISTA PREVIA */}
      <div className='w-full  pt-3 h-4'>
        <div className='w-fit flex items-center gap-x-3  h-4 ml-auto'>
          <div className='px-4 py-[1px] w-fit rounded-md bg-esatDark'>
            <h5 className='text-white text-end'>Subtotal</h5>
            <span className='text-white'>$0,000.00</span>
          </div>
          <div className='px-4 py-[1px] w-fit rounded-md bg-esatDark'>
            <h5 className='text-white text-end'>IVA</h5>
            <span className='text-white'>$0,000.00</span>
          </div>
          <div className='px-4 py-[1px] w-fit rounded-md bg-esatDark'>
            <h5 className='text-white text-end'>ISR</h5>
            <span className='text-white'>$0,000.00</span>
          </div>
          <div className='px-4 py-[1px] w-fit rounded-md bg-esatDark'>
            <h5 className='text-white text-end'>IVA RET</h5>
            <span className='text-white'>$0,000.00</span>
          </div>
          <div className='px-4 py-[1px] w-fit rounded-md bg-LogoBlue'>
            <h5 className='text-white text-end'>Total</h5>
            <span className='text-white'>$0,000.00</span>
          </div>

          <Dialog key={`dialog de confirmacion`}>
            <DialogTrigger asChild>
              <button className='py-1 px-4 rounded-md my-2 border-2 border-gray-400 flex items-center group gap-x-2 bg-gray-200 transition-all hover:bg-LogoBlueDark hover:text-white hover:border-LogoBlueDark text-LogoBlueDark'><Search className='w-4 h-4 text-LogoBlueDark group-hover:text-white' /> Vista Previa</button>
            </DialogTrigger>
            <DialogContent className="w-[600px] max-h-[600px]">
              <div className='w-full h-full flex gap-y-3 flex-col '>
                <textarea contentEditable="false" className='w-[480px] h-[300px] resize-none mt-5' value={DatosJSON} ></textarea>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </form>
  )
}

export default NuevaFactura