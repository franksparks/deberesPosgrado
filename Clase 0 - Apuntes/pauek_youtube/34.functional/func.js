// map
// Se aplica una función a cada elemento del array original
// No modifica el array original, genera una copia con los cambios
console.log("------------------------------");
const a = [1, 2, 3, 4, 5];
console.log("Ejemplos map:");
console.log(a.map((x) => x + 1));
console.log(a.map((x) => "*".repeat(x)));
console.log(a.map((x) => x * 10));
console.log(a.map((x) => Math.floor(Math.random() * x)));
console.log("------------------------------");

// filter
// Devuelve una copia del array original, filtrado según lo indicado
// Si da true -> se queda
// Si da false -> se va
console.log("Ejemplos filter:");
console.log(a.filter((x) => x !== 3));
console.log(a.filter((x) => x > 3));
console.log("------------------------------");

// forEach
// Se recibe un elemento y se ejecuta algo
console.log("Ejemplos forEach:");
a.forEach((x) => console.log(x));
console.log("------------------------------");

// some
// Devuelve true si algún elementos de los que pasamos cumplen la condición especificada
console.log("Ejemplos some:");
a.some((x) => x % 2 == 0);
console.log(a.some((x) => x % 2 == 0));
console.log(a.some((x) => x < -2));
console.log("------------------------------");

// every
// Devuelve true si todos los elementos de los que pasamos cumplen la condición especificada
console.log("Ejemplos every:");
a.some((x) => x % 2 == 0);
console.log(a.every((x) => x % 1 == 0));
console.log(a.every((x) => x % 2 == 0));
console.log(a.every((x) => x < -2));
console.log("------------------------------");

// find
// Devuelve el primer elemento que cumple la condición especificada de entre los elementos que le pasamos
console.log("Ejemplos find:");
a.some((x) => x % 2 == 0);
console.log(a.find((x) => x > 4));

console.log("------------------------------");

// findIndex
// Devuelve el índice del primer elemento que cumple la condición especificada de entre los elementos que le pasamos
console.log("Ejemplos findIndex:");
a.some((x) => x % 2 == 0);
console.log(a.findIndex((x) => x > 4));

console.log("------------------------------");
