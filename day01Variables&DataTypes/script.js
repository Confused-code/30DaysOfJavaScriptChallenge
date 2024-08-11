// A1: var and let declaration, assigning and logging
var a = 5;
console.log(`value of a is ${a}`);

let b = 'string';
console.log(`value of b is ${b}`);

// A2: declare const variable with value and log it 
const isItTrue = true;
console.log(`boolean value is ${isItTrue}`);

// A3: create diff data types and log their data type using typeof
// number, string, boolean. object, arr
let num = 43.3;
let string = 'hahaha';
const bool = true;
const obj = {};
const arr = [];

console.log (`type of 5 variables are 
            ${typeof num}, ${typeof num}, 
            ${typeof num}, ${typeof obj},
             ${typeof arr}`)
console.log(`is arr an array: ${Array.isArray(arr)}`);

//A4: Reassigning Values: declare a variable using let, initialize it,
//    reassign new value to it, log both values
let me = 49
console.log(`value of me is ${me}`)
me = 'i am string'
console.log(`new value of me is ${me}`)

//A5:Understanding const: try reassigning a const variable
const ab =56;
// ab=56;
//TypeError: Assignment to constant variable.

//Feature Request: create a script that decalres different data types
//and logs them and their data types
const obj2 = {};

const number = prompt("enter key name for number type");
const numberValue = Number(prompt("enter key value (a number)"));

