import {
  translateMoToEn,
  translateMorseChar,
  translateEnToMo,
  validateMoChar,
  validateEnEntry,
  validateMoEntry,
  translateLetter,
  Translator,
  translator,
} from "./main.js";

describe("Positive EN to MO Tests", () => {
  it('should translate "a" to ".-"', () => {
    const enInputArr = ["a"];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(".-");
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
    expect(output).toBe(".... . .-.. .-.. ---/..-. .-. .. . -. -..");
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
      "- .... ./--.- ..- .. -.-. -.-/-... .-. --- .-- -./..-. --- -..-/.--- ..- -- .--. .../--- ...- . .-./- .... ./.-.. .- --.. -.--/-.. --- --."
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
      ".-- . -.../-.. . ...- . .-.. --- .--. . .-./-... --- --- - -.-. .- -- .--."
    );
  });

  it("it should translate the number 1 to .----", () => {
    const enInputArr = ["1"];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe(".----");
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
      "- .... . .-. ./.- .-. ./.---- ----. ...../-.-. --- ..- -. - .-. .. . .../.. -./- .... ./.-- --- .-. .-.. -.."
    );
  });

  it("should translate every number", () => {
    const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const output = translator.translateEnToMo(numbersArr);
    expect(output).toBe(
      "----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----."
    );
  });
});

// POSITIVE MO to EN tests
describe("Positive MO to EN Tests", () => {
  it('should translate ".-" to "a"', () => {
    const moInputArr = [".-"];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe("a");
  });

  it('should translate multiple morse words with spaces"', () => {
    const moInputArr = [
      "....",
      ".",
      ".-..",
      ".-..",
      "---",
      "  ",
      "..-.",
      ".-.",
      "..",
      ".",
      "-.",
      "-..",
    ];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe("hello friend");
  });

  it('should translate "every letter of the alphabet', () => {
    const moInputArr = [
      "-",
      "....",
      ".",
      "  ",
      "--.-",
      "..-",
      "..",
      "-.-.",
      "-.-",
      "  ",
      "-...",
      ".-.",
      "---",
      ".--",
      "-.",
      "  ",
      "..-.",
      "---",
      "-..-",
      "  ",
      ".---",
      "..-",
      "--",
      ".--.",
      "...",
      "  ",
      "---",
      "...-",
      ".",
      ".-.",
      "  ",
      "-",
      "....",
      ".",
      "  ",
      ".-..",
      ".-",
      "--..",
      "-.--",
      "  ",
      "-..",
      "---",
      "--.",
    ];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe("the quick brown fox jumps over the lazy dog");
  });

  it("it should translate the character '.----' as '1'", () => {
    const moInputArr = [".----"];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe("1");
  });

  it("should translate both words and numbers", () => {
    const moInputArr = [
      "-",
      "....",
      ".",
      ".-.",
      ".",
      " ",
      ".-",
      ".-.",
      ".",
      "  ",
      ".----",
      "----.",
      ".....",
      "  ",
      "-.-.",
      "---",
      "..-",
      "-.",
      "-",
      ".-.",
      "..",
      ".",
      "...",
      "  ",
      "..",
      "-.",
      "  ",
      "-",
      "....",
      ".",
      "  ",
      ".--",
      "---",
      ".-.",
      ".-..",
      "-..",
    ];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe("there are 195 countries in the world");
  });

  it("should translate every number", () => {
    const numbersArr = [
      "-----",
      ".----",
      "..---",
      "...--",
      "....-",
      ".....",
      "-....",
      "--...",
      "---..",
      "----.",
    ];
    const output = translator.translateMoToEn(numbersArr);
    expect(output).toBe("0123456789");
  });
});

// NEGATIVE EN to MO TESTS
describe("Negative EN to MO Tests", () => {
  it('it should translate " " as "/"', () => {
    const enInputArr = [" "];
    const output = translator.translateEnToMo(enInputArr);
    expect(output).toBe("/");
  });

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
      "+",
      "=",
      ";",
      "'",
      ":",
      "/",
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
    expect(output).toBe(
      "# # # # # # # # # # # # # # # # # # # # # # # # # # #"
    );
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
    expect(output).toBe(".... . .-.. .-.. ---/.-- --- .-. .-.. -.. #");
  });
});

describe("Negative MO to EN Tests", () => {
  it('it should translate "  " as " "', () => {
    const moInputArr = [" "];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe(" ");
  });

  it('should identify invalid characters by returning a "#"', () => {
    const moInputArr = ["$"];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe("#");
  });

  it('should identify multiple invalid characters by returning a "#"', () => {
    const moInputArr = [
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
      "+",
      "=",
      ";",
      "'",
      ":",
      "/",
      ",",
      "?",
      ">",
      "<",
      "~",
      "`",
      "±",
      "§",
    ];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe("###########################");
  });

  it('should identify invalid characters amongst other letters by returning a "#"', () => {
    const moInputArr = [
      "....",
      ".",
      ".-..",
      ".-..",
      "---",
      " ",
      ".--",
      "---",
      ".-.",
      ".-..",
      "-..",
      "!",
    ];
    const output = translator.translateMoToEn(moInputArr);
    expect(output).toBe("hello world#");
  });
});

describe("changeNumberToWord method tests", () => {
  it("should change '0' to 'zero'", () => {
    const number = "0";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("zero");
  });
});

describe("changeNumberToWord method tests", () => {
  it("should change '1' to 'one'", () => {
    const number = "1";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("one");
  });

  it("should change '2' to 'two'", () => {
    const number = "2";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("two");
  });

  it("should change '3' to 'three'", () => {
    const number = "3";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("three");
  });

  it("should change '4' to 'four'", () => {
    const number = "4";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("four");
  });

  it("should change '5' to 'five'", () => {
    const number = "5";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("five");
  });

  it("should change '6' to 'six'", () => {
    const number = "6";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("six");
  });

  it("should change '7' to 'seven'", () => {
    const number = "7";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("seven");
  });

  it("should change '8' to 'eight'", () => {
    const number = "8";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("eight");
  });

  it("should change '9' to 'nine'", () => {
    const number = "9";
    const output = translator.changeNumberToWord(number);
    expect(output).toBe("nine");
  });
});

// describe("En to Mo word validation function tests", () => {});
// WRITE TESTS HERE

describe("Mo character validation function tests", () => {
  it("should return true if only dots, dashes and spaces are entered", () => {
    const input = ".- ";
    const output = validateMoChar(input);
    expect(output).toBe(true);
  });

  it("should return false if anything but dots, dashes and spaces are entered", () => {
    const input = "abc";
    const output = validateMoChar(input);
    expect(output).toBe(false);
  });

  it("should return true if fewer than 5 dots or dashes per morse character are entered", () => {
    const moChar = ".-";
    const output = validateMoEntry(moChar);
    expect(output).toBe(true);
  });

  it("should return false if more than 5 dots or dashes per morse character are entered", () => {
    const moChar = ".-.-.-";
    const output = validateMoEntry(moChar);
    expect(output).toBe(false);
  });
});
