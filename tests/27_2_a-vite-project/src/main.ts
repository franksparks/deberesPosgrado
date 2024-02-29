import "./style.css";

// // //
function createParagraph(texto: string = "") {
  const p = document.createElement("p");
  p.textContent = texto || "<vacío>";
  return p;
}

document.body.appendChild(createParagraph("This is my text"));

// // //

function muestraMensaje(text: string) {
  console.log("Hay un mensaje", text);
}

const resultado = muestraMensaje("Hola");

console.log(resultado);

// // //

function createElement(type: string, text: string): HTMLElement {
  const elem = document.createElement(type);
  elem.textContent = text;
  return elem;
}

// Introducimos un elemento
document.body.appendChild(createElement("p", "My element"));

// Introducimos un span en un div
const div = createElement("div", "Mi div");
const span = createElement("span", "un trozo");
div.appendChild(span);
// Introducimos el div en el DOM
document.body.appendChild(div);

let num = NaN;

console.log("My num is: " + num);

if (Number.isNaN(num)) {
  console.log("My num is NaN");
} else {
  console.log("My num is not NaN");
}

if (Number.isNaN(num)) {
  console.log(`${num} is NaN!`);
}
console.log(Number.isNaN(num));
console.log(!Number.isNaN(num));
