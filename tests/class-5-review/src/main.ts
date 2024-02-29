import "./style.css";

// Imprimimos un mensaje por consola usando un bucle
/*
for (let i = 0; i < 10; i++) {
  console.log("Mensaje de prueba", i + 1);
}
*/

//////////////////////////////////////////////////////////////////////

// Definimos una función para generar un elemento párrafo con un texto dado.
// Especificamos que el tipo de texto es string
// Le damos un valor por defecto a string en caso de que llegue vacío.
function createParagraph(texto: string = "<Vacío>") {
  const p = document.createElement("p");
  p.textContent = texto;
  return p;
}

// Llamamos a la función para crear párrafo
// e inyectamos el elemento en el HTML.
document.body.appendChild(
  createParagraph(
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Dolore aliquid quasi itaque neque cum nesciunt possimus 
    excepturi nulla sed illo, nisi, tenetur culpa molestiae 
    tempore quos dignissimos amet repellat fugiat.`
  )
);

document.body.appendChild(createParagraph());

//////////////////////////////////////////////////////////////////////
// Definimos una función parecida pero pudiendo especificar
// el tipo de elemento a crear
function createElement(type: string, text: string): HTMLElement {
  const elem = document.createElement(type);
  elem.textContent = text;
  return elem;
}

const div = createElement("div", "Este es mi div");
const span = createElement("span", " --un pequeño span-- ");
const p = createElement("p", " ++un pequeño párrafo++ ");
div.appendChild(span);
div.appendChild(p);
document.body.appendChild(div);

//////////////////////////////////////////////////////////////////////
// Definimos una función para mostrar un mensaje por consola
// No devuelve nada
function muestraMensaje(text: string) {
  console.log("Hay un mensaje: ", text);
}

// En realidad, la función devuelve un undefined.
const resultado = muestraMensaje("mi texto");
console.log(resultado);
