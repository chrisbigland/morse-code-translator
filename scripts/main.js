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
    this.zero = " -----";
    this.one = " .----";
    this.two = " ..---";
    this.three = " ...--";
    this.four = " ....-";
    this.five = " .....";
    this.six = " -....";
    this.seven = " --...";
    this.eight = " ---..";
    this.nine = " -----";

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
      ["-----", "0"],
      [".----", "1"],
      ["..---", "2"],
      ["...--", "3"],
      ["....-", "4"],
      [".....", "5"],
      ["-....", "6"],
      ["--...", "7"],
      ["---..", "8"],
      ["----.", "9"],
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
    return outputHtml;
  }
}

const translator = new Translator();

let enLettersArr = [];
let morseLettersArr = [];

//ACTIONS
// page jumps when output appears
// make it so that it doesn't just translate the recognised symbols - if unknown symbols exist - alert perhaps
// insert a space for the letters
// warning message if unexpected symbols received.
// Morse code - event listener that can tell how long someone has spent clicking on a button for? i.e. 10miliseconds = dot, or buttons with a - and a .

const changeNumberToWord = (number) => {
  let word = "";
  if (number === 0) {
    word = "zero";
  } else if (number === 1) {
    word = "one";
  } else if (number === 2) {
    word = "two";
  } else if (number === 3) {
    word = "three";
  } else if (number === 4) {
    word = "four";
  } else if (number === 5) {
    word = "five";
  } else if (number === 6) {
    word = "six";
  } else if (number === 7) {
    word = "seven";
  } else if (number === 8) {
    word = "eight";
  } else {
    word = "nine";
  }
  return word;
};

let newWord = "";

newWord = changeNumberToWord(5);

console.log(newWord);
