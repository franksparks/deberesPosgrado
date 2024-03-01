let a = 1; // Las variables como tal no tienen tipo, pueden contener cualquier cosa
a = "hola"; // Una vez declarada y definida, podemos cambiar el contenido de una variable a cualquier otra cosa

let x = 0.0,
  y = 0.1; // Podemos encadenar declaraciones de variables, compartirán el ámbito

let s = "hola";
let space = "-----------------------------------------------------";

// console.log(a, x, y, s);

//////////////////////////////////////////////////////////////////
console.log(space);
a = 1;
console.log(typeof a); //Nos devuelve el tipo de la variable
console.log(space);

let b = true;
console.log(typeof b); //Nos devuelve el tipo de la variable
console.log(space);

let c = "hola";
console.log(typeof b); //Nos devuelve el tipo de la variable
console.log(space);

// Conversiones entre tipos
console.log("Valor de variable a estudiar: " + a);
console.log("Su tipo: " + typeof a);
console.log("La convertimos a String, esto nos devuelve: " + String(a));
console.log("La convertimos a Boolean, esto nos devuelve: " + Boolean(a));
console.log(space);

console.log("Valor de variable a estudiar: " + b);
console.log("Su tipo: " + typeof b);
console.log("La convertimos a String, esto nos devuelve: " + String(b));
console.log("La convertimos a Number, esto nos devuelve: " + Number(b));
console.log(space);

b = false; //Ahora probamos con false
console.log("Valor de variable a estudiar: " + b);
console.log("Su tipo: " + typeof b);
console.log("La convertimos a String, esto nos devuelve: " + String(b));
console.log("La convertimos a Number, esto nos devuelve: " + Number(b));
console.log(space);

c = "texto";
console.log("Valor de variable a estudiar: " + c);
console.log("Su tipo: " + typeof c);
console.log("La convertimos a Boolean, esto nos devuelve: " + Boolean(c));
console.log("La convertimos a Number, esto nos devuelve: " + Number(c));
console.log(space);

c = "123"; //Cambiamos el contenido del string para que contenga una cifra
console.log("Valor de variable a estudiar: " + c);
console.log("Su tipo: " + typeof c);
console.log("La convertimos a Boolean, esto nos devuelve: " + Boolean(c));
console.log("La convertimos a Number, esto nos devuelve: " + Number(c));
console.log(space);

c = ""; //Cambiamos el contenido del string para esté vacío
console.log("Valor de variable a estudiar: " + c);
console.log("Su tipo: " + typeof c);
console.log("La convertimos a Boolean, esto nos devuelve: " + Boolean(c));
console.log("La convertimos a Number, esto nos devuelve: " + Number(c));
console.log(space);

a = true;
b = false;

console.log("Variable 1: " + a);
console.log("Variable 2: " + b);
console.log("Operación a realizar: || (or)");
console.log(a || b);
console.log("Operación a realizar: && (and)");
console.log(a && b);
console.log("Operación a realizar: !a (not a)");
console.log(!a);
console.log("Operación a realizar: !b (not b)");
console.log(!b);
console.log(space);

// Asignación con operaciones
//a = 1
//a += 1
//a -= 1
//a *= 2
//a /= 2

let d = "texto"; //Cambiamos el contenido del string para esté vacío
console.log("Valor de variable a estudiar: " + d);
console.log("Su tipo: " + typeof d);
console.log("La convertimos a Number, esto nos devuelve: " + Number(d));
console.log(space);

d = NaN; //Cambiamos el contenido del string para esté vacío
console.log("Valor de variable a estudiar: " + d);
console.log("Su tipo: " + typeof d);
console.log("La convertimos a Number, esto nos devuelve: " + Number(d));

console.log("Comparación con `NaN`: " + Number.isNaN(d));
console.log("Es el número finito: " + Number.isFinite(d));
console.log(space);

d = 1 / 0; //Cambiamos el contenido del string para esté vacío
console.log("Valor de variable a estudiar: " + d);
console.log("Su tipo: " + typeof d);
console.log("La convertimos a Number, esto nos devuelve: " + Number(d));

console.log("Es el número finito: " + Number.isFinite(d));
console.log(space);
