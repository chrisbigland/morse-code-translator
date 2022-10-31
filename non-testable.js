// Tasks:
// - Remove duplicate "new Translator()" bits of JS
// - When should you use a class? When should you use functions? watch this video https://www.youtube.com/watch?v=PFmuCDHHpwk ALSO do the further reading in the 'OOP' notes.
// merge all questions
// - write tests
// check if new number code is ok with coach - is it too wordy?
// could I use switch instead of lengthy if statement?
// MO to EN - translate letters to be letters only. 

import { Translator } from "./scripts/main.js";

const input = document.querySelector("#input1");
const translBtn = document.querySelector(".functional-btns__transl");
const output = document.querySelector(".output-container__output");
const selection = document.querySelectorAll(".selection");
const enSelection = document.querySelector(".radio-selections__en-selection");
const moSelection = document.querySelector(".radio-selections__mo-selection");
const dotBtn = document.querySelector(".dot-dash-btns__dot-btn");
const dashBtn = document.querySelector(".dot-dash-btns__dash-btn");
const dashSound = document.querySelector("#dash-sound");
const dotSound = document.querySelector("#dot-sound");
const morseSoundBtn = document.querySelector(".functional-btns__sound-output");

const spaceBtn = document.querySelector("#space-btn");

enSelection.checked = true;

translBtn.addEventListener("click", (event) => {
  const inputText = input.value;
  const translator = new Translator(); // do I need to declare this each time?
  let translation = "";
  if (enSelection.checked) {
    const enInputArr = inputText.split("");
    translation = translator.translateEnToMo(enInputArr); // result of the function gets saved as variable
  } else {
    console.log("morse code radio checked");
    const moInputArr = inputText.split(" "); // turning string into arr
    translation = translator.translateMotoEn(moInputArr);
  }
  output.innerHTML = translation;
});

const playDot = () => {
  dotSound.play();
};

// const myDotTimeout = () => {
//   setTimeout(playDot, 2000);
//   clearTimeout(playDot);
// };

// const myDotInterval = () => {
//   setInterval(function () {
//     // playDot();
//     console.log("my interval works");
//   }, 1000);
// };

// let i = 0;

// const timeOut = () => {
//   setTimeout(function () {
//     dotSound.play();
//     if (++i < outputArr.length) {
//       return;
//     }
//     clearTimeout(timeOut);
//   }, 1000);
// };
// timeOut();

// const playMorseSound = (outputValue) => {
//   const outputArr = outputValue.split("");
//   outputArr.forEach((char) => {
//     if (char === ".") {
//       console.log("dot found");
//       playDot();
//     };
// });
// };

//   setTimeout(function () {
//     // dotSound.play();
//   }, 1000);

//       myDotTimeout();
//       // myDotTimeout();
//       dotSound.play();
//     } else if (char === "-") {
//       console.log("dash found");
//       dashSound.play();
//     }
//   });

//   });
//   console.log(outputArr);
// };
/// CALL FUNCTION AGAIN IN  IF STATEMENT???

// const outputArr = output.innerHTML;

// const playSounds = (outputValue) => {
//     let i = 0
//     const outputArr = outputValue.split("");
//   setTimeout(function () {
//     console.log(outputArr[i]);
//     if (i < outputArr.length - 1) {
//       i++;
//       playSounds(i);
//     }
//   }, 1000);
// };

// document.querySelector("#test-btn").addEventListener("click", playSounds(outputArr));

morseSoundBtn.addEventListener("click", (event) => {
  playMorseSound(output.innerHTML);
});

dashBtn.addEventListener("click", () => {
  input.value += "-";
  dashSound.play();
});

dotBtn.addEventListener("click", () => {
  input.value += ".";
  dotSound.play();
});

spaceBtn.addEventListener("click", () => {
  input.value += " ";
});
