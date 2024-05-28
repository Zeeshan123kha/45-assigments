let  PlaceToVisit : string [] = ["paris", "new york", "china", "dubai"];

//  print in original order
 console.log("Original Order", placeToVisit );

//  print array in alphabethical order without modifying the actual list.

console.log("/n Alphabetical Order:", placeToVisit.slice().sort());

// array still in its original order by printing it.
console.log("Original Order", placeToVisit );

// print your array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse Alphabetical Order:", placeToVisit.slice().sort().reverse());

// array still in its original order by printing it again.
console.log("Original Order", placeToVisit );

// Reverse the order of your list.print the array to show that its order has changed
console.log("reverse order changed");
placeToVisit.reverse();
console.log(placeToVisit);

// Reverse the order of your list again .print the list to show its back to its orignal order.
console.log("original order:", placeToVisit.sort());
console.log(placeToVisit);

// sort to change your array so its stored in alphabetical order.print the array to show that its has been changed.
console.log("original order:", placeToVisit.sort());
console.log(placeToVisit);

//  sort to change your array so its stored in alphabetical order.print the array to show that its has been changed.
console.log("reverse alphabetical order changed:", placeToVisit.sort().reverse());
console.log(placeToVisit)