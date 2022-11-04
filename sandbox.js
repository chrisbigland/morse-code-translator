// // const testVar = "12345";
// // const newArr = [];

// // [...testVar].forEach((number) => {
// //   newArr.push(number);
// // });

// // console.log(newArr);

// // const myGreeting = () => {
// //   console.log("hello");
// // };

// // const myTimeout = setTimeout(myGreeting, 5000);

// // myTimeout;

// // const checkValidEntry = (str) => {
// //   const containsLetters = /[a-zA-Z]/.test(str);
// //   const containsNumbers = /\d/.test(str);
// //   if (containsLetters === true || containsNumbers === true || str === " ") {
// //     return true;
// //   } else {
// //     return "#";
// //   }
// // };

// // const test = checkValidEntry("$");
// // console.log(test);

// // const checkValidMoEntry = (str) => {
// //   if (str != " " && !str.includes("-") && !str.includes(".")) {
// //     // include a string length here as well.
// //     return false;
// //   } else {
// //     return true;
// //   }
// // };

// // // (!str.includes(" ") || !str.includes("-") || !str.includes("."))

// // const test = checkValidMoEntry("");
// // console.log(test);

// // const validateMoChar = (str) => {
// //   // turn string into array and check if it matches
// //   const moCharValidationArr = str.split("");
// //   console.log(moCharValidationArr);
// //   const validOrNot = moCharValidationArr.forEach((char) => {
// //     if (char === "" || char === "." || char === "-") {
// //       console.log("it's true");
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   });
// //   // if (!str.includes("-") || !str.includes(".") || !str.includes("")) {
// //   //   return false;
// //   //   // } else if (str === "") {
// //   //   //   return true;
// //   // } else {
// //   //   return false;
// //   // }
// //   console.log(validOrNot);
// // };

// // const validOrNot2 = validateMoChar(".....");

// // console.log(validOrNot2);

// // const validMoChar = (input) => {
// //   if (input === "." || input === "-" || input === " ") {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };

// // const arr1 = [".", "-", ".", " "];

// // console.log(arr1.every(validMoChar));

// class Shape {
//   name;
//   sides;
//   sideLength;
//   constructor(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }
//   calcPerimiter() {
//     const result = this.sides * this.sideLength;
//     console.log(result);
//   }
// }

// // const square = new Shape("square", 4, 5);

// const triangle = new Shape("triangle", 3, 3);

// // square.calcPerimiter();
// // triangle.calcPerimiter();

// class Square extends Shape {
//   name;
//   sides;
//   sideLength;
//   constructor(sideLength) {
//     super((name, sides));
//   }
//   calcArea() {
//     const result =
//       this.sideLength * this.sideLength +
//       this.sideLength * this.sideLength +
//       this.sideLength * this.sideLength;
//     console.log(result);
//   }
// }

// const square = new Square(4);

// square.calcArea();

// // // Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(1);
// circle.draw(1);

// // Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log(draw);
//   };
// }

// const anotherCircle = new Circle(1);

// anotherCircle.draw;

// let x = {}

// // let x = new Object();

// new String();   // '', "", ``
// new Boolean();   // true, false
// new Number();   // 1, 2, 3 ...

// const chris = {
//   name: "Chris",
//   age: 33,
//   favourite-food = "pizza";
// };

// const propertyName = "favourite-food";
// console.log(chris[propertyName]);
// // console.log(chris["name"]);
