function show_magicians(magicians:string[]):void {
    for (const magician of magicians){
       console.log(magician + "  " + "The Great");
    }    
};

const magicianNames: string[] = ["Pen jillette", "Cries Angel", "Teller"];
show_magicians(magicianNames);