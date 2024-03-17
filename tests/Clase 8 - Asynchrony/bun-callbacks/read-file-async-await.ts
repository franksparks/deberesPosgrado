import { readFile } from "fs/promises";

// Top level await
// Dónde está el archivo a leer?
try {
  const data = await readFile("text.txt");
  const filename = data.toString();
  console.log("Nombre del libro: " + filename);

  // Leemos el archivo
  const book = await readFile(filename);
  console.log("Contenido del libro: " + book.toString());
} catch (e) {
  console.log("No he podido leer el fichero", e);
}

// SIN el Top level await
// Dónde está el archivo a leer?
async function main() {
  try {
    const data = await readFile("text.txt");
    const filename = data.toString();
    console.log("Nombre del libro: " + filename);

    // Leemos el archivo
    const book = await readFile(filename);
    console.log("Contenido del libro: " + book.toString());
  } catch (e) {
    console.log("No he podido leer el fichero", e);
  }
}

main();
