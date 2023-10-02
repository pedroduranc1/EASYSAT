export const SubAdminData = [
  {
    path: "/crear-blog",
    title: "Crear Blog",
    icon: "FilePlus2",
  },
  {
    path: "/actualizar-blog",
    title: "Modificar Blog",
    icon: "PenLine",
  },
  {
    path: "/eliminar-blog",
    title: "Eliminar Blog",
    icon: "Trash2",
  },
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
    pregunta: "Que necesito para empezar y cuál es el proceso ?",
    respuesta:
      "1.- Empezaremos por realizarte un diagnóstico fiscal a la medida , un contador para fines prácticos es como un doctor , realizaremos el análisis de tu situación fiscal y te daremos “una receta” a la medida con tu tratamiento a seguir , esto es en una reunión 1 a 1 en línea vía zoom , con el fin para realizar el diagnóstico ocupamos tu contraseña de acceso al sat .",
  },
  {
    pregunta: "Mi información está protegida ?",
    respuesta:
      "Si , cuando envías tus datos por esta página , te enviamos nuestro aviso de privacidad , dando buen uso a toda la información que nos otorgas ",
  },
  {
    pregunta: "Como me brindarán tranquilidad en temas fiscales ?",
    respuesta: [
      '1.- Somos un despacho con contadores certificados de más de 10 años de experiencia',
      '2.- Contamos con varias afiliaciones que certifican que trabajamos a la vanguardia en actualizaciones fiscales y contables',
      '3.- Nos dedicamos 24/7 a esto con el fin de que tú te preocupes por tu negocio y nosotros de tu contabilidad',
      '4.- Te daremos cursos de actualización en temas fiscales'
    ]
  },
  {
    pregunta: "Como hablo con un contador si todo es en línea ?",
    respuesta:
      "Tendrás acceso a una agenda de juntas periódicas programadas con el contador que se te asigne , así como una línea de atención a clientes vía WhatsApp para rápida consulta ",
  },
  {
    pregunta: "Si no me gusto el servicio , puedo cancelar ? ",
    respuesta:
      "Claro que si, el servicio se puede cancelar en cualquier momento y no es por suscripción , es por pago de mensualidad",
  },
];

export const OpinionesClientes = [
  {
    imgUrl: "https://randomuser.me/api/portraits/men/36.jpg",
    nombre: "Javier Escobedo",
    cargo: "Empresa de químicos",
    msg: `Agradezco que easy sat simplifique el cumplimiento fiscal para
                personas como yo que conocemos muy poco de temas fiscales es de
                gran ayuda`,
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/43.jpg",
    nombre: "Ricardo Mier",
    cargo: "Empresa de construcción",
    msg: `Con tantos cambios fiscales a los emprendedores nos da temor cumplir de una forma incorrecta , easy sat me da la tranquilidad que necesito para yo enfocarme en mi negocio y olvidarme de temas fiscales`,
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/94.jpg",
    nombre: "Judith Cantu",
    cargo: "Cafetería",
    msg: `Gracias por preocuparse de mantenernos actualizados a los que no sabemos de el sat , su blog de actualización y cursos me ayudan a estar al día`,
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
