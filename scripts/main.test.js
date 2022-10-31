// import { it } from "node:test";
import {
  translateMoToEn,
  translateMorseChar,
  translateEnToMo,
  translateLetter,
  Translator,
  translator,
} from "./main.js";

//POSITIVE TESTS
// 1. it should ... translate the letter a to .-
// 2. it shoud ... translate the words hello friend to .-.-.-.-.- x10 tests positive, x10 negative
// 3. it should translate "t q b f j o t l d"...
// 4.  it should translate the words "WeB dEvelOPEr BooTCamP" to....
// 5. it should translate the number 1 to .----
// 6.it should translate the words and numbers "There are 195 countries in the world" to "....."
// 7.  123456789
// 8.
// 9.
// 10.

// NEGATIVE TESTS - improper data sets entered https://www.guru99.com/positive-and-negative-testing.html
//it should ... translate "" to be ""
// it should ... translate the letter a to be a (if it's morse to english
// .- entered - pop up
// it should return a "#" if an invalid character is entered. - should this be in negative?

describe("translateEnToMo", () => {
  it('should translate "a" to ".-"', () => {
    const enInputArr = ["a"];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(" .-");
  });

  it('should translate multiple words with spaces"', () => {
    const enInputArr = [
      "h",
      "e",
      "l",
      "l",
      "o",
      " ",
      "f",
      "r",
      "i",
      "e",
      "n",
      "d",
    ];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(" .... . .-.. .-.. ---/..-. .-. .. . -. -..");
  });

  it('should translate "every letter of the alphabet', () => {
    const enInputArr = [
      "t",
      "h",
      "e",
      " ",
      "q",
      "u",
      "i",
      "c",
      "k",
      " ",
      "b",
      "r",
      "o",
      "w",
      "n",
      " ",
      "f",
      "o",
      "x",
      " ",
      "j",
      "u",
      "m",
      "p",
      "s",
      " ",
      "o",
      "v",
      "e",
      "r",
      " ",
      "t",
      "h",
      "e",
      " ",
      "l",
      "a",
      "z",
      "y",
      " ",
      "d",
      "o",
      "g",
    ];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(
      " - .... ./--.- ..- .. -.-. -.-/-... .-. --- .-- -./..-. --- -..-/.--- ..- -- .--. .../--- ...- . .-./- .... ./.-.. .- --.. -.--/-.. --- --."
    );
  });

  it("should translate upper and lower case letters", () => {
    const enInputArr = [
      "W",
      "e",
      "B",
      " ",
      "d",
      "E",
      "v",
      "e",
      "l",
      "O",
      "P",
      "E",
      "r",
      " ",
      "B",
      "o",
      "o",
      "T",
      "C",
      "a",
      "m",
      "P",
    ];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(
      " .-- . -.../-.. . ...- . .-.. --- .--. . .-./-... --- --- - -.-. .- -- .--."
    );
  });

  it("it should translate the number 1 to .----", () => {
    const enInputArr = ["1"];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(" .----");
  });

  it("should translate both words and numbers", () => {
    const enInputArr = [
      "t",
      "h",
      "e",
      "r",
      "e",
      " ",
      "a",
      "r",
      "e",
      " ",
      "1",
      "9",
      "5",
      " ",
      "c",
      "o",
      "u",
      "n",
      "t",
      "r",
      "i",
      "e",
      "s",
      " ",
      "i",
      "n",
      " ",
      "t",
      "h",
      "e",
      " ",
      "w",
      "o",
      "r",
      "l",
      "d",
    ];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(
      " - .... . .-. ./.- .-. ./.---- ----- ...../-.-. --- ..- -. - .-. .. . .../.. -./- .... ./.-- --- .-. .-.. -.."
    );
  });

  it("should translate every number", () => {
    const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const output = translator.translateEnToMo(numbersArr);
    expect(output).toBe(
      " ----- .---- ..--- ...-- ....- ..... -.... --... ---.. -----"
    );
  });

  //     it('test8', () => {

  //     })

  //     it('test9', () => {

  //     })

  //     it('test10', () => {

  //     })
});

// NEGATIVE TESTS
describe("translateMoToEn", () => {
  it('it should translate "" as ""', () => {
    const moInputArr = [""];
    const output = translator.translateMotoEn(moInputArr);
    expect(output).toBe(" ");
  });

  // it("should return a # if the morse character is invalid", () => {
  //   const moInputArr = [
  //     "l",
  //     "e",
  //     "t",
  //     "t",
  //     "e",
  //     "r",
  //     "s",
  //     " ",
  //     "n",
  //     "o",
  //     "t",
  //     " ",
  //     "c",
  //     "o",
  //     "d",
  //     "e",
  //   ];
  //   let output = translator.translateMotoEn(moInputArr);
  //   expect(output).toBe("letters not code");
  // });

  it('should identify invalid characters by returning a "#"', () => {
    const enInputArr = ["$"];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe("#");
  });

  it('should identify multiple invalid characters by returning a "#"', () => {
    const enInputArr = [
      "!",
      "@",
      "£",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "{",
      "}",
      "[",
      "]",
      "-",
      "+",
      "-",
      "=",
      ";",
      "'",
      ":",
      "/",
      ".",
      ",",
      "?",
      ">",
      "<",
      "~",
      "`",
      "±",
      "§",
    ];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe("################################");
  });

  it('should identify invalid characters amongst other letters by returning a "#"', () => {
    const enInputArr = [
      "H",
      "e",
      "l",
      "l",
      "o",
      " ",
      "W",
      "o",
      "r",
      "l",
      "d",
      "!",
    ];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(" .... . .-.. .-.. ---/.-- --- .-. .-.. -.. #");
  });

  // it('should ', () => {

  // })
});

// each 'it' marks a separate test
