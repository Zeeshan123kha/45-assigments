"use strict";
// Array
// Defines an array of names
let names = ["Zeeshan", "Noman", "Abdul Sallam", "Ammad"];
// loop 
// for each
// for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
names.forEach(name => {
    console.log(name);
});
// for of loop
for (const friendName of names) {
    console.log(friendName);
}
