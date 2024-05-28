let names : string [] = ["Zeeshan", "Noman", "Abdul Sallam", "Ammad"];

// loop 
// for each
// for loop
for (let i = 0; i < names.length; i++) {
    console.log(`Dear ${names[i]}! how are you today?`);
    
}
names.forEach(name => {
console.log(`Hi ${name}! how are you today?`);    
});
// for of loop
for (const friendName of names) {
    console.log(`Hello${friendName}, how are you today?`);
}