const x = Number(process.argv[2]);

if (Number.isNaN(x)) {
  console.log("No se introdujo un número");
  process.exit(0);
}

console.log("El número introducido es: " + x);

if (x > 0) {
  console.log("El número es positivo ");
} else if (x == 0) {
  console.log("El número introducido es cero ");
} else {
  console.log("El número introducido es negativo ");
}
