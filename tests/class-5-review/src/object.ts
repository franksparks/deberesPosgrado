// Definimos unas variables (las usaremos como propiedades después)
let x = 0.5;
let y = 2.1;

// Definimos estructuras de datos para poder reutilizarlas
type Coord2d = { x: number; y: number };

// Definimos un objeto con las variables y la estructura de datos definidas
let punto2d: Coord2d = {
  x,
  y,
};

// Definimos una segunda estructura de datos
type Rectang2d = {
  width: number;
  height: number;
  origin: Coord2d;
  optional?: string;
  // El operador | nos permite especificar vario tipos posibles para una propiedad
  optional_two: string | number | undefined;
  optional_three?: string | undefined;
};
// Definimos un nuevo objeto que contiene al anterior
// Reaprovechamos la estructura de datos definida
// Utilizamos también la segunda estrcutura de datos que definimos
let rectangulo2d: Rectang2d = {
  width: 100,
  height: 200,
  origin: punto2d,
  // optional: "Soy una propiedad opcional",
  // Necesitaremos declarar esta propiedad aunque sea con undefined
  optional_two: undefined,
};

console.log(rectangulo2d);
