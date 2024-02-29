

let personName: string = "Zeeshan"
console.log("lowercase", personName.toLowerCase());
console.log("uppercase", personName.toUpperCase());
console.log("Title",    personName.replace(/\bw/g,c => c.toUpperCase()));
