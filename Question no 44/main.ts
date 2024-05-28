function sandwich(...items:string[]):void {
    console.log("Sandwich Order");
    for(let i=0; i < items.length; i++){
        console.log(`- ${items[i]}`);
        
    }    
};
console.log("Enjoy Your Sandwich");

sandwich("capsicum", "garlic ketchup", "chicken");

sandwich(`beef`, `cheese`);

sandwich("mayo sauce", "bbq beef");
