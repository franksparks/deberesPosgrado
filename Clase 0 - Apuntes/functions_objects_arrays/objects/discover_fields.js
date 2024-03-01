// Preguntamos si el campo "name" existe
function f(obj) {
  if ("name" in obj) {
    console.log("El nombre es: ", obj.name);
  } else {
    console.log("El objeto no tiene nombre.");
  }
}

f({ a: 1 });
f({ a: 100, name: "Ferran" });
console.log("------------------------------");

// Recorremos los campos existentes de un objeto y también devolvemos sus valores asociados.
function g(obj) {
  for (const campo in obj) {
    console.log(campo, obj[campo]);
    console.log(`Tienes el campo "${campo}" con valor "${obj[campo]}"`);
  }
}

g({ a: 1 });
g({ a: 100, name: "Ferran" });
console.log("------------------------------");
