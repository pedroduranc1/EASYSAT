export function getCurrentDate() {
  const date = new Date();
  const formatted = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return formatted;
}
