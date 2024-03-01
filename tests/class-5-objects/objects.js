// Declaramos un objeto agente con una serie de propiedades
let agent = {
  name: "James",
  lastName: "Bond",
  age: 27,
  married: false,
};

console.log(agent);

////////////////////////////////////////
// Iteramos por los campos de un agente y los mostramos por pantalla
for (let field in agent) {
  console.log(field + ": " + agent[field]);
}

// Funcion para devolver las keys de un objeto
console.log(Object.keys(agent));

// Funcion para devolver los valores de un objeto
console.log(Object.values(agent));

// Funcion para devolver los pares llave-valor de un objeto
console.log(Object.entries(agent));
