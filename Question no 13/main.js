"use strict";
let transportationMode = ["car", "motorcycle", "buss", "truck"];
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`i would to own a ${transportationMode[i]}`);
}
transportationMode.forEach(mode => {
    console.log(`i would to own a ${mode}`);
});
