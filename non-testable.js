import { Translator } from "./main.js";

const input = document.querySelector("#input1");
const translBtn = document.querySelector("#transl-btn");
const output = document.querySelector(".output");
const selection = document.querySelectorAll(".selection");
const enSelection = document.querySelector("#en-selection");
const moSelection = document.querySelector("#mo-selection");
const dotBtn = document.querySelector("#dot-btn");
const dashBtn = document.querySelector("#dash-btn");
const soundBtn = document.querySelector("#sound-btn");
const dotSound = document.querySelector("#dot-sound");

// const playSound = () => {
//     dotSound.play();
// }
// playSound()


const spaceBtn = document.querySelector("#space-btn");

const translator = new Translator(); // can I put this at the top with the variables?

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

dashBtn.addEventListener("click", () => {
  input.value += "-";
});

dotBtn.addEventListener("click", () => {
  input.value += ".";
  //add to the splitMorseChar when I click? How would I delete though if this was removed
});

spaceBtn.addEventListener("click", () => {
  input.value += " ";
});

// dotSound.play();
