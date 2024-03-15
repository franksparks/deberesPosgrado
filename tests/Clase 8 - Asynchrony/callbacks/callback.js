function suma(a, b) {
  return a + b;
}

// callback
function asyncSuma(a, b, callbackFunc) {
  const result = a + b;
  setTimeout(() => {
    callbackFunc(result);
  }, 3000);
}

console.log("--- Inicio demo");

// Llamada a la función async
asyncSuma(3, 4, (suma) => {
  console.log("El resultado es: ", suma);
});

console.log("--- Fin demo");
