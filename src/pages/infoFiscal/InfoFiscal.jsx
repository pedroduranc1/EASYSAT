import React, { useEffect, useRef, useState } from 'react'
import { MainLayoutDg } from '../../layouts/MainLayoutDg'
import { useAuth } from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Pencil, User2 } from 'lucide-react'
import * as Yup from "yup";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
import { useFormik } from 'formik'

const InfoFiscal = () => {

    const { User } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!User) {
            navigate("/", { replace: true });
        }
    }, [User])

    const [RazonSocial, setRazonSocial] = useState("")

    const fileInputCER = useRef(null);
    const fileInputKEY = useRef(null);

    const fileInputCER2 = useRef(null);
    const fileInputKEY2 = useRef(null);

    const fileInputLogo = useRef(null);

    const [RegimenFiscal, setRegimenFiscal] = useState(null)
    const [ToggleCIEC, setToggleCIEC] = useState(false)
    const [CFA, setCFA] = useState(false)
    const [CSD, setCFD] = useState(false)

    const hcToggleCIEC = () => {
        setToggleCIEC(!ToggleCIEC)
    }

    const hcToggleCFA = () => {
        setCFA(!CFA)
    }

    const hcToggleCFD = () => {
        setCFD(!CSD)
    }

    const handleClickLogo = () => {
        fileInputLogo.current.click();
    };

    const handleClickCER2 = () => {
        fileInputCER.current.click();
    };

    const handleClickKEY2 = () => {
        fileInputKEY.current.click();
    };

    const handleClickCER = () => {
        fileInputCER.current.click();
    };

    const handleClickKEY = () => {
        fileInputKEY.current.click();
    };

    const [ImgSrc, setImgSrc] = useState("")

    const handleFileSelectLogo = (event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Actualizar el estado con la URL de la imagen
                setImgSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileSelectKEY = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            alert(`Archivo seleccionado: ${selectedFile.name}`);
            // Puedes realizar acciones adicionales aquí con el archivo seleccionado
        }
    };

    const handleFileSelectCER = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            alert(`Archivo seleccionado: ${selectedFile.name}`);
            // Puedes realizar acciones adicionales aquí con el archivo seleccionado
        }
    };

    const handleFileSelectKEY2 = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            alert(`Archivo seleccionado: ${selectedFile.name}`);
            // Puedes realizar acciones adicionales aquí con el archivo seleccionado
        }
    };

    const handleFileSelectCER2 = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            alert(`Archivo seleccionado: ${selectedFile.name}`);
            // Puedes realizar acciones adicionales aquí con el archivo seleccionado
        }
    };

    const formik = useFormik({
        initialValues: {
            razonSocial: "",
            rfc: "",
            ciec: "",
            regimenFiscal: "",
            folio: 0,
            telefono: "",
            codigoPostal: "",
            municipio: "",
            estado: "",
            colonia: "",
            calle: "",
            noExterior: "",
            noInterior: "",
            FirmaArchCer: null,
            FirmaArchKey: null,
            SelloArchCer: null,
            SelloArchKey: null,
            contraFirmaAvan: "",
            contraSellosDig: "",
            logotipo: null
        },
        validationSchema: Yup.object({
            razonSocial: Yup.string()
                .matches(/^[A-Za-z ]+$/, "Solo se permiten letras")
                .required("Requerido"),
            rfc: Yup.string()
                .matches(/^[A-Za-z0-9]{13}$/, "Debe ser alfanumérico y tener exactamente 13 caracteres")
                .required("Requerido"),
            ciec: Yup.string()
                .matches(/^[A-Za-z0-9]+$/)
                .required("Requerido"),
            //regimenFiscal: 
            folio: Yup.number()
                .required("El folio es requerido")
                .moreThan(0, "El folio debe ser mayor que 0"),
            telefono: Yup.string()
                .matches(/^[\d\s-]{10,14}$/, "El número de teléfono debe tener entre 10 y 14 dígitos y puede incluir espacios o guiones")
                .required("Requerido"),
            codigoPostal: Yup.string()
                .matches(/^\d{5}$/, "El código postal debe tener 5 dígitos")
                .required("Requerido"),
            municipio: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Solo se permiten letras y espacios")
                .required("Requerido"),
            estado: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Solo se permiten letras y espacios")
                .required("Requerido"),
            colonia: Yup.string()
                .matches(/^[A-Za-z0-9\s]+$/, "Solo se permiten caracteres alfanuméricos y espacios")
                .required("Requerido"),
            calle: Yup.string()
                .matches(/^[A-Za-z0-9\s]+$/, "Solo se permiten caracteres alfanuméricos y espacios")
                .required("Requerido"),
            noExterior: Yup.string()
                .matches(/^[A-Za-z0-9\s]*$/, "Solo se permiten caracteres alfanuméricos y espacios")
                .notRequired(),
            noInterior: Yup.string()
                .matches(/^[A-Za-z0-9\s]*$/, "Solo se permiten caracteres alfanuméricos y espacios")
                .notRequired(),
            FirmaArchCer: Yup.mixed()
                .required("Un archivo es requerido")
                .test("fileType", "Solo se admiten archivos .cer", (value) => {
                    return value && value.name.endsWith('.cer');
                }),
            FirmaArchKey: Yup.mixed()
                .required("Un archivo es requerido")
                .test("fileType", "Solo se admiten archivos .key", (value) => {
                    return value && value.name.endsWith('.key');
                }),
            SelloArchCer: Yup.mixed()
                .required("Un archivo es requerido")
                .test("fileType", "Solo se admiten archivos .cer", (value) => {
                    return value && value.name.endsWith('.cer');
                }),
            SelloArchKey: Yup.mixed()
                .required("Un archivo es requerido")
                .test("fileType", "Solo se admiten archivos .key", (value) => {
                    return value && value.name.endsWith('.key');
                }),
            contraFirmaAvan: Yup.string()
                .required("Requerido"),
            contraSellosDig: Yup.string()
                .required("Requerido"),
            logotipo: Yup.mixed()
                .required("Una imagen es requerida")
                .test(
                    "fileType",
                    "Solo se admiten archivos JPG o PNG",
                    value => value && (value.type === "image/jpeg" || value.type === "image/png")
                )
        }),
        validateOnChange: true,
        onSubmit: async (formValue) => {
            console.log(formValue)
        }
    })

    return (
        <MainLayoutDg>
            <div className='w-full flex h-full min-h-[100dvh] pt-[20dvh] bg-white'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-full h-full mx-[2%] md:mx-[10%]'>
                    <div className='w-full'>
                        <h2 className='font-semibold text-cyan-800 text-3xl mb-5'>¡Hola! Bienvenido</h2>

                        <p className='text-cyan-800'>Completa la siguiente informacion para que puedas emitir facturas cuanto antes</p>

                        <h2 className='font-semibold mt-2 text-cyan-800 text-3xl mb-5'>Información personal</h2>
                    </div>
                    <div className='w-full flex flex-col md:flex-row py-2'>
                        {/* LOGO */}
                        <div className='border-2 w-full md:w-1/2  flex md:flex-row flex-col gap-y-3 md:gap-y-0 gap-x-5 justify-around py-4 px-2 border-gray-500 rounded-md'>
                            <div onClick={handleClickLogo} className='w-[80%] mx-auto md:mx-0 md:w-[40%] relative bg-gray-400/40 cursor-pointer shadow-md shadow-gray-400 rounded-md flex justify-center items-center'>
                                {/* Muestra el componente User2 solo si no hay una imagen cargada */}
                                {!ImgSrc && <User2 className='w-40 h-40 fill-white text-white' />}

                                {/* Muestra la imagen cargada si existe una URL en el estado */}
                                {ImgSrc && <img src={ImgSrc} className='w-full h-full object-cover' alt="" />}

                                <div className='absolute top-3 p-2 right-3 bg-white rounded-full shadow-md'>
                                    <Pencil className='w-5 h-5 fill-black' />
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        style={{ display: 'none' }}
                                        ref={fileInputLogo}
                                        onChange={(event) => {
                                            formik.setFieldValue("logotipo", event.currentTarget.files[0])
                                            handleFileSelectLogo(event)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='w-full md:w-[60%] md:block flex flex-col items-center justify-center  space-y-3'>
                                <h3 className='text-gray-700 text-2xl'>Agrega tu logotipo y <br />
                                    personaliza tus facturas</h3>

                                <p className='text-gray-500 text-[14px]'>
                                    Formato PNG o JPG 180 x 180 px de  <br />
                                    resolución y menos de 1MB de <br />
                                    tamaño
                                </p>

                                <button className='w-[70%] py-3 px-5 bg-gray-300 text-gray-500 rounded-sm'>Guardar logo</button>
                            </div>
                        </div>
                        {/* Razon social */}
                        <div className='w-full  mt-5 md:mt-0 md:w-1/2 px-3'>
                            <label htmlFor="RS">Razón social*</label>
                            <input
                                type="text"
                                className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.razonSocial &&
                                    "border-red-500 border-2  placeholder:text-red-600"
                                    }`}
                                name="razonSocial"
                                value={formik.values.razonSocial}
                                onChange={formik.handleChange}
                            />

                            <div className='w-full flex items-center justify-between gap-x-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="RFC">RFC*</label>
                                    <input
                                        className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.rfc &&
                                            "border-red-500 border-2  placeholder:text-red-600"
                                            }`}
                                        name="rfc"
                                        value={formik.values.rfc.toUpperCase()}
                                        onChange={formik.handleChange} />
                                </div>

                                <div className='w-1/2'>
                                    <label htmlFor="CIEC">CIEC*</label>
                                    <div
                                        className={`w-full flex border-2 outline-none py-1 px-3 rounded-sm ${formik.touched.ciec && formik.errors.ciec ? "border-red-500 placeholder:text-red-600" : "border-gray-500"
                                            }`}
                                    >
                                        <input
                                            className="w-full bg-transparent outline-none border-0 focus:border-0 focus:ring-0 active:ring-0 active:border-0"
                                            type={ToggleCIEC ? "text" : "password"}
                                            name="ciec"
                                            value={formik.values.ciec}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur} // Asegúrate de incluir el manejo del evento onBlur para actualizar formik.touched.ciec
                                        />
                                        {ToggleCIEC ? (
                                            <EyeOff className="cursor-pointer" onClick={hcToggleCIEC} />
                                        ) : (
                                            <Eye className="cursor-pointer" onClick={hcToggleCIEC} />
                                        )}
                                    </div>

                                </div>
                            </div>

                            <div className='w-full flex items-center justify-between gap-x-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="RF">Régimen Fiscal</label>
                                    <Select
                                        key={1}
                                        className="border-none ring-0 focus:ring-0 text-black placeholder:text-black"
                                        onValueChange={(e) => { setRegimenFiscal(e) }}
                                        value={RegimenFiscal}
                                    >
                                        <SelectTrigger className="w-full border-2 border-gray-500 ">
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent className="h-fit px-0">

                                            <SelectItem
                                                // key={mes}
                                                value={`Régimen Personas Físicas con Actividades Empresariales y Profesionales`}
                                            >
                                                Régimen Personas Físicas con  Actividades Empresariales y Profesionales
                                            </SelectItem>
                                            <SelectItem
                                                // key={mes}
                                                value={`Régimen de Incorporación Fiscal`}
                                            >
                                                Régimen de Incorporación Fiscal
                                            </SelectItem>
                                            <SelectItem
                                                // key={mes}
                                                value={`Régimen de las Actividades Empresariales con Ingresos a través de Plataformas Tecnológicas`}
                                            >
                                                Régimen de las Actividades Empresariales con Ingresos a través de Plataformas Tecnológicas
                                            </SelectItem>
                                            <SelectItem
                                                // key={mes}
                                                value={`Régimen Simplificado de Confianza`}
                                            >
                                                Régimen Simplificado de Confianza
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className='w-1/2'>
                                    <label htmlFor="CIEC">Folio de inicio</label>
                                    <input
                                        className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.folio &&
                                            "border-red-500 border-2  placeholder:text-red-600"
                                            }`}
                                        type="number"
                                        name="folio"
                                        value={formik.values.folio}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            <label htmlFor="telefono">Número de celular para notificaciones</label>
                            <input
                                type="tel"
                                className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.telefono &&
                                    "border-red-500 border-2  placeholder:text-red-600"
                                    }`}
                                name="telefono"
                                value={formik.values.telefono}
                                onChange={formik.handleChange} />
                        </div>
                    </div>

                    <div className='w-full'>
                        <h2 className='font-semibold mt-2 text-cyan-800 text-3xl mb-5'>Domicilio fiscal</h2>
                    </div>

                    <div className='w-full py-2'>

                        <div className='w-full px-3 md:px-0 flex md:flex-row flex-col items-center justify-between gap-x-5'>
                            <div className='w-full md:w-1/3'>
                                <label htmlFor="CodPost">Codigo postal*</label>
                                <input
                                    className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.codigoPostal &&
                                        "border-red-500 border-2  placeholder:text-red-600"
                                        }`}
                                    type="number"
                                    name="codigoPostal"
                                    value={formik.values.codigoPostal}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className='w-full md:w-1/3'>
                                <label htmlFor="Municipio">Municipio</label>
                                <input
                                    type="text"
                                    className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.municipio &&
                                        "border-red-500 border-2  placeholder:text-red-600"
                                        }`}
                                    name="municipio"
                                    value={formik.values.municipio}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className='w-full md:w-1/3'>
                                <label htmlFor="Estado">Estado</label>
                                <input
                                    className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.estado &&
                                        "border-red-500 border-2  placeholder:text-red-600"
                                        }`}
                                    type="text"
                                    name="estado"
                                    value={formik.values.estado}
                                    onChange={formik.handleChange} />
                            </div>
                        </div>

                        <div className='w-full flex md:flex-row flex-col items-center justify-between gap-x-5 mt-4'>
                            <div className='w-full md:w-1/3'>
                                <label htmlFor="Colonia">Colonia*</label>
                                {/* <Select
                                    key={2}
                                    className="border-none ring-0 focus:ring-0 text-black placeholder:text-black"
                                // onValueChange={(e) => { setMesFiltro(e) }}
                                // value={MesFiltro}
                                >
                                    <SelectTrigger className="w-full border-2 border-gray-500 ">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="h-[40dvh] px-0">

                                        <SelectItem
                                        // key={mes}
                                        // value={`${mes} ${Year}`}
                                        >
                                            Colonia
                                        </SelectItem>
                                    </SelectContent>
                                </Select> */}
                                <input
                                    className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.colonia &&
                                        "border-red-500 border-2  placeholder:text-red-600"
                                        }`}
                                    type="text"
                                    name="colonia"
                                    value={formik.values.colonia}
                                    onChange={formik.handleChange} />
                            </div>

                            <div className='w-full md:w-1/3'>
                                <label htmlFor="Calle">Calle*</label>
                                <input
                                    className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.calle &&
                                        "border-red-500 border-2  placeholder:text-red-600"
                                        }`}
                                    type="text"
                                    name="calle"
                                    value={formik.values.calle}
                                    onChange={formik.handleChange} />
                            </div>

                            <div className='w-full md:w-1/3 flex justify-between items-center gap-x-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="NumExterior">No. exterior</label>
                                    <input
                                        type="text"
                                        className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.noExterior &&
                                            "border-red-500 border-2  placeholder:text-red-600"
                                            }`}
                                        name="noExterior"
                                        value={formik.values.noExterior}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="NumInterior">No. interior</label>
                                    <input
                                        type="text"
                                        className={`w-full border-2 outline-none border-gray-500 py-1 px-3 rounded-sm ${formik.errors.noInterior &&
                                            "border-red-500 border-2  placeholder:text-red-600"
                                            }`}
                                        name="noInterior"
                                        value={formik.values.noInterior}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <h2 className='font-semibold mt-2 text-cyan-800 text-3xl mb-3'>Firma electrónica avanzada y certificado de sellos digitales</h2>

                        <p className='text-gray-600'>*Es importante que subas tus sellos digitales, ya que sin ellos no podrás emitir facturas.</p>
                    </div>


                    <div className='w-full flex md:flex-row flex-col gap-y-3 md:gap-y-0 items-center justify-between py-4 px-2 gap-x-5'>
                        <div className='w-full md:w-1/2  border-gray-500 rounded-sm border-2 px-9 py-5'>
                            <label htmlFor="Estado">Sube tu archivo .CER</label>
                            <div
                                onClick={handleClickCER}
                                className={`w-full border-2 border-gray-500 flex overflow-hidden mt-3 rounded-md items-center justify-end ${formik.touched.FirmaArchCer && formik.errors.FirmaArchCer
                                    ? "border-red-500 placeholder:text-red-600"
                                    : "border-gray-500"
                                    }`}>
                                <button className='w-[33%] py-1 h-full bg-gray-300 border-l-2 border-gray-500'>Browse</button>
                            </div>
                            {
                                formik.touched.FirmaArchCer && formik.errors.FirmaArchCer && (<h2 className='text-red-500 text-[10px]'>Archivo Invalido</h2>)
                            }
                            <div>
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={fileInputCER}
                                    onChange={(e) => {
                                        const file = e.target.files[0]; // Obtener el archivo seleccionado
                                        if (file) {
                                            formik.setFieldValue("FirmaArchCer", file); // Establecer el archivo como valor del campo
                                        }

                                        handleFileSelectCER(e)
                                    }}
                                />
                            </div>

                            <label htmlFor="Estado">Sube tu archivo .KEY</label>
                            <div
                                onClick={handleClickKEY}
                                className={`w-full border-2 border-gray-500 flex overflow-hidden mt-3 rounded-md items-center justify-end ${formik.touched.FirmaArchKey && formik.errors.FirmaArchKey
                                    ? "border-red-500 placeholder:text-red-600"
                                    : "border-gray-500"
                                    }`}>
                                <button className='w-[33%] py-1 h-full bg-gray-300 border-l-2 border-gray-500'>Browse</button>
                            </div>
                            {
                                formik.touched.FirmaArchKey && formik.errors.FirmaArchKey && (<h2 className='text-red-500 text-[10px]'>Archivo Invalido</h2>)
                            }
                            <div>
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={fileInputKEY}
                                    onChange={(e) => {
                                        const file = e.target.files[0]; // Obtener el archivo seleccionado
                                        if (file) {
                                            formik.setFieldValue("FirmaArchCer", file); // Establecer el archivo como valor del campo
                                        }
                                        handleFileSelectKEY(e)
                                    }}
                                />
                            </div>

                            <div className='mt-4'>
                                <label htmlFor="ContraFirmaAvan">Contraseña de la firma electrónica avanzada</label>
                                <div
                                    className={`w-full flex border-2 outline-none py-1 px-3 rounded-sm ${formik.touched.contraFirmaAvan && formik.errors.contraFirmaAvan ? "border-red-500 placeholder:text-red-600" : "border-gray-500"
                                        }`}
                                >
                                    <input
                                        className={`w-full bg-transparent outline-none border-0 focus:border-0 focus:ring-0 active:ring-0 active:border-0`}
                                        type={CFA ? "text" : "password"}
                                        name="contraFirmaAvan"
                                        value={formik.values.contraFirmaAvan}
                                        onChange={formik.handleChange}
                                    />
                                    {CFA ? (
                                        <EyeOff
                                            className={`cursor-pointer`}
                                            onClick={hcToggleCFA}
                                        />
                                    ) : (
                                        <Eye
                                            className={`cursor-pointer`}
                                            onClick={hcToggleCFA}
                                        />
                                    )}
                                </div>

                            </div>

                            <div className='flex items-center justify-end mt-5'>
                                <button className='bg-esatDark text-white w-[50%] py-3'>Cargar archivos</button>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2  border-gray-500 rounded-sm border-2 px-9 py-5'>
                            <label htmlFor="Estado">Sube tu archivo .CER</label>
                            <div
                                onClick={handleClickCER2}
                                className={`w-full border-2 border-gray-500 flex overflow-hidden mt-3 rounded-md items-center justify-end ${formik.touched.SelloArchCer && formik.errors.SelloArchCer
                                    ? "border-red-500 placeholder:text-red-600"
                                    : "border-gray-500"
                                    }`}
                            >
                                <button className='w-[33%] py-1 h-full bg-gray-300 border-l-2 border-gray-500'>Browse</button>
                            </div>
                            {
                                formik.touched.SelloArchCer && formik.errors.SelloArchCer && (<h2 className='text-red-500 text-[10px]'>Archivo Invalido</h2>)
                            }
                            <div>
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={fileInputCER2}
                                    onChange={(e) => {
                                        const file = e.target.files[0]; // Obtener el archivo seleccionado
                                        if (file) {
                                            formik.setFieldValue("SelloArchCer", file); // Establecer el archivo como valor del campo
                                        }
                                        handleFileSelectCER2(e)
                                    }}
                                />
                            </div>

                            <label htmlFor="Estado">Sube tu archivo .KEY</label>
                            <div
                                onClick={handleClickKEY2}
                                className={`w-full border-2 border-gray-500 flex overflow-hidden mt-3 rounded-md items-center justify-end ${formik.touched.SelloArchCer && formik.errors.SelloArchCer
                                    ? "border-red-500 placeholder:text-red-600"
                                    : "border-gray-500"
                                    }`}>
                                <button className='w-[33%] py-1 h-full bg-gray-300 border-l-2 border-gray-500'>Browse</button>
                            </div>
                            {
                                formik.touched.SelloArchKey && formik.errors.SelloArchKey && (<h2 className='text-red-500 text-[10px]'>Archivo Invalido</h2>)
                            }
                            <div>
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    ref={fileInputKEY2}
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            formik.setFieldValue("SelloArchKey", file)
                                        }
                                        handleFileSelectKEY2(e)
                                    }}
                                />
                            </div>

                            <div className='mt-4'>
                                <label htmlFor="ContraFirmaAvan">Contraseña de los sellos digitales*</label>

                                <div
                                    className={`w-full flex border-2 outline-none py-1 px-3 rounded-sm ${formik.touched.contraFirmaAvan && formik.errors.contraFirmaAvan ? "border-red-500 placeholder:text-red-600" : "border-gray-500"
                                        }`}
                                >
                                    <input
                                        className={`w-full bg-transparent outline-none border-0 focus:border-0 focus:ring-0 active:ring-0 active:border-0`}
                                        type={CSD ? "text" : "password"}
                                        name="contraSellosDig"
                                        value={formik.values.contraSellosDig}
                                        onChange={formik.handleChange}
                                    />
                                    {CSD ? (
                                        <EyeOff
                                            className={`cursor-pointer`}
                                            onClick={hcToggleCFD}
                                        />
                                    ) : (
                                        <Eye
                                            className={`cursor-pointer`}
                                            onClick={hcToggleCFD}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className='flex items-center justify-end mt-5'>
                                <button className='bg-esatDark text-white w-[50%] py-3'>Cargar archivos</button>
                            </div>
                        </div>
                    </div>

                    <div className='w-full px-5 flex items-center mb-5 gap-x-5 justify-end'>
                        <Link to={"/micuenta"} >
                            Terminar después
                        </Link>

                        <button type='submit' className='bg-LogoBlue py-3 px-10 text-white '>Finalizar</button>
                    </div>
                </form>
            </div>
        </MainLayoutDg>
    )
}

export default InfoFiscal