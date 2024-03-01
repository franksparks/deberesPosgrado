let space = "-----------------------------------------------------";

let a = [1, 2, 3, 4, 5];
console.log("Array original: ");
console.log(a);

console.log("Añadimos dos elementos al Array mediante push(): ");
a.push(6);
a.push(7);

console.log(a);
console.log(space);

console.log("Segundo array original: ");
let b = ["uno", "dos", "tres", "cuatro"];
console.log(b);
//Pop devuelve el valor que sacamos del array

console.log("Elimininamos dos elementos del array mediante pop(): ");

console.log(b.pop());
console.log(b.pop());
console.log("Array resultante: ");
console.log(b);
console.log(space);

a = [1, 2, 3, 4, 5, 6, 7];
console.log("Array original: ");
console.log(a);

console.log("Elimininamos un elemento del array mediante shift(): ");

let n = a.shift();
console.log(n);

console.log("Array resultante: ");
console.log(a);

console.log("Añadimos un elemento al Array mediante unshift(): ");

a.unshift(6);
console.log("Array resultante: ");
console.log(a);
console.log("Array resultante: ");
console.log(space);

a = [1, 2, 3, 4, 5, 6, 7];
console.log("Array original: ");
console.log(a);

// slice() no elimina los elementos que obtenemos del array,
// nos devuelve desde el índice inicio hasta el final, sin incluirlo.

// Si no especificamos índice fin, tomará valores hasta el final del array.
console.log("Extraeremos parte del array mediante slice():");
num = a.slice(1, 4);

console.log("Elementos extraídos: ");
console.log(num);
console.log("Array resultante: ");
console.log(a);
console.log(space);

// indexOf devuelve el primer índice donde se encuentra un elemento.
// No tiene en cuenta si hay más de una coincidencia.
n = 5;
console.log("Buscaremos en qué indice se encuentra el elemento: ", n);

console.log("Array original: ");
console.log(a);

num = a.indexOf(n);
console.log("Índice del elemento:", n, " -> ", num);
console.log(space);

// Ahora le indicaremos a indexOf desde qué indice buscar.
a = [1, 2, 3, 4, 5, 6, 7, 1];
n = 1;
console.log("Buscaremos en qué indice se encuentra el elemento: ", n);
console.log("Array original: ");
console.log(a);

num = a.indexOf(n, 2);
console.log("Índice del elemento:", n, " -> ", num);

console.log(space);

// Podemos empezar a buscar dede el final
a = [1, 2, 3, 4, 5, 6, 7, 2, 1];
n = 2;
console.log("Buscaremos en qué indice se encuentra el elemento: ", n);
console.log("Array original: ");
console.log(a);

num = a.lastIndexOf(n);
console.log("Índice del elemento:", n, " -> ", num);

console.log(space);

// splice() tiene 3 parametros
// 1 - índice inicio
// 2 - número de elementos a eliminar - puede ser 0
// 3 - elemento/s a inyectar - puede ser 0
a = [1, 2, 3, 4, 5, 6, 7];

console.log("Array original: ");
console.log(a);
n = 3;
console.log("Índice inicio de splice: ", n);

num = 2;
console.log("Número de elementos a eliminar: ", num);

let str = "mi string";
console.log("Elementos a introducir: ", str);

num = a.splice(n, num, str, str);
console.log("Elementos introducidos: ");
console.log(str, str);
console.log("Array resultante: ");
console.log(a);

console.log(space);
