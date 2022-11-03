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
    const moInputArr = inputText.split(" "); // turning string into arr
    translation = translator.translateMoToEn(moInputArr);
  }
  output.innerHTML = translation;
});

// document.querySelector("#test-btn").addEventListener("click", playSounds(outputArr));

//// BUTTONS      BUTTONS      BUTTONS      BUTTONS      BUTTONS      BUTTONS      BUTTONS      BUTTONS
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
