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
      "Solo requieres tu RFC y CIEC (contraseña de acceso al SAT), con ella iniciaremos realizando un diagnóstico de tu situación fiscal y el proceso a seguir para regularizarte ante el SAT, esto en una reunión 1 a 1 en linea via zoom. En caso de no contar con tu contraseña, nosotros te brindamos la asesoría para obtenerla.",
  },
  {
    pregunta: "¿Por qué elegir EasySAT?",
    respuesta:
    [
      '1.- Somos un despacho de contadores certificados con más de 10 años de experiencia',
      '2.- Nuestra tecnologia te brindara un servicio más confiable y eficiente',
      '3.- Te daremos cursos de actualización en temas fiscales',
    ]
  },
  {
    pregunta: "¿Cómo hablo con un contador si todo es en línea?",
    respuesta:
      "Se te asignará un contador con el cual podrás tener acceso a una agenda de juntas periódicas, así como la atención vía WhatsApp para rápida consulta",
  },
  {
    pregunta: "¿Mi información estará protegida?",
    respuesta:
      "Si, cuando envías tus datos por esta página, te enviamos nuestro aviso de privacidad, dando buen uso a toda la información que nos otorgas.",
  },
  {
    pregunta: "Si no me gusto el servicio, ¿Puedo cancelar?",
    respuesta:
      "Claro que sí, puedes cancelar el servicio en el momento que requieras, ya que no contamos con plazos forzosos",
  },
];

export const OpinionesClientes = [
  {
    imgUrl: "https://i.pinimg.com/564x/bc/5a/86/bc5a8680fd18d355fd15ef1331e08d55.jpg",
    nombre: "Javier Escobedo",
    cargo: "Empresa de químicos",
    msg: `Agradezco que easy sat simplifique el cumplimiento fiscal para
                personas como yo que conocemos muy poco de temas fiscales es de
                gran ayuda`,
  },
  {
    imgUrl: "https://i.pinimg.com/564x/cc/0b/5a/cc0b5a46bb3335e22f09f7e981c07ae1.jpg",
    nombre: "Ricardo Mier",
    cargo: "Empresa de construcción",
    msg: `Con tantos cambios fiscales a los emprendedores nos da temor cumplir de una forma incorrecta , easy sat me da la tranquilidad que necesito para yo enfocarme en mi negocio y olvidarme de temas fiscales`,
  },
  {
    imgUrl: "https://i.pinimg.com/564x/db/a8/62/dba862849c0550a89cce67a6e582e21d.jpg",
    nombre: "Judith Cantu",
    cargo: "Cafetería",
    msg: `Gracias por preocuparse de mantenernos actualizados a los que no sabemos de el SAT, sus cursos y asesoría me ayudan a estar al día.`,
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
