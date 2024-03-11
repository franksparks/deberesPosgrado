import { readFileSync } from "fs";

try {
  const content = readFileSync("hola.txt");
  console.log(content.length);
} catch (e) {
  console.error(JSON.stringify(e, null, 2));
  console.log("Error: No se ha podido leer el archivo");
}
