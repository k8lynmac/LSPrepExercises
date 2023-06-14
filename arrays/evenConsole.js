//Log all of the even values from myArray to the console.
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < 4; j++) {
//     if (myArray[i][j] % 2 === 0) {
//       console.log(myArray[i][j]);
//     }
//   }
// }


//Use the map function to create a new array that contains one element for each element in the original array.
// let mapArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let evenOrOdd = mapArray.map(function(value) {
//   if (value % 2 === 0) {
//     return 'even';
//   }
//   else {
//     return 'odd';
//   }
// });


//Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

// function findIntegers(array) {
//   newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Number.isInteger(array[i]) === true) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers);

// function findIntegers(array) {
//   return array.filter(function(value) {
//     return Number.isInteger(value);
//   });

// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function oddLengths(array) {
//    let lengths = array.map(function(value) {
//       if (value.length % 2 != 0) {
//         return value.length;
//       }
//     });
//   return lengths.filter(function(value) {
//     return Number.isInteger(value);
//   });
// }


//Use reduce to compute the sum of the squares of all of the numbers in an array:
// let array1 = [3, 5, 7];

// function sumOfSquares(array) {
//   let sum = array.reduce((total, element) => total + element*element, 0);
//   return sum;
// }

// console.log(sumOfSquares(array1)); 


//Write a fx using reduce method to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values)
// function oddLengths(array) {
//   return array.reduce((accumulator, element) => {
//     if (element.length % 2 != 0) {
//       console.log(element.length);
//       accumulator.push(element.length);
//     }
//     return accumulator;
//   }, []);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]


//Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// numbers1.includes(3);
// numbers2.includes(3);
// numbers3.includes(3);


//Write some code to replace the value 6 in the following array with 606:
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;

