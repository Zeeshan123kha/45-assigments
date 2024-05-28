var guestArr = ["Faizan", "Waqas", "Noman", "ALi", "Wajid"];
var canNotAttend = "Waqas";
console.log(canNotAttend + " " + "can not make it, for dinner");
var newGuest = "Sufiyan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
guestArr.map((function (item) {
    return console.log("Dear ".concat(item, ", you are cordinally invited to a dinner"));
}));
