// Tasks:
// - Remove duplicate "new Translator()" bits of JS
// - When should you use a class? When should you use functions?
// - write tests

import { Translator } from "./main.js";

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

const playMorseSound = (outputValue) => {
  const outputArr = outputValue.split("");
  outputArr.forEach((char) => {
    if (char === ".") {
      console.log("dot found");
      dotSound.play();
    //   dotSound.pause();
    } else if (char === "-") {
      console.log("dash found");
      dashSound.play();
    //   dashSound.pause();
    }
  });
  //   for (let i = 0; i < outputArr.length; i++) {
  //     if (i === ".") {
  //       dotSound.play();
  //     } else if (i === "-") {
  //       dashSound.play();
  //     }
  //   }
  //   console.log(outputArr);
};

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
