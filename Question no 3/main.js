var personName = "Zeeshan";
console.log("lowercase", personName.toLowerCase());
console.log("uppercase", personName.toUpperCase());
console.log("Title", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
