function getNum(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let num1 = Number(getNum('Enter number: '));

function isEvenOrOdd(num) {
  if (!Number.isInteger(num))
  {
    console.log("ERROR");
    return;
  }  

  if (num % 2 === 0) {
    console.log("Number is even");
  }
  else {
    console.log("Number is odd.");
  }
}

isEvenOrOdd(num1);