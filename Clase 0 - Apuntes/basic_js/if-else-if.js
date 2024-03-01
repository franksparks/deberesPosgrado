const nota = Number(process.argv[2]);

if (Number.isNaN(nota)) {
  console.log("No se introdujo un número");
  process.exit(0);
}

if (nota < 5) {
  console.log("Suspenso");
} else if (nota < 7) {
  console.log("Aprobado");
} else if (nota < 10) {
  console.log("Notable");
} else {
  console.log("Excelente");
}
