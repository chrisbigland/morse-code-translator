// const testVar = "12345";
// const newArr = [];

// [...testVar].forEach((number) => {
//   newArr.push(number);
// });

// console.log(newArr);

// const myGreeting = () => {
//   console.log("hello");
// };

// const myTimeout = setTimeout(myGreeting, 5000);

// myTimeout;

// const checkValidEntry = (str) => {
//   const containsLetters = /[a-zA-Z]/.test(str);
//   const containsNumbers = /\d/.test(str);
//   if (containsLetters === true || containsNumbers === true || str === " ") {
//     return true;
//   } else {
//     return "#";
//   }
// };

// const test = checkValidEntry("$");
// console.log(test);

// const checkValidMoEntry = (str) => {
//   if (str != " " && !str.includes("-") && !str.includes(".")) {
//     // include a string length here as well.
//     return false;
//   } else {
//     return true;
//   }
// };

// // (!str.includes(" ") || !str.includes("-") || !str.includes("."))

// const test = checkValidMoEntry("");
// console.log(test);

// const validateMoChar = (str) => {
//   // turn string into array and check if it matches
//   const moCharValidationArr = str.split("");
//   console.log(moCharValidationArr);
//   const validOrNot = moCharValidationArr.forEach((char) => {
//     if (char === "" || char === "." || char === "-") {
//       console.log("it's true");
//       return true;
//     } else {
//       return false;
//     }
//   });
//   // if (!str.includes("-") || !str.includes(".") || !str.includes("")) {
//   //   return false;
//   //   // } else if (str === "") {
//   //   //   return true;
//   // } else {
//   //   return false;
//   // }
//   console.log(validOrNot);
// };

// const validOrNot2 = validateMoChar(".....");

// console.log(validOrNot2);

const validMoChar = (input) => {
  if (input === "." || input === "-" || input === " ") {
    return true;
  } else {
    return false;
  }
};

const arr1 = [".", "-", ".", " "];

console.log(arr1.every(validMoChar));
