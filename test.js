const testVar = "12345";
const newArr = [];

[...testVar].forEach((number) => {
  newArr.push(number);
});

console.log(newArr);
