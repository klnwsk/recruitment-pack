let words;
const startButton = document.querySelector("#start-button");

const state = {
  type: "initial",
};

function init() {
  loadWords()
}

init()

async function loadWords() {
  const data = await fetch("./words.json").then((d) => d.json());
  words = data.words
}

const wordsContainer = document.querySelector('.words')


startButton.addEventListener("click", () => {
  console.log("begin typing test");
  console.log(words);
  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.ceil(Math.random() * (words.length))
    const newWord = document.createElement('div')
    newWord.innerText = words[randomIndex]

    wordsContainer.appendChild(newWord)

  }
});
