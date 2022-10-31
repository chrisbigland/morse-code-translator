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

const checkValidEntry = (str) => {
  const containsLetters = /[a-zA-Z]/.test(str);
  const containsNumbers = /\d/.test(str);
  if (containsLetters === true || containsNumbers === true || str === " ") {
    return true;
  } else {
    return "#";
  }
};

const test = checkValidEntry("$");
console.log(test);
