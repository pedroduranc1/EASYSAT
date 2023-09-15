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

