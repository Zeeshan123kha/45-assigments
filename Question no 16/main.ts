let guestArr:string[]=["Zeeshan", "Ahsen", "Faizan", "Waqas"];

let canNotAttend:string="Ahsen";
let newGuest:string="Naveed";
guestArr[guestArr.indexOf(canNotAttend)]= newGuest;

console.log(guestArr);

let guestBegin:string= "Arif";

guestArr.unshift(guestBegin);
console.log(guestArr);

let middleGuest:string= "Adnan";
let middleIndex= guestArr.length/2

guestArr.splice(middleIndex, 0, middleGuest);

console.log(guestArr);

guestArr.push("ALi");
console.log(guestArr);

guestArr.map((item) =>{
     console.log(`Dear ${item}, I found a bigger Dinner Table`);
});