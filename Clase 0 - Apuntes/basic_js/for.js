const n = Number(process.argv[2]);

if (Number.isNaN(n)) {
  console.log("No se introdujo un número");
  process.exit(0);
}

for (let i = 1; i <= n; i++) {
  console.log("Repetición", i);
}
