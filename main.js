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
  }

  translateLetter(letter) {
    let translatedLetter = "";
    if (letter != " ") {
      translatedLetter = this[letter];
    } else {
      translatedLetter = "  ";
    }
    console.log(translatedLetter);
    morseLettersArr.push(translatedLetter);
    console.log(morseLettersArr);
    return translatedLetter;
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

// for (let i = 0; i > )
// dotSound.play();

let lettersArr = [];
let splitWord = "";
let morseLettersArr = [];

dotBtn.addEventListener("click", () => {
  console.log("dotbtn works");
  input.value += ".";
});

dashBtn.addEventListener("click", () => {
  console.log("dashbtn works");
  input.value += "-";
});

input.addEventListener("input", () => {
  console.log(splitWord);
  splitWord = input.value.split("");
  return splitWord;
});

const translate = () => {
  console.log(`translate function activated`);
  splitWord.forEach((letter) => {
    translation.translateLetter(letter.toLowerCase());
    output.innerHTML = morseLettersArr.join(" ");
  });
  morseLettersArr = [];
};

translBtn.addEventListener("click", translate);

const translateWord = (arr) => {
  // takes the array of translated letters and returns the word
  translatedWord = arr.join("");
  return translatedWord;
};

let translatedWord = "";

//ACTIONS
// stylings

// make it so that it doesn't just translate the recognised symbols - if unknown symbols exist - alert perhaps
//insert a space for the letters
// merge two translators together - use an extender?

// Morse code - event listener that can tell how long someone has spent clicking on a button for? i.e. 10miliseconds = dot, or buttons with a - and a .
