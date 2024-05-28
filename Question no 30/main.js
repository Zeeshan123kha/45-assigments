var employee = ["admin", "ahsen", "hunain", "Ali", "Waqas"];
for (var i = 0; i < employee.length; i++) {
    if (employee[i] == "admin") {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(employee[i]));
    }
}
