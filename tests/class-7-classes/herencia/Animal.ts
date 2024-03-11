export class Animal {
  weight: number;

  constructor(w: number) {
    this.weight = w;
  }

  roar() {
    throw new Error("Animal.roar: don't know how to roar");
  }

  walk() {
    console.log("An animal is walking");
  }
}
