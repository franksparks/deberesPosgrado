const randInt = (low, high) => Math.floor(Math.random() * (high - low)) + low;

let arrayLetters = [];
let randomText = "";
const letters = "abcçdefghijklmnñopqrstuvwxyz";

const randLetter = () => letters[randInt(0, letters.length)];

const randWord = () => {
  const numLetters = randInt(2, 10);
  let word = "";
  for (let i = 0; i < numLetters; i++) {
    word += randLetter();
  }
  return word;
};

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const randSentence = () => {
  const numWords = randInt(5, 20);
  let sentence = capitalize(randWord()) + " ";

  for (let i = 0; i < numWords; i++) {
    sentence += randWord() + " ";
  }

  sentence += randWord() + ".";
  return sentence;
};

const randText = () => {
  const numParagraphs = randInt(3, 10);
  let text = "";
  for (let i = 0; i < numParagraphs; i++) {
    text += randSentence();
  }
  return text;
};

// Alteramos el DOM del HTML

for (let i = 0; i < 5; i++) {
  const p = document.createElement("p");
  p.textContent = randText();
  document.body.appendChild(p);
}
