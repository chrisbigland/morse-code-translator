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
  }

  translateLetter(letter) {
    let translatedLetter = "";
    if (letter != " ") {
      translatedLetter = this[letter];
    } else {
      translatedLetter = " ";
    }
    console.log(translatedLetter);
    morseLettersArr.push(translatedLetter);
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

// if (enSelection.checked) {
//   console.log("en is checked");
// }

// if (moSelection.checked) {
//   console.log("mo is checked");
// }

let lettersArr = [];
let splitWord = "";
let morseLettersArr = [];

  input.addEventListener("input", () => {
    console.log(splitWord);
    splitWord = input.value.split("");
    return splitWord;
  });

// submit.addEventListener("click", updateHtml());

const translate = () => {
  console.log(`translate function activated`);
  splitWord.forEach((letter) => {
    translation.translateLetter(letter);
    output.innerHTML = morseLettersArr.join("");
  });
  morseLettersArr = [];
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
const testing123 = translateWord(morseLettersArr);

// event listener to run translate function when hitting 'translate' button
// const translatedLetter =

const updateHtml = () => {
  console.log(`this works`);
  //   const translationResult = document.createElement("h2");
  //   translationResult.innerHTML = `${translateWord}`;
};

// updateHtml();

// new idea - above we are going to have the letters of the word wanting to be translated.
// these go into the constructor as letter 1 letter 2 letter 3
// function then puts them together

// console.log(translation.letter1);

// console.log(translation.a, translation.b, translation.c);

// const alphabetObj = {
//   a: ".-",
//   b: "-...",
//   c: "-.-.",

// };

// const lettersArr = [
//   "a",
//   "b",
//   "c",

// ];

// let typedLettersArr = ["c", "a", "b"]; // later will have the input coming from the DOM.

// const createWord = (letterArr) => {
//   // function to create word from letters in typed letters array
//   const word = letterArr.join("");
//   return word;
// };

// const word = createWord(typedLettersArr);

// console.log(word);

// two extensions - EN to Morse and Morse to EN. Main translator

// BRIEF
// extension - can translate based on user input from the DOM.
// The classes you use should store all the information needed to translate between Morse and English, including the alphabets themselves, the word to translate and possibly the eventual output as it’s changing

// Some of the methods might include how to add a word to translate, how to break it down to aid the translation and you’ll have to think carefully about how and when you call these methods to make sure the state of the object is getting changed correctly.

// The logic for translating both ways won’t be exactly the same but some methods may be similar enough that you might be able to create a base class to extend from in order to share logic between the two translators (Morse => English, English => Morse).

//ACTIONS
// morse to EN
// stylings
// allow for uppercase input
// make it so that it doesn't just translate the recognised symbols - if unknown symbols exist - alert perhaps

// Morse code - event listener that can tell how long someone has spent clicking on a button for? i.e. 10miliseconds = dot,

// this.d = d;
// this.e = e;
// this.f = f;
// this.g = g;
// this.h = h;
// this.i = i;
// this.j = j;
// this.k = k;
// this.l = l;
// this.m = m;
// this.n = n;
// this.o = o;
// this.p = p;
// this.q = q;
// this.r = r;
// this.s = s;
// this.t = t;
// this.u = u;
// this.v = v;
// this.w = w;
// this.x = x;
// this.y = y;
// this.z = z;

//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",

//   ".-"; // a

//   "-..."; // b
//   "-.-."; // c
//   "-..";

//   ".";

//   "..-.";
//   "--.";

//   "....";
//   "..";

//   ".---";
//   "-.-";

//   ".-..";
//   "--";

//   "-.";

//   "---";

//   ".--.";
//   "--.-";
//   ".-.";

//   "...";

//   "-";

//   "..-";

//   "...-";
//   ".--";

//   "-..-";
//   "-.--";
//   "--..";

//     this.d = "-..";
//     this.e = ".";
//     this.f = "..-.";
//     this.g = "--.";
//     this.h = "....";
//     this.i = "..";
//     this.j = ".---";
//     this.k = "-.-";
//     this.l = ".-..";
//     this.m = "--";
//     this.n = "-.";
//     this.o = "---";
//     this.p = ".--.";
//     this.q = "--.-";
//     this.r = ".-.";
//     this.s = "...";
//     this.t = "-";
//     this.u = "..-";
//     this.v = "...-";
//     this.w = ".--";
//     this.x = "-..-";
//     this.y = "-.--";
//     this.z = "--..";
