const fs = require("fs");

if (process.argv[2] === undefined) {
  console.error("Usage: node csv2json.js <file.csv>");
  process.exit(1);
}

const filename = process.argv[2];
const fileText = fs.readFileSync(filename).toString();

const allLines = fileText.split("\r\n");

const header = allLines[0];
const dataLines = allLines.slice(1);

const fieldNames = header.split(",");

let goodGuys = 0;
let badGuys = 0;
let neutralGuys = 0;
let alturaMedia = 0;
let pesoMedio = 0;
let maxAlturaObject = { height: 0 };
let maxPesoObject = { weight: 0 };

let objList = [];
for (let i = 0; i < dataLines.length; i++) {
  if (dataLines[i] === "") {
    continue;
  }
  let obj = {};
  const data = dataLines[i].split(",");
  for (let j = 0; j < fieldNames.length; j++) {
    const fieldName = fieldNames[j].toLowerCase();
    const asNumber = Number(data[j]);
    obj[fieldName] = isNaN(asNumber) ? data[j] : asNumber;
  }
  if (obj.height > 0) {
    maxAlturaObject =
      obj.height > maxAlturaObject.height ? obj : maxAlturaObject;
    alturaMedia += obj.height;
  }
  if (obj.weight > 0) {
    maxPesoObject = obj.weight > maxPesoObject.weight ? obj : maxPesoObject;
    pesoMedio += obj.weight;
  }
  if (obj.alignment == "good") {
    goodGuys++;
  } else if (obj.alignment == "bad") {
    badGuys++;
  } else {
    neutralGuys++;
  }

  objList.push(obj);
}

alturaMedia = alturaMedia / dataLines.length;
pesoMedio = pesoMedio / dataLines.length;

const jsonText = JSON.stringify(objList, null, 3);
const outputFilename = filename.replace("csv", "json");
fs.writeFileSync(outputFilename, jsonText);

console.log("Good guys total: " + goodGuys);
console.log("Bad guys total: " + badGuys);
console.log("Neutral guys total: " + neutralGuys);
console.log("La altura media es: " + alturaMedia);
console.log("El peso medio es: " + pesoMedio);
console.log(
  "El héroe con mayor peso es: " +
    maxPesoObject.name +
    ", con un peso de: " +
    maxPesoObject.weight
);
console.log(
  "El héroe con mayor altura es: " +
    maxAlturaObject.name +
    ", con una altura de: " +
    maxAlturaObject.height
);
