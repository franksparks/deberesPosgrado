// Aunque definimos el objeto como const, es mutable.
// Lo que no es modificable es la variable.
// La variable se refiere, apunta, al objeto, pero están separados.

const obj = {
  a: 1,
  b: true,
  c: "some text",
};

obj.a = 2;
obj.name = "obj";

console.log(obj);

delete obj.c;

console.log(obj);
