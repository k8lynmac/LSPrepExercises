function getString(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let string = getString('Enter a phrase.');

function toUppercase(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  }
  else {
    return string;
  }
}

let changed = toUppercase(string);
console.log(changed);