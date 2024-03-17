// Petición para obtener un usuario aleatorio

fetch("https://www.randomuser.me/api")
  .then((res) => res.json())
  .then((json) => console.dir(json, { depth: null }));

// Petición para obtener 20 usuarios aleatorios

fetch("https://www.randomuser.me/api/?results=20")
  .then((res) => res.json())
  .then((json) => console.dir(json, { depth: null }));
