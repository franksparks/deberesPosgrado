//Generamos un array de 100 elementos
let A = Array.from({ length: 100 });
// Recorremos el array y devolvemos tanto el valor como su índice
for (let i = 0; i < A.length; i++) {
  A[i] = `elemento ${i + 1}`;
}

//Con este método solo podemos devolver los valores del array
// IN -  Campos de un objeto
// OF - valores de un array
for (const elem of A) {
  console.log(elem);
}

console.log(A);
