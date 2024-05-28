var guestArr = ["Zeeshan", "Ahsen", "Faizan", "Waqas"];
var canNotAttend = "Ahsen";
var newGuest = "Naveed";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
var guestBegin = "Arif";
guestArr.unshift(guestBegin);
console.log(guestArr);
var middleGuest = "Adnan";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
guestArr.push("ALi");
console.log(guestArr);
guestArr.map(function (item) {
    console.log("Dear ".concat(item, ", I found a bigger Dinner Table"));
});
