// ...

// Usos del operador spread (...)
// 1 - Al generar arrays u objetos
// 2 - Al desestructurar arrays u objetos
// 3 - En funciones, tanto al deinirlas como al llamarlas

console.log("------------------------------");
// Uso 1 - Generar objetos a partir de objetos existentes
console.log("Ejemplos uso 1:");
const agente007 = { nombre: "James", apellido: "Bond", edad: 27 };
const agente008 = { ...agente007, nuevo: true };

console.log(agente007);
console.log(agente008);
console.log("------------------------------");

// Uso 2 - Generar arrays a partir de arrays existentes
console.log("Ejemplos uso 2:");
const arrayUno = [1, 2, 3];
const arrayDos = [...arrayUno, 4, 5, 6];

console.log(arrayUno);
console.log(arrayDos);
console.log("------------------------------");

// Uso 3 - Recoger el "resto" de campos de un objeto
console.log("Ejemplos uso 3:");
const { apellido, ...resto } = agente008;
console.log(apellido);
console.log(resto);

console.log("------------------------------");

// Uso 4 - Recoger el "resto" de casillas de un array
console.log("Ejemplos uso 4:");
const [e1, e2, ...sobras] = arrayDos;
console.log(e1);
console.log(e2);
console.log(sobras);

console.log("------------------------------");

// Uso 5 - Funciones - Declaración
console.log("Ejemplos uso 5:");
const maximo = (...args) => {
  console.log(args);
  // Uso 6 - Uso como argumentos
  return Math.max(...args);
};

console.log(maximo(1, 2, 3, 4));
console.log(maximo(...arrayUno));
console.log(maximo(...arrayDos));

console.log("------------------------------");
