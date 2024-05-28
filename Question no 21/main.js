"use strict";
// in object what we learned 
// default typed object 
// update property
// add new property
// define custom type property
// use any with object 
// They think of something you could store in a typescript object .
// Write a program that creates objects containing these items.*/
// let student = {
//     name:"Zeeshan",
//     rollnumber:30854,
//     grades:[85, 90, 75]
// };
// console.log(student.grades[2]);
// let products = {
//     name:"laptop",
//     price:8000,
//     description:"high performance laptop with fast processor",
// };
// console.log(products.description)
let objectContainingItems = {
    "laptop": {
        name: "laptop",
        price: 8000,
        description: "high performance laptop with fast processor",
    },
    "mouse": {
        name: "mouse",
        price: 500,
        description: "high performance mouse with fast processor",
    },
    "keyboard": {
        name: "keyboard",
        price: 500,
        description: "high performance keyboard with fast processor",
    },
};
console.log(objectContainingItems);
