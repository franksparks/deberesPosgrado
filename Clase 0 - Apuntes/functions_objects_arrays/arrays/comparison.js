// No podemos distinguir entre objetos y arrays usando "type of"

// Necesitaremos utilizar la función Array.isArray(-)

let a = [1, 2, 3, 4, 5];
console.log("Contenido del array a: ", a);
console.log("Determinamos el tipo del array a con `type of`: ", typeof a);

console.log(
  "Determinamos el tipo del array a con `Array.isArray`: ",
  Array.isArray(a)
);
