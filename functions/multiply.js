function getNum(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let num1 = getNum('Enter first number: ');
let num2 = getNum('Enter second number: ');

function multiply(num1, num2) {
  return num1*num2;
}

let product = multiply(num1, num2);
console.log(product);