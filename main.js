import {
  input,
  translBtn,
  output,
  selection,
  enSelection,
  moSelection,
  dotBtn,
  dashBtn,
  soundBtn,
  dotSound,
} from "./non-testable.js";
// import "./non-testable.js";

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
  translateEnToMo() {
    // IF STATEMENT HERE FOR WARNING IF WRONG CHARACTERS ENTERED.
    console.log(`translate en to mo function activated`);
    splitWord.forEach((letter) => {
      translation.translateLetter(letter.toLowerCase());
      output.innerHTML = morseLettersArr.join(" ");
    });
    morseLettersArr = [];
  }

  translateMotoEn() {
    console.log(`translate mo to en function activated`);
    splitMorseChar.forEach((character) => {
      // iterates through each item and runs translateMorseChar method on it
      translation.translateMorseChar(character);
      output.innerHTML = lettersArr.join("");
    });
    lettersArr = [];
  }

  chooseTranslation() {
    if (enSelection.checked) {
      translation.translateEnToMo();
    } else {
      translation.translateMotoEn();
    }
  }
}

export const testButtonTest = () => {
  console.log("test button works");
};

//VARIABLES
const translation = new Translator();
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

translBtn.addEventListener("click", translation.chooseTranslation);

// MO => EN FUNCTIONALITY
dotBtn.addEventListener("click", () => {
  input.value += ".";
  //add to the splitMorseChar when I click? How would I delete though if this was removed
});

dashBtn.addEventListener("click", () => {
  input.value += "-";
});

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
