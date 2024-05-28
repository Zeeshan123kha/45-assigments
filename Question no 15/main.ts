let guestArr: string [] = ["Faizan", "Waqas", "Noman", "ALi", "Wajid"];

let canNotAttend:string= "Waqas"
console.log(canNotAttend + ` ` + "can not make it, for dinner");

let newGuest:string = "Sufiyan"
guestArr[guestArr.indexOf(canNotAttend)] =newGuest;

// console.log(guestArr);
guestArr.map((item =>
      console.log(`Dear ${item}, you are cordinally invited to a dinner`)
))