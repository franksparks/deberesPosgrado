function maximo() {
  console.log(arguments);
  if (arguments.length === 0) {
    return null;
  }

  let m = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    m = arguments[i] > m ? arguments[i] : m;
  }
  return m;
}
console.log(maximo());
