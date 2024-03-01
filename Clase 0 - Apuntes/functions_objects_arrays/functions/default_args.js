// Inicializamos el valor de numExclam para usarlo en caso de que el usuario no lo informe.
// Así evitamos que aparezca como undefined.

// Ojo! Los argumentos se rellenan de principio a fin.
// Si enviamos un parámetro, JS no sabe a cuál nos referimos, lo asignará al primero.

function exclama(mensaje, numExclam = 1) {
  console.log(mensaje + "!".repeat(numExclam));
}

exclama("Hola", 5);
exclama("wtf");
exclama("Diez", 10);
