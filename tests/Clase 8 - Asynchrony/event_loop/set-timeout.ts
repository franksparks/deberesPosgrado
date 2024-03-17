// Timeout configurado a 0
// El mensaje resultado de setTimeout llega más tarde a la consola
// Ya que el callback ha de pasar por el event loop

setTimeout(() => {
  console.log("Set Timeout message.");
}, 0);

console.log("Fin");
