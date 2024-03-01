const n = Number(process.argv[2]);

if (Number.isNaN(n)) {
  console.log("No se introdujo un número");
  process.exit(0);
}

let i = 1;

while (i <= n) {
  console.log("Repetición", i);
  i++;
}
