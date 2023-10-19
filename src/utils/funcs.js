export function getCurrentDate() {
  const date = new Date();
  const formatted = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return formatted;
}

export function estaEntreLasFechas(FI,FF) {
  const fechaInicio = new Date(FI);
  const fechaFin = new Date(FF);
  const fechaActual = new Date();

  return fechaActual >= fechaInicio && fechaActual <= fechaFin;
}

export function formatDateToCustomString(timestamp) {
  const seconds = timestamp.seconds;
  const date = new Date(seconds * 1000); // Multiplicamos por 1000 para convertir los segundos a milisegundos
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

