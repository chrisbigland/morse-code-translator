class Translator {
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

    this.morseAlphabetArr = [
      [".-", "a"],
      ["-...", "b"],
      ["-.-.", "c"],
    ];

    // const a = ".-";
    // const b = "-...";
    // const c = "-.-.";
    // this.enA = a;
    // this.enB = b;
    // this.enC = c;
  }

  translateMorseChar(morseChar) {
    let translatedMorseChar = "";
    if (morseChar != " ") {
      console.log("not a space and ready to run"); // runs if the character is not a space
      for (let i = 0; i < this.morseAlphabetArr.length; i++) {
        //why a for loop here? we are passing through one character?
        // loops through the alphabet array of arrays
        console.log(morseChar);
        // if there is a match we should get a new array here
        if (this.morseAlphabetArr[i][0] === morseChar) {
          console.log("it matches!!!");
          // if the first index of each array contains the character, we add the second index of that array to the lettersArr.
          // just need to change what's in the brackets to make it dynamic
          lettersArr.push(this.morseAlphabetArr[i][1]);
          console.log(this.morseAlphabetArr[i][1]);
          console.log(lettersArr);
        }
      }
      //for loop here?!
      //   morseAlphabetArr.filter((letterArr) => {
      //   })
      //  else {
      //   translatedMorseChar = " ";
      // }
      console.log(translatedMorseChar);
      enLettersArr.push(translatedMorseChar);
      return translatedMorseChar;
    }
  }
}

let lettersArr = [];

// const morseAlphabetArr = [
//   [".-", "a"],
//   ["-...", "b"],
//   ["-.-.", "c"],
// ];

// for (let i = 0; i < morseAlphabetArr.length; i++) {
//   if (morseAlphabetArr[i][0].includes(".-")) {
//     // just need to change what's in the brackets to make it dynamic
//     lettersArr.push(morseAlphabetArr[i][1]);
//     console.log("found one");
//     console.log(lettersArr);
//   }
// }

//VARIABLES
const input = document.querySelector("#input1");
const translBtn = document.querySelector("#btn");
const output = document.querySelector(".output");
const translation = new Translator();
const selection = document.querySelectorAll(".selection");
const enSelection = document.querySelector("#en-selection");
const moSelection = document.querySelector("#mo-selection");

let codesArr = [];

let splitMorseChar = "";
// let morseLettersArr = [];
let enLettersArr = [];

input.addEventListener("input", () => {
  console.log(splitMorseChar);
  splitMorseChar = input.value.split(" "); // splitMorseChar turns into an array - each symbol is an item
  return splitMorseChar;
});

const translate = () => {
  // run when button is clicked.
  console.log(`translate function activated`);
  splitMorseChar.forEach((character) => {
    // console.log(character);
    // iterates through each item and runs translateMorseChar method on it
    translation.translateMorseChar(character);
    // output.innerHTML = morseLettersArr.join("");
  });
  //   morseLettersArr = [];
};

translBtn.addEventListener("click", translate);

// create a method to transl
// translation.translateLetter("c"); // later insert letter dynamically from the DOM - event listener
// translation.translateLetter("a");
// translation.translateLetter("b");
// translation.translateWord(morseLettersArr);

const translateWord = (arr) => {
  // takes the array of translated letters and returns the word
  translatedWord = arr.join("");
  return translatedWord;
};

let translatedWord = "";
// const testing123 = translateWord(morseLettersArr);

// event listener to run translate function when hitting 'translate' button
// const translatedLetter =

const updateHtml = () => {
  console.log(`this works`);
  //   const translationResult = document.createElement("h2");
  //   translationResult.innerHTML = `${translateWord}`;
};
