let Current_Users: string [] = ["Sana", "Ahad", "Maria", "Saba", "Saud"];

let New_Users: string [] = ["Ali", "Adnan", "Faizan", "Khan", "Owais"];

for (let New_User of New_Users){
    let isAvailable = true;
    for (let Current_User of Current_Users){
        if (New_User.toLowerCase() === Current_User.toLowerCase()) {
            console.log(`Username ${New_User} is already taken.please choose a different username.`);
            isAvailable = false;
            break;
        }
    }
    if (isAvailable){
        console.log(`Username ${New_User} is available.`);
    }
}