var Current_Users = ["Sana", "Ahad", "Maria", "Saba", "Saud"];
var New_Users = ["Ali", "Adnan", "Faizan", "Khan", "Owais"];
for (var _i = 0, New_Users_1 = New_Users; _i < New_Users_1.length; _i++) {
    var New_User = New_Users_1[_i];
    var isAvailable = true;
    for (var _a = 0, Current_Users_1 = Current_Users; _a < Current_Users_1.length; _a++) {
        var Current_User = Current_Users_1[_a];
        if (New_User.toLowerCase() === Current_User.toLowerCase()) {
            console.log("Username ".concat(New_User, " is already taken.please choose a different username."));
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log("Username ".concat(New_User, " is available."));
    }
}
