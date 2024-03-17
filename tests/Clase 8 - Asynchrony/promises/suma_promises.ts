// El tipo de los operandos debería ser number
// pero permitimos la invocación de la función
// con cualquier tipo de parámetros
// y comprobamos que sean números

function sum(a: any, b: any): Promise<number> {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Operands must be numbers");
    }
    setTimeout(() => resolve(a + b), 1000); // simulate 1s delay (again)
  });
}

// Resolve
console.log(sum(2, 3));

// Reject
console.log(sum(2, "a"));

// Caso real
const promise = sum(4, 5);

// Todo OK
promise.then((res) => {
  console.log(res);
});

// En caso de error
promise.catch((e) => {
  console.log("Ha fallado la primera");
});

// Deshacemos acciones que hayan quedado a medio hacer
promise.finally();

// Misma función, semántica sencilla
sum(4, 5)
  .then((res) => console.log(res))
  .catch((e) => console.log("Ha fallado la primera"))
  .finally();

const promise3 = sum("ha", 2);
promise3.then((res) => console.log(res));
promise3.catch((reason) => console.log("Ha fallado la suma: " + reason));
