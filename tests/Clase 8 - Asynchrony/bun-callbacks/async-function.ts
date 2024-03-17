async function suma(a: number, b: number) {
  return a + b;
}

// Declaramos función async
//async function loadUserlist(numUsers: number) {}

// Misma función, pero tipo arrow
console.log("Devolvemos el objeto response.");
const loadUserlist = async (numUsers: number) => {
  const response = await fetch(`https://randomuser.me/api?results=${numUsers}`);
  const json = await response.json();
  return json;
};

const users = await loadUserlist(3);
console.dir(users, { depth: 0 });

//Accedemos a variables del objeto directamente
console.log("Accedemos a la key 'results' directamente.");
const loadUserlistKey = async (numUsers: number) => {
  const response = await fetch(`https://randomuser.me/api?results=${numUsers}`);
  const { results } = (await response.json()) as { results: any[] };
  return results;
};

// Top level await
console.log("Top level await");
const usersKeyAwait = await loadUserlistKey(3);

console.dir(usersKeyAwait, { depth: 0 });

// Call and then()
console.log("Call and then");
const usersKeyFetch = loadUserlistKey(3).then((res) => {
  console.log(res);
});

console.dir(usersKeyFetch, { depth: 0 });
