let personName: string = "Zeeshan"
console.log("lowercase", personName.toLowerCase());
console.log("uppercase", personName.toUpperCase());
console.log("Titlecase",    personName.replace(/\bw/g,c => c.toUpperCase()));

