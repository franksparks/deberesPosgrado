import { readFile } from "fs/promises";

// Lectura de un fichero
readFile("./text.txt").then((buffer) => {
  console.log("First function");
  const filename = buffer.toString();
  console.log(filename);
});

// Lectura encadenada de ficheros
readFile("./text.txt")
  .then((buffer) => {
    console.log("Second function");
    const filename = buffer.toString();
    console.log(filename);
    return readFile(filename);
  })
  .then((bufferBook) => {
    console.log("Third function");
    const content = bufferBook.toString();
    console.log(content);
  })
  .catch((e) => console.error("Some operation failed", e));
