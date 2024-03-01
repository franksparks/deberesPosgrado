// Almacenamos dos parámetros que pasamos por consola
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

// Funcion suma de dos numeros
function suma2(a, b) {
  const s = a + b;
  return s;
}

console.log(suma2(a, b));
