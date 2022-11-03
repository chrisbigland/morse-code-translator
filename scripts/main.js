export class Translator {
  constructor() {
    this.a = ".-";
    this.b = "-...";
    this.c = "-.-.";
    this.d = "-..";
    this.e = ".";
    this.f = "..-.";
    this.g = "--.";
    this.h = "....";
    this.i = "..";
    this.j = ".---";
    this.k = "-.-";
    this.l = ".-..";
    this.m = "--";
    this.n = "-.";
    this.o = "---";
    this.p = ".--.";
    this.q = "--.-";
    this.r = ".-.";
    this.s = "...";
    this.t = "-";
    this.u = "..-";
    this.v = "...-";
    this.w = ".--";
    this.x = "-..-";
    this.y = "-.--";
    this.z = "--..";
    this.zero = "-----";
    this.one = ".----";
    this.two = "..---";
    this.three = "...--";
    this.four = "....-";
    this.five = ".....";
    this.six = "-....";
    this.seven = "--...";
    this.eight = "---..";
    this.nine = "----.";

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
    let translatedLetter;
    let isAValidEntry = validateEnEntry(letter);
    if (isAValidEntry) {
      if (letter != " ") {
        if (
          letter === "0" ||
          letter === "1" ||
          letter === "2" ||
          letter === "3" ||
          letter === "4" ||
          letter === "5" ||
          letter === "6" ||
          letter === "7" ||
          letter === "8" ||
          letter === "9"
        ) {
          const newWord = translator.changeNumberToWord(letter);
          letter = newWord;
        }
        translatedLetter = this[letter];
      } else if (letter === " ") {
        translatedLetter = "/";
      }
    } else {
      translatedLetter = "#";
    }
    morseLettersArr.push(translatedLetter);
  }

  translateEnToMo(enInputArr) {
    let outputHtml = "";
    enInputArr.forEach((letter) => {
      translator.translateLetter(letter.toLowerCase());
      outputHtml = morseLettersArr.join(" ").replaceAll(" / ", "/");
    });
    morseLettersArr = [];
    return outputHtml;
  }

  translateMorseChar(morseChar) {
    const isValidEntry = validateMoEntry(morseChar);
    if (morseChar != " ") {
      let nonMorseChar = "";
      if (isValidEntry) {
        for (let i = 0; i < this.morseAlphabetArr.length; i++) {
          if (this.morseAlphabetArr[i][0] === morseChar) {
            enLettersArr.push(this.morseAlphabetArr[i][1]);
          }
        }
        if (morseChar === "") {
          nonMorseChar = " ";
          enLettersArr.push(nonMorseChar);
        }
      } else {
        nonMorseChar = "#";
        enLettersArr.push(nonMorseChar);
      }
    }
  }

  translateMoToEn(moInputArr) {
    let outputHtml = "";
    moInputArr.forEach((character) => {
      translator.translateMorseChar(character);
      outputHtml = enLettersArr.join("");
    });
    enLettersArr = [];
    return outputHtml;
  }

  changeNumberToWord(number) {
    let word = "";
    if (number === "0") {
      word = "zero";
    } else if (number === "1") {
      word = "one";
    } else if (number === "2") {
      word = "two";
    } else if (number === "3") {
      word = "three";
    } else if (number === "4") {
      word = "four";
    } else if (number === "5") {
      word = "five";
    } else if (number === "6") {
      word = "six";
    } else if (number === "7") {
      word = "seven";
    } else if (number === "8") {
      word = "eight";
    } else {
      word = "nine";
    }
    return word;
  }
}

export const translator = new Translator();

let enLettersArr = [];
let morseLettersArr = [];

export const validateEnEntry = (str) => {
  const containsLetters = /[a-zA-Z]/.test(str);
  const containsNumbers = /\d/.test(str);
  if (containsLetters === true || containsNumbers === true || str === " ") {
    return true;
  } else {
    return false;
  }
};

export const validateMoEntry = (moChar) => {
  const moSplitCharArr = moChar.split("");
  const charIsValid = moSplitCharArr.every(validateMoChar);
  if (moChar.length < 6 && charIsValid === true) {
    return true;
  } else if (moChar.length > 5) {
    alert(
      "Please check that your morse characters consist of a maximum of 5 dots or dashes"
    );
  } else {
    return false;
  }
};

export const validateMoChar = (input) => {
  if (input === "." || input === "-" || input === " ") {
    return true;
  } else {
    return false;
  }
};

//ACTIONS
// fix page jumping when output appears
// sound error
// create readme
// tests - make them pass. Mainly spacing issues and alert issue
// - When should you use a class? When should you use functions? watch this video https://www.youtube.com/watch?v=PFmuCDHHpwk ALSO do the further reading in the 'OOP' notes.
// could I use switch instead of lengthy if statement?
