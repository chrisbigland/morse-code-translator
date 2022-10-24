class Translator {
  constructor() {
    this.a = " .-";
    this.b = " -...";
    this.c = " -.-.";
    this.d = " -..";
    this.e = " .";
    this.f = " ..-.";
    this.g = " --.";
    this.h = " ....";
    this.i = " ..";
    this.j = " .---";
    this.k = " -.-";
    this.l = " .-..";
    this.m = " --";
    this.n = " -.";
    this.o = " ---";
    this.p = " .--.";
    this.q = " --.-";
    this.r = " .-.";
    this.s = " ...";
    this.t = " -";
    this.u = " ..-";
    this.v = " ...-";
    this.w = " .--";
    this.x = " -..-";
    this.y = " -.--";
    this.z = " --..";

    this.morseAlphabetArr = [
      [".-", "a"],
      ["-...", "b"],
      ["-.-.", "c"],
      ["-..", "d"],
      [".", "e"],
      ["..-.", "f"],
      ["--.", "g"],
      ["....", "h"],
      ["..", "i"],
      [".---", "j"],
      ["-.-", "k"],
      [".-..", "l"],
      ["--", "m"],
      ["-.", "n"],
      ["---", "o"],
      [".--.", "p"],
      ["--.-", "q"],
      [".-.", "r"],
      ["...", "s"],
      ["-", "t"],
      ["..-", "u"],
      ["...-", "v"],
      [".--", "w"],
      ["-..-", "x"],
      ["-.--", "y"],
      ["--..", "z"],
    ];
  }

  translateLetter(letter) {
    let translatedLetter = "";
    if (letter != " ") {
      translatedLetter = this[letter];
    } else {
      translatedLetter = "/";
    }
    console.log(translatedLetter);
    morseLettersArr.push(translatedLetter);
    console.log(morseLettersArr);
    return translatedLetter;
  }

  translateMorseChar(morseChar) {
    let translatedMorseChar = "";
    if (morseChar != " ") {
      // runs if the character is not a space
      for (let i = 0; i < this.morseAlphabetArr.length; i++) {
        // loops through the alphabet array of arrays
        if (this.morseAlphabetArr[i][0] === morseChar) {
          // if the first index of each array contains the character, we add the second index of that array to the lettersArr.
          lettersArr.push(this.morseAlphabetArr[i][1]);
        }
      }
      if (morseChar === "") {
        lettersArr.push(" ");
      }
      return translatedMorseChar;
    }
  }
}

//VARIABLES
const input = document.querySelector("#input1");
const translBtn = document.querySelector("#btn");
const output = document.querySelector(".output");
const translation = new Translator();
const selection = document.querySelectorAll(".selection");
const enSelection = document.querySelector("#en-selection");
const moSelection = document.querySelector("#mo-selection");
const dotBtn = document.querySelector("#dot-btn");
const dashBtn = document.querySelector("#dash-btn");
const soundBtn = document.querySelector("#sound-btn");
const dotSound = document.querySelector("#dot-sound");

let codesArr = [];
let splitMorseChar = "";

// for (let i = 0; i > )
// dotSound.play();

enSelection.checked = true;

let lettersArr = [];
let splitWord = "";
let morseLettersArr = [];

// EN => MO FUNCTIONALITY
input.addEventListener("input", () => {
  console.log(splitWord);
  splitWord = input.value.split("");
  return splitWord;
});

const translateEnToMo = () => {
  console.log(`translate en to mo function activated`);
  splitWord.forEach((letter) => {
    translation.translateLetter(letter.toLowerCase());
    output.innerHTML = morseLettersArr.join(" ");
  });
  morseLettersArr = [];
};

///////////

const chooseTranslation = () => {
  if (enSelection.checked) {
    translateEnToMo();
  } else {
    translateMotoEn();
  }
};
///////////

translBtn.addEventListener("click", chooseTranslation);

// MO => EN FUNCTIONALITY
dotBtn.addEventListener("click", () => {
  input.value += ".";
});

dashBtn.addEventListener("click", () => {
  input.value += "-";
});

const translateMotoEn = () => {
  // run when button is clicked.
  console.log(`translate mo to en function activated`);
  splitMorseChar.forEach((character) => {
    // console.log(character);
    // iterates through each item and runs translateMorseChar method on it
    translation.translateMorseChar(character);
    output.innerHTML = lettersArr.join("");
  });
  lettersArr = [];
};

input.addEventListener("input", () => {
  console.log(splitMorseChar);
  splitMorseChar = input.value.split(" "); // splitMorseChar turns into an array - each symbol is an item
  return splitMorseChar;
});

//ACTIONS
// stylings
// move functions into class as methods
// make it so that it doesn't just translate the recognised symbols - if unknown symbols exist - alert perhaps
//insert a space for the letters
// merge two translators together - use an extender?
// warning message if unexpected symbols received.

// Morse code - event listener that can tell how long someone has spent clicking on a button for? i.e. 10miliseconds = dot, or buttons with a - and a .
