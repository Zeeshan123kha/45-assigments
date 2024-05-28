"use strict";
// test for equality and inequality with strings 
const string1 = "hello";
const string2 = "world";
console.log(string1 === string2); //false
console.log(string1 !== string2); // true
// test using the lower case function 
const upperCase = "HELLO";
const lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); // true
// Numerical tests involving equality and inequality,greater than and less than,
// greater than or equal to,and less than equal to 
const number1 = 10;
const number2 = 20;
console.log(number1 === number2); // false
console.log(number1 !== number2); // true
console.log(number1 > number2); // false
console.log(number1 < number2); // true
console.log(number1 >= number2); // false
console.log(number1 <= number2); // true
// test using "and" and "or" operators
const x = 10;
const y = 20;
const z = 30;
console.log(x < y && y < z); // true
console.log(x > y || y < z); // true 
// test whether an items is in a array
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = 3;
console.log(array1.indexOf(array2) !== -1); // true
// test whether an item is not in a array
console.log(array1.indexOf(10) === -1); // true
