function f(a, b, c, d) {
  console.log("f(", a, b, c, d, ")");
}

// probamos con menos argumentos de los que espera la funcion
f();
f(1);
f(1, 2);
f(1, 2, 3);

// Enviamos el numero de argumentos que espera la funcion
f(1, 2, 3, 4);

// probamos con mas argumentos de los que espera la funcion
f(1, 2, 3, 4, 5);
f(1, 2, 3, 4, 5, 6);
