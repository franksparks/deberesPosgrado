import { readFile } from "fs";

// Dónde está el archivo a leer?
readFile("text.txt", (err, data) => {
  if (err) {
    console.log("Ha habido un error, no se ha podido leer el fichero.", err);
    return;
  }
  const filename = data.toString();
  console.log("Nombre del libro: " + data.toString());

  // Leemos el archivo
  readFile(filename, (err, data) => {
    if (err) {
      console.log("Se intentó leer el archivo pero hubo un error", err);
      return;
    }

    console.log("Contenido del libro: " + data.toString());
  });
});
