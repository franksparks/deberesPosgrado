let obj = {
  a: 1,
  b: true,
  c: "texto",
};

// Podemos configurar como nombre de un campo un string cualquiera
let obj2 = {
  "nombre y apellido": "Jorge Díaz",
  "edad y peso": {
    edad: 27,
    peso: 70,
  },
};

// Cómo accedemos a campos con nombres compuestos?
console.log(obj2["nombre y apellido"]);
console.log(obj2["edad y peso"]);
console.log(obj2);
