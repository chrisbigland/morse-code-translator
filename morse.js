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

  translateMorseChar(morseChar) {
    let translatedMorseChar = "";
    if (morseChar != " ") {
      console.log(morseChar);
      console.log("not a space and ready to run"); // runs if the character is not a space
      for (let i = 0; i < this.morseAlphabetArr.length; i++) {
        // loops through the alphabet array of arrays
        if (this.morseAlphabetArr[i][0] === morseChar) {
          console.log("it matches!!!");
          // if the first index of each array contains the character, we add the second index of that array to the lettersArr.
          // just need to change what's in the brackets to make it dynamic
          lettersArr.push(this.morseAlphabetArr[i][1]);
          //   console.log(this.morseAlphabetArr[i][1]);
          //   console.log(lettersArr);
        }
      }
      if (morseChar === "") {
        console.log("it is a space");
        lettersArr.push(" ");
        console.log(lettersArr);
      }
      //   console.log(translatedMorseChar);
      return translatedMorseChar;
    }
  }
}

let lettersArr = [];

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

input.addEventListener("input", () => {
  console.log(splitMorseChar);
  splitMorseChar = input.value.split(" "); // splitMorseChar turns into an array - each symbol is an item
  return splitMorseChar;
});

const translateMotoEn = () => {
  // run when button is clicked.
  console.log(`translate function activated`);
  splitMorseChar.forEach((character) => {
    // console.log(character);
    // iterates through each item and runs translateMorseChar method on it
    translation.translateMorseChar(character);
    output.innerHTML = lettersArr.join("");
  });
  lettersArr = [];
};

translBtn.addEventListener("click", translateMotoEn);
