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
// it should ... translate the letter a to .-
// it shoud ... translate the word hello to .-.-.-.-.- x10 tests positive, x10 negative
// it should translate the words "web developer bootcamp" to....
// it should translate the words "WeB dEvelOPEr BooTCamP" to....
// it should translate the words and numbers "There are 195 countries in the world" to "....."
// NEGATIVE TESTS
//it should ... translate "" to be ""
// it should ... translate the letter a to be a (if it's morse to english

describe("translateEnToMo", () => {
  it('should translate "a" to ".-"', () => {
    const enInputArr = ["a"];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(" .-");
  });

  // it('test2', () => {

  // })

  // it('test3', () => {

  // })
});

// describe('translateMoToEn', () => {
//     it('takes an array as a parameter', () => {
//         expect(outputHtml)
//     });

//     it('test2', () => {

//     })

//     it('test3', () => {

//     })
// });

// each 'it' marks a separate test
