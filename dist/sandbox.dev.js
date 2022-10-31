"use strict";

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
var checkValidMoEntry = function checkValidMoEntry(str) {
  if (!str.includes(" ") && !str.includes("-") && !str.includes(".")) {
    return false;
  } else {
    return true;
  }
}; // (!str.includes(" ") || !str.includes("-") || !str.includes("."))


var test = checkValidMoEntry(".-");
console.log(test);