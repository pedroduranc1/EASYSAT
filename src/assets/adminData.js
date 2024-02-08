export const SubAdminData = [
  // {
  //   path: "/crear-blog",
  //   title: "Crear Blog",
  //   icon: "FilePlus2",
  // },
  // {
  //   path: "/actualizar-blog",
  //   title: "Modificar Blog",
  //   icon: "PenLine",
  // },
  // {
  //   path: "/eliminar-blog",
  //   title: "Eliminar Blog",
  //   icon: "Trash2",
  // },
  {
    path: "/crear-curso",
    title: "Crear Curso",
    icon: "FilePlus2",
  },
  {
    path: "/actualizar-curso",
    title: "Modificar Curso",
    icon: "PenLine",
  },
  {
    path: "/eliminar-curso",
    title: "Eliminar Curso",
    icon: "Trash2",
  },
  {
    path: "/crear-video-curso",
    title: "Agregar Videos a Curso",
    icon: "FilePlus2",
  },
  {
    path: "/actualizar-video-curso",
    title: "Modificar Videos de un Curso",
    icon: "PenLine",
  },
  {
    path: "/eliminar-video-curso",
    title: "Eliminar Videos de un Curso",
    icon: "Trash2",
  },
  {
    path: "/agregar-estFin",
    title: "Agregar Estado Financiero",
    icon: "FilePlus2",
  },
  {
    path: "/modificar-estFin",
    title: "Modificar Estado Financiero",
    icon: "PenLine",
  },
  {
    path: "/eliminar-estFin",
    title: "Eliminar Estado Financiero",
    icon: "Trash2",
  },
];

export const AdminData = [
  {
    path: "/crear-cliente",
    title: "Crear Nuevo Cliente",
    icon: "FilePlus2",
  },
  {
    path: "/actualizar-cliente",
    title: "Actualizar Cliente",
    icon: "PenLine",
  },
  {
    path: "/eliminar-cliente",
    title: "Eliminar Cliente",
    icon: "Trash2",
  },
];

export const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const PreguntasFrecuentesData = [
  {
    pregunta: "¿Qué necesito para empezar?",
    respuesta:
      "Solo requieres tu RFC y CIEC (contraseña de acceso al SAT), con ella iniciaremos realizando un diagnóstico de tu situación fiscal y el proceso a seguir para regularizarte ante el SAT, esto en una reunión 1 a 1 en línea vía zoom. En caso de no contar con tu contraseña, nosotros te brindamos la asesoría para obtenerla.",
  },
  {
    pregunta: "¿Por qué elegir EasySAT?",
    respuesta:
    [
      '1.- Somos un despacho de contadores certificados con más de 10 años de experiencia.',
      '2.- Nuestra tecnología te brindará un servicio más confiable y eficiente.',
      '3.- Te daremos cursos de actualización en temas fiscales.',
    ]
  },
  {
    pregunta: "¿Cómo hablo con un contador si todo es en línea?",
    respuesta:
      "Se te asignará un contador con el cual podrás tener acceso a una agenda de juntas periódicas, así como la atención vía WhatsApp para rápida consulta.",
  },
  {
    pregunta: "¿Mi información estará protegida?",
    respuesta:
      "Si, cuando envías tus datos por esta página, te enviamos nuestro aviso de privacidad, dando buen uso a toda la información que nos otorgas.",
  },
  {
    pregunta: "Si no me gusto el servicio, ¿Puedo cancelar?",
    respuesta:
      "Claro que sí, puedes cancelar el servicio en el momento que requieras, ya que no contamos con plazos forzosos.",
  },
];

export const OpinionesClientes = [
  {
    imgUrl: "https://i.pinimg.com/564x/bc/5a/86/bc5a8680fd18d355fd15ef1331e08d55.jpg",
    nombre: "Javier Escobedo",
    cargo: "Nutriólogo",
    msg: `Desde que contrate EasySAT, el cumplir con mis obligaciones fiscales dejo de ser un problema.`,
  },
  {
    imgUrl: "https://i.pinimg.com/564x/cc/0b/5a/cc0b5a46bb3335e22f09f7e981c07ae1.jpg",
    nombre: "Ricardo Mier",
    cargo: "Arquitecto",
    msg: `Con EasySAT siempre estoy actualizado en temas fiscales, los impuestos se han vuelto realmente sencillos con la asesoría de mi contador asigando.`,
  },
  {
    imgUrl: "https://i.pinimg.com/564x/db/a8/62/dba862849c0550a89cce67a6e582e21d.jpg",
    nombre: "Judith Cantu",
    cargo: "Vendedora de ML y Amazon",
    msg: `Con tantos cambios fiscales a los emprendedores nos da temor no cumplir de forma correcta, EasySAT me da la tranquilidad que necesito para yo enfocarme en mi negocio y olvidarme de temas fiscales.`,
  },
];

export function ordenarPorMes(data) {
  // Función de comparación personalizada
  function compararPorMes(a, b) {
    const mesA = meses.indexOf(a.name.toLowerCase());
    const mesB = meses.indexOf(b.name.toLowerCase());

    if (mesA < mesB) {
      return -1;
    }
    if (mesA > mesB) {
      return 1;
    }
    return 0;
  }

  // Ordenar la data utilizando la función de comparación
  const dataOrdenada = data?.sort(compararPorMes);

  return dataOrdenada;
}

export const getDataMes = (data, mes) => {
  return data?.filter(
    (item) => item?.name?.toLowerCase() === mes?.toLowerCase()
  );
};

export const emitidasPrueba = [
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Vigente",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "03/11/2023",
      "fecha_timbrado": "2023-11-03T13:53:18",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "754",
      "uuid": "0DFD0BF3-6AFC-44B8-B45C-29D041877ADD",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "DFL9508025N4",
      "nombre_receptor": "DISTRIBUIDORA EL FLORIDO",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 53440,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 8550.4,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 61990.4,
      "totaloriginal": "",
      "total_trasladados": 8550.4,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "03 - Transferencia electrónica de fondos",
      "metodo_de_pago": "PUE - Pago en una sola exhibición",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "ANTICIPO DEL 50% POR SISTEMA DE ENERGÍA ININTERRUMPIBLE (UPS) MARCA POWERWARE SERIES 9PX CON CAPACIDAD DE 6000 VA/5400 W. INCLUYE BATERÍAS SELLADAS LIBRES DE MANTENIMIENTO ADECUADAS PARA PROPORCIONAR 100% DE CARGA. * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "0DFD0BF3-6AFC-44B8-B45C-29D041877ADD@1000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "601 - General de Ley Personas Morales",
      "domiciliofiscalreceptor": "22000"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Vigente",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "08/11/2023",
      "fecha_timbrado": "2023-11-08T19:33:58",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "761",
      "uuid": "52902025-E7E5-4C55-AD28-8C62A24ECBB5",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "UNA2907227Y5",
      "nombre_receptor": "UNIVERSIDAD NACIONAL AUTONOMA DE MEXICO",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 17000,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 2720,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 19720,
      "totaloriginal": "",
      "total_trasladados": 2720,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "99 - Por definir",
      "metodo_de_pago": "PPD - Pago en parcialidades o diferido",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "SERVICIO DE REVISION A EQUIPO UPS 9390 EN PARALELO * SERVICIO DE CONFIGURACION DE PARAMETROS DEL PARALELO MEDIANTE XCP TOOL * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "52902025-E7E5-4C55-AD28-8C62A24ECBB5@1000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "603 - Personas Morales con Fines no Lucrativos",
      "domiciliofiscalreceptor": "04510"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Vigente",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "10/11/2023",
      "fecha_timbrado": "2023-11-10T21:29:26",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "762",
      "uuid": "8194DD88-8B67-4767-91AE-19F5EA0F38F9",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "DFL9508025N4",
      "nombre_receptor": "DISTRIBUIDORA EL FLORIDO",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 6000,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 960,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 6960,
      "totaloriginal": "",
      "total_trasladados": 960,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "99 - Por definir",
      "metodo_de_pago": "PPD - Pago en parcialidades o diferido",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "REVISION DE EQUIPO UPS SUCURSAL COLINAS DE LA PRESA ENSENADA * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "8194DD88-8B67-4767-91AE-19F5EA0F38F9@1000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "601 - General de Ley Personas Morales",
      "domiciliofiscalreceptor": "22000"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Vigente",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "03/11/2023",
      "fecha_timbrado": "2023-11-03T13:55:35",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "755",
      "uuid": "9BFF628D-B1D2-482C-B651-3BEECC594E8D",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "DFL9508025N4",
      "nombre_receptor": "DISTRIBUIDORA EL FLORIDO",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 54040,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 8646.4,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 62686.4,
      "totaloriginal": "",
      "total_trasladados": 8646.4,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "03 - Transferencia electrónica de fondos",
      "metodo_de_pago": "PUE - Pago en una sola exhibición",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "ANTICIPO DEL 50% POR SISTEMA DE ENERGÍA ININTERRUMPIBLE (UPS) MARCA POWERWARE SERIES 9PX CON CAPACIDAD DE 6000 VA/5400 W. INCLUYE BATERÍAS SELLADAS LIBRES DE MANTENIMIENTO ADECUADAS PARA PROPORCIONAR 100% DE CARGA. * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "9BFF628D-B1D2-482C-B651-3BEECC594E8D@1000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "601 - General de Ley Personas Morales",
      "domiciliofiscalreceptor": "22000"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Vigente",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "2023-11-16T18:03:24",
      "fecha_timbrado": "2023-11-16T18:03:24",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "763",
      "uuid": "B39114B5-4B1E-44CF-B8BB-0FDD364C3B54",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "DFL9508025N4",
      "nombre_receptor": "DISTRIBUIDORA EL FLORIDO",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 4800,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 768,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 5568,
      "totaloriginal": "",
      "total_trasladados": 768,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "99 - Por definir",
      "metodo_de_pago": "PPD - Pago en parcialidades o diferido",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "MANTENIMIENTO DE EQUIPO UPS SUCURSAL VILLAS DEL CAMPO * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "B39114B5-4B1E-44CF-B8BB-0FDD364C3B54@1000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "601 - General de Ley Personas Morales",
      "domiciliofiscalreceptor": "22000"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Vigente",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "06/11/2023",
      "fecha_timbrado": "2023-11-06T19:37:50",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "760",
      "uuid": "DA3D459D-6B88-4305-B88E-30D79A27DCA7",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "DLO160817475",
      "nombre_receptor": "DFL LOGISTICS",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 5000,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 800,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 5800,
      "totaloriginal": "",
      "total_trasladados": 800,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "99 - Por definir",
      "metodo_de_pago": "PPD - Pago en parcialidades o diferido",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "RENTA DE EQUIPO UPS CEDI EL LAGO * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "DA3D459D-6B88-4305-B88E-30D79A27DCA7@1000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "601 - General de Ley Personas Morales",
      "domiciliofiscalreceptor": "22660"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Vigente",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "16/11/2023",
      "fecha_timbrado": "2023-11-16T18:15:48",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "764",
      "uuid": "DCBE8B2A-613C-4176-A302-8D108E304A43",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "DFL9508025N4",
      "nombre_receptor": "DISTRIBUIDORA EL FLORIDO",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 9495,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 1519.2,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 11014.2,
      "totaloriginal": "",
      "total_trasladados": 1519.2,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "99 - Por definir",
      "metodo_de_pago": "PPD - Pago en parcialidades o diferido",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "SUMINISTRO DE TARJETA DE CONTROL NETWORK PARA MONITOREO DE EQUIPO UPS 9PX 6KVA SUCURSAL EJIDO PUEBLA MEXICALI * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "DCBE8B2A-613C-4176-A302-8D108E304A43@1000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "601 - General de Ley Personas Morales",
      "domiciliofiscalreceptor": "22000"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Cancelado",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "05/11/2023",
      "fecha_timbrado": "2023-11-05T17:19:35",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "758",
      "uuid": "10AF853B-2D88-4E9D-8969-0B68C0DB653E",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "DFL9508025N4",
      "nombre_receptor": "DISTRIBUIDORA EL FLORIDO",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 5000,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 800,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 5800,
      "totaloriginal": "",
      "total_trasladados": 800,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "99 - Por definir",
      "metodo_de_pago": "PPD - Pago en parcialidades o diferido",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "RENTA DE EQUIPO UPS CEDI EL LAGO * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "10AF853B-2D88-4E9D-8969-0B68C0DB653E@2000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "601 - General de Ley Personas Morales",
      "domiciliofiscalreceptor": "22000"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Cancelado",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "03/11/2023",
      "fecha_timbrado": "2023-11-03T17:07:43",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "756",
      "uuid": "9C37BE14-6B2D-4FEA-8DC9-C410E9EDE307",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "SDI861110768",
      "nombre_receptor": "SISTEMA PARA EL DESARROLLO INTEGRAL DE LA FAMILIA DE BAJA CALIFORNIA",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 5000,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 800,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 5800,
      "totaloriginal": "",
      "total_trasladados": 800,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "01 - Efectivo",
      "metodo_de_pago": "PUE - Pago en una sola exhibición",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "Baterías Panasonic 12 v 33 amperes * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "9C37BE14-6B2D-4FEA-8DC9-C410E9EDE307@2000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "603 - Personas Morales con Fines no Lucrativos",
      "domiciliofiscalreceptor": "21100"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Cancelado",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "05/11/2023",
      "fecha_timbrado": "2023-11-05T17:25:32",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "759",
      "uuid": "F783C12A-3B7C-4378-ACA1-C68A4B985702",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "DFL9508025N4",
      "nombre_receptor": "DISTRIBUIDORA EL FLORIDO",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 6000,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 960,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 6960,
      "totaloriginal": "",
      "total_trasladados": 960,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "99 - Por definir",
      "metodo_de_pago": "PPD - Pago en parcialidades o diferido",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "REVISION DE EQUIPO UPS SUCURSAL COLINAS DE LA PRESA ENSENADA * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "F783C12A-3B7C-4378-ACA1-C68A4B985702@2000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "601 - General de Ley Personas Morales",
      "domiciliofiscalreceptor": "22000"
  },
  {
      "verificado_ó_asoc.": "",
      "estado_sat": "Cancelado",
      "version": "4.0",
      "tipo": "Factura",
      "fecha_emision": "03/11/2023",
      "fecha_timbrado": "2023-11-03T17:14:48",
      "estadopago": "",
      "fechapago": "",
      "serie": "B",
      "folio": "757",
      "uuid": "F98C4F8C-0037-4388-B9EB-E9DDDCE2D893",
      "uuid_relacion": "",
      "rfc_emisor": "GOMS651015HB4",
      "nombre_emisor": "SERGIO GOMEZ MARTINEZ",
      "lugardeexpedicion": "22230",
      "rfc_receptor": "SDI861110768",
      "nombre_receptor": "SISTEMA PARA EL DESARROLLO INTEGRAL DE LA FAMILIA DE BAJA CALIFORNIA",
      "residenciafiscal": "",
      "numregidtrib": "",
      "usocfdi": "G03 - Gastos en general",
      "subtotal": 5000,
      "descuento": 0,
      "total_ieps": 0,
      "iva_16%": 800,
      "retenido_iva": 0,
      "retenido_isr": 0,
      "ish": 0,
      "total": 5800,
      "totaloriginal": "",
      "total_trasladados": 800,
      "total_retenidos": 0,
      "total_localtrasladado": 0,
      "total_localretenido": 0,
      "complemento": "",
      "moneda": "MXN",
      "tipo_de_cambio": "1",
      "formadepago": "01 - Efectivo",
      "metodo_de_pago": "PUE - Pago en una sola exhibición",
      "numctapago": "",
      "condicion_de_pago": "",
      "conceptos": "Baterías Panasonic 12 v 33 amperes * ",
      "combustible": "No",
      "ieps_3%": "0",
      "ieps_6%": "0",
      "ieps_7%": "0",
      "ieps_8%": "0",
      "ieps_9%": "0",
      "ieps_26.5%": "0",
      "ieps_30%": "0",
      "ieps_53%": "0",
      "ieps_160%": "0",
      "archivo_xml": "F98C4F8C-0037-4388-B9EB-E9DDDCE2D893@2000000000XX0.xml",
      "direccion_emisor": "    ",
      "localidad_emisor": " ",
      "direccion_receptor": "    ",
      "localidad_receptor": " ",
      "iva_8%": 0,
      "ieps_30.4%": "0",
      "iva_ret_6%": "0",
      "regimenfiscalreceptor": "603 - Personas Morales con Fines no Lucrativos",
      "domiciliofiscalreceptor": "21100"
  }
]
