//let n = 6;
//let factorial = 1;

// for (let i = 0; i < n; i++) {
//   factorial = factorial*(n-i);
// }

function factorial(n) {
  if (n < 2) {
    return n;
  }
  return n * factorial(n-1);
}

console.log(factorial(7));