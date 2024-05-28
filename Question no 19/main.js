"use strict";
let guestList = ["Zeeshan", "faizan", "Waqas", "riaz", "ahmed"];
// print message 
console.log("Unfortunately! the new dinner table wont arrive so we can invite only 2 guest");
guestList.unshift("alice", "bob");
// print message updated list
console.log("updated list of guest", guestList);
// remove guest from the list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`sorry ${removedGuest}, we cant invite you `);
    }
}
// print a message to each of the two people still on your list letting them know they're still invited.
guestList.forEach(guest => {
    console.log(`Dear Guest ${guest}, you both are invited to dinner`);
});
// removed 2 names from the list
guestList.splice(0, guestList.length);
// print updatedempty list
console.log("updated list of guest", guestList);
