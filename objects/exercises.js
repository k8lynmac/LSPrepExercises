//create an object that behaves as an array in a for statement. The object should contain at least 3 elements.
// let myArray = {
//   0: 'Katelyn',
//   1: 'Luna',
//   2: 'Nabil',
//   length: 3,
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

//Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let array = Object.keys(obj);
// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i].toUpperCase();
// }
// // array.forEach(key => {
// //   key.toUpperCase();
// // });
// console.log(array);

// //Create a new object named myObj that uses myProtoObj as its prototype.
// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);
// myObj.qux = 3;

//Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy.
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// function copyObj(objectToCopy, keys) {  
//   let newObj = {};

//   if (keys) {
//     keys.forEach(key => function(key) {
//       newObj[key] = objectToCopy[key];
//     });
//     return newObj;
//   }
//   else {
//     return Object.assign(objectToCopy, newObj);
//   }
// }

// let newObj = copyObj(objToCopy);
// console.log(newObj);

//Write some code to replace the value 6 in the following object with 606:
// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj['bar'][3]['xyz'] = 606;
// console.log(obj['bar'][3]['xyz']);

//Rewrite so if works as intended
function foo(bar) {
  console.log(bar, bar, bar);

  
}

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"