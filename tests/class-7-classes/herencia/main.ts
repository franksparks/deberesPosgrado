import { Dinosaur } from "./Dinosaur";
import { Animal } from "./Animal";

const dino = new Dinosaur("t-rex", 800);
const ani = new Animal(800);

dino.walk();
dino.roar();

ani.walk();

console.log("Dino is Animal: ", dino instanceof Animal);
console.log("Dino is Dinosaur: ", dino instanceof Dinosaur);

console.log("Ani is animal: ", ani instanceof Animal);
console.log("Ani is Dinosaur: ", ani instanceof Dinosaur);

console.log(dino);
