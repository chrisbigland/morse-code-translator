export class Translator {
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
    return translatedLetter; //do I need this?
  }

  translateEnToMo(enInputArr) {
    // IF STATEMENT HERE FOR WARNING IF WRONG CHARACTERS ENTERED.
    let outputHtml = "";
    console.log(`translate en to mo function activated`);
    enInputArr.forEach((letter) => {
      translator.translateLetter(letter.toLowerCase());
      outputHtml = morseLettersArr.join(" ");
    });
    morseLettersArr = [];
    return outputHtml;
  }

  translateMorseChar(morseChar) {
    let translatedMorseChar = "";
    if (morseChar != " ") {
      // runs if the character is not a space
      for (let i = 0; i < this.morseAlphabetArr.length; i++) {
        // loops through the alphabet array of arrays
        if (this.morseAlphabetArr[i][0] === morseChar) {
          // if the first index of each array contains the character, we add the second index of that array to the enLettersArr.
          enLettersArr.push(this.morseAlphabetArr[i][1]);
        }
      }
      if (morseChar === "") {
        enLettersArr.push(" ");
      }
      return translatedMorseChar;
    }
  }

  translateMotoEn(moInputArr) {
    console.log(`translate mo to en function activated`);
    let outputHtml = "";

    moInputArr.forEach((character) => {
      // iterates through each item and runs translateMorseChar method on it
      // const translatedMorseChars =
      translator.translateMorseChar(character);
      outputHtml = enLettersArr.join("");
    });
    enLettersArr = [];
    return outputHtml; // return something here for the innerhtml in the event listener
  }
}

// export const testButtonTest = () => {
//   console.log("test button works");
// };

// //VARIABLES
const translator = new Translator();

// // for (let i = 0; i > )
// // dotSound.play();

let enLettersArr = [];
let splitWord = "";
let morseLettersArr = [];

// // MO => EN FUNCTIONALITY
// dotBtn.addEventListener("click", () => {
//   input.value += ".";
//   //add to the splitMorseChar when I click? How would I delete though if this was removed
// });

// dashBtn.addEventListener("click", () => {
//   input.value += "-";
// });

// input.addEventListener("input", () => {
//   console.log(splitMorseChar);
//   splitMorseChar = input.value.split(" "); // splitMorseChar turns into an array - each symbol is an item
//   return splitMorseChar;
// });

//ACTIONS
// stylings
// move functions into class as methods
// make it so that it doesn't just translate the recognised symbols - if unknown symbols exist - alert perhaps
//insert a space for the letters
// merge two translators together - use an extender?
// warning message if unexpected symbols received.

// Morse code - event listener that can tell how long someone has spent clicking on a button for? i.e. 10miliseconds = dot, or buttons with a - and a .
