//Array normal
let a = [1, 2, 3, 4, 5];

a[2] = -1;
console.log("Longitud del array a: " + a.length);
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

//Podemos almacenar cualquier cosa en un array
let b = [null, 0, true, "", NaN, undefined, ["arr", "brr"], { a: 1, b: 2 }];
console.log("Longitud del array b: " + b.length);
console.log(b);

//Array vacío
let c = [];
console.log(c);
console.log("Longitud del array c: " + c.length);
