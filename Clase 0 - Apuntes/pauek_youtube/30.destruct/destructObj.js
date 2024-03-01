// Destructuring objects

// Forma standard
/*
const muestraPersona = (persona) => {
  const {
    nombre,
    apellido,
    edad,
    localizacion: { lat, lon },
  } = persona;
  */

// Forma abreviada
const muestraPersona = ({
  nombre,
  apellido,
  edad,
  localizacion: { lat, lon },
}) => {
  console.log(`Nombre:    ${nombre}`);
  console.log(`Apellido:  ${apellido}`);
  console.log(`Edad:      ${edad}`);
  console.log(`Latitud:   ${lat}`);
  console.log(`Longitud:  ${lon}`);
};

const muestraPosicion = (pos) => {
  const { abscisas: x, ordenadas: y } = pos;
  console.log(`(${x}, ${y})`);
};

muestraPersona({
  nombre: "James",
  apellido: "Bond",
  edad: "27",
  localizacion: { lat: 40.2, lon: 22 },
});
muestraPosicion({ abscisas: 13, ordenadas: 26 });
