// variables of different data types
let str = "Hello";
let num = 42;
let bool = true;
let nul = null;
let und = undefined;
let obj = { key: "value" };
let sym = Symbol("symbol");

// Printing variables to console
console.log(str, num, bool, nul, und, obj, sym);

// Create an array of numbers
let numbers = [1, 5, 10, 15, 20];

// Use map to multiply each number by 2
let multiplied = numbers.map(num => num * 2);
console.log("Multiplied array:", multiplied);

// Use filter to get numbers greater than 10
let greaterThan10 = numbers.filter(num => num > 10);
console.log("Numbers greater than 10:", greaterThan10);

// Use reduce to find the sum of all numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

// Use forEach to print each number
numbers.forEach(num => console.log("Number:", num));

// Function to greet
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function to sum an array of numbers
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Function to find maximum number in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Example usage
greet("Pauline");
let total = sumArray([1, 2, 3, 4, 5]);
console.log("Sum:", total);
let maxNumber = findMax([10, 20, 5, 35]);
console.log("Max number:", maxNumber);





