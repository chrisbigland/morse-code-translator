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
    this.nine = "-----";

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
    console.log(letter);
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
          const newWord = changeNumberToWord(letter);
          console.log(newWord);
          letter = newWord;
          console.log(letter);
        }
        translatedLetter = this[letter];
      } else if (letter === " ") {
        translatedLetter = "/";
      }
    } else {
      translatedLetter = "#";
    }
    console.log(translatedLetter);
    morseLettersArr.push(translatedLetter);
    console.log(morseLettersArr);
  }

  translateEnToMo(enInputArr) {
    let outputHtml = "";
    enInputArr.forEach((letter) => {
      translator.translateLetter(letter.toLowerCase());
      outputHtml = morseLettersArr.join(" ").replaceAll(" / ", "/"); // put this in as don't need spaces next to forward slash and they get put in with the 'join'.
    });
    morseLettersArr = [];
    return outputHtml;
  }

  translateMorseChar(morseChar) {
    let translatedMorseChar = "";
    console.log(morseChar);
    console.log(typeof morseChar);
    const isValidEntry = validateMoEntry(morseChar.split(""));
    console.log(isValidEntry);

    if (morseChar != " ") {
      let nonMorseChar = "";
      // || morseChar.includes(".") || morseChar.includes(".")
      // runs if the character is not a space
      if (isValidEntry) {
        console.log("it's valid");
        for (let i = 0; i < this.morseAlphabetArr.length; i++) {
          // loops through the alphabet array of arrays
          if (this.morseAlphabetArr[i][0] === morseChar) {
            // if the first index of each array contains the character, we add the second index of that array to the enLettersArr.
            enLettersArr.push(this.morseAlphabetArr[i][1]);
          }
        }
        if (morseChar === "") {
          //CHECK HERE - might be reason for tests failing with spaces!!! Should above be a space? OR maybe it's because it's in a for loop - adding spaces too many times!
          nonMorseChar = " ";
          enLettersArr.push(nonMorseChar);
        }
      } else {
        console.log("it's not valid");
        nonMorseChar = "#";
        enLettersArr.push(nonMorseChar);
      }
      // else if (morseChar )
      return translatedMorseChar; // don't think we need this variable at all - check
    }
  }

  translateMotoEn(moInputArr) {
    console.log(`translate mo to en function activated`);
    console.log(moInputArr);
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

export const translator = new Translator();

let enLettersArr = [];
let morseLettersArr = [];

const validateEnEntry = (str) => {
  const containsLetters = /[a-zA-Z]/.test(str);
  const containsNumbers = /\d/.test(str);
  if (containsLetters === true || containsNumbers === true || str === " ") {
    return true;
  } else {
    return false;
  }
};

// if string includes something that ISNT a dot, dash or space, return false. string should ONLY include space, dot or dash
/// include a length limit here
// try every() method
const validateMoEntry = (moSplitCharArr) => {
  console.log(moSplitCharArr);
  const trueOrFalse = moSplitCharArr.every(validateMoChar);
  return trueOrFalse;
};

const validateMoChar = (input) => {
  if (input === "." || input === "-" || input === " ") {
    return true;
  } else {
    return false;
  }
};

//ACTIONS
// page jumps when output appears
// check I have enough MO to EN tests? Maybe split up with x4 describes pos and neg for each.
//test for new letter function
//fix spacing issue - no spaces showing mo to en
// make it so that it doesn't just translate the recognised symbols - if unknown symbols exist - alert perhaps
// insert a space for the letters

const changeNumberToWord = (number) => {
  // MOVE INSIDE CLASS
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
};

let newWord = "";

newWord = changeNumberToWord(5);

console.log(newWord);
