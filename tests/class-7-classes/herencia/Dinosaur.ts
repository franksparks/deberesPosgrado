import { Animal } from "./Animal";

export class Dinosaur extends Animal {
  species: string;

  constructor(species: string, weigth: number) {
    super(weigth);
    this.species = species;
  }

  roar() {
    console.log("A dinosaur can roar!");
  }

  walk(): void {
    console.log("A T-rex is walking");
  }
}
