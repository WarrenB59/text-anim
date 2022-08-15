const target = document.getElementById("target");

let array = ["développeur", "beatmaker", "sportif", "passionné"];

let wordIndex = 0;
let letterIndex = 0;

// for (let index = 0; index < array.length; index++) {
//   target.textContent += array[index];
// }

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// Fonction recursive (elle appelle sa propre fonction)
const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 100);
};
loop();
