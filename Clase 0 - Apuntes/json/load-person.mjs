import { readFileSync } from "fs";

//Almacenamos el contenido del json
const buf = readFileSync("persona.json");

//Convertimos el contenido del json a string
const json = buf.toString();

//Convertimos el string a json
const persona = JSON.parse(json);
console.log(persona);

// convertimos el json a string de nuevo
const json2 = JSON.stringify(persona);
console.log(json2);
